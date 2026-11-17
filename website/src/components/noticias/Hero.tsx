import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { NOTICIAS_TEXTO } from "@/content/noticias";

/**
 * Dobra inicial de Notícias.
 *
 * Mesma família do hero do DGPIS (roxo profundo com círculos da identidade),
 * só que mais contida: aqui o texto é curto e os círculos ficam menores e
 * translúcidos para não disputar com ele. Roxo e laranja em diagonal, um em
 * cada canto, equilibram o título centralizado.
 *
 * O `pb` generoso reserva o espaço da "aba" creme que a seção seguinte sobe
 * por cima com margem negativa.
 */
export function Hero() {
  const { hero } = NOTICIAS_TEXTO;

  return (
    <section className="relative overflow-hidden bg-[#1F0942] pb-24 pt-12 text-center lg:pb-32 lg:pt-14">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#5B2B82] opacity-60 lg:-right-32 lg:-top-32 lg:h-[340px] lg:w-[340px]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-56 w-56 rounded-full bg-[#FF610F] opacity-60 lg:-bottom-44 lg:-left-28 lg:h-[340px] lg:w-[340px]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute left-[16%] top-[24%] hidden h-[56px] w-[56px] rounded-full bg-[#05BFE0] opacity-60 md:block"
      />

      <Container gutter="amplo" className="relative z-10 flex flex-col items-center">
        <Eyebrow className="text-[#05BFE0]">{hero.eyebrow}</Eyebrow>
        <h1 className="mt-4 font-[family-name:var(--font-titulo)] text-[30px] font-extrabold leading-tight text-[#F8F8F8] md:text-[36px] lg:text-[40px]">
          {hero.titulo}
        </h1>
        <p className="mx-auto mt-4 max-w-[767px] text-[18px] leading-relaxed text-[#F8F8F8]/90 lg:text-[24px]">
          {hero.subtitulo}
        </p>
      </Container>
    </section>
  );
}
