import { CapaNoticia } from "@/components/noticias/CapaNoticia";
import { CARD_INTERATIVO, LinkNoticia, RotuloSaida } from "@/components/noticias/LinkNoticia";
import { MetaNoticia } from "@/components/noticias/MetaNoticia";
import { cn } from "@/lib/utils";
import type { Noticia } from "@/types";

/**
 * Card da grade "Mais recentes".
 *
 * Mesma caixa dos documentos de Eleições (branco, borda leve, hover ciano),
 * com a capa 16:9 em cima. Título e resumo cortam em três linhas para os
 * cards de uma mesma fileira terem a mesma altura de leitura; o rodapé desce
 * com `mt-auto` e fica alinhado entre eles.
 */
export function CardNoticia({ noticia }: { noticia: Noticia }) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[16px] border border-[#200F3B]/10 bg-white shadow-[0_2px_10px_rgba(32,15,59,0.06)] motion-safe:hover:-translate-y-1",
        CARD_INTERATIVO,
      )}
    >
      <CapaNoticia
        noticia={noticia}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
        className="aspect-[16/9]"
      />

      <div className="flex flex-1 flex-col p-6">
        <MetaNoticia noticia={noticia} />

        <h3 className="mt-4 line-clamp-3 text-[19px] font-bold leading-[1.3] text-[#200F3B] transition group-hover:text-[#4F17A8]">
          <LinkNoticia noticia={noticia} />
        </h3>

        <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-[#5C546E]">
          {noticia.resumo}
        </p>

        <div className="mt-auto pt-5">
          <RotuloSaida
            noticia={noticia}
            className="border-t border-[#200F3B]/10 pt-4"
          />
        </div>
      </div>
    </article>
  );
}
