import Image from "next/image";

import { destinoNoticia, ESTILO_CATEGORIA } from "@/content/noticias";
import { cn } from "@/lib/utils";
import type { Noticia } from "@/types";

/**
 * Imagem da notícia — ou, sem imagem, uma capa gerada com as cores da marca.
 *
 * A capa existe para a grade nunca ter buraco: nem toda matéria tem foto boa,
 * e nem toda foto de veículo pode ser reaproveitada. O gradiente sai da
 * categoria, e o nome do veículo no centro mantém a capa informativa.
 *
 * `alt=""` nos dois casos: a imagem é decorativa, o título do card já diz do
 * que se trata e é ele o nome do link.
 *
 * O zoom no hover depende do `group` no card que envolve a capa.
 */
export function CapaNoticia({
  noticia,
  sizes,
  className,
  grande = false,
  preload = false,
}: {
  noticia: Noticia;
  /** Repassado ao `next/image` — a capa muda de largura por breakpoint. */
  sizes: string;
  className?: string;
  /** Veículo em corpo maior na capa de fallback, para o card de destaque. */
  grande?: boolean;
  /** Só no destaque, que fica logo abaixo do hero e costuma ser o LCP. */
  preload?: boolean;
}) {
  const zoom = "transition duration-500 motion-safe:group-hover:scale-[1.03]";

  // No card grande, a célula da imagem acompanha a altura do texto e fica
  // quase quadrada no desktop; o recorte 16:9 perderia muito das laterais.
  // Matéria interna tem a foto original (3:2, em alta) — ali ela rende mais.
  const src =
    grande && noticia.tipo === "interna" ? noticia.materia.capa.src : noticia.imagem;

  return (
    <div className={cn("relative overflow-hidden bg-[#F8F5F0]", className)}>
      {src ? (
        <Image
          src={src}
          alt=""
          fill
          sizes={sizes}
          preload={preload}
          className={cn("object-cover", zoom)}
        />
      ) : (
        <div
          aria-hidden
          className={cn(
            "absolute inset-0 flex items-center justify-center p-6",
            ESTILO_CATEGORIA[noticia.categoria].capa,
            zoom,
          )}
        >
          <span className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 lg:h-40 lg:w-40" />
          <span className="absolute bottom-5 left-6 h-3 w-3 rounded-full bg-[#05BFE0]" />
          <span
            className={cn(
              "relative text-balance text-center font-[family-name:var(--font-titulo)] font-extrabold leading-tight text-white",
              grande ? "text-[26px] lg:text-[34px]" : "text-[22px]",
            )}
          >
            {destinoNoticia(noticia).veiculo}
          </span>
        </div>
      )}
    </div>
  );
}
