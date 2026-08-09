import { cn } from "@/lib/utils";

/**
 * Faixa central do layout PMI-DF: largura máxima de 1280px e gutters que
 * crescem por breakpoint.
 *
 * Todo bloco de conteúdo do site passa por aqui — é o que garante que Header,
 * seções e Rodapé alinhem na mesma coluna.
 *
 * A margem lateral no desktop muda por página no Figma (40px na home, 70px em
 * Eventos e Mentoring), então é uma variante e não um `className` solto: duas
 * classes de padding no mesmo elemento seriam resolvidas pela ordem da folha
 * de estilo, não pela ordem em que foram escritas.
 */
const GUTTERS = {
  padrao: "px-5 md:px-8 lg:px-10",
  amplo: "px-5 md:px-8 lg:px-[70px]",
} as const;

export function Container({
  children,
  className = "",
  gutter = "padrao",
}: {
  children: React.ReactNode;
  className?: string;
  gutter?: keyof typeof GUTTERS;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1280px]", GUTTERS[gutter], className)}>
      {children}
    </div>
  );
}
