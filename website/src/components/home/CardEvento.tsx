import { Botao } from "@/components/ui/Botao";
import type { Evento } from "@/types";

/**
 * Card de evento com chip de formato (Presencial / Online / Híbrido).
 *
 * O chip usa `bg-clip-text` + `text-transparent` para pintar o texto com o
 * gradiente do evento sobre a pílula branca.
 */
export function CardEvento({ evento }: { evento: Evento }) {
  return (
    <article className={`flex h-full flex-col rounded-[5px] p-5 ${evento.gradiente}`}>
      <div className="flex items-center justify-between gap-3">
        <span className="text-[12px] font-bold text-[#F8F8F8]">{evento.data}</span>
        <span className="rounded-full bg-white px-4 py-1">
          <span className={`bg-clip-text text-[12px] text-transparent ${evento.chipTexto}`}>
            {evento.formato}
          </span>
        </span>
      </div>

      <h3 className="mt-6 text-[20px] font-bold leading-snug text-white">{evento.titulo}</h3>
      <p className="mt-3 flex-1 text-[12px] leading-relaxed text-[#D4D4D4]">
        {evento.descricao}
      </p>
      <Botao href={evento.href} external className="mt-5 self-start">
        Inscreva-se
      </Botao>
    </article>
  );
}
