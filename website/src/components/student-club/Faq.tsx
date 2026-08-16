import { Container } from "@/components/ui/Container";
import { FAQ_STUDENT } from "@/content/student-club";

export function Faq() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#FF610F]">
          Dúvidas frequentes
        </p>

        <h2 className="mt-4 text-[30px] font-extrabold leading-tight text-[#200F3B] lg:text-[42px]">
          Antes de se inscrever
        </h2>

        <div className="mt-10 flex flex-col gap-4">
          {FAQ_STUDENT.map((item) => (
            <details
              key={item.pergunta}
              className="group rounded-[12px] bg-[#F8F5F0] px-6 py-5 shadow-[0_2px_10px_rgba(32,15,59,0.04)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-bold text-[#200F3B]">
                {item.pergunta}
                <span className="text-[#4F17A8] group-open:hidden">+</span>
                <span className="hidden text-[#4F17A8] group-open:inline">−</span>
              </summary>

              <p className="mt-4 text-[15px] leading-relaxed text-[#5C546E]">{item.resposta}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}