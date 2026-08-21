import { Container } from "@/components/ui/Container";
import { ETAPAS_INCOMPANY } from "@/content/incompany";

export function ComoFunciona() {
  return (
    <section className="bg-[#F8F5F0] py-12 lg:py-18">
      <Container>
        <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#FF610F]">
          Do primeiro contato à entrega
        </p>

        <h2 className="mt-4 text-[30px] font-extrabold leading-tight text-[#200F3B] lg:text-[42px]">
          Como funciona
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {ETAPAS_INCOMPANY.map((item, index) => (
            <article key={item.titulo}>
              <span className="block h-[2px] w-full bg-[#4F17A8]" />

              <p className="mt-5 text-[32px] font-extrabold text-[#FF610F]">
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