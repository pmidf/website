import { Container } from "@/components/ui/Container";

export function Governanca() {
  return (
    <section className="relative z-[2] -mt-[1px] rounded-t-[48px] bg-white py-16 lg:rounded-t-[64px] lg:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#FF610F]">
              Governança
            </p>

            <h2 className="mt-4 text-[32px] font-extrabold leading-tight text-[#200F3B] lg:text-[44px]">
              Portal da Governança e Transparência
            </h2>
          </div>

          <div>
            <p className="text-[16px] leading-relaxed text-[#5C546E] lg:text-[18px]">
              Este portal é o canal de transparência entre o PMI Distrito Federal e seus
              stakeholders — filiados, gestores, órgãos de compliance e a comunidade em geral.
              Aqui ficam os artefatos de gestão e governança do capítulo.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}