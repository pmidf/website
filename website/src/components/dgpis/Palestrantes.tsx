"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { FaArrowLeft, FaArrowRight, FaLinkedinIn } from "react-icons/fa6";

import { Avatar } from "@/components/ui/Avatar";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TituloSecao } from "@/components/ui/TituloSecao";
import { PALESTRANTES } from "@/content/dgpis-2026";
import { cn } from "@/lib/utils";

/**
 * "Palco" dos palestrantes do 5º DGPIS.
 *
 * ## Por que abas e não uma grade
 *
 * São várias pessoas com bios de duas a quatro linhas. Numa grade, as bios
 * disputam a atenção ao mesmo tempo e a seção vira um paredão de texto.
 * Aqui os retratos são o índice, e uma pessoa por vez ocupa o palco — o
 * painel grande dá a cada uma o destaque de um card de palestrante de evento.
 *
 * É o padrão de abas da WAI-ARIA: `tablist` com tabindex itinerante (só a aba
 * ativa entra na ordem do Tab), setas ← →, Home e End. A seta já seleciona a
 * aba — os painéis são leves, não há o que carregar.
 *
 * Todos os painéis são sempre renderizados, com `hidden` nos inativos: todas
 * as bios saem no HTML do servidor (buscadores e leitura sem JS), e só uma
 * aparece por vez.
 *
 * Não há rotação automática: cada bio pede o próprio tempo de leitura, e
 * conteúdo que se move sozinho exigiria controle de pausa (WCAG 2.2.2).
 *
 * As fontes vêm do wrapper da página (`--font-titulo` / `--font-corpo`).
 */

/** Anel em gradiente da identidade, do laranja ao ciano. */
const ANEL = "bg-[linear-gradient(135deg,#FF610F_0%,#05BFE0_100%)]";

const BOTAO_NAVEGACAO =
  "flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition " +
  "hover:border-[#FF610F] hover:text-[#FF610F] " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#05BFE0]";

function doisDigitos(numero: number) {
  return String(numero).padStart(2, "0");
}

export function Palestrantes() {
  const [ativo, setAtivo] = useState(0);
  /* Texto da região `aria-live`. Só muda pelos botões anterior/próximo: pelas
   * setas, o foco já está na aba e o leitor de tela anuncia sozinho —
   * anunciar de novo seria leitura dobrada. */
  const [anuncio, setAnuncio] = useState("");
  const lista = useRef<HTMLDivElement>(null);
  const abas = useRef<(HTMLButtonElement | null)[]>([]);

  const total = PALESTRANTES.length;

  /** Abaixo de `lg` a fileira de retratos rola: mantém a aba ativa no centro. */
  const centralizar = (indice: number) => {
    const trilho = lista.current;
    const aba = abas.current[indice];
    if (!trilho || !aba || trilho.scrollWidth <= trilho.clientWidth) return;

    const reduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    trilho.scrollTo({
      left: aba.offsetLeft - (trilho.clientWidth - aba.offsetWidth) / 2,
      behavior: reduzido ? "auto" : "smooth",
    });
  };

  const selecionar = (indice: number, { focar = false, anunciar = false } = {}) => {
    const proximo = (indice + total) % total;
    setAtivo(proximo);
    centralizar(proximo);

    if (focar) abas.current[proximo]?.focus({ preventScroll: true });
    if (anunciar) {
      setAnuncio(`${proximo + 1} de ${total}: ${PALESTRANTES[proximo].nome}`);
    }
  };

  const aoTeclar = (evento: KeyboardEvent<HTMLDivElement>) => {
    const destinos: Record<string, number> = {
      ArrowRight: ativo + 1,
      ArrowLeft: ativo - 1,
      Home: 0,
      End: total - 1,
    };
    const destino = destinos[evento.key];
    if (destino === undefined) return;

    evento.preventDefault();
    selecionar(destino, { focar: true });
  };

  return (
    <section
      id="palestrantes"
      className="relative scroll-mt-24 overflow-hidden bg-[#1F0942] py-16 lg:py-24"
    >
      {/* "Luz de palco" e as bolinhas da identidade, em cantos diferentes dos
          do hero para a página não se repetir. O círculo laranja fica atrás do
          canto do painel: o `backdrop-blur` do vidro o desfoca. */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(91,43,130,0.55)_0%,transparent_60%)]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#5B2B82] opacity-80 lg:-left-40 lg:-top-44 lg:h-[380px] lg:w-[380px]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-28 -right-20 h-64 w-64 rounded-full bg-[#FF610F] lg:-bottom-36 lg:-right-24 lg:h-[340px] lg:w-[340px]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-[12%] top-16 hidden h-[56px] w-[56px] rounded-full bg-[#05BFE0] md:block"
      />

      <Container gutter="amplo" className="relative z-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[720px]">
            <Eyebrow className="text-[#05BFE0]">Palestrantes</Eyebrow>
            <TituloSecao className="mt-4 font-[family-name:var(--font-titulo)] font-extrabold leading-[1.18] text-white">
              Vozes que conectam método e impacto
            </TituloSecao>
            <p className="mt-4 text-[16px] leading-relaxed text-white/70 lg:text-[18px]">
              Do terceiro setor ao governo federal, de organismos internacionais à comunidade de
              gerenciamento de projetos: quem sobe ao palco no 5º DGPIS fala a partir da prática.
            </p>
          </div>

          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              aria-label="Palestrante anterior"
              onClick={() => selecionar(ativo - 1, { anunciar: true })}
              className={BOTAO_NAVEGACAO}
            >
              <FaArrowLeft aria-hidden className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Próximo palestrante"
              onClick={() => selecionar(ativo + 1, { anunciar: true })}
              className={BOTAO_NAVEGACAO}
            >
              <FaArrowRight aria-hidden className="h-4 w-4" />
            </button>
          </div>
        </div>

        <p aria-live="polite" className="sr-only">
          {anuncio}
        </p>

        {/* `relative` faz deste trilho o `offsetParent` das abas — é a
            referência do `offsetLeft` usado em `centralizar`.

            Abaixo de `lg` a fileira rola, e a margem negativa repete o gutter
            do `Container` para a rolagem encostar nas bordas da tela. De `lg`
            em diante ela quebra em linhas centralizadas de até sete retratos
            (o `max-w`), com todos à vista. */}
        <div
          ref={lista}
          role="tablist"
          aria-label="Palestrantes do 5º DGPIS"
          onKeyDown={aoTeclar}
          className="relative -mx-5 mt-10 flex snap-x snap-mandatory gap-2 overflow-x-auto px-5 py-3 [scrollbar-width:none] md:-mx-8 md:gap-5 md:px-8 lg:mx-auto lg:mt-12 lg:max-w-[860px] lg:flex-wrap lg:justify-center lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {PALESTRANTES.map((palestrante, indice) => {
            const selecionado = indice === ativo;

            return (
              <button
                key={palestrante.id}
                ref={(elemento) => {
                  abas.current[indice] = elemento;
                }}
                type="button"
                role="tab"
                id={`aba-${palestrante.id}`}
                aria-controls={`painel-${palestrante.id}`}
                aria-selected={selecionado}
                aria-label={palestrante.nome}
                tabIndex={selecionado ? 0 : -1}
                onClick={() => selecionar(indice)}
                className={cn(
                  "flex w-[104px] shrink-0 snap-center flex-col items-center gap-2 rounded-[20px] px-1 pb-1 pt-2 transition",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#05BFE0]",
                  !selecionado && "opacity-60 hover:opacity-100",
                )}
              >
                <span
                  className={cn(
                    "block rounded-full p-[3px] transition motion-safe:duration-300",
                    selecionado ? `${ANEL} motion-safe:scale-105` : "bg-white/15",
                  )}
                >
                  <span className="block rounded-full bg-[#1F0942] p-[3px]">
                    <Avatar nome={palestrante.nome} foto={palestrante.foto} tamanho={80} />
                  </span>
                </span>

                <span aria-hidden className="text-[13px] font-semibold text-white">
                  {palestrante.nome.split(" ")[0]}
                </span>

                <span
                  aria-hidden
                  className={cn(
                    "h-1 rounded-full transition-all motion-safe:duration-300",
                    selecionado ? "w-6 bg-[#FF610F]" : "w-0 bg-transparent",
                  )}
                />
              </button>
            );
          })}
        </div>

        <div className="mt-6 lg:mt-8">
          {PALESTRANTES.map((palestrante, indice) => (
            <div
              key={palestrante.id}
              role="tabpanel"
              id={`painel-${palestrante.id}`}
              aria-labelledby={`aba-${palestrante.id}`}
              hidden={indice !== ativo}
              tabIndex={0}
              className="rounded-[28px] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#05BFE0] motion-safe:animate-[palco-entrada_420ms_ease-out] md:p-10 lg:p-12"
            >
              <div className="grid items-center gap-9 md:grid-cols-[auto_1fr] md:gap-12 lg:gap-16">
                <div className="relative w-fit">
                  <span
                    aria-hidden
                    className="absolute -bottom-2 -right-4 h-16 w-16 rounded-full bg-[#FF610F] lg:h-20 lg:w-20"
                  />
                  <span
                    aria-hidden
                    className="absolute -left-3 top-3 h-6 w-6 rounded-full bg-[#05BFE0]"
                  />
                  <span className={`relative block rounded-full p-[4px] ${ANEL}`}>
                    <span className="block rounded-full bg-[#1F0942] p-[5px]">
                      <Avatar nome={palestrante.nome} foto={palestrante.foto} tamanho={168} />
                    </span>
                  </span>
                </div>

                <div className="min-w-0">
                  <p className="font-[family-name:var(--font-titulo)] text-[15px] font-extrabold tracking-[0.12em] text-[#05BFE0]">
                    {doisDigitos(indice + 1)}{" "}
                    <span className="text-white/40">/ {doisDigitos(total)}</span>
                  </p>

                  <h3 className="mt-3 font-[family-name:var(--font-titulo)] text-[28px] font-extrabold leading-[1.1] text-white lg:text-[38px]">
                    {palestrante.nome}
                  </h3>

                  {/* Só borda, sem fundo tingido: o laranja sobre o vidro fica
                      em ~5:1 de contraste; com tinta de fundo cairia para o
                      limite de 4,5:1. `flex w-fit`, e não `inline-flex`: sem
                      bio entre os dois, a pílula dividiria a linha com o botão
                      do LinkedIn. */}
                  {palestrante.cargo && (
                    <p className="mt-4 flex w-fit rounded-full border border-[#FF610F]/50 px-4 py-1.5 text-[14px] font-semibold text-[#FF610F]">
                      {palestrante.cargo}
                    </p>
                  )}

                  {palestrante.bio && (
                    <p className="mt-5 max-w-[700px] text-[16px] leading-relaxed text-white/80 lg:text-[17px]">
                      {palestrante.bio}
                    </p>
                  )}

                  {palestrante.linkedin && (
                    <a
                      href={palestrante.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn de ${palestrante.nome}`}
                      className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0A66C2] px-5 py-2.5 text-[14px] font-semibold text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#05BFE0]"
                    >
                      <FaLinkedinIn aria-hidden className="h-[15px] w-[15px]" />
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
