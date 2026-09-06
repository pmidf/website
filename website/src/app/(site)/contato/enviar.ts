"use server";

import { headers } from "next/headers";
import nodemailer from "nodemailer";

import { ASSUNTOS, ASSUNTO_PADRAO } from "@/content/contato";
import { site } from "@/content/site";

/**
 * Envio do formulário de contato por SMTP.
 *
 * ## Por que Server Action e não route handler
 *
 * O formulário não precisa de uma URL pública: só esta página o usa, e a
 * action já chega ao cliente como um endpoint com o corpo tipado e a
 * revalidação prontos. Um `POST /api/contato` exigiria o mesmo código mais uma
 * rota aberta para o mundo — mais superfície, nenhum ganho.
 *
 * ## Sobre as credenciais
 *
 * `SMTP_USER`, `SMTP_PASS` e `CONTACT_TO` são lidos aqui, no servidor, e nunca
 * chegam ao navegador — nenhuma delas tem o prefixo `NEXT_PUBLIC_`, então o
 * bundler recusaria expô-las mesmo por engano. O `from` é obrigatoriamente o
 * `SMTP_USER`: o Gmail rejeita envio com remetente diferente do autenticado.
 * Quem escreveu vai no `replyTo`, então responder no cliente de e-mail
 * responde para a pessoa, não para a própria caixa do site.
 *
 * ## Defesas
 *
 * Em camadas, da mais barata para a mais cara:
 *
 * 1. **Campo isca** — escondido; só robô preenche.
 * 2. **Tempo mínimo de preenchimento** — formulário devolvido em menos de
 *    três segundos não foi digitado por gente.
 * 3. **Limite por IP** — no máximo `LIMITE_JANELA` mensagens a cada
 *    `JANELA_MS` do mesmo endereço.
 * 4. **Teto de links** — spam quase sempre carrega URLs; texto com mais de
 *    `MAX_LINKS` é descartado.
 *
 * As três primeiras respondem "ok" quando barram, em vez de acusar: dizer o
 * que pegou ensina o robô a passar da próxima vez.
 *
 * O que **não** está aqui, de propósito: captcha. Ele cobra de toda pessoa que
 * escreve para pagar pelo robô, e o volume deste formulário não justifica.
 * Se o spam furar estas camadas, o próximo passo é um desafio invisível
 * (Cloudflare Turnstile) antes de um captcha visível.
 *
 * ## Contra injeção de cabeçalho
 *
 * Nome e e-mail vão para o `replyTo` como objeto `{ name, address }`, e não
 * como string montada: assim quem escapa as aspas e os sinais é o nodemailer.
 * Montar `"Fulano" <a@b.c>` à mão deixaria um nome com aspas fechar a string e
 * acrescentar destinatários. O assunto ainda passa por `umaLinha`, porque
 * cabeçalho termina em quebra de linha.
 */

export type EstadoEnvio = {
  status: "inicial" | "ok" | "erro";
  mensagem?: string;
  /** Campos que voltaram inválidos, para o formulário destacá-los. */
  invalidos?: string[];
};

/** Cabeçalhos de e-mail terminam em quebra de linha: uma quebra vinda do
 * formulário abriria espaço para injetar um `Bcc:`. Some com elas. */
function umaLinha(valor: string) {
  return valor.replace(/[\r\n]+/g, " ").trim();
}

const LIMITES = { nome: 120, email: 200, telefone: 40, empresa: 160, mensagem: 5000 };

/** Janela e teto do limite por IP. */
const JANELA_MS = 10 * 60 * 1000;
const LIMITE_JANELA = 3;
/** Tempo mínimo entre a página abrir e o envio chegar. */
const PREENCHIMENTO_MINIMO_MS = 3000;
/** Acima disto a mensagem é tratada como spam. */
const MAX_LINKS = 4;

/**
 * Contador por IP, na memória do processo.
 *
 * Some a cada deploy e não é compartilhado entre as instâncias da Vercel —
 * ou seja, não é uma cota exata, é um quebra-molas. Segura a rajada de um
 * robô, que é o caso real; para uma cota de verdade seria preciso um Redis, e
 * o volume deste formulário não paga esse custo.
 */
const envios = new Map<string, number[]>();

function excedeuLimite(ip: string) {
  const agora = Date.now();
  const recentes = (envios.get(ip) ?? []).filter((t) => agora - t < JANELA_MS);

  if (recentes.length >= LIMITE_JANELA) {
    envios.set(ip, recentes);
    return true;
  }

  recentes.push(agora);
  envios.set(ip, recentes);

  // Poda simples para o Map não crescer sem limite num processo longevo.
  if (envios.size > 5000) {
    for (const [chave, marcas] of envios) {
      if (marcas.every((t) => agora - t >= JANELA_MS)) envios.delete(chave);
    }
  }

  return false;
}

function contarLinks(texto: string) {
  return (texto.match(/https?:\/\/|www\.|\[url|<a\s/gi) ?? []).length;
}

export async function enviarContato(
  _anterior: EstadoEnvio,
  dados: FormData,
): Promise<EstadoEnvio> {
  // Campo isca: fica escondido no formulário, então só um robô o preenche.
  // Responde "ok" de propósito — dizer que foi barrado ensina o robô a passar.
  if (String(dados.get("website") ?? "").trim() !== "") {
    return { status: "ok" };
  }

  // Tempo de preenchimento. O carimbo vem do cliente e portanto é forjável;
  // vale como filtro do robô ingênuo, que posta na hora, não como garantia.
  const abertura = Number(dados.get("iniciado"));
  const temCarimbo = Number.isFinite(abertura) && abertura > 0;
  if (temCarimbo && Date.now() - abertura < PREENCHIMENTO_MINIMO_MS) {
    return { status: "ok" };
  }

  const campo = (nome: keyof typeof LIMITES) =>
    String(dados.get(nome) ?? "").trim().slice(0, LIMITES[nome]);

  const nome = campo("nome");
  const email = campo("email");
  const telefone = campo("telefone");
  const empresa = campo("empresa");
  const mensagem = campo("mensagem");

  const invalidos: string[] = [];
  if (nome.length < 2) invalidos.push("nome");
  if (empresa.length < 2) invalidos.push("empresa");
  // Conta só os dígitos: o formato varia demais ((61) 9…, +55 61 9…, 61 9…)
  // para valer a pena uma máscara. Oito é o menor telefone plausível.
  if ((telefone.match(/\d/g) ?? []).length < 8) invalidos.push("telefone");
  // Conjunto de caracteres conservador, não a gramática completa do RFC: um
  // endereço válido de verdade só se prova entregando. O que importa aqui é
  // recusar aspas, colchetes angulares e vírgulas, que são o material de
  // injeção de cabeçalho.
  if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
    invalidos.push("email");
  }
  if (mensagem.length < 10) invalidos.push("mensagem");

  if (invalidos.length > 0) {
    return {
      status: "erro",
      mensagem: "Confira os campos destacados e tente de novo.",
      invalidos,
    };
  }

  if (contarLinks(mensagem) > MAX_LINKS) {
    return { status: "ok" };
  }

  // `x-forwarded-for` é a cadeia de proxies; o primeiro item é o cliente. Na
  // Vercel o cabeçalho é reescrito na borda, então não dá para forjá-lo de
  // fora. Sem ele (execução local), o limite recai num balde só.
  const cabecalhos = await headers();
  const ip = (cabecalhos.get("x-forwarded-for") ?? "local").split(",")[0].trim();

  if (excedeuLimite(ip)) {
    return {
      status: "erro",
      mensagem: `Muitas mensagens em pouco tempo. Tente de novo mais tarde ou escreva para ${site.contact.email}.`,
    };
  }

  const escolhido =
    ASSUNTOS.find((opcao) => opcao.valor === dados.get("assunto")) ??
    ASSUNTOS.find((opcao) => opcao.valor === ASSUNTO_PADRAO);

  const usuario = process.env.SMTP_USER;
  const senha = process.env.SMTP_PASS;
  const destino = process.env.CONTACT_TO;

  if (!usuario || !senha || !destino) {
    console.error("[contato] SMTP_USER, SMTP_PASS ou CONTACT_TO não configurados");
    return {
      status: "erro",
      mensagem: `Tente de novo em instantes ou escreva direto para ${site.contact.email}.`,
    };
  }

  // Sem `filter`: com todos os campos obrigatórios, nenhuma linha sai vazia.
  const corpo = [
    mensagem,
    "",
    "---",
    `Nome: ${nome}`,
    `E-mail: ${email}`,
    `Telefone: ${telefone}`,
    `Empresa: ${empresa}`,
    `Assunto: ${escolhido?.label ?? "Contato pelo site"}`,
    "Enviado pelo formulário de contato do site.",
  ].join("\n");

  try {
    const transporte = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT ?? 465),
      secure: true,
      auth: { user: usuario, pass: senha },
    });

    await transporte.sendMail({
      from: `"Site PMI-DF" <${usuario}>`,
      to: destino,
      replyTo: { name: umaLinha(nome), address: email },
      subject: umaLinha(`[Site] ${escolhido?.label ?? "Contato"} — ${nome}`),
      text: corpo,
    });

    return {
      status: "ok",
      mensagem: "Recebemos seu contato e respondemos em até 2 dias úteis.",
    };
  } catch (erro) {
    // O erro do SMTP pode trazer host e usuário; fica no log do servidor, não
    // na tela de quem enviou.
    console.error("[contato] falha ao enviar:", erro);
    return {
      status: "erro",
      mensagem: `Tente de novo em instantes ou escreva direto para ${site.contact.email}.`,
    };
  }
}
