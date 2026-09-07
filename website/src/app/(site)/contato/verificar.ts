"use server";

import { resolve4, resolveMx } from "node:dns/promises";

import { emailValido, sugerirEmail } from "@/lib/email";

/**
 * Verificação de e-mail no servidor, disparada quando a pessoa sai do campo.
 *
 * ## O que dá para provar, e o que não dá
 *
 * Esta função consulta o **DNS** e responde uma pergunta só: *este domínio
 * recebe e-mail?* Se `exemplo.com.br` não tem registro MX nem A, nenhuma
 * mensagem chega lá — e é isso que pega o caso real de quem digita o domínio
 * errado ou inventa um endereço na hora.
 *
 * O que ela **não** faz é dizer se a caixa existe. Isso exigiria abrir uma
 * conversa SMTP com o servidor do destino e perguntar por `RCPT TO`, e há três
 * problemas com isso: a Vercel bloqueia a porta 25 de saída, Gmail e Outlook
 * respondem "aceito" para qualquer endereço (então a resposta seria sempre
 * "existe", inclusive para o que não existe), e servidores costumam colocar em
 * blocklist quem sonda dessa forma. Bibliotecas que prometem essa checagem
 * esbarram nos mesmos três muros.
 *
 * A única prova real de que uma caixa existe é mandar uma mensagem para ela e
 * receber de volta — ou seja, confirmação por link. Isso é uma mudança de
 * fluxo, não de validação.
 *
 * ## Falha para o lado permissivo
 *
 * DNS pode estar lento ou fora do ar, e ninguém deve ser impedido de falar com
 * o capítulo por causa disso. Timeout, erro de rede ou resultado ambíguo
 * respondem `indisponivel`, e a interface simplesmente não diz nada.
 */

export type ResultadoVerificacao = {
  estado: "ok" | "formato" | "sem-servidor" | "indisponivel";
  /** Correção provável do domínio, quando houver. */
  sugestao?: string;
};

/** Uma consulta lenta não pode segurar o formulário. */
const TIMEOUT_MS = 3000;
/** Domínios já consultados. Uma pessoa costuma corrigir o e-mail 2 ou 3 vezes. */
const CACHE_MS = 10 * 60 * 1000;

const cache = new Map<string, { recebe: boolean; em: number }>();

async function comTempoLimite<T>(promessa: Promise<T>): Promise<T> {
  return Promise.race([
    promessa,
    new Promise<T>((_, rejeita) =>
      setTimeout(() => rejeita(new Error("timeout")), TIMEOUT_MS),
    ),
  ]);
}

/**
 * O domínio aceita e-mail?
 *
 * MX é a resposta direta. Na ausência dele, o RFC 5321 manda tratar o registro
 * A como MX implícito — então um domínio só com A ainda pode receber. Por isso
 * a checagem do A entra como segunda tentativa, e não como equivalente: quem
 * tem A e não tem MX é quase sempre domínio parqueado ou typosquatting, caso
 * que a sugestão de correção cobre em paralelo.
 */
async function dominioRecebeEmail(dominio: string): Promise<boolean> {
  const guardado = cache.get(dominio);
  if (guardado && Date.now() - guardado.em < CACHE_MS) return guardado.recebe;

  let recebe = false;

  try {
    const mx = await comTempoLimite(resolveMx(dominio));
    recebe = mx.length > 0 && mx.some((registro) => registro.exchange);
  } catch {
    try {
      const a = await comTempoLimite(resolve4(dominio));
      recebe = a.length > 0;
    } catch {
      recebe = false;
    }
  }

  cache.set(dominio, { recebe, em: Date.now() });

  if (cache.size > 2000) {
    const agora = Date.now();
    for (const [chave, valor] of cache) {
      if (agora - valor.em >= CACHE_MS) cache.delete(chave);
    }
  }

  return recebe;
}

export async function verificarEmail(email: string): Promise<ResultadoVerificacao> {
  const limpo = String(email ?? "").trim().toLowerCase();

  if (limpo === "") return { estado: "indisponivel" };
  if (!emailValido(limpo)) return { estado: "formato", sugestao: sugerirEmail(limpo) ?? undefined };

  const dominio = limpo.slice(limpo.lastIndexOf("@") + 1);
  const sugestao = sugerirEmail(limpo) ?? undefined;

  try {
    const recebe = await dominioRecebeEmail(dominio);

    return recebe ? { estado: "ok", sugestao } : { estado: "sem-servidor", sugestao };
  } catch {
    return { estado: "indisponivel", sugestao };
  }
}
