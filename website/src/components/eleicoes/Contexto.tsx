import { Container } from "@/components/ui/Container";
import { CabecalhoSecao } from "@/components/eleicoes/CabecalhoSecao";
import { CARGOS, CONTEXTO } from "@/content/eleicoes";

/** O que está em jogo e quais cargos são disputados. */
export function Contexto() {
  return (
    <section className="bg-[#F8F5F0] py-16 lg:py-20">
      <Container>
        {/* Duas colunas no desktop: título à esquerda, texto à direita.
         *
         * Empilhados, o cabeçalho e os parágrafos formavam uma coluna de 820px
         * encostada à esquerda, com a grade de cargos ocupando os 1200px logo
         * abaixo — o olho lia a grade como a largura real da seção e o texto
         * parecia deslocado. Lado a lado, os dois blocos preenchem a mesma
         * faixa e a seção se equilibra.
         *
         * `items-start` porque as duas colunas têm alturas diferentes e devem
         * começar na mesma linha, não se centralizar uma pela outra. */}
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-14">
          <CabecalhoSecao eyebrow={CONTEXTO.eyebrow} titulo={CONTEXTO.titulo} />

          <div className="flex flex-col gap-4 lg:pt-9">
            {CONTEXTO.paragrafos.map((paragrafo) => (
              <p
                key={paragrafo.slice(0, 40)}
                className="text-[16px] leading-relaxed text-[#5C546E] lg:text-[18px]"
              >
                {paragrafo}
              </p>
            ))}
          </div>
        </div>

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
