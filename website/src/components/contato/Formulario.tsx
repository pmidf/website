"use client";

import { useActionState, useEffect, useRef } from "react";

import { enviarContato, type EstadoEnvio } from "@/app/(site)/contato/enviar";
import { ASSUNTOS, FORMULARIO } from "@/content/contato";

/**
 * Formulário de contato.
 *
 * O envio é uma Server Action (`enviarContato`), que fala com o SMTP do
 * capítulo. Antes o botão montava um `mailto:` e passava a bola para o
 * aplicativo de e-mail do visitante — funcionava, mas dependia de haver um
 * cliente configurado na máquina e não deixava rastro para o capítulo quando
 * a pessoa desistia no meio.
 *
 * `useActionState` cuida do vaivém: o estado devolvido pela action vira a
 * mensagem de retorno, e `pending` desabilita o botão enquanto o e-mail sai.
 * Sem isso, um clique duplo manda duas mensagens.
 *
 * O formulário é um `<form action={...}>` de verdade: os campos são enviados
 * mesmo se o JavaScript falhar em carregar, e a validação do navegador
 * (`required`, `type="email"`) continua valendo antes de chegar ao servidor —
 * onde ela é refeita, porque validação de cliente é conveniência, não defesa.
 */
const ESTADO_INICIAL: EstadoEnvio = { status: "inicial" };

export function Formulario({ assuntoInicial }: { assuntoInicial: string }) {
  const [estado, acao, enviando] = useActionState(enviarContato, ESTADO_INICIAL);
  const formulario = useRef<HTMLFormElement>(null);
  const retorno = useRef<HTMLDivElement>(null);
  const carimbo = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (carimbo.current) carimbo.current.value = String(Date.now());
  }, []);

  // Deu certo: limpa os campos e leva o foco ao aviso, para quem navega por
  // teclado ou leitor de tela saber que algo aconteceu sem procurar na tela.
  //
  // `reset()` devolve o select ao `defaultValue` sozinho — é por isso que ele
  // não é controlado: com estado, seria preciso um `setState` aqui dentro, que
  // dispara uma renderização em cascata.
  useEffect(() => {
    if (estado.status === "ok") {
      formulario.current?.reset();
    }
    if (estado.status !== "inicial") {
      retorno.current?.focus();
    }
  }, [estado]);

  const invalido = (nome: string) => estado.invalidos?.includes(nome) ?? false;

  const campo = (nome: string) =>
    "w-full rounded-[10px] border bg-white px-4 py-3 text-[15px] text-[#200F3B] " +
    "outline-none transition placeholder:text-[#5C546E]/70 " +
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F17A8] " +
    (invalido(nome) ? "border-[#B3261E]" : "border-[#200F3B]/15 focus:border-[#4F17A8]");

  const rotulo = "block text-[14px] font-semibold text-[#200F3B]";

  return (
    <form ref={formulario} action={acao} className="flex flex-col gap-5">
      {/* Isca para robôs: fora da tela e fora da ordem de tabulação, com
          `aria-hidden` para leitor de tela não anunciar. Quem preenche não é
          gente. */}
      {/* Painel de retorno no topo, e não uma linha ao lado do botão: depois de
          enviar, a página costuma estar rolada perto do fim do formulário, e um
          aviso discreto ali passava despercebido. Recebe o foco quando a
          resposta chega, então quem navega por teclado ou leitor de tela cai
          direto nele.
          `role` muda com a gravidade: "status" anuncia sem interromper, "alert"
          interrompe — o erro precisa da interrupção, o sucesso não. */}
      {estado.status !== "inicial" && (
        <div
          ref={retorno}
          role={estado.status === "erro" ? "alert" : "status"}
          aria-live={estado.status === "erro" ? "assertive" : "polite"}
          tabIndex={-1}
          className={`flex items-start gap-3 rounded-[12px] border p-4 outline-none ${
            estado.status === "erro"
              ? "border-[#B3261E]/30 bg-[#B3261E]/5"
              : "border-[#1B7A3D]/30 bg-[#1B7A3D]/5"
          }`}
        >
          <span
            aria-hidden
            className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[13px] font-bold text-white ${
              estado.status === "erro" ? "bg-[#B3261E]" : "bg-[#1B7A3D]"
            }`}
          >
            {estado.status === "erro" ? "!" : "✓"}
          </span>

          <div>
            <p
              className={`text-[15px] font-bold ${
                estado.status === "erro" ? "text-[#B3261E]" : "text-[#1B7A3D]"
              }`}
            >
              {estado.status === "erro" ? "Não foi possível enviar" : "Mensagem enviada"}
            </p>
            <p className="mt-1 text-[14px] leading-relaxed text-[#5C546E]">{estado.mensagem}</p>
          </div>
        </div>
      )}

      <div aria-hidden className="absolute left-[-9999px]">
        <label htmlFor="website">Não preencha este campo</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Momento em que o formulário apareceu, preenchido no efeito de montagem
          — `Date.now()` durante a renderização é impuro e quebraria o
          resultado do servidor e o do cliente. Sai vazio quando não há
          JavaScript, e o servidor trata o vazio como "sem informação" em vez
          de recusar: quem está sem JS não pode ser barrado por isso. */}
      <input ref={carimbo} type="hidden" name="iniciado" />

      <div>
        <label htmlFor="nome" className={rotulo}>
          Nome <span aria-hidden>*</span>
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          maxLength={120}
          autoComplete="name"
          aria-invalid={invalido("nome") || undefined}
          className={`mt-2 ${campo("nome")}`}
        />
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
            maxLength={200}
            autoComplete="email"
            aria-invalid={invalido("email") || undefined}
            className={`mt-2 ${campo("email")}`}
          />
        </div>

        <div>
          <label htmlFor="telefone" className={rotulo}>
            Telefone <span aria-hidden>*</span>
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            required
            maxLength={40}
            autoComplete="tel"
            aria-invalid={invalido("telefone") || undefined}
            className={`mt-2 ${campo("telefone")}`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="empresa" className={rotulo}>
          Empresa ou instituição <span aria-hidden>*</span>
        </label>
        <input
          id="empresa"
          name="empresa"
          type="text"
          required
          maxLength={160}
          autoComplete="organization"
          aria-invalid={invalido("empresa") || undefined}
          className={`mt-2 ${campo("empresa")}`}
        />
      </div>

      <div>
        <label htmlFor="assunto" className={rotulo}>
          Assunto
        </label>
        <select
          id="assunto"
          name="assunto"
          defaultValue={assuntoInicial}
          className={`mt-2 ${campo("assunto")}`}
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
          minLength={10}
          maxLength={5000}
          rows={6}
          aria-invalid={invalido("mensagem") || undefined}
          className={`mt-2 resize-y ${campo("mensagem")}`}
        />
      </div>

      <p className="text-[13px] leading-relaxed text-[#5C546E]">
        Todos os campos são obrigatórios.
      </p>

      <button
        type="submit"
        disabled={enviando}
        aria-busy={enviando}
        className="inline-flex w-fit items-center gap-3 rounded-full bg-[#1F0942] px-7 py-3 text-[15px] font-medium text-white shadow-[0_4px_2px_rgba(0,0,0,0.25)] transition hover:bg-[#2A0A5C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F0942] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {/* Rodela girando enquanto o e-mail sai: o rótulo sozinho muda pouco na
            tela, e o envio por SMTP leva alguns segundos. */}
        {enviando && (
          <span
            aria-hidden
            className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
          />
        )}
        {enviando ? FORMULARIO.enviandoLabel : FORMULARIO.enviarLabel}
      </button>
    </form>
  );
}
