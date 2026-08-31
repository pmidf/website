import Link from "next/link";

import { cn } from "@/lib/utils";

/**
 * Botão do design PMI-DF.
 *
 * Renderiza `<Link>` para rotas internas e `<a target="_blank">` quando
 * `external` — o segundo caso existe porque as inscrições acontecem no Sympla.
 *
 * O padding faz parte da variante, não da base: a home usa a pílula
 * translúcida com métrica própria e Eventos usa uma escala menor. Deixar as
 * duas na base significaria duas classes de padding disputando pela ordem da
 * folha de estilo.
 */
const VARIANTES = {
  /** Pílula translúcida sobre imagem — hero e cards da home. */
  translucido:
    "px-6 py-2 text-base text-white " +
    "bg-[linear-gradient(90deg,rgba(31,9,66,0.35)_0%,rgba(255,97,15,0.35)_50%,rgba(26,199,255,0.35)_100%)] " +
    "backdrop-blur-[2px] shadow-[0_4px_2px_rgba(0,0,0,0.25)] ring-1 ring-white/15 " +
    "hover:brightness-125 focus-visible:outline-white",

  /** Efeito vidro (aproximação do Glass effect do Figma via CSS). */
  /* Referencia angulos do brilho:
  135deg → brilho no canto superior esquerdo
  225deg → brilho no canto superior direito
  45deg → brilho no canto inferior direito
  315deg → brilho no canto inferior esquerdo */
  vidro:
    "relative px-6 py-2 text-base text-white font-normal overflow-hidden " +
    "rounded-[30px] border border-white/[0.12] " +
    "bg-[linear-gradient(90deg,rgba(0,0,0,0.2)_12%,rgba(31,9,66,0.2)_100%)] " +
    "backdrop-blur-[4px] " +
    "before:absolute before:inset-0 before:rounded-[30px] " +
    "before:bg-[linear-gradient(225deg,rgba(255,255,255,0.28)_0%,transparent_45%)] " +
    "before:pointer-events-none " +
    "shadow-[0_4px_2px_rgba(0,0,0,0.25)] " +
    "hover:brightness-110 focus-visible:outline-current",

  /** Mesmo gradiente, mais opaco e sem blur — CTA principal de Eventos. */
  gradiente:
    "px-[26px] py-[11px] text-[15px] font-medium text-white " +
    "bg-[linear-gradient(90deg,rgba(31,9,66,0.6)_0%,rgba(255,97,15,0.6)_50%,rgba(26,199,255,0.6)_100%)] " +
    "shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:brightness-110 focus-visible:outline-current",

  /**
   * Pílula clara com o texto recortado em gradiente — CTA sobre fundo escuro.
   *
   * O gradiente precisa do `<span>` interno: um mesmo elemento não pode ter
   * fundo branco e um `background-image` recortado nas letras ao mesmo tempo.
   */
  claro:
    "px-[26px] py-[9px] text-[16px] bg-[#F8F8F8] shadow-[0_4px_2px_rgba(0,0,0,0.25)] " +
    "hover:brightness-95 focus-visible:outline-[#200F3B] " +
    "[&>span]:bg-[linear-gradient(90deg,#200F3B_0%,#FF610F_50%,#1AC7FF_100%)] " +
    "[&>span]:bg-clip-text [&>span]:text-transparent",

  /** Sólido claro sobre fundo escuro. */
  branco:
    "px-[26px] py-[11px] text-[15px] font-medium bg-white text-[#1F0942] " +
    "hover:bg-white/90 focus-visible:outline-current",

  /** Contorno sobre fundo escuro. */
  "contorno-claro":
    "px-[26px] py-[11px] text-[15px] font-medium border-[1.5px] border-white/70 text-white " +
    "hover:bg-white/10 focus-visible:outline-current",

  /** Sólido teal — CTA sobre os cards claros da seção "Como começar". */
  teal:
    "px-[26px] py-[9px] text-[16px] bg-[#023041] text-[#F8F5F0] " +
    "shadow-[0_4px_2px_rgba(0,0,0,0.25)] hover:bg-[#03445C] focus-visible:outline-current",

  /** Sólido escuro sobre fundo claro. */
  escuro:
    "px-[26px] py-[11px] text-[15px] font-medium bg-[#1F0942] text-white " +
    "hover:bg-[#2A0A5C] focus-visible:outline-current",

  /** Contorno sobre fundo claro. */
  "contorno-escuro":
    "px-[26px] py-[11px] text-[15px] font-medium border-[1.5px] border-[#1F0942]/35 text-[#1F0942] " +
    "hover:bg-[#1F0942]/5 focus-visible:outline-current",
} as const;

export type VarianteBotao = keyof typeof VARIANTES;

export function Botao({
  href,
  children,
  className = "",
  variante = "translucido",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  variante?: VarianteBotao;
  external?: boolean;
}) {
  const estilo = cn(
    "inline-flex items-center justify-center rounded-full transition",
    "focus-visible:outline-2 focus-visible:outline-offset-2",
    VARIANTES[variante],
    className,
  );

  /* O <span> é sempre renderizado, e não só na variante `claro`: uma estrutura
   * estável evita que trocar de variante mude a árvore do DOM. */
  const conteudo = <span>{children}</span>;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={estilo}>
        {conteudo}
      </a>
    );
  }

  return (
    <Link href={href} className={estilo}>
      {conteudo}
    </Link>
  );
}
