import { cn } from "@/lib/utils";

/**
 * Faixa colorida que sangra até uma das bordas da tela, usada como cabeçalho
 * das seções de benefícios e de "Pra quem é".
 *
 * ## Como a sangria funciona agora
 *
 * A faixa vive **dentro** do `Container`, e quem escapa da coluna é só a cor:
 * um pseudo-elemento de 50vw estende o fundo até a borda da janela. Assim o
 * texto herda o alinhamento do container e cai exatamente na mesma coluna do
 * menu e do corpo da seção.
 *
 * Antes a faixa ficava fora do container, colada na borda da janela, com um
 * recuo interno fixo (51px, 66px). Num monitor de 1920px isso punha o título
 * a ~60px da borda enquanto o texto que ele intitula começava a ~390px: o
 * cabeçalho ficava solto, sem relação visível com a seção.
 *
 * A seção que usa esta faixa precisa de `overflow-x-clip`: o pseudo-elemento
 * do lado direito passa da janela e, sem isso, cria barra de rolagem.
 */
const LADOS = {
  esquerda:
    "rounded-r-[50px] pr-8 md:pr-10 " +
    "before:absolute before:inset-y-0 before:right-full before:w-[50vw] " +
    "before:bg-inherit before:shadow-[0_4px_4px_rgba(0,0,0,0.25)] before:content-['']",
  direita:
    "ml-auto rounded-l-[50px] pl-8 text-right md:pl-10 " +
    "after:absolute after:inset-y-0 after:left-full after:w-[50vw] " +
    "after:bg-inherit after:shadow-[0_4px_4px_rgba(0,0,0,0.25)] after:content-['']",
} as const;

export function FaixaSecao({
  children,
  cor,
  lado,
  className = "",
}: {
  children: React.ReactNode;
  /** Classe de fundo da faixa. É ela que o pseudo-elemento herda. */
  cor: string;
  /** Borda da janela em que a faixa encosta. */
  lado: keyof typeof LADOS;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative py-8 shadow-[0_4px_4px_rgba(0,0,0,0.25)] lg:py-10",
        LADOS[lado],
        cor,
        className,
      )}
    >
      {children}
    </div>
  );
}
