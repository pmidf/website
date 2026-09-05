import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { O_QUE_E } from "@/content/student-club";

/**
 * Apresentação do clube: título, texto e foto numa composição só.
 *
 * Antes eram três blocos empilhados — título à esquerda, texto à direita, foto
 * atravessada embaixo — com três números soltos no meio (ano de fundação,
 * voluntários do capítulo, clubes no Brasil) que interrompiam a leitura e
 * repetiam informação já dita no primeiro parágrafo.
 *
 * Agora texto e foto dividem a largura em duas colunas de peso parecido. A
 * ordem no DOM é texto → foto, que também é a ordem de leitura no mobile:
 * quem chega lê o que o clube é antes de ver quem o faz.
 */
export function OQueE() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#FF610F]">
              {O_QUE_E.eyebrow}
            </p>

            <h2 className="mt-4 text-[30px] font-extrabold leading-tight text-[#200F3B] lg:text-[42px]">
              {O_QUE_E.titulo}
            </h2>

            {O_QUE_E.paragrafos.map((paragrafo) => (
              <p
                key={paragrafo.slice(0, 40)}
                className="mt-5 text-[16px] leading-relaxed text-[#5C546E] lg:text-[18px]"
              >
                {paragrafo}
              </p>
            ))}
          </div>

          <Image
            src={O_QUE_E.foto.src}
            alt={O_QUE_E.foto.alt}
            width={O_QUE_E.foto.largura}
            height={O_QUE_E.foto.altura}
            sizes="(max-width: 1024px) 100vw, 560px"
            className="h-auto w-full rounded-[24px] shadow-[0_12px_30px_rgba(32,15,59,0.16)]"
          />
        </div>
      </Container>
    </section>
  );
}
