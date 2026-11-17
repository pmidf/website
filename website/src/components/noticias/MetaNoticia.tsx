import { formatarData } from "@/content/noticias";
import type { Noticia } from "@/types";

/**
 * Chip da categoria + data, no topo do card e do destaque.
 *
 * O veículo não entra aqui: ele já aparece no rodapé do card ("Ler no …"),
 * que é onde a informação serve — logo antes do clique.
 */
export function MetaNoticia({ noticia }: { noticia: Noticia }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
      <span className="rounded-full bg-[#F8F5F0] px-3 py-[6px] text-[11px] font-bold uppercase tracking-[0.06em] text-[#4F17A8]">
        {noticia.categoria}
      </span>
      <time dateTime={noticia.data} className="text-[13px] font-semibold text-[#5C546E]">
        {formatarData(noticia.data)}
      </time>
    </div>
  );
}
