import { cn } from "@/lib/utils";

/**
 * Rótulo curto acima do título de uma seção ("Agenda do capítulo", "Participe").
 *
 * A cor vem por classe e não por prop de estilo porque ela é semântica no
 * design: laranja sobre fundo claro, ciano sobre fundo escuro — o laranja
 * perde contraste no teal.
 */
export function Eyebrow({
  children,
  className = "text-[#FF610F]",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-[13px] font-semibold uppercase tracking-[1.6px]", className)}>
      {children}
    </p>
  );
}
