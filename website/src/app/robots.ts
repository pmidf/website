import type { MetadataRoute } from "next";

import { site } from "@/content/site";

/** Exigido por `output: "export"` — rotas de metadata precisam ser estáticas. */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
