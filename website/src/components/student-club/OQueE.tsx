import { Container } from "@/components/ui/Container";
import { STUDENT_STATS } from "@/content/student-club";

export function OQueE() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.2fr]">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#FF610F]">
              O que é o Student Club
            </p>

            <h2 className="mt-4 text-[30px] font-extrabold leading-tight text-[#200F3B] lg:text-[42px]">
              Onde os gerentes de projeto se formam
            </h2>
          </div>

          <div>
            <p className="text-[16px] leading-relaxed text-[#5C546E] lg:text-[18px]">
              O Student Club do PMI-DF é um dos poucos clubes estudantis de gerenciamento de
              projetos do PMI no Brasil. Fundado em 2023, é um ambiente exclusivo para estudantes
              que querem desenvolver habilidades de gestão de projetos antes mesmo de entrar no
              mercado.
            </p>

            <p className="mt-5 text-[16px] leading-relaxed text-[#5C546E] lg:text-[18px]">
              Aqui você participa de encontros, mentorias, visitas técnicas e projetos reais
              conduzidos por voluntários do capítulo — com acesso à rede global do PMI e a descontos
              exclusivos em filiação, eventos e certificações.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {STUDENT_STATS.map((item) => (
                <div key={item.numero}>
                  <p className="text-[30px] font-extrabold text-[#4F17A8]">{item.numero}</p>
                  <p className="mt-1 text-[13px] font-medium text-[#5C546E]">{item.legenda}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}