import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { TituloSecao } from "@/components/ui/TituloSecao";
import { assets } from "@/content/assets";

/**
 * Apresentação do programa, com a estrela decorativa ao lado.
 *
 * A estrela some abaixo de `md`: em telas estreitas ela empurraria o texto
 * para fora da primeira dobra sem acrescentar informação.
 */
export function OQueE() {
  return (
    <section className="relative z-10 -mt-12 rounded-t-[32px] bg-[#F8F5F0] pb-14 pt-14 lg:-mt-16 lg:rounded-t-[50px] lg:pb-20 lg:pt-20">
      <Container
        gutter="amplo"
        className="grid items-center gap-10 lg:grid-cols-[minmax(0,400px)_1fr]"
      >
        <div>
          <TituloSecao className="max-w-[330px] font-display font-extrabold leading-[1.18] text-[#200F3B]">
            O que é ser voluntário no PMI-DF
          </TituloSecao>
          <p className="mt-8 max-w-[360px] text-[18px] leading-snug text-[#200F3B] lg:text-[24px]">
            Somos movidos por propósito
          </p>
          <p className="mt-2 max-w-[360px] text-[18px] leading-snug text-[#200F3B] lg:text-[24px]">
            O PMI-DF é construído por voluntários. Mais de 190 profissionais voluntários
            hoje, em comitês, diretorias e programas.
          </p>
        </div>

        {/* A arte é 517 × 501, não o quadrado que o protótipo cota. Fixar só a
            largura e deixar `h-auto` mantém a proporção real — travar as duas
            medidas em 544 esticaria a estrela em 3%. */}
        <Image
          src={assets.voluntariado.estrela}
          alt=""
          aria-hidden
          width={517}
          height={501}
          sizes="(max-width: 1024px) 392px, 561px"
          className="mx-auto hidden h-auto w-[392px] max-w-none md:block lg:w-[561px]"
        />
      </Container>
    </section>
  );
}
