import { cn } from "@/lib/utils";

/**
 * Rótulo curto acima do título de uma seção ("Agenda do capítulo", "Participe").
 *
 * A cor vem por classe e não por prop de estilo porque ela é semântica no
 * design: laranja sobre fundo claro, ciano sobre fundo escuro — o laranja
 * perde contraste no teal.
 *
 * `as` existe para quando o rótulo é o único título da seção (o "Em destaque"
 * de Notícias): aí ele precisa ser um `<h2>` para a hierarquia de títulos não
 * pular nível, mesmo com cara de eyebrow.
 */
export function Eyebrow({
  children,
  className = "text-[#FF610F]",
  as: Tag = "p",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "h2";
}) {
  return (
    <Tag className={cn("text-[13px] font-semibold uppercase tracking-[1.6px]", className)}>
      {children}
    </Tag>
  );
}
