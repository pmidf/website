import Image from "next/image";

import { assets } from "@/content/assets";
import { cn } from "@/lib/utils";

/**
 * Foto de evento recortada em círculo, ao lado das listas de benefícios.
 *
 * Aparece três vezes na página com a mesma arte. Como é a mesma URL, o
 * navegador baixa uma vez só — repetir aqui não custa banda.
 *
 * `alt` descritivo em vez de vazio: a foto ilustra a comunidade de que a
 * página fala, não é ornamento.
 */
export function FotoCircular({ className = "" }: { className?: string }) {
  return (
    <div
      className={cn(
        // 572px só a partir de xl: em janelas de 1024 a 1280 a foto sozinha
        // comia metade da coluna e espremia a lista ao lado.
        "relative aspect-square w-full max-w-[360px] shrink-0 overflow-hidden rounded-full lg:max-w-[440px] xl:max-w-[572px]",
        className,
      )}
    >
      <Image
        src={assets.filiacao.fotoEvento}
        alt="Participantes em um evento do PMI-DF"
        fill
        sizes="(max-width: 1024px) 360px, (max-width: 1280px) 440px, 572px"
        className="object-cover"
      />
    </div>
  );
}
