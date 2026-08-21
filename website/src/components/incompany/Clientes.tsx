import { Container } from "@/components/ui/Container";

export function Clientes() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <Container>
        <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#FF610F]">
          Confiança
        </p>

        <h2 className="mt-4 text-[30px] font-extrabold leading-tight text-[#200F3B] lg:text-[42px]">
          Quem já treinou com a gente
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="flex h-20 items-center justify-center rounded-[10px] border border-dashed border-[#200F3B]/40 bg-[#F8F5F0] text-[12px] font-semibold uppercase tracking-[0.12em] text-[#5C546E]"
            >
              Logo de cliente
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}