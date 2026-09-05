import { Container } from "@/components/ui/Container";
import { HERO } from "@/content/voluntarios";

/** Dobra inicial, no mesmo gradiente do Hero de Quem Somos — de onde se chega aqui. */
export function Hero() {
  return (
    <section className="bg-[linear-gradient(90deg,#1F0942_13%,#FF610F_50%,#1AC7FF_89%)] py-14 text-center lg:py-20">
      <Container>
        <h1 className="text-[30px] font-extrabold leading-tight text-[#F8F8F8] md:text-[36px] lg:text-[40px]">
          {HERO.titulo}
        </h1>
        <p className="mx-auto mt-4 max-w-[767px] text-[18px] leading-relaxed text-[#F8F8F8] lg:text-[24px]">
          {HERO.subtitulo}
        </p>
      </Container>
    </section>
  );
}
