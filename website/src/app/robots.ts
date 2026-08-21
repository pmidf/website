import type { MetadataRoute } from "next";

import { site } from "@/content/site";

/** O conteúdo é fixo; não há motivo para gerar o robots.txt por request. */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
