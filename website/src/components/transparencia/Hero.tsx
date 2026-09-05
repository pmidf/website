import { Container } from "@/components/ui/Container";

/**
 * Dobra inicial, na mesma forma das demais páginas.
 *
 * O parágrafo "Início / Sobre / Transparência" que abria a seção era uma
 * trilha de navegação escrita à mão. Desde que o layout do route group passou
 * a renderizar a trilha de verdade (WCAG 2.4.8), a página mostrava as duas —
 * uma clicável, outra não.
 */
export function Hero() {
  return (
    <section className="bg-[linear-gradient(90deg,#1F0942_13%,#FF610F_50%,#1AC7FF_89%)] py-14 text-center lg:py-20">
      <Container>
        <h1 className="text-[30px] font-extrabold leading-tight text-[#F8F8F8] md:text-[36px] lg:text-[40px]">
          Transparência
        </h1>

        <p className="mx-auto mt-4 max-w-[767px] text-[18px] leading-relaxed text-[#F8F8F8] lg:text-[24px]">
          Documentos institucionais, fiscais e regulatórios do PMI-DF, disponíveis para consulta
          pública.
        </p>
      </Container>
    </section>
  );
}
