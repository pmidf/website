import { cn } from "@/lib/utils";

/**
 * Faixa central do layout PMI-DF: largura máxima de 1280px e gutters que
 * crescem por breakpoint (mobile 20px · tablet 32px · desktop 40px).
 *
 * Todo bloco de conteúdo do site passa por aqui — é o que garante que Header,
 * seções e Rodapé alinhem na mesma coluna.
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
