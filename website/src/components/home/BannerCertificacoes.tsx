import Image from "next/image";

import { Botao } from "@/components/ui/Botao";
import { Container } from "@/components/ui/Container";
import { assets } from "@/content/assets";

/**
 * Banner marrom das certificações PMI.
 *
 * A margem negativa e o `rounded-t` fazem a seção subir sobre o Hero,
 * criando a "aba" arredondada do topo — por isso o `z-10`.
 */
export function BannerCertificacoes() {
  return (
    <section className="relative z-10 -mt-12 rounded-t-[32px] bg-[#F8F5F0] pb-14 pt-14 lg:-mt-16 lg:rounded-t-[50px] lg:pb-16 lg:pt-16">
      <Container>
        <div className="relative overflow-hidden rounded-[6px] bg-[#5B2205] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          {/* Losangos — ornamentais e só a partir de lg, onde sobra espaço à
              direita do texto (que trava em 640px). Abaixo disso invadiriam a
              coluna de leitura. `object-contain` porque a arte é vertical: com
              `cover` ela seria ampliada e cortada nas pontas. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 hidden w-[300px] lg:block xl:w-[380px]"
          >
            <Image
              src={assets.formas.losangosLaranja}
              alt=""
              fill
              sizes="(max-width: 1280px) 300px, 380px"
              className="object-contain object-right"
            />
          </div>

          <div className="relative max-w-[640px] px-6 py-10 md:px-10 md:py-12 lg:px-[108px] lg:py-[100px]">
            <h2 className="text-[28px] font-bold leading-tight text-white md:text-[34px] lg:text-[40px]">
              Nossas certificações
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-white md:text-[20px] lg:text-[24px]">
              As certificações do PMI são reconhecidas no mundo todo. Elevam sua carreira, ampliam
              oportunidades e atestam domínio técnico. Conheça cada credencial no portal oficial.
            </p>
            <p className="mt-6 text-[20px] font-bold text-white md:text-[26px] lg:text-[32px]">
              PMP® CAPM® PMIPMOCP® PMIACP®
            </p>
            <Botao href="/certificacao" className="mt-7">
              Saiba mais
            </Botao>
          </div>
        </div>
      </Container>
    </section>
  );
}
