import { Container } from "@/components/ui/Container";
import { QUEM_PODE_PARTICIPAR } from "@/content/student-club";

export function QuemPodeParticipar() {
  return (
    <section className="bg-[linear-gradient(110deg,#012029_0%,#00799E_100%)] py-16 text-white lg:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#1AC7FF]">
              Quem pode participar
            </p>

            <h2 className="mt-4 text-[30px] font-extrabold leading-tight lg:text-[42px]">
              Aberto a estudantes de qualquer curso
            </h2>

            <p className="mt-5 text-[16px] leading-relaxed text-white/80 lg:text-[18px]">
              Você não precisa ser da área de gestão. Basta estar matriculado em uma graduação ou
              pós-graduação e ter vontade de aprender a entregar projetos.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {QUEM_PODE_PARTICIPAR.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-[12px] bg-white/10 px-6 py-4 text-[15px] font-semibold text-white shadow-[0_2px_10px_rgba(0,0,0,0.08)]"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#05BFE0]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}