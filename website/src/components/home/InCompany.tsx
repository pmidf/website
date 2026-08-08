import Image from "next/image";

import { Botao } from "@/components/ui/Botao";
import { Container } from "@/components/ui/Container";
import { assets } from "@/content/assets";

/** Bloco "InCompany" — treinamentos fechados para empresas e órgãos. */
export function InCompany() {
  return (
    <section className="bg-[#F8F5F0] py-8 lg:py-10">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[220px] px-6 py-14 md:px-14 lg:px-[135px] lg:py-[130px]">
          <Image
            src={assets.incompanyGradient}
            alt=""
            aria-hidden
            fill
            sizes="(max-width: 1280px) 100vw, 1190px"
            className="-z-10 object-cover"
          />

          <h2 className="text-[28px] font-bold text-white md:text-[34px] lg:text-[40px]">
            InCompany
          </h2>
          <p className="mt-3 text-[18px] leading-snug text-white lg:text-[24px]">
            Treinamentos sob medida para sua empresa ou órgão.
          </p>

          <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:gap-10">
            <p className="text-[16px] leading-relaxed text-white lg:text-[22px]">
              Levamos conteúdo PMI direto ao seu time, com cases reais e instrutores qualificados.
              Formatos fechados, presenciais ou remotos.
            </p>
            <p className="text-[16px] leading-relaxed text-white lg:text-[22px]">
              Capacite líderes, equipes, padronize processos e acelere entregas. Fale com a gente
              para desenhar a trilha ideal.
            </p>
          </div>

          <div className="mt-8 flex lg:justify-center">
            <Botao href="/incompany">Saiba mais</Botao>
          </div>
        </div>
      </Container>
    </section>
  );
}
