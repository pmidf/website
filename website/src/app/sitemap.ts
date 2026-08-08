import type { MetadataRoute } from "next";

import { posts } from "@/content/posts";
import { servicos } from "@/content/servicos";
import { site } from "@/content/site";

/** Exigido por `output: "export"` — rotas de metadata precisam ser estáticas. */
export const dynamic = "force-static";

/** Rotas estáticas. Rotas dinâmicas são derivadas do conteúdo logo abaixo. */
const staticRoutes = [
  "/",
  "/sobre",
  "/servicos",
  "/solucoes",
  "/cases",
  "/blog",
  "/carreiras",
  "/contato",
  "/politica-de-privacidade",
  "/termos-de-uso",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((route) => ({ url: `${site.url}${route}` })),
    ...servicos.map((s) => ({ url: `${site.url}/servicos/${s.slug}` })),
    ...posts.map((p) => ({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: p.date,
    })),
  ];
}
