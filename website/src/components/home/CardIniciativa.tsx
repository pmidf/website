import Image from "next/image";

import { Botao } from "@/components/ui/Botao";
import type { Iniciativa } from "@/types";

/**
 * Card de uma iniciativa (Filiação, Student Club, Voluntariado).
 *
 * O `pt-[190px]` reserva o espaço da arte decorativa, que é posicionada em
 * absoluto e pode extrapolar o topo do card (daí o `overflow-hidden` recortar
 * o excedente). Cada texto ganha `relative` para ficar acima da decoração.
 */
export function CardIniciativa({ item }: { item: Iniciativa }) {
  return (
    <article
      className={`relative flex h-full min-h-[422px] flex-col overflow-hidden rounded-[20px] p-5 pt-[190px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] ${item.gradiente}`}
    >
      <Image
        src={item.deco.src}
        alt=""
        aria-hidden
        width={item.deco.largura}
        height={item.deco.altura}
        className={`pointer-events-none absolute h-auto ${item.deco.classe}`}
      />
      <h3 className="relative text-[24px] font-bold text-white">{item.titulo}</h3>
      <p className="relative mt-3 flex-1 text-[15px] leading-relaxed text-white/95">
        {item.descricao}
      </p>
      <Botao href={item.href} className="relative mt-5 self-start">
        Saiba mais
      </Botao>
    </article>
  );
}
