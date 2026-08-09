import { cn } from "@/lib/utils";

/**
 * `<h2>` das seções, na escala tipográfica do design (28 / 34 / 40px).
 *
 * O que é comum entre as páginas é só essa escala — peso, entrelinha, família
 * e cor mudam de uma para outra. Por isso tudo isso vem por `className`, com o
 * visual da home como padrão: as chamadas existentes seguem funcionando sem
 * argumento, e quem precisa de outro tratamento substitui o conjunto inteiro
 * em vez de empilhar utilitários conflitantes.
 */
export function TituloSecao({
  children,
  className = "font-bold leading-tight text-[#200F3B]",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={cn("text-[28px] md:text-[34px] lg:text-[40px]", className)}>
      {children}
    </h2>
  );
}
