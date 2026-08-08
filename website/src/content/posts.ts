/**
 * Posts do blog.
 *
 * Placeholder até a definição da fonte de conteúdo (MDX local ou CMS headless).
 * Como o site é exportado estaticamente, qualquer que seja a fonte, a lista
 * precisa estar disponível em build para alimentar `generateStaticParams`.
 */

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO 8601 — formatado na renderização, nunca guardado já formatado. */
  date: string;
};

export const posts: Post[] = [
  {
    slug: "primeiro-post",
    title: "Título do primeiro post",
    excerpt: "Resumo curto do post exibido na listagem.",
    date: "2026-01-15",
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
