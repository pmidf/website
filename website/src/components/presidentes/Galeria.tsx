"use client";

import { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa6";

import { Avatar } from "@/components/ui/Avatar";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TituloSecao } from "@/components/ui/TituloSecao";
import { GALERIA_PRESIDENTES, TEXTOS } from "@/content/presidentes";
import type { Idioma, Presidente } from "@/types";

/**
 * Linha do tempo das gestões, da mais recente para a primeira.
 *
 * ## Por que é uma lista e não uma grade
 *
 * A galeria antiga eram três retratos em grade, e grade só funciona quando os
 * cards têm o mesmo peso. Aqui cada gestão traz uma biografia inteira, de
 * tamanho muito desigual (a de Giuseppe Janino tem três parágrafos, um deles
 * com quinze prêmios; a de Rodrigo Loureiro ainda não existe). Empilhados em
 * coluna única, os cards podem crescer o quanto precisarem sem deixar buracos,
 * e a leitura de cima para baixo é a própria cronologia.
 *
 * ## O seletor de idioma
 *
 * As biografias foram escritas pelas próprias pessoas — umas em português,
 * outras em inglês —, e cada uma existe nos dois idiomas. O seletor troca
 * apenas as biografias, não a página inteira: traduzir só metade do site seria
 * pior que não traduzir.
 *
 * O parágrafo exibido recebe o `lang` do idioma escolhido, o que faz o leitor
 * de tela mudar de pronúncia (WCAG 3.1.2, Idioma das Partes) em vez de ler um
 * texto em inglês com fonemas de português.
 */

/** Cores de acento, cicladas pela lista para dar ritmo à coluna. */
const ACENTOS = ["#FF610F", "#4F17A8", "#1AC7FF"];

/** Código de idioma completo, para o atributo `lang` dos parágrafos. */
const LANG: Record<Idioma, string> = { pt: "pt-BR", en: "en" };

function CardPresidente({
  presidente,
  idioma,
  acento,
  atual,
}: {
  presidente: Presidente;
  idioma: Idioma;
  acento: string;
  atual: boolean;
}) {
  const textos = TEXTOS[idioma];
  const paragrafos = presidente.bio?.[idioma] ?? [];

  return (
    <li>
      <article
        className={`grid gap-7 rounded-[24px] bg-white p-6 shadow-[0_2px_10px_rgba(32,15,59,0.08)] md:grid-cols-[168px_1fr] md:gap-9 md:p-9 ${
          atual ? "ring-2 ring-[#4F17A8]/25" : ""
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          {/* Cor de acento ciclada pela lista: é o que dá ritmo à coluna de
              doze cards, que de resto são todos brancos e do mesmo formato. */}
          <span
            className="rounded-full p-[5px]"
            style={{ background: `${acento}1F` }}
          >
            <Avatar nome={presidente.nome} foto={presidente.foto} tamanho={140} />
          </span>

          {presidente.linkedin && (
            <a
              href={presidente.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${textos.verLinkedin} — ${presidente.nome}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#0A66C2] px-4 py-2 text-[14px] font-semibold text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A66C2]"
            >
              <FaLinkedinIn aria-hidden className="h-[15px] w-[15px]" />
              {textos.verLinkedin}
            </a>
          )}
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <p className="inline-flex items-center rounded-full bg-[#F8F5F0] px-4 py-1.5 text-[14px] font-semibold text-[#200F3B]">
              {presidente.periodo}
            </p>

            {atual && (
              <p className="rounded-full bg-[linear-gradient(90deg,#200F3B_0%,#FF610F_50%,#1AC7FF_100%)] px-4 py-1.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-white">
                {textos.gestaoAtual}
              </p>
            )}
          </div>

          <h3 className="mt-4 text-[24px] font-extrabold leading-tight text-[#200F3B] lg:text-[28px]">
            {presidente.nome}
          </h3>

          {paragrafos.length > 0 ? (
            <div lang={LANG[idioma]} className="mt-4 flex flex-col gap-3">
              {paragrafos.map((paragrafo) => (
                <p
                  key={paragrafo.slice(0, 40)}
                  className="text-[16px] leading-relaxed text-[#5C546E]"
                >
                  {paragrafo}
                </p>
              ))}
            </div>
          ) : (
            <p className="mt-4 text-[16px] italic text-[#5C546E]/80">{textos.semBio}</p>
          )}
        </div>
      </article>
    </li>
  );
}

export function Galeria() {
  const [idioma, setIdioma] = useState<Idioma>("pt");
  const textos = TEXTOS[idioma];

  return (
    <section className="bg-[#F8F5F0] py-16 lg:py-20">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Linha do tempo</Eyebrow>
            <TituloSecao className="mt-3 font-extrabold leading-tight text-[#200F3B]">
              {GALERIA_PRESIDENTES.length} gestões
            </TituloSecao>
          </div>

          {/* Controle segmentado. `aria-pressed` (e não `aria-current`) porque
              são dois estados de uma mesma preferência, não navegação. */}
          <div className="flex items-center gap-3">
            <span className="text-[14px] font-semibold text-[#5C546E]">
              {textos.seletorRotulo}
            </span>
            <div
              role="group"
              aria-label={textos.seletorRotulo}
              className="inline-flex rounded-full bg-white p-1 shadow-[0_2px_10px_rgba(32,15,59,0.08)]"
            >
              {(Object.keys(TEXTOS) as Idioma[]).map((codigo) => {
                const ativo = codigo === idioma;
                return (
                  <button
                    key={codigo}
                    type="button"
                    lang={LANG[codigo]}
                    aria-pressed={ativo}
                    onClick={() => setIdioma(codigo)}
                    className={`rounded-full px-4 py-2 text-[14px] font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F17A8] ${
                      ativo
                        ? "bg-[#4F17A8] text-white"
                        : "text-[#5C546E] hover:text-[#FF610F]"
                    }`}
                  >
                    {TEXTOS[codigo].nomeIdioma}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <ol className="mt-10 flex flex-col gap-6 lg:mt-12">
          {GALERIA_PRESIDENTES.map((presidente, indice) => (
            <CardPresidente
              key={`${presidente.nome}-${presidente.periodo}`}
              presidente={presidente}
              idioma={idioma}
              acento={ACENTOS[indice % ACENTOS.length]}
              atual={indice === 0}
            />
          ))}
        </ol>
      </Container>
    </section>
  );
}
