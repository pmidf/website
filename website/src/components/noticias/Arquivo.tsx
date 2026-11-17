import Link from "next/link";
import { FaArrowRight, FaArrowUpRightFromSquare } from "react-icons/fa6";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TituloSecao } from "@/components/ui/TituloSecao";
import {
  destinoNoticia,
  formatarData,
  NOTICIAS_TEXTO,
  type GrupoArquivo,
} from "@/content/noticias";
import type { Noticia } from "@/types";

/**
 * Notícias que já saíram da grade, em lista compacta agrupada por ano.
 *
 * É o que deixa a página legível com 80 itens sem paginação: a grade mostra
 * o que é novo com imagem, e daqui para baixo vale a densidade — data, título
 * e veículo numa linha. No desktop o ano fica fixo à esquerda enquanto a
 * lista dele rola.
 *
 * Sem grupos, a seção nem é renderizada.
 */
export function Arquivo({ grupos }: { grupos: GrupoArquivo[] }) {
  if (grupos.length === 0) return null;

  const { arquivo } = NOTICIAS_TEXTO;

  return (
    <section className="bg-white py-16 lg:py-20">
      <Container gutter="amplo">
        <div className="flex max-w-[760px] flex-col gap-[14px]">
          <Eyebrow>{arquivo.eyebrow}</Eyebrow>
          <TituloSecao className="font-[family-name:var(--font-titulo)] font-extrabold leading-[1.18] text-[#200F3B]">
            {arquivo.titulo}
          </TituloSecao>
        </div>

        <div className="mt-10 flex flex-col gap-10 lg:gap-14">
          {grupos.map((grupo) => (
            <div key={grupo.ano} className="lg:grid lg:grid-cols-[160px_1fr] lg:gap-8">
              <h3 className="font-[family-name:var(--font-titulo)] text-[28px] font-extrabold leading-none text-[#200F3B]/25 lg:sticky lg:top-28 lg:self-start lg:pt-4">
                {grupo.ano}
              </h3>

              <ul className="mt-4 border-t border-[#200F3B]/10 lg:mt-0">
                {grupo.noticias.map((noticia) => (
                  <li key={noticia.id} className="border-b border-[#200F3B]/10">
                    <LinhaArquivo noticia={noticia} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** Uma linha do arquivo: `<Link>` para matéria interna, nova aba para externa. */
function LinhaArquivo({ noticia }: { noticia: Noticia }) {
  const { href, externo, veiculo } = destinoNoticia(noticia);
  const Icone = externo ? FaArrowUpRightFromSquare : FaArrowRight;
  const classe =
    "group flex flex-col gap-1 py-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F17A8] sm:flex-row sm:items-baseline sm:gap-6";

  const conteudo = (
    <>
      <span className="text-[13px] font-semibold tabular-nums text-[#5C546E] sm:w-[72px] sm:shrink-0">
        <time dateTime={noticia.data}>{formatarData(noticia.data, { ano: false })}</time>
        {/* No mobile o veículo sobe para a linha da data; a coluna da direita
            só existe a partir do `sm`. */}
        <span className="sm:hidden"> · {veiculo}</span>
      </span>

      <span className="flex-1 text-[16px] font-semibold leading-snug text-[#200F3B] transition group-hover:text-[#FF610F]">
        {noticia.titulo}
        {externo && <span className="sr-only"> (abre em nova aba, no {veiculo})</span>}
      </span>

      <span
        aria-hidden
        className="hidden shrink-0 items-center gap-2 text-[13px] text-[#5C546E] sm:inline-flex"
      >
        {veiculo}
        <Icone className="h-[11px] w-[11px]" />
      </span>
    </>
  );

  return externo ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classe}>
      {conteudo}
    </a>
  ) : (
    <Link href={href} className={classe}>
      {conteudo}
    </Link>
  );
}
