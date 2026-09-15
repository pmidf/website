import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CARGOS, CONTEXTO } from "@/content/eleicoes";

/** O que está em jogo e quais cargos são disputados. */
export function Contexto() {
  return (
    <section className="bg-[#F8F5F0] py-16 lg:py-20">
      <Container>
        <Eyebrow>{CONTEXTO.eyebrow}</Eyebrow>

        <h2 className="mt-3 max-w-[820px] text-[30px] font-extrabold leading-tight text-[#200F3B] lg:text-[42px]">
          {CONTEXTO.titulo}
        </h2>

        {CONTEXTO.paragrafos.map((paragrafo) => (
          <p
            key={paragrafo.slice(0, 40)}
            className="mt-5 max-w-[820px] text-[16px] leading-relaxed text-[#5C546E] lg:text-[18px]"
          >
            {paragrafo}
          </p>
        ))}

        <h3 className="mt-12 text-[22px] font-bold text-[#200F3B] lg:text-[26px]">
          Cargos em disputa
        </h3>

        <ul className="mt-6 grid gap-6 md:grid-cols-3">
          {CARGOS.map((cargo) => (
            <li
              key={cargo.titulo}
              className="flex flex-col rounded-[16px] bg-white p-7 shadow-[0_2px_10px_rgba(32,15,59,0.08)]"
            >
              <span aria-hidden className={`block h-1 w-12 rounded-full ${cargo.cor}`} />
              <h4 className="mt-5 text-[19px] font-bold leading-tight text-[#200F3B]">
                {cargo.titulo}
              </h4>
              <p className="mt-3 text-[15px] leading-relaxed text-[#5C546E]">
                {cargo.descricao}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
