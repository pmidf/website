"use client";

import { useState } from "react";

import { ASSUNTOS, EMAIL_DESTINO, FORMULARIO } from "@/content/contato";

/**
 * Formulário de contato.
 *
 * ## Por que `mailto:` e não um envio de verdade
 *
 * O capítulo ainda não tem serviço de e-mail transacional nem CRM conectado ao
 * site. Um formulário que aparenta enviar e não envia é pior que nenhum: a
 * mensagem se perde em silêncio. Então o botão monta o e-mail e entrega ao
 * aplicativo do visitante, que vê exatamente o que vai ser enviado e de qual
 * endereço — nada se perde no caminho.
 *
 * Para trocar por um envio real (Server Action, Formspree, Basin ou o widget
 * do CRM), o ponto de mudança é só o `onSubmit`: os campos e a validação
 * continuam valendo. `src/app/api/eventos/route.ts` serve de referência de
 * route handler.
 */
export function Formulario({ assuntoInicial }: { assuntoInicial: string }) {
  const [assunto, setAssunto] = useState(assuntoInicial);

  function enviar(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    const dados = new FormData(evento.currentTarget);
    const nome = String(dados.get("nome") ?? "");
    const empresa = String(dados.get("empresa") ?? "");
    const telefone = String(dados.get("telefone") ?? "");
    const mensagem = String(dados.get("mensagem") ?? "");

    const escolhido =
      ASSUNTOS.find((opcao) => opcao.valor === dados.get("assunto"))?.label ??
      "Contato pelo site";

    // Só as linhas preenchidas entram na assinatura — campos opcionais em
    // branco não viram "Empresa:" vazio no e-mail.
    const assinatura = [
      `Nome: ${nome}`,
      empresa && `Empresa: ${empresa}`,
      telefone && `Telefone: ${telefone}`,
      "Enviado pelo formulário de contato do site.",
    ]
      .filter(Boolean)
      .join("\n");

    const corpo = `${mensagem}\n\n---\n${assinatura}`;

    const url =
      `mailto:${EMAIL_DESTINO}` +
      `?subject=${encodeURIComponent(`[Site] ${escolhido}`)}` +
      `&body=${encodeURIComponent(corpo)}`;

    window.location.href = url;
  }

  const campo =
    "w-full rounded-[10px] border border-[#200F3B]/15 bg-white px-4 py-3 text-[15px] text-[#200F3B] " +
    "outline-none transition placeholder:text-[#5C546E]/70 focus:border-[#4F17A8] " +
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F17A8]";

  const rotulo = "block text-[14px] font-semibold text-[#200F3B]";

  return (
    <form onSubmit={enviar} className="flex flex-col gap-5">
      <div>
        <label htmlFor="nome" className={rotulo}>
          Nome <span aria-hidden>*</span>
        </label>
        <input id="nome" name="nome" type="text" required autoComplete="name" className={`mt-2 ${campo}`} />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="email" className={rotulo}>
            E-mail <span aria-hidden>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={`mt-2 ${campo}`}
          />
        </div>

        <div>
          <label htmlFor="telefone" className={rotulo}>
            Telefone
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            autoComplete="tel"
            className={`mt-2 ${campo}`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="empresa" className={rotulo}>
          Empresa ou instituição
        </label>
        <input
          id="empresa"
          name="empresa"
          type="text"
          autoComplete="organization"
          className={`mt-2 ${campo}`}
        />
      </div>

      <div>
        <label htmlFor="assunto" className={rotulo}>
          Assunto
        </label>
        <select
          id="assunto"
          name="assunto"
          value={assunto}
          onChange={(evento) => setAssunto(evento.target.value)}
          className={`mt-2 ${campo}`}
        >
          {ASSUNTOS.map((opcao) => (
            <option key={opcao.valor} value={opcao.valor}>
              {opcao.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="mensagem" className={rotulo}>
          Mensagem <span aria-hidden>*</span>
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={6}
          className={`mt-2 resize-y ${campo}`}
        />
      </div>

      <p className="text-[13px] leading-relaxed text-[#5C546E]">
        Os campos com <span aria-hidden>*</span> são obrigatórios. Ao enviar, seu aplicativo de
        e-mail abre com a mensagem pronta para {EMAIL_DESTINO}.
      </p>

      <button
        type="submit"
        className="self-start rounded-full bg-[#1F0942] px-7 py-3 text-[15px] font-medium text-white shadow-[0_4px_2px_rgba(0,0,0,0.25)] transition hover:bg-[#2A0A5C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F0942]"
      >
        {FORMULARIO.enviarLabel}
      </button>
    </form>
  );
}
