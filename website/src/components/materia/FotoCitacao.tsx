import { Figura } from "@/components/materia/Figura";
import { Avatar } from "@/components/ui/Avatar";
import type { CitacaoMateria, FotoMateria } from "@/types";

/**
 * Bloco duplo: a foto vertical do evento ao lado de uma fala em destaque.
 *
 * É o único trecho que sai da coluna de texto e ocupa a largura da foto
 * principal — a quebra de ritmo no meio da leitura. No release, foto e fala
 * já vinham juntas; aqui elas viram uma composição só, sobre o creme.
 *
 * A aspa grande é ornamento (`aria-hidden`); a de fechamento fica no texto,
 * para a frase terminar como no original.
 */
export function FotoCitacao({ foto, citacao }: { foto: FotoMateria; citacao: CitacaoMateria }) {
  return (
    <div className="mx-auto mt-16 max-w-[1040px]">
      <div className="grid gap-8 rounded-[20px] bg-[#F8F5F0] p-5 md:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-12 lg:rounded-[24px] lg:p-10">
        <Figura
          foto={foto}
          sizes="(max-width: 1024px) 100vw, 400px"
          moldura="rounded-[16px]"
          // Retrato no celular e ao lado da citação no desktop; no tablet,
          // empilhada e com a largura toda, a foto inteira ficaria com quase
          // 800px de altura — ali ela deita em 16:10.
          aspecto="aspect-[4/5] md:aspect-[16/10] lg:aspect-[2/3]"
        />

        <figure>
          <span
            aria-hidden
            className="block h-[44px] font-[family-name:var(--font-titulo)] text-[88px] font-extrabold leading-none text-[#FF610F]"
          >
            “
          </span>
          <blockquote className="mt-2">
            <p className="text-[19px] font-medium leading-[1.55] text-[#200F3B] lg:text-[22px]">
              {citacao.texto}”
            </p>
          </blockquote>
          <figcaption className="mt-7 flex items-center gap-4">
            {/* O nome vem logo ao lado; o retrato não precisa anunciá-lo de novo. */}
            <span aria-hidden className="shrink-0">
              <Avatar nome={citacao.autor} foto={citacao.foto} tamanho={56} />
            </span>
            <span className="flex flex-col">
              <span className="text-[16px] font-bold text-[#200F3B]">{citacao.autor}</span>
              <span className="text-[14px] text-[#5C546E]">{citacao.cargo}</span>
            </span>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
