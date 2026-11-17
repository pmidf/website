import Image from "next/image";

import { cn } from "@/lib/utils";
import type { FotoMateria } from "@/types";

/**
 * Foto com legenda e crédito, como saiu no release.
 *
 * `largura`/`altura` são as do arquivo — o navegador reserva o espaço antes
 * da imagem chegar, e a página não pula. Quem precisa de outro recorte
 * (o retrato no bloco com a citação) passa `aspecto`, e o `object-cover`
 * enquadra.
 */
export function Figura({
  foto,
  sizes,
  className,
  moldura,
  aspecto,
  preload = false,
}: {
  foto: FotoMateria;
  sizes: string;
  className?: string;
  /** Classes da caixa que recorta a imagem (raio, sombra). */
  moldura?: string;
  /** Proporção forçada, ex.: `aspect-[4/5]`. Sem ela, vale a do arquivo. */
  aspecto?: string;
  /** Só na foto principal, que é o LCP da página. */
  preload?: boolean;
}) {
  return (
    <figure className={className}>
      <div className={cn("overflow-hidden", moldura)}>
        <Image
          src={foto.src}
          alt={foto.alt}
          width={foto.largura}
          height={foto.altura}
          sizes={sizes}
          preload={preload}
          className={cn("h-auto w-full object-cover", aspecto)}
        />
      </div>
      <figcaption className="mt-3 text-[13px] leading-snug text-[#5C546E]">
        {foto.legenda} <span className="whitespace-nowrap text-[#5C546E]/70">{foto.credito}</span>
      </figcaption>
    </figure>
  );
}
