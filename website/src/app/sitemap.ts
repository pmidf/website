import type { MetadataRoute } from "next";

import { site } from "@/content/site";

/** Exigido por `output: "export"` — rotas de metadata precisam ser estáticas. */
export const dynamic = "force-static";

/**
 * Conforme as páginas do menu forem entrando (`/sobre`, `/certificacao`…),
 * acrescente aqui — ou derive de `NAV_LINKS` em `src/content/navegacao.ts`,
 * quando todas existirem.
 */
const staticRoutes = ["/", "/eventos", "/filiacao", "/mentoring", "/voluntariado", "/maximize"];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map((route) => ({ url: `${site.url}${route}` }));
}
