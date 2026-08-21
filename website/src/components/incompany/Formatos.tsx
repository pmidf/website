import { Container } from "@/components/ui/Container";
import { FORMATOS_INCOMPANY, NUMEROS_INCOMPANY } from "@/content/incompany";

export function Formatos() {
  return (
    <section className="bg-[#F8F5F0] py-16 lg:py-24">
      <Container>
        <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#FF610F]">
          Formatos
        </p>

        <h2 className="mt-4 text-[30px] font-extrabold leading-tight text-[#200F3B] lg:text-[42px]">
          Do jeito que couber na sua operação
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {FORMATOS_INCOMPANY.map((item) => (
            <article
              key={item.titulo}
              className="rounded-[14px] bg-white px-6 py-7 shadow-[0_2px_12px_rgba(32,15,59,0.06)]"
            >
              <span className="block h-1 w-10 rounded-full bg-[#FF610F]" />
              <h3 className="mt-5 text-[19px] font-bold text-[#200F3B]">{item.titulo}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#5C546E]">{item.descricao}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 border-t-2 border-[#4F17A8] pt-8 md:grid-cols-4">
          {NUMEROS_INCOMPANY.map((item) => (
            <div key={item.numero}>
              <p className="text-[28px] font-extrabold text-[#4F17A8]">{item.numero}</p>
              <p className="mt-2 text-[14px] text-[#5C546E]">{item.legenda}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}