import { CardNoticia } from "@/components/noticias/CardNoticia";
import { TituloSecao } from "@/components/ui/TituloSecao";
import { NOTICIAS_TEXTO } from "@/content/noticias";
import type { Noticia } from "@/types";

/** Grade "Mais recentes", logo abaixo do destaque, na mesma aba creme. */
export function Recentes({ noticias }: { noticias: Noticia[] }) {
  return (
    <div className="mt-14 lg:mt-20">
      <TituloSecao className="font-[family-name:var(--font-titulo)] font-extrabold leading-[1.18] text-[#200F3B]">
        {NOTICIAS_TEXTO.recentes}
      </TituloSecao>

      <ul className="mt-8 grid gap-[27px] sm:grid-cols-2 lg:grid-cols-3">
        {noticias.map((noticia) => (
          <li key={noticia.id}>
            <CardNoticia noticia={noticia} />
          </li>
        ))}
      </ul>
    </div>
  );
}
