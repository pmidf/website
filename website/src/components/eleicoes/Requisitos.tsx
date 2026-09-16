import { Container } from "@/components/ui/Container";
import { CabecalhoSecao } from "@/components/eleicoes/CabecalhoSecao";
import { REQUISITOS } from "@/content/eleicoes";

/** Requisitos por cargo, em duas colunas. */
export function Requisitos() {
  return (
    <section id="requisitos" className="bg-white py-16 lg:py-20">
      <Container>
        <CabecalhoSecao
          eyebrow={REQUISITOS.eyebrow}
          titulo={REQUISITOS.titulo}
          descricao={REQUISITOS.descricao}
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {REQUISITOS.grupos.map((grupo) => (
            <div
              key={grupo.titulo}
              className="rounded-[16px] border border-[#200F3B]/10 bg-[#F8F5F0] p-7"
            >
              <h3 className="text-[20px] font-bold text-[#200F3B]">{grupo.titulo}</h3>

              {"nota" in grupo && grupo.nota && (
                <p className="mt-2 text-[14px] italic text-[#5C546E]">{grupo.nota}</p>
              )}

              <ul className="mt-5 flex flex-col gap-3">
                {grupo.itens.map((item) => (
                  <li
                    key={item}
                    className="relative pl-7 text-[15px] leading-relaxed text-[#5C546E]"
                  >
                    {/* Losango, não bolinha: é a marca que a lista de
                        requisitos usava no material original. */}
                    <span
                      aria-hidden
                      className="absolute left-0 top-[0.5em] h-2 w-2 rotate-45 bg-[#1AC7FF]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
