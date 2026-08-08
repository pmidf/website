import Link from "next/link";

import { cn } from "@/lib/utils";

/**
 * Botão "Saiba mais" do design PMI-DF: pílula translúcida com gradiente
 * roxo → laranja → ciano sobre blur.
 *
 * Renderiza `<Link>` para rotas internas e `<a target="_blank">` quando
 * `external` — o segundo caso existe porque os eventos apontam para inscrição
 * no Sympla.
 */
export function Botao({
  href,
  children,
  className = "",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}) {
  const estilo = cn(
    "inline-flex items-center justify-center rounded-full px-6 py-2 text-base text-white",
    "bg-[linear-gradient(90deg,rgba(31,9,66,0.35)_0%,rgba(255,97,15,0.35)_50%,rgba(26,199,255,0.35)_100%)]",
    "backdrop-blur-[2px] shadow-[0_4px_2px_rgba(0,0,0,0.25)] ring-1 ring-white/15",
    "transition hover:brightness-125 focus-visible:outline-2 focus-visible:outline-offset-2",
    "focus-visible:outline-white",
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
