import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import type { CSSProperties } from "react";

import {
  CRONOGRAMA,
  DATAS_CHAVE,
  EDITAL,
  EMAIL_PROGRAMA,
  ETAPAS_PROGRAMA,
  FECHAMENTO,
  HERO,
  LINK_EDITAL,
  PERFIS,
  SELECIONADOS,
} from "@/content/mentoring";
import "@/styles/mentoring.css";

/**
 * Página Mentoring — 14º Ciclo.
 *
 * Estrutura semântica apenas: as medidas vivem em `src/styles/mentoring.css`
 * e todo o texto, datas e links em `src/content/mentoring.ts`. Virar o ciclo é
 * editar o conteúdo; este arquivo não conhece nenhuma data.
 *
 * A ordem das seções segue a pergunta de quem chega: o que é → quando →
 * o que diz o edital → posso participar → quando acontece cada coisa →
 * como funciona → quem foi selecionado → com quem falo.
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
  title: "Programa de Mentoring",
  description:
    "14º Ciclo do Programa de Mentoring do PMI-DF: inscrições, requisitos para mentores e mentorados, cronograma completo e edital.",
  alternates: { canonical: "/mentoring" },
};

/** Cores das barrinhas dos cards de data, na ordem da lista. */
const CORES_DATAS = ["var(--laranja)", "var(--roxo-primario)", "var(--ciano)"];

export default function MentoringPage() {
  return (
    <div className={`${archivo.variable} ${inter.variable} mtr-pagina`}>
      {/* === Seção 1 — Hero ============================================== */}
      <section className="mtr-hero">
        <p className="mtr-hero__ciclo">{HERO.ciclo}</p>
        <h1 className="mtr-hero__titulo">{HERO.titulo}</h1>
        <p className="mtr-hero__subtitulo">{HERO.objetivo}</p>
        <a
          href={LINK_EDITAL}
          target="_blank"
          rel="noopener noreferrer"
          className="mtr-botao mtr-botao--claro"
        >
          <span className="mtr-botao__gradiente">{HERO.ctaLabel}</span>
        </a>
      </section>

      {/* === Seção 2 — Datas do ciclo ==================================== */}
      <section className="mtr-datas">
        <div className="mtr-container">
          <header className="mtr-cabecalho">
            <p className="mtr-rotulo">Datas do ciclo</p>
            <h2 className="mtr-titulo-secao">Quando acontece</h2>
          </header>

          <div className="mtr-datas__cards">
            {DATAS_CHAVE.map((data, indice) => (
              <article key={data.rotulo} className="mtr-data">
                <span
                  className="mtr-data__barra"
                  aria-hidden="true"
                  style={
                    {
                      "--cor-item": CORES_DATAS[indice % CORES_DATAS.length],
                    } as CSSProperties
                  }
                />
                <h3 className="mtr-data__rotulo">{data.rotulo}</h3>
                {data.href ? (
                  <a href={data.href} className="mtr-data__valor">
                    {data.valor}
                  </a>
                ) : (
                  <p className="mtr-data__valor">{data.valor}</p>
                )}
                <p className="mtr-data__detalhe">{data.detalhe}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === Seção 3 — Edital de abertura ================================ */}
      <section className="mtr-edital">
        <div className="mtr-container">
          <div className="mtr-edital__card">
            <header className="mtr-cabecalho">
              <p className="mtr-rotulo">{EDITAL.rotulo}</p>
              <h2 className="mtr-titulo-secao">{EDITAL.titulo}</h2>
            </header>
            <p className="mtr-edital__texto">{EDITAL.texto}</p>
            <a
              href={LINK_EDITAL}
              target="_blank"
              rel="noopener noreferrer"
              className="mtr-botao mtr-botao--contorno"
            >
              Acesse o edital
            </a>
          </div>
        </div>
      </section>

      {/* === Seção 4 — Quem pode participar ============================== */}
      <section className="mtr-perfis">
        <div className="mtr-container mtr-secao__conteudo">
          <header className="mtr-cabecalho">
            <p className="mtr-rotulo">Quem pode participar</p>
            <h2 className="mtr-titulo-secao">Mentores e mentorados</h2>
            <p className="mtr-cabecalho__apoio">
              As inscrições acontecem por canais diferentes: mentores pelo VEP, o
              portal de voluntariado do PMI Global, e mentorados por formulário.
            </p>
          </header>

          <div className="mtr-perfis__cards">
            {PERFIS.map((perfil) => (
              <article
                key={perfil.perfil}
                className={`mtr-perfil mtr-perfil--${perfil.perfil}`}
              >
                <h3 className="mtr-perfil__titulo">{perfil.titulo}</h3>
                <p className="mtr-perfil__descricao">{perfil.descricao}</p>
                <div className="mtr-perfil__divisor" aria-hidden="true" />
                <p className="mtr-perfil__rotulo-lista">Requisitos</p>
                <ul className="mtr-lista">
                  {perfil.requisitos.map((requisito) => (
                    <li key={requisito}>{requisito}</li>
                  ))}
                </ul>
                <a
                  href={perfil.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mtr-botao mtr-botao--escuro"
                >
                  {perfil.ctaLabel}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === Seção 5 — Cronograma ======================================== */}
      <section className="mtr-cronograma">
        <div className="mtr-container mtr-secao__conteudo">
          <header className="mtr-cabecalho">
            <p className="mtr-rotulo">Cronograma</p>
            <h2 className="mtr-titulo-secao">Fases do 14º Ciclo</h2>
          </header>

          {/* Tabela de verdade: o dado é fase × data, e `scope` é o que faz o
              leitor de tela anunciar o cabeçalho certo em cada célula. */}
          <div className="mtr-tabela-wrap">
            <table className="mtr-tabela">
              <caption>Cronograma do 14º Ciclo do Programa de Mentoring</caption>
              <thead>
                <tr>
                  <th scope="col">Fase</th>
                  <th scope="col">Datas</th>
                </tr>
              </thead>
              <tbody>
                {CRONOGRAMA.map((linha) => (
                  <tr key={linha.fase}>
                    <th scope="row">{linha.fase}</th>
                    <td>{linha.data}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mtr-cronograma__acao">
            <a
              href={LINK_EDITAL}
              target="_blank"
              rel="noopener noreferrer"
              className="mtr-botao mtr-botao--contorno"
            >
              Acesse o edital
            </a>
          </div>
        </div>
      </section>

      {/* === Seção 6 — Etapas do programa ================================ */}
      <section className="mtr-etapas">
        <div className="mtr-container mtr-secao__conteudo">
          <header className="mtr-cabecalho mtr-cabecalho--centro">
            <p className="mtr-rotulo mtr-rotulo--ciano">Como funciona</p>
            <h2 className="mtr-titulo-secao mtr-titulo-secao--claro">
              Etapas do programa
            </h2>
          </header>

          <div className="mtr-etapas__cards">
            {ETAPAS_PROGRAMA.map((etapa, indice) => (
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

      {/* === Seção 7 — Selecionados ====================================== */}
      <section className="mtr-selecionados">
        <div className="mtr-container mtr-secao__conteudo">
          <header className="mtr-cabecalho">
            <p className="mtr-rotulo">{SELECIONADOS.rotulo}</p>
            <h2 className="mtr-titulo-secao">{SELECIONADOS.titulo}</h2>
            <p className="mtr-cabecalho__apoio">{SELECIONADOS.descricao}</p>
          </header>

          <div className="mtr-selecionados__cards">
            {SELECIONADOS.grupos.map((grupo) => (
              <article key={grupo.titulo} className="mtr-selecionado">
                <h3 className="mtr-selecionado__titulo">{grupo.titulo}</h3>
                <p className="mtr-selecionado__status">{grupo.status}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === Seção 8 — Fechamento ======================================== */}
      <section className="mtr-fechamento">
        <div className="mtr-container">
          <div className="mtr-banner">
            <p className="mtr-rotulo mtr-rotulo--claro">Dúvidas</p>
            <h2 className="mtr-titulo-secao mtr-titulo-secao--claro">
              {FECHAMENTO.titulo}
            </h2>
            <p className="mtr-banner__texto">
              {FECHAMENTO.descricao} Fale com a coordenação pelo e-mail{" "}
              <a href={`mailto:${EMAIL_PROGRAMA}`} className="mtr-banner__email">
                {EMAIL_PROGRAMA}
              </a>
              .
            </p>

            <div className="mtr-banner__acoes">
              <a
                href={LINK_EDITAL}
                target="_blank"
                rel="noopener noreferrer"
                className="mtr-botao mtr-botao--branco"
              >
                {FECHAMENTO.ctaLabel}
              </a>
              <a
                href={`mailto:${EMAIL_PROGRAMA}`}
                className="mtr-botao mtr-botao--branco"
              >
                Falar com a coordenação
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
