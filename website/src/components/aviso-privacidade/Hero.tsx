import { Container } from "@/components/ui/Container";
import { HERO } from "@/content/aviso-privacidade";

/**
 * Dobra inicial. Roxo sólido em vez do gradiente das demais páginas: é um
 * documento jurídico, não uma peça de campanha — a sobriedade aqui é o ponto.
 */
export function Hero() {
  return (
    <section className="bg-[#1F0942] py-14 lg:py-20">
      <Container>
        <h1 className="text-[30px] font-extrabold leading-tight text-[#F8F8F8] md:text-[36px] lg:text-[40px]">
          {HERO.titulo}
        </h1>
        <p className="mt-4 max-w-[767px] text-[18px] leading-relaxed text-[#F8F8F8]/90 lg:text-[22px]">
          {HERO.subtitulo}
        </p>
      </Container>
    </section>
  );
}
