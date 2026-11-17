import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import { notFound } from "next/navigation";

import { BarraLeitura, Cabecalho, Corpo, Encerramento } from "@/components/materia";
import { assets } from "@/content/assets";
import { MATERIAS, materiaPorSlug, tempoDeLeitura } from "@/content/noticias";
import { site } from "@/content/site";

/** Mesmas famílias e variáveis da listagem de Notícias, de Eventos e do DGPIS. */
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-titulo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-corpo",
  display: "swap",
});

type Props = { params: Promise<{ slug: string }> };

/**
 * Uma página estática por matéria, gerada no build. Slug fora da lista é 404
 * direto — publicar uma matéria é um commit, então não há o que gerar sob
 * demanda.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return MATERIAS.map((noticia) => ({ slug: noticia.id }));
}

/** `trailingSlash: true` vale também para as URLs absolutas (OG, JSON-LD). */
const urlAbsoluta = (caminho: string) => `${site.url}${caminho}`;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const noticia = materiaPorSlug(slug);
  if (!noticia) return {};

  const { materia } = noticia;

  return {
    title: noticia.titulo,
    description: materia.linhaFina,
    alternates: { canonical: `/noticias/${slug}` },
    // O `openGraph` daqui substitui o do layout raiz inteiro (não mescla),
    // por isso `locale` e `siteName` são repetidos.
    openGraph: {
      type: "article",
      locale: "pt_BR",
      siteName: site.name,
      title: noticia.titulo,
      description: materia.linhaFina,
      url: `/noticias/${slug}/`,
      publishedTime: noticia.data,
      images: [{ url: materia.og, width: 1200, height: 630, alt: materia.capa.alt }],
    },
  };
}

/**
 * Página de matéria.
 *
 * Só orquestra: o texto vem de `src/content/materias/`, o visual de
 * `src/components/materia/`. A trilha ("Início › Notícias › …") vem do layout,
 * a partir da linha da matéria em `content/rotas.ts`.
 */
export default async function MateriaPage({ params }: Props) {
  const { slug } = await params;
  const noticia = materiaPorSlug(slug);
  if (!noticia) notFound();

  const { materia } = noticia;
  const url = urlAbsoluta(`/noticias/${slug}/`);

  /**
   * `NewsArticle` para o Google entender a página como notícia (data,
   * imagem, quem publica). O `BreadcrumbList` já sai da `Trilha`. O `<` é
   * escapado para que nenhum texto do conteúdo feche a tag `<script>`.
   */
  const dadosEstruturados = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: noticia.titulo,
    description: materia.linhaFina,
    image: [urlAbsoluta(materia.capa.src), urlAbsoluta(materia.og)],
    datePublished: noticia.data,
    dateModified: noticia.data,
    inLanguage: "pt-BR",
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: materia.autoria, url: `${site.url}/` },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: urlAbsoluta(assets.marca.logo) },
    },
  };

  return (
    <div
      className={`${archivo.variable} ${inter.variable} min-h-screen bg-white font-[family-name:var(--font-corpo)]`}
    >
      <BarraLeitura />

      <article>
        <Cabecalho noticia={noticia} minutos={tempoDeLeitura(materia)} />
        <Corpo blocos={materia.corpo} />
        <Encerramento noticia={noticia} url={url} />
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(dadosEstruturados).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}
