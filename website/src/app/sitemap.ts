import type { MetadataRoute } from "next";

import { site } from "@/content/site";

/** Exigido por `output: "export"` — rotas de metadata precisam ser estáticas. */
export const dynamic = "force-static";

/**
 * Hoje o site tem uma rota só. Conforme as páginas do menu forem entrando
 * (`/sobre`, `/eventos`, `/certificacao`…), acrescente aqui — ou derive de
 * `NAV_LINKS` em `src/content/navegacao.ts`, quando todas existirem.
 */
const staticRoutes = ["/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map((route) => ({ url: `${site.url}${route}` }));
}
