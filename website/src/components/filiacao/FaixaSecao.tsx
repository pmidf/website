import { cn } from "@/lib/utils";

/**
 * Faixa colorida que sangra até uma das bordas da tela, usada como cabeçalho
 * das seções de benefícios e de "Pra quem é".
 *
 * Fica fora do `Container` de propósito: o efeito é justamente a faixa
 * escapar da coluna de conteúdo e encostar na borda da janela. A margem do
 * lado oposto é o que impede a faixa de virar uma barra de ponta a ponta.
 *
 * Largura e padding interno variam por instância no protótipo, então vêm por
 * `className`: são utilitários `lg:` que não conflitam com a base.
 */
const LADOS = {
  esquerda: "mr-5 rounded-r-[50px] md:mr-8 lg:mr-auto",
  direita: "ml-5 rounded-l-[50px] text-right md:ml-8 lg:ml-auto",
} as const;

export function FaixaSecao({
  children,
  cor,
  lado,
  className = "",
}: {
  children: React.ReactNode;
  /** Classe de fundo da faixa. */
  cor: string;
  /** Borda em que a faixa encosta. */
  lado: keyof typeof LADOS;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "px-5 py-8 shadow-[0_4px_4px_rgba(0,0,0,0.25)] md:px-8 lg:py-10",
        LADOS[lado],
        cor,
        className,
      )}
    >
      {children}
    </div>
  );
}
