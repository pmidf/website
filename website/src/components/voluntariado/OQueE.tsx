import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { TituloSecao } from "@/components/ui/TituloSecao";
import { assets } from "@/content/assets";

/**
 * Apresentação do programa, com a foto dos voluntários ao lado.
 *
 * A foto entrou no lugar de uma estrela decorativa: a seção fala de pessoas,
 * e mostrá-las diz mais que uma forma geométrica. Diferente da estrela, ela
 * aparece também no mobile — deixou de ser ornamento e passou a ser conteúdo,
 * então some só o `aria-hidden`, não a imagem.
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

        {/* Sem `object-cover` nem largura máxima: a foto é deitada e ocupa a
            coluna inteira, mostrada por completo. `h-auto` com as medidas
            intrínsecas preserva a proporção e reserva a altura antes de a
            imagem carregar. */}
        <Image
          src={assets.voluntariado.voluntarios}
          alt="Voluntários do PMI-DF reunidos no palco do PMI-DF Summit 2026"
          width={1400}
          height={933}
          sizes="(max-width: 1024px) 100vw, 680px"
          className="h-auto w-full rounded-[24px] shadow-[0_4px_16px_rgba(32,15,59,0.18)]"
        />
      </Container>
    </section>
  );
}
