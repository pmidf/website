import { Botao } from "@/components/ui/Botao";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TituloSecao } from "@/components/ui/TituloSecao";
import { CONVITES } from "@/content/eventos";

/** Convites para palestrar ou patrocinar — dois cards simétricos. */
export function FacaParte() {
  return (
    <section className="bg-[#F8F5F0] py-16 lg:py-[88px]">
      <Container gutter="amplo">
        <div className="flex flex-col items-center gap-[14px] text-center">
          <Eyebrow>Participe</Eyebrow>
          <TituloSecao className="font-[family-name:var(--font-titulo)] font-extrabold leading-[1.18] text-[#200F3B]">
            Faça parte da programação
          </TituloSecao>
        </div>

        <div className="mt-12 grid gap-[27px] md:grid-cols-2">
          {CONVITES.map((convite) => (
            <article
              key={convite.titulo}
              className="flex flex-col items-start gap-[18px] rounded-[20px] bg-white p-8 shadow-[0_3px_12px_rgba(32,15,59,0.1)] lg:p-9"
            >
              <h3 className="text-[22px] font-semibold leading-[1.3] text-[#200F3B] lg:text-[24px]">
                {convite.titulo}
              </h3>
              <p className="flex-1 text-[16px] leading-[1.58] text-[#5C546E]">
                {convite.descricao}
              </p>
              <Botao href={convite.ctaHref} variante={convite.ctaVariante}>
                {convite.ctaLabel}
              </Botao>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
