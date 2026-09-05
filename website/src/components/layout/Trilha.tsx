"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "@/components/ui/Container";
import { trilha } from "@/content/rotas";
import { site } from "@/content/site";

/**
 * Trilha de navegação (breadcrumb) — atende ao critério WCAG 2.4.8 (Location),
 * que pede que a pessoa consiga se localizar dentro do site.
 *
 * ## Onde fica e por quê
 *
 * Renderizada uma única vez no layout do route group `(site)`, logo abaixo do
 * Header e acima do conteúdo. A hierarquia vem de `content/rotas.ts`, não do
 * roteador — ver o comentário de lá.
 *
 * A faixa usa o mesmo #F8F8F8 do Header de propósito: encostada nele, lê-se
 * como uma extensão da barra de navegação e não briga com o hero de nenhuma
 * página, que vão de gradiente laranja a azul-petróleo. Um fundo próprio por
 * página exigiria um valor novo a cada rota criada — e a primeira esquecida
 * apareceria como uma faixa fora do tom.
 *
 * ## Detalhes de acessibilidade
 *
 * - `<nav aria-label>` distingue esta navegação da principal do Header.
 * - `<ol>`: a ordem dos degraus é informação, não estilo.
 * - A página atual não é link e leva `aria-current="page"` — link para a
 *   própria página é ruído para quem navega por teclado ou leitor de tela.
 * - Os separadores são `aria-hidden`: são desenho, e a estrutura da lista já
 *   comunica a hierarquia.
 */
export function Trilha() {
  const pathname = usePathname();
  const caminho = trilha(pathname);

  // Home (só um degrau) e rotas desconhecidas, como o 404: uma trilha de um
  // item só não informa nada que o próprio título da página não diga.
  if (caminho.length < 2) return null;

  const ultimo = caminho.length - 1;

  /** `trailingSlash: true` também vale para as URLs do dado estruturado. */
  const urlAbsoluta = (href: string) =>
    href === "/" ? `${site.url}/` : `${site.url}${href}/`;

  const dadosEstruturados = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: caminho.map((rota, indice) => ({
      "@type": "ListItem",
      position: indice + 1,
      name: rota.label,
      item: urlAbsoluta(rota.href),
    })),
  };

  return (
    <nav
      aria-label="Trilha de navegação"
      className="border-b border-[#200F3B]/10 bg-[#F8F8F8]"
    >
      <Container>
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 py-3 text-[13px] lg:text-[14px]">
          {caminho.map((rota, indice) => (
            <li key={rota.href} className="flex items-center gap-2">
              {indice > 0 && (
                <span aria-hidden className="text-[#200F3B]/35">
                  ›
                </span>
              )}

              {indice === ultimo ? (
                <span aria-current="page" className="font-semibold text-[#200F3B]">
                  {rota.label}
                </span>
              ) : (
                <Link
                  href={rota.href}
                  className="text-[#5C546E] underline-offset-2 transition hover:text-[#FF610F] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#371075]"
                >
                  {rota.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </Container>

      {/* Mesma trilha em dado estruturado: o Google mostra o caminho no
          resultado de busca em vez da URL crua. Sai no HTML do build — client
          components também são renderizados no servidor. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dadosEstruturados) }}
      />
    </nav>
  );
}
