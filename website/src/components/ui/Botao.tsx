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

  /** Mesmo gradiente, mais opaco e sem blur — CTA principal de Eventos. */
  gradiente:
    "px-[26px] py-[11px] text-[15px] font-medium text-white " +
    "bg-[linear-gradient(90deg,rgba(31,9,66,0.6)_0%,rgba(255,97,15,0.6)_50%,rgba(26,199,255,0.6)_100%)] " +
    "shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:brightness-110 focus-visible:outline-current",

  /** Sólido claro sobre fundo escuro. */
  branco:
    "px-[26px] py-[11px] text-[15px] font-medium bg-white text-[#1F0942] " +
    "hover:bg-white/90 focus-visible:outline-current",

  /** Contorno sobre fundo escuro. */
  "contorno-claro":
    "px-[26px] py-[11px] text-[15px] font-medium border-[1.5px] border-white/70 text-white " +
    "hover:bg-white/10 focus-visible:outline-current",

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

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={estilo}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={estilo}>
      {children}
    </Link>
  );
}
