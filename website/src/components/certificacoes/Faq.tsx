import { Container } from "@/components/ui/Container";
import { FAQ_CERTIFICACOES } from "@/content/certificacoes";

export function Faq() {
  return (
    <section id="duvidas" className="bg-[#F8F5F0] py-16 lg:py-24">
      <Container>
        <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#FF610F]">
          Dúvidas frequentes
        </p>

        <h2 className="mt-4 text-[30px] font-extrabold leading-tight text-[#200F3B] lg:text-[42px]">
          Antes de se inscrever
        </h2>

        <div className="mt-10 flex flex-col gap-4">
          {FAQ_CERTIFICACOES.map((item, index) => (
            <details
              key={item.pergunta}
              open={index === 0}
              className="group rounded-[12px] bg-white px-6 py-5 shadow-[0_2px_12px_rgba(32,15,59,0.06)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-bold text-[#200F3B]">
                {item.pergunta}

                <span className="text-[20px] text-[#4F17A8] group-open:hidden">+</span>
                <span className="hidden text-[22px] text-[#4F17A8] group-open:inline">−</span>
              </summary>

              <p className="mt-5 border-t border-[#EEE7F7] pt-5 text-[15px] leading-relaxed text-[#5C546E]">
                {item.resposta}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}