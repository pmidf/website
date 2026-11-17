import { CapaNoticia } from "@/components/noticias/CapaNoticia";
import { CARD_INTERATIVO, LinkNoticia, RotuloSaida } from "@/components/noticias/LinkNoticia";
import { MetaNoticia } from "@/components/noticias/MetaNoticia";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { NOTICIAS_TEXTO } from "@/content/noticias";
import { cn } from "@/lib/utils";
import type { Noticia } from "@/types";

/**
 * Card grande do topo: imagem à esquerda, texto à direita (empilha no mobile).
 *
 * A proporção 1.15fr / 0.85fr é a mesma das divisões assimétricas do resto
 * do site. Sem o `-translate-y` dos cards pequenos: num bloco desse tamanho o
 * salto pesa, e a sombra e o zoom da imagem já marcam o hover.
 */
export function Destaque({ noticia }: { noticia: Noticia }) {
  return (
    <div>
      <Eyebrow as="h2">{NOTICIAS_TEXTO.destaque}</Eyebrow>

      <article
        className={cn(
          "group relative mt-5 grid overflow-hidden rounded-[20px] border border-[#200F3B]/10 bg-white shadow-[0_2px_10px_rgba(32,15,59,0.06)] lg:grid-cols-[1.15fr_0.85fr]",
          CARD_INTERATIVO,
        )}
      >
        <CapaNoticia
          noticia={noticia}
          sizes="(max-width: 1024px) 100vw, 640px"
          className="aspect-[16/9] lg:aspect-auto lg:min-h-[380px]"
          grande
          preload
        />

        <div className="flex flex-col p-7 lg:p-10">
          <MetaNoticia noticia={noticia} />

          <h3 className="mt-5 font-[family-name:var(--font-titulo)] text-[24px] font-extrabold leading-[1.2] text-[#200F3B] transition group-hover:text-[#4F17A8] lg:text-[30px]">
            <LinkNoticia noticia={noticia} />
          </h3>

          <p className="mt-4 text-[16px] leading-relaxed text-[#5C546E] lg:text-[17px]">
            {noticia.resumo}
          </p>

          <RotuloSaida noticia={noticia} className="mt-auto pt-7" />
        </div>
      </article>
    </div>
  );
}
