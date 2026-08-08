import { cn } from "@/lib/utils";

/**
 * Faixa central do layout PMI-DF: largura máxima de 1280px e gutters que
 * crescem por breakpoint (mobile 20px · tablet 32px · desktop 40px).
 *
 * Convive com `@/components/layout/Container`, que é o container do scaffold
 * genérico (72rem) ainda usado pelas páginas placeholder. Quando essas páginas
 * forem migradas para o design do PMI-DF, o outro pode ser removido e este
 * vira o único.
 */
export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1280px] px-5 md:px-8 lg:px-10", className)}
    >
      {children}
    </div>
  );
}
