import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ETAPAS, PROCESSO } from "@/content/eleicoes";

/** As quatro etapas, mais a regra de conduta. */
export function Processo() {
  return (
    <section id="processo" className="bg-white py-16 lg:py-20">
      <Container>
        <Eyebrow>{PROCESSO.eyebrow}</Eyebrow>

        <h2 className="mt-3 text-[30px] font-extrabold leading-tight text-[#200F3B] lg:text-[42px]">
          {PROCESSO.titulo}
        </h2>

        <p className="mt-4 max-w-[820px] text-[16px] leading-relaxed text-[#5C546E] lg:text-[18px]">
          {PROCESSO.descricao}
        </p>

        {/* `<ol>`: a ordem das etapas é informação, não estilo — o leitor de
            tela anuncia "item 3 de 4" sem depender do número desenhado. */}
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ETAPAS.map((etapa, indice) => (
            <li
              key={etapa.titulo}
              className="rounded-[16px] border border-[#200F3B]/10 bg-[#F8F5F0] p-6"
            >
              <span
                aria-hidden
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4F17A8] text-[16px] font-bold text-white"
              >
                {indice + 1}
              </span>
              <h3 className="mt-4 text-[18px] font-bold text-[#200F3B]">{etapa.titulo}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#5C546E]">
                {etapa.descricao}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-10 rounded-[14px] border-l-4 border-[#FF610F] bg-[#F8F5F0] px-6 py-5 text-[15px] leading-relaxed text-[#5C546E]">
          <strong className="font-bold text-[#200F3B]">Regra de conduta: </strong>
          {PROCESSO.conduta}
        </p>
      </Container>
    </section>
  );
}
