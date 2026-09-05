import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * Foto que acompanha as listas das três seções do meio da página.
 *
 * Era um círculo, com a mesma arte repetida nas três seções. Virou retângulo
 * de cantos arredondados por dois motivos: as fotos novas são de ambiente
 * (salão cheio, grupo posado, mesa posta) e o recorte circular cortava
 * justamente o que elas mostram; e cada seção passou a ter a sua, então a
 * repetição que justificava um formato "neutro" deixou de existir.
 *
 * O raio de 32px conversa com os 50px das faixas de título — mesma família de
 * cantos, em escala menor.
 */
export function FotoSecao({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1200}
      height={900}
      sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 440px, 520px"
      className={cn(
        "h-auto w-full max-w-[440px] shrink-0 rounded-[32px] object-cover shadow-[0_10px_28px_rgba(32,15,59,0.16)] xl:max-w-[520px]",
        className,
      )}
    />
  );
}
