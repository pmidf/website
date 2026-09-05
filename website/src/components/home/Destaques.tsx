"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from "react-icons/fa6";

import { Botao } from "@/components/ui/Botao";
import { Container } from "@/components/ui/Container";
import { BANNERS } from "@/content/home";
import type { BannerDestaque } from "@/types";

/**
 * Carrossel de destaques da home — certificações e PMI-DF Summit.
 *
 * A margem negativa e o `rounded-t` fazem a seção subir sobre o Hero, criando
 * a "aba" arredondada do topo — por isso o `z-10`.
 *
 * ## Como os slides são escondidos
 *
 * Os dois ficam sempre no DOM, empilhados na mesma célula de um grid: assim a
 * seção tem a altura do slide mais alto e não pula ao trocar. O inativo sai
 * com `invisible`, e não com `opacity-0`, porque `visibility: hidden` também
 * tira os descendentes da ordem de tabulação — só `opacity-0` deixaria o link
 * do slide escondido receber foco do teclado, mandando a pessoa para um lugar
 * que ela não está vendo.
 *
 * ## Rotação automática
 *
 * Conteúdo que se move sozinho precisa de um jeito de parar (WCAG 2.2.2), daí
 * o botão de pausa. A rotação também para sozinha enquanto o ponteiro está
 * sobre o carrossel ou algo dentro dele tem foco — senão o slide troca no meio
 * da leitura ou logo antes do clique. E não começa se o sistema pede menos
 * movimento.
 *
 * `aria-live` fica em "off" enquanto gira: anunciar uma troca que a pessoa não
 * pediu interrompe a leitura de tela a cada sete segundos. Com a rotação
 * parada, a navegação passa a ser deliberada e o anúncio faz sentido.
 */

/** Tempo de cada slide. Longo o suficiente para ler o parágrafo inteiro. */
const INTERVALO_MS = 7000;

function Slide({ banner, ativo }: { banner: BannerDestaque; ativo: boolean }) {
  const indice = BANNERS.indexOf(banner);

  return (
    <div
      role="group"
      aria-roledescription="slide"
      aria-label={`${indice + 1} de ${BANNERS.length}: ${banner.titulo}`}
      aria-hidden={!ativo}
      className={`col-start-1 row-start-1 transition-opacity duration-500 ${
        ativo ? "opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        className={`relative h-full overflow-hidden rounded-[6px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] ${banner.fundo}`}
      >
        {/* Arte ornamental, só a partir de lg — onde sobra espaço à direita do
            texto, que trava em 640px. Abaixo disso invadiria a coluna de
            leitura. `object-contain` porque as artes têm proporções próprias:
            com `cover` seriam ampliadas e cortadas nas pontas. */}
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-y-0 right-0 hidden lg:block ${banner.deco.classe}`}
        >
          <Image
            src={banner.deco.src}
            alt=""
            fill
            sizes="(max-width: 1280px) 220px, 280px"
            className="object-contain object-right"
          />
        </div>

        {/* A coluna de texto é mais larga que os 640px do banner antigo (e o
            recuo lateral, menor): cada linha comporta mais palavras, então o
            mesmo parágrafo ocupa menos linhas — é o que encurta o cartão sem
            cortar conteúdo. O `py` grande do protótipo (100px de cada lado no
            desktop) era o outro motivo da altura. */}
        <div className="relative max-w-[600px] px-6 py-8 md:px-10 md:py-10 lg:max-w-[720px] lg:px-16 lg:py-12">
          <h2 className="text-[24px] font-bold leading-tight text-white md:text-[28px] lg:text-[34px]">
            {banner.titulo}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-white md:text-[16px] lg:text-[18px]">
            {banner.descricao}
          </p>
          <p className="mt-4 text-[17px] font-bold text-white md:text-[19px] lg:text-[22px]">
            {banner.destaque}
          </p>
          <Botao
            href={banner.ctaHref}
            external={banner.ctaExterno}
            variante={banner.ctaVariante}
            className="mt-5"
          >
            {banner.ctaLabel}
          </Botao>
        </div>
      </div>
    </div>
  );
}

export function Destaques() {
  const [indice, setIndice] = useState(0);
  const [pausado, setPausado] = useState(false);
  const [interagindo, setInteragindo] = useState(false);
  const [movimentoReduzido, setMovimentoReduzido] = useState(false);

  const girando = !pausado && !interagindo && !movimentoReduzido;

  useEffect(() => {
    const consulta = window.matchMedia("(prefers-reduced-motion: reduce)");
    const aplicar = () => setMovimentoReduzido(consulta.matches);
    aplicar();
    consulta.addEventListener("change", aplicar);
    return () => consulta.removeEventListener("change", aplicar);
  }, []);

  useEffect(() => {
    if (!girando) return;
    const relogio = setInterval(
      () => setIndice((atual) => (atual + 1) % BANNERS.length),
      INTERVALO_MS,
    );
    return () => clearInterval(relogio);
  }, [girando]);

  const irPara = (proximo: number) =>
    setIndice((proximo + BANNERS.length) % BANNERS.length);

  const botaoControle =
    "flex h-9 w-9 items-center justify-center rounded-full border border-[#200F3B]/15 bg-white text-[#200F3B] transition hover:border-[#FF610F] hover:text-[#FF610F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#371075]";

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Destaques do PMI-DF"
      onMouseEnter={() => setInteragindo(true)}
      onMouseLeave={() => setInteragindo(false)}
      onFocus={() => setInteragindo(true)}
      onBlur={() => setInteragindo(false)}
      className="relative z-10 -mt-12 rounded-t-[32px] bg-[#F8F5F0] pb-10 pt-12 lg:-mt-16 lg:rounded-t-[50px] lg:pb-12 lg:pt-14"
    >
      <Container>
        <div className="grid" aria-live={girando ? "off" : "polite"}>
          {BANNERS.map((banner, i) => (
            <Slide key={banner.id} banner={banner} ativo={i === indice} />
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between gap-4">
          <ol className="flex items-center gap-2">
            {BANNERS.map((banner, i) => {
              const ativo = i === indice;
              return (
                <li key={banner.id}>
                  <button
                    type="button"
                    onClick={() => setIndice(i)}
                    aria-label={`Ver ${banner.titulo}`}
                    aria-current={ativo ? "true" : undefined}
                    className={`block h-2.5 rounded-full transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#371075] ${
                      ativo ? "w-8 bg-[#FF610F]" : "w-2.5 bg-[#200F3B]/25 hover:bg-[#200F3B]/45"
                    }`}
                  />
                </li>
              );
            })}
          </ol>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => irPara(indice - 1)}
              aria-label="Destaque anterior"
              className={botaoControle}
            >
              <FaChevronLeft aria-hidden className="h-[13px] w-[13px]" />
            </button>

            {/* Exigido pelo WCAG 2.2.2: conteúdo que se move sozinho por mais
                de cinco segundos precisa de um controle para parar. */}
            <button
              type="button"
              onClick={() => setPausado((v) => !v)}
              aria-label={pausado ? "Retomar rotação dos destaques" : "Pausar rotação dos destaques"}
              className={botaoControle}
            >
              {pausado ? (
                <FaPlay aria-hidden className="h-[13px] w-[13px]" />
              ) : (
                <FaPause aria-hidden className="h-[13px] w-[13px]" />
              )}
            </button>

            <button
              type="button"
              onClick={() => irPara(indice + 1)}
              aria-label="Próximo destaque"
              className={botaoControle}
            >
              <FaChevronRight aria-hidden className="h-[13px] w-[13px]" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
