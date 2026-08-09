import { Botao } from "@/components/ui/Botao";
import { ESTILO_FORMATO } from "@/content/eventos";
import type { EventoAgenda } from "@/types";

/**
 * Card da agenda.
 *
 * O gradiente sai do formato do evento; `evento.gradiente` só existe para os
 * casos em que o protótipo foge dessa regra. O chip usa `bg-clip-text` para
 * pintar o texto com o gradiente sobre a pílula branca.
 */
export function CardEvento({ evento }: { evento: EventoAgenda }) {
  const estilo = ESTILO_FORMATO[evento.formato];

  return (
    <article
      className={`flex h-full flex-col gap-3 rounded-[14px] px-6 py-[22px] shadow-[0_4px_12px_rgba(0,0,0,0.22)] ${
        evento.gradiente ?? estilo.card
      }`}
    >
      <div className="flex items-center gap-3">
        <p className="flex-1 text-[12px] font-bold text-white/90">{evento.data}</p>
        <span className="rounded-full bg-white px-[14px] py-[5px]">
          <span className={`bg-clip-text text-[12px] text-transparent ${estilo.chip}`}>
            {evento.formato}
          </span>
        </span>
      </div>

      <h3 className="text-[19px] font-semibold leading-[1.3] text-white">{evento.titulo}</h3>
      <p className="text-[13px] font-medium text-white/80">{evento.local}</p>
      <p className="flex-1 text-[13px] leading-[1.52] text-white/90">{evento.descricao}</p>

      <Botao
        href={evento.href}
        external
        variante="branco"
        className="self-start px-[22px] py-[9px] text-[14px]"
      >
        Inscreva-se
      </Botao>
    </article>
  );
}
