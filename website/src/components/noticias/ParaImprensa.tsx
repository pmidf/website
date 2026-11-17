import { Botao } from "@/components/ui/Botao";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { NOTICIAS_TEXTO } from "@/content/noticias";

/**
 * Faixa final, no mesmo formato do CTA de fechamento do DGPIS.
 *
 * Serve à curadoria tanto quanto à imprensa: quem achar uma matéria sobre o
 * capítulo que ainda não está na lista tem para onde mandar o link.
 */
export function ParaImprensa() {
  const { imprensa } = NOTICIAS_TEXTO;

  return (
    <section className="bg-[#1F0942] py-16 text-center lg:py-20">
      <Container gutter="amplo" className="flex flex-col items-center">
        <Eyebrow className="text-[#05BFE0]">{imprensa.eyebrow}</Eyebrow>
        <h2 className="mt-4 max-w-[760px] font-[family-name:var(--font-titulo)] text-[28px] font-extrabold leading-[1.18] text-white lg:text-[38px]">
          {imprensa.titulo}
        </h2>
        <p className="mt-4 max-w-[600px] text-[16px] leading-relaxed text-white/75 lg:text-[18px]">
          {imprensa.descricao}
        </p>
        <Botao href={imprensa.href} variante="branco" className="mt-8">
          {imprensa.cta}
        </Botao>
      </Container>
    </section>
  );
}
