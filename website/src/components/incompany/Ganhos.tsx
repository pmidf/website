import { Container } from "@/components/ui/Container";
import { GANHOS_INCOMPANY } from "@/content/incompany";

export function Ganhos() {
  return (
    <section className="bg-[#F8F5F0] py-16 lg:py-20">
      <Container>
        <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#FF610F]">
          Por que o PMI-DF
        </p>

        <h2 className="mt-4 text-[30px] font-extrabold leading-tight text-[#200F3B] lg:text-[42px]">
          O que sua empresa ganha
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {GANHOS_INCOMPANY.map((item) => (
            <article
              key={item.titulo}
              className={`rounded-[16px] px-6 py-7 text-white shadow-[0_6px_16px_rgba(32,15,59,0.16)] ${item.cor}`}
            >
              <span className={`block h-12 w-12 rounded-[12px] ${item.icone}`} />
              <h3 className="mt-6 text-[19px] font-bold">{item.titulo}</h3>
              <p className="mt-4 text-[14px] leading-relaxed text-white/85">{item.descricao}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}