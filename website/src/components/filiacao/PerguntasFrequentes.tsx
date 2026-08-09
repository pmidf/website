"use client";

import { useState } from "react";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TituloSecao } from "@/components/ui/TituloSecao";
import { FAQ } from "@/content/filiacao";

/**
 * Acordeão de dúvidas — a única parte interativa da página, e por isso o único
 * Client Component.
 *
 * Um item aberto por vez, com o primeiro aberto na carga: a resposta visível
 * sinaliza que os demais também abrem, sem precisar de instrução.
 *
 * O `<button>` fica dentro do `<h3>` para que a lista de cabeçalhos do leitor
 * de tela continue navegável; `aria-expanded` e `aria-controls` ligam o
 * gatilho ao painel.
 */
export function PerguntasFrequentes() {
  const [abertoIndex, setAbertoIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#F8F5F0] pb-16 lg:pb-[88px]">
      <Container gutter="amplo">
        <div className="flex flex-col items-center gap-[14px] text-center">
          <Eyebrow>Dúvidas frequentes</Eyebrow>
          <TituloSecao className="font-display font-extrabold leading-[1.18] text-[#200F3B]">
            Perguntas frequentes
          </TituloSecao>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          {FAQ.map((item, indice) => {
            const aberto = abertoIndex === indice;
            const idPainel = `faq-painel-${indice}`;

            return (
              <div
                key={item.pergunta}
                className="rounded-[12px] bg-white px-6 py-6 shadow-[0_2px_10px_rgba(32,15,59,0.08)] lg:px-8"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setAbertoIndex(aberto ? null : indice)}
                    aria-expanded={aberto}
                    aria-controls={idPainel}
                    className="flex w-full items-center gap-6 text-left"
                  >
                    <span className="flex-1 text-[18px] font-semibold leading-[1.35] text-[#200F3B] lg:text-[20px]">
                      {item.pergunta}
                    </span>
                    <span
                      aria-hidden
                      className="text-[28px] font-medium leading-none text-[#4F17A8]"
                    >
                      {aberto ? "−" : "+"}
                    </span>
                  </button>
                </h3>

                {aberto && (
                  <div id={idPainel}>
                    <div className="mt-4 h-px w-full bg-[#200F3B]/10" />
                    <p className="mt-4 text-[16px] leading-[1.58] text-[#5C546E] lg:text-[17px]">
                      {item.resposta}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
