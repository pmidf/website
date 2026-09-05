import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import Image from "next/image";
import type { CSSProperties } from "react";

import {
  BLOCO_PMI,
  BLOCO_PMIDF,
  DEPOIMENTOS,
  DEPOIMENTOS_SUBTITULO,
  DEPOIMENTOS_TITULO,
  DIRETORIA,
  FOTO_BRASILIA,
  HERO,
  MARCOS,
  PRESIDENTES,
  PRESIDENTES_BOTAO_HREF,
  PRESIDENTES_BOTAO_LABEL,
  PRESIDENTES_SUBTITULO,
  PRESIDENTES_TITULO,
  TRAJETORIA,
} from "@/content/quem-somos";
import { iniciais } from "@/lib/utils";
import type { Segmento } from "@/types";
import "@/styles/quem-somos.css";

/**
 * Página Quem Somos — construída a partir do nó "Sobre" do protótipo Figma,
 * lido via MCP (não transcrito à mão). As medidas vivem em
 * `src/styles/quem-somos.css`; os textos, em `src/content/quem-somos.ts`.
 */

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-archivo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quem Somos",
  description:
    "A história, a governança e as pessoas por trás do PMI Distrito Federal. Conheça quem constrói o capítulo todos os dias.",
};

/** Renderiza um parágrafo a partir de trechos, colocando `forte` em `<strong>`. */
function Texto({ segmentos }: { segmentos: Segmento[] }) {
  return (
    <>
      {segmentos.map((segmento, indice) =>
        segmento.forte ? (
          <strong key={indice}>{segmento.texto}</strong>
        ) : (
          <span key={indice}>{segmento.texto}</span>
        ),
      )}
    </>
  );
}

export default function QuemSomosPage() {
  return (
    <div className={`${archivo.variable} ${inter.variable} qs-pagina`}>
      {/* === Seção 1 — Hero ============================================== */}
      <section className="qs-hero">
        <h1 className="qs-hero__titulo">{HERO.titulo}</h1>
        <p className="qs-hero__subtitulo">
          <Texto segmentos={HERO.subtitulo} />
        </p>
      </section>

      {/* Faixa creme própria (não é o topo da Seção 2) — ver comentário em
          quem-somos.css sobre por que não é só um border-radius na seção. */}
      <div className="qs-curva" aria-hidden="true" />

      {/* === Seção 2 — O que é o PMI e o PMI-DF ========================== */}
      <section className="qs-oquee">
        <div className="qs-oquee__texto">
          <h2 className="qs-titulo qs-oquee__titulo-1">{BLOCO_PMI.titulo}</h2>
          <div className="qs-oquee__texto-1">
            {BLOCO_PMI.paragrafos.map((paragrafo, indice) => (
              <p key={indice} className="qs-oquee__paragrafo">
                <Texto segmentos={paragrafo} />
              </p>
            ))}

            {/* Pertence ao Bloco 1: no Figma este botão está em y=560 no
                frame do Hero (319px de altura) — ou seja, 241px dentro da
                Seção 2, logo abaixo do parágrafo "O que é o PMI?". Fica no
                fluxo do bloco (não em posição fixa) para acompanhar a altura
                real do parágrafo quando o line-height muda. */}
            <a
              href={HERO.botaoHref}
              target="_blank"
              rel="noopener noreferrer"
              className="qs-botao qs-botao--escuro qs-botao--fixo qs-oquee__botao"
            >
              {HERO.botaoLabel}
            </a>
          </div>

          <h2 className="qs-titulo qs-oquee__titulo-2">{BLOCO_PMIDF.titulo}</h2>
          <div className="qs-oquee__texto-2">
            {BLOCO_PMIDF.paragrafos.map((paragrafo, indice) => (
              <p key={indice} className="qs-oquee__paragrafo">
                <Texto segmentos={paragrafo} />
              </p>
            ))}
          </div>
        </div>

        <div className="qs-oquee__foto-wrap">
          <Image
            src={FOTO_BRASILIA.src}
            alt={FOTO_BRASILIA.alt}
            width={FOTO_BRASILIA.largura}
            height={FOTO_BRASILIA.altura}
            className="qs-oquee__foto"
          />
        </div>
      </section>

      {/* === Seção 3 — Linha do tempo ("Nossa trajetória") =============== */}
      <section className="qs-trajetoria">
        <span className="qs-trajetoria__blob qs-trajetoria__blob--1" aria-hidden="true" />
        <span className="qs-trajetoria__blob qs-trajetoria__blob--2" aria-hidden="true" />
        <span className="qs-trajetoria__blob qs-trajetoria__blob--3" aria-hidden="true" />

        <div className="qs-container qs-trajetoria__conteudo">
          <header className="qs-cabecalho">
            <h2 className="qs-titulo qs-titulo--claro">{TRAJETORIA.titulo}</h2>
            <p className="qs-subtitulo qs-subtitulo--claro">
              {TRAJETORIA.subtitulo}
            </p>
          </header>

          <ol className="qs-trajetoria__lista">
            {MARCOS.map((marco) => (
              <li key={marco.ano} className="qs-trajetoria__item">
                <span className="qs-trajetoria__chip">
                  <span
                    className="qs-trajetoria__ano"
                    style={{ "--cor-item": marco.cor } as CSSProperties}
                  >
                    {marco.ano}
                  </span>
                </span>
                <p className="qs-trajetoria__texto">{marco.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* === Seção 4 — Diretoria ("Organograma") ========================= */}
      <section className="qs-diretoria">
        <div className="qs-container qs-secao__conteudo">
          <header className="qs-cabecalho qs-cabecalho--centro">
            <h2 className="qs-titulo">{DIRETORIA.titulo}</h2>
            <p className="qs-subtitulo">{DIRETORIA.subtitulo}</p>
          </header>

          <div className="qs-diretoria__imagem-wrap">
            <Image
              src={DIRETORIA.imagem.src}
              alt={DIRETORIA.imagem.alt}
              width={DIRETORIA.imagem.largura}
              height={DIRETORIA.imagem.altura}
              className="qs-diretoria__imagem"
            />
          </div>

          <div className="qs-diretoria__rodape">
            <p className="qs-diretoria__rodape-texto">{DIRETORIA.rodapeTexto}</p>
            <a
              href={DIRETORIA.botaoHref}
              className="qs-botao qs-botao--claro-gradiente qs-botao--grande"
            >
              <span>{DIRETORIA.botaoLabel}</span>
            </a>
          </div>
        </div>
      </section>

      {/* === Seção 5 — Presidentes ======================================== */}
      <section className="qs-presidentes">
        <div className="qs-container qs-secao__conteudo">
          <header className="qs-cabecalho">
            <h2 className="qs-titulo qs-titulo--claro">{PRESIDENTES_TITULO}</h2>
            <p className="qs-subtitulo qs-subtitulo--claro">
              {PRESIDENTES_SUBTITULO}
            </p>
          </header>

          <div className="qs-presidentes__grade">
            {PRESIDENTES.map((presidente) => (
              <article key={presidente.nome} className="qs-presidente">
                {/* `foto` é opcional desde que a lista virou a galeria
                    completa (`content/presidentes.ts`): quem ainda não tem
                    arquivo entra com as iniciais, mantendo a grade alinhada. */}
                {presidente.foto ? (
                  <Image
                    src={presidente.foto}
                    alt={presidente.nome}
                    width={250}
                    height={250}
                    className="qs-presidente__foto"
                  />
                ) : (
                  <span
                    aria-hidden
                    className="qs-presidente__foto qs-presidente__foto--iniciais"
                  >
                    {iniciais(presidente.nome)}
                  </span>
                )}
                <p className="qs-presidente__legenda">
                  <span className="qs-presidente__nome">{presidente.nome}</span>
                  <br />
                  <span className="qs-presidente__periodo">
                    {presidente.periodo}
                  </span>
                </p>
              </article>
            ))}
          </div>

          <div className="qs-presidentes__botao">
            <a
              href={PRESIDENTES_BOTAO_HREF}
              className="qs-botao qs-botao--claro-solido"
              style={{ color: "var(--azul-petroleo)" }}
            >
              {PRESIDENTES_BOTAO_LABEL}
            </a>
          </div>
        </div>
      </section>

      {/* === Seção 6 — Depoimentos ("Vozes da comunidade") =============== */}
      <section className="qs-depoimentos">
        <div className="qs-container qs-secao__conteudo">
          <header className="qs-cabecalho">
            <h2 className="qs-titulo">{DEPOIMENTOS_TITULO}</h2>
            <p className="qs-subtitulo">{DEPOIMENTOS_SUBTITULO}</p>
          </header>

          <div className="qs-depoimentos__lista">
            {DEPOIMENTOS.map((depoimento) => (
              <article
                key={depoimento.nome}
                className={`qs-depoimento ${
                  depoimento.lado === "direita" ? "qs-depoimento--direita" : ""
                }`}
              >
                <div className="qs-depoimento__foto-wrap">
                  <Image
                    src={depoimento.foto}
                    alt=""
                    width={263}
                    height={263}
                    className="qs-depoimento__foto-eco"
                    aria-hidden="true"
                  />
                  <Image
                    src={depoimento.foto}
                    alt={depoimento.nome}
                    width={240}
                    height={240}
                    className="qs-depoimento__foto"
                  />
                </div>

                <div
                  className="qs-depoimento__card"
                  style={{ "--gradiente": depoimento.cardGradiente } as CSSProperties}
                >
                  <span className="qs-depoimento__chip">
                    <span
                      className="qs-depoimento__papel"
                      style={
                        {
                          "--gradiente-chip": depoimento.chipGradiente,
                        } as CSSProperties
                      }
                    >
                      {depoimento.papel}
                    </span>
                  </span>
                  <p className="qs-depoimento__citacao">
                    &ldquo;{depoimento.citacao}&rdquo;
                  </p>
                  <p className="qs-depoimento__nome">{depoimento.nome}</p>
                  <p className="qs-depoimento__legenda">{depoimento.legenda}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}