import { Container } from "@/components/ui/Container";
import { MISSAO_VALORES } from "@/content/student-club";

export function MissaoValores() {
  return (
    <section className="bg-[#F8F5F0] py-16 lg:py-24">
      <Container>
        <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#FF610F]">
          Nosso norte
        </p>

        <h2 className="mt-4 text-[30px] font-extrabold leading-tight text-[#200F3B] lg:text-[42px]">
          Missão, visão e valores
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {MISSAO_VALORES.map((item) => (
            <article
              key={item.titulo}
              className={`rounded-[14px] px-7 py-8 text-white shadow-[0_4px_12px_rgba(32,15,59,0.16)] ${item.gradiente}`}
            >
              <h3 className="text-[20px] font-bold">{item.titulo}</h3>
              <p className="mt-5 text-[15px] leading-relaxed text-white/85">{item.descricao}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}