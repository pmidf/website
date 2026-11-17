import Link from "next/link";
import { FaArrowRight, FaArrowUpRightFromSquare } from "react-icons/fa6";

import { destinoNoticia } from "@/content/noticias";
import { cn } from "@/lib/utils";
import type { Noticia } from "@/types";

/**
 * Link do título, esticado sobre o card inteiro.
 *
 * O `<a>` fica só no título e o `::after` dele cobre o card (que precisa ser
 * `relative`): o card todo responde ao clique, mas o nome acessível do link é
 * só o título. Com o card inteiro dentro do `<a>`, o leitor de tela leria
 * chip, data, resumo e rodapé como um link enorme.
 *
 * Notícia interna navega na mesma aba com `<Link>`; externa abre o site de
 * origem em nova aba e avisa disso no nome acessível.
 *
 * O contorno de foco não fica no `<a>`: o card tem `overflow-hidden` (para
 * arredondar a imagem) e cortaria o contorno do pseudo-elemento. Quem desenha
 * o foco é o próprio card, via `has-[a:focus-visible]`.
 */
export function LinkNoticia({ noticia }: { noticia: Noticia }) {
  const { href, externo, veiculo } = destinoNoticia(noticia);
  const classe = "after:absolute after:inset-0 focus-visible:outline-hidden";

  if (!externo) {
    return (
      <Link href={href} className={classe}>
        {noticia.titulo}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classe}>
      {noticia.titulo}
      <span className="sr-only"> (abre em nova aba, no {veiculo})</span>
    </a>
  );
}

/** Classes de foco e hover que todo card com `LinkNoticia` repete. */
export const CARD_INTERATIVO =
  "transition duration-300 hover:border-[#1AC7FF] hover:shadow-[0_10px_26px_rgba(32,15,59,0.12)] " +
  "has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-2 has-[a:focus-visible]:outline-[#4F17A8]";

/**
 * Chamada do rodapé do card: "Ler a matéria →" nas internas, "Ler no
 * Correio Braziliense ↗" nas externas — o aviso de que o clique sai do site.
 *
 * `aria-hidden` porque o link do título já leva a pessoa ao mesmo lugar (e,
 * nas externas, já diz o veículo); repetir faria o leitor de tela dizer tudo
 * duas vezes.
 */
export function RotuloSaida({ noticia, className }: { noticia: Noticia; className?: string }) {
  const { externo, veiculo } = destinoNoticia(noticia);
  const Icone = externo ? FaArrowUpRightFromSquare : FaArrowRight;

  return (
    <p
      aria-hidden
      className={cn(
        "flex items-center gap-2 text-[15px] font-semibold text-[#4F17A8] transition group-hover:text-[#FF610F]",
        className,
      )}
    >
      {externo ? `Ler no ${veiculo}` : "Ler a matéria"}
      <Icone
        className={cn(
          "h-3 w-3 shrink-0",
          !externo && "transition motion-safe:group-hover:translate-x-1",
        )}
      />
    </p>
  );
}
