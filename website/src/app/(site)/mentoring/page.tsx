import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";

import {
  CAMINHOS,
  ENTREGAS,
  ESTATISTICAS,
  ETAPAS_CICLO,
  LINK_INSCRICAO,
} from "@/content/mentoring";
import "@/styles/mentoring.css";

/**
 * Página Mentoring — construída a partir do protótipo Figma (1280 de largura,
 * conteúdo de 1140). As medidas vivem em `src/styles/mentoring.css`; os textos,
 * em `src/content/mentoring.ts`. Este arquivo é só a estrutura semântica.
 */

/* Archivo e Inter vêm do Google Fonts via `next/font`, que baixa e serve os
 * arquivos do nosso domínio no build — mesma política self-hosted das demais
 * famílias. Aeonik e Agrandir são licenciadas: ficam em `src/styles/fonts.css`
 * com fallback para Inter e Archivo, respectivamente. */
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-archivo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mentoring",
  description:
    "Conexão entre quem tem experiência e quem quer crescer. O programa oficial de mentoria do PMI-DF, com ciclos anuais e método próprio.",
};

export default function MentoringPage() {
  return (
    <div className={`${archivo.variable} ${inter.variable} mtr-pagina`}>
      {/* === Seção 1 — Hero ============================================== */}
      <section className="mtr-hero">
        <h1 className="mtr-hero__titulo">Programa de Mentoring</h1>
        <p className="mtr-hero__subtitulo">
          Conexão entre quem tem experiência e quem quer crescer. O programa
          oficial de mentoria do PMI-DF, com ciclos anuais e método próprio.
        </p>
        <a href={LINK_INSCRICAO} className="mtr-botao mtr-botao--claro">
          <span className="mtr-botao__gradiente">Ver inscrições abertas</span>
        </a>
      </section>

      {/* === Seção 2 — O que é =========================================== */}
      <section className="mtr-oquee">
        <div className="mtr-container mtr-oquee__conteudo">
          <div className="mtr-oquee__texto">
            <p className="mtr-rotulo">O que é</p>
            <h2 className="mtr-titulo-secao">Mentoria com estrutura</h2>
            <p className="mtr-oquee__paragrafo">
              O Mentoring do PMI-DF conecta mentores experientes a mentorados em
              busca de direção. Não é conversa informal. É relacionamento
              guiado, com objetivos, encontros regulares e acompanhamento do
              capítulo.
            </p>
          </div>

          <div className="mtr-oquee__numeros">
            {ESTATISTICAS.map((estatistica) => (
              <div key={estatistica.legenda} className="mtr-numero">
                <span
                  className="mtr-numero__valor"
                  style={{ color: estatistica.cor }}
                >
                  {estatistica.numero}
                </span>
                <span className="mtr-numero__legenda">
                  {estatistica.legenda}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Seção 3 — Dois caminhos ===================================== */}
      <section className="mtr-caminhos">
        <div className="mtr-container mtr-secao__conteudo">
          <header className="mtr-cabecalho">
            <p className="mtr-rotulo">Dois caminhos</p>
            <h2 className="mtr-titulo-secao">
              Você pode entrar como mentor ou mentorado
            </h2>
          </header>

          <div className="mtr-caminhos__cards">
            {CAMINHOS.map((caminho) => (
              <article
                key={caminho.perfil}
                className={`mtr-caminho mtr-caminho--${caminho.perfil}`}
              >
                <h3 className="mtr-caminho__titulo">{caminho.titulo}</h3>
                <p className="mtr-caminho__citacao">{caminho.citacao}</p>
                <div className="mtr-caminho__divisor" aria-hidden="true" />
                <ul className="mtr-lista">
                  {caminho.itens.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a
                  href={LINK_INSCRICAO}
                  className="mtr-botao mtr-botao--escuro"
                >
                  {caminho.ctaLabel}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === Seção 4 — Estrutura do ciclo ================================ */}
      <section className="mtr-ciclo">
        <div className="mtr-container mtr-secao__conteudo">
          <header className="mtr-cabecalho mtr-cabecalho--centro">
            <p className="mtr-rotulo">Como funciona</p>
            <h2 className="mtr-titulo-secao">Estrutura do ciclo</h2>
          </header>

          <div className="mtr-ciclo__cards">
            {ETAPAS_CICLO.map((etapa, indice) => (
              <article key={etapa.titulo} className="mtr-etapa">
                {/* O número é ordinal decorativo, não um heading. */}
                <span className="mtr-etapa__numero" aria-hidden="true">
                  {indice + 1}
                </span>
                <h3 className="mtr-etapa__titulo">{etapa.titulo}</h3>
                <p className="mtr-etapa__descricao">{etapa.descricao}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === Seção 5 — O que a mentoria entrega ========================== */}
      <section className="mtr-entregas">
        <div className="mtr-container mtr-secao__conteudo">
          <header className="mtr-cabecalho mtr-cabecalho--centro">
            <p className="mtr-rotulo mtr-rotulo--ciano">Por que participar</p>
            <h2 className="mtr-titulo-secao mtr-titulo-secao--claro">
              O que a mentoria entrega
            </h2>
          </header>

          <div className="mtr-entregas__cards">
            {ENTREGAS.map((entrega) => (
              <article key={entrega.titulo} className="mtr-entrega">
                <span
                  className="mtr-entrega__icone"
                  style={{ background: entrega.cor }}
                  aria-hidden="true"
                />
                <h3 className="mtr-entrega__titulo">{entrega.titulo}</h3>
                <p className="mtr-entrega__texto">{entrega.descricao}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === Seção 6 — Banner "Próximo ciclo" ============================ */}
      <section className="mtr-inscricoes" id="inscricoes">
        <div className="mtr-container">
          <div className="mtr-banner">
            <p className="mtr-rotulo mtr-rotulo--claro">Inscrições</p>
            <h2 className="mtr-titulo-secao mtr-titulo-secao--claro">
              Próximo ciclo
            </h2>
            <p className="mtr-banner__texto">
              As inscrições abrem em datas específicas do ano. Cadastre-se para
              ser avisado quando o próximo ciclo começar.
            </p>
            <p className="mtr-banner__chip">
              Pré-requisito: filiação ao PMI-DF
            </p>
            <a href={LINK_INSCRICAO} className="mtr-botao mtr-botao--escuro">
              Inscrever-me agora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}