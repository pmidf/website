import { Botao } from "@/components/ui/Botao";
import { Container } from "@/components/ui/Container";
import { CTA_FINAL } from "@/content/voluntarios";
import { URL_VEP } from "@/content/voluntariado";

/**
 * Fechamento com os dois destinos possíveis: as vagas (externas, no VEP) e a
 * página que explica o programa. `URL_VEP` vem de `content/voluntariado.ts`,
 * declarada uma vez para o site inteiro.
 */
export function CtaFinal() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <Container>
        <div className="rounded-[32px] bg-[linear-gradient(110deg,#210040_0%,#4F17A8_52%,#012F44_100%)] px-8 py-12 text-center text-white lg:rounded-[56px] lg:px-16 lg:py-16">
          <h2 className="text-[28px] font-extrabold leading-tight lg:text-[40px]">
            {CTA_FINAL.titulo}
          </h2>
          <p className="mx-auto mt-4 max-w-[640px] text-[16px] leading-relaxed text-white/85 lg:text-[18px]">
            {CTA_FINAL.descricao}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Botao href={URL_VEP} external variante="branco">
              {CTA_FINAL.ctaLabel}
            </Botao>
            <Botao href={CTA_FINAL.ctaSecundarioHref} variante="contorno-claro">
              {CTA_FINAL.ctaSecundarioLabel}
            </Botao>
          </div>
        </div>
      </Container>
    </section>
  );
}
