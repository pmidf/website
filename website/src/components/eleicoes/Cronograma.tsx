import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CRONOGRAMA, CRONOGRAMA_TEXTO } from "@/content/eleicoes";

/**
 * Linha do tempo do processo.
 *
 * O fio vertical é a borda esquerda de cada item, e o ponto é um `span`
 * posicionado sobre ela. O último item zera a borda para o fio não continuar
 * depois da posse — a linha marca o intervalo entre as datas, não uma
 * continuação.
 */
export function Cronograma() {
  return (
    <section id="cronograma" className="bg-[#F8F5F0] py-16 lg:py-20">
      <Container>
        <Eyebrow>{CRONOGRAMA_TEXTO.eyebrow}</Eyebrow>

        <h2 className="mt-3 text-[30px] font-extrabold leading-tight text-[#200F3B] lg:text-[42px]">
          {CRONOGRAMA_TEXTO.titulo}
        </h2>

        <p className="mt-4 max-w-[820px] text-[16px] leading-relaxed text-[#5C546E] lg:text-[18px]">
          {CRONOGRAMA_TEXTO.descricao}
        </p>

        <ol className="mt-10 max-w-[760px]">
          {CRONOGRAMA.map((item, indice) => {
            const ultimo = indice === CRONOGRAMA.length - 1;

            return (
              <li
                key={item.data + item.descricao}
                className={`relative pl-10 ${
                  ultimo ? "border-transparent pb-0" : "border-[#200F3B]/12 pb-8"
                } border-l-2`}
              >
                <span
                  aria-hidden
                  className={`absolute -left-[9px] top-1 rounded-full border-[3px] ${
                    item.marco
                      ? "h-4 w-4 border-[#FF610F] bg-[#FF610F]"
                      : "h-3.5 w-3.5 border-[#1AC7FF] bg-white"
                  }`}
                />

                <p className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="text-[17px] font-bold text-[#200F3B]">{item.data}</span>
                  {item.marco && (
                    <span className="rounded-[6px] bg-[#FF610F]/12 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.06em] text-[#992905]">
                      {item.marco}
                    </span>
                  )}
                </p>

                <p className="mt-1 text-[15px] leading-relaxed text-[#5C546E]">
                  {item.descricao}
                </p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
