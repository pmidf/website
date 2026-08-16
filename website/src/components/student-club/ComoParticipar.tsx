import { Container } from "@/components/ui/Container";
import { PASSOS_STUDENT } from "@/content/student-club";

export function ComoParticipar() {
  return (
    <section id="participar" className="bg-[#F8F5F0] py-16 lg:py-24">
      <Container>
        <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#FF610F]">
          Da inscrição ao primeiro projeto
        </p>

        <h2 className="mt-4 text-[30px] font-extrabold leading-tight text-[#200F3B] lg:text-[42px]">
          Como participar
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {PASSOS_STUDENT.map((item, index) => (
            <article key={item.titulo}>
              <span className="block h-[2px] w-full bg-[#FF610F]" />

              <p className="mt-5 text-[32px] font-extrabold text-[#4F17A8]">
                {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="mt-3 text-[18px] font-bold text-[#200F3B]">{item.titulo}</h3>

              <p className="mt-3 text-[15px] leading-relaxed text-[#5C546E]">{item.descricao}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}