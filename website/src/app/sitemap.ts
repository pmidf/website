import type { MetadataRoute } from "next";

import { INICIO, ROTAS } from "@/content/rotas";
import { site } from "@/content/site";

/** A lista é fixa, então não há motivo para o sitemap ser gerado por request. */
export const dynamic = "force-static";

/**
 * Derivado de `content/rotas.ts`, o mesmo mapa que alimenta a trilha de
 * navegação — uma página nova entra no sitemap ao ganhar sua linha lá, sem
 * duas listas para manter em sincronia.
 *
 * Não derive de `NAV_LINKS`: o menu não cobre as páginas alcançadas só por
 * CTA (`/quem-somos/presidentes`, `/quem-somos/voluntarios`, `/student-club`).
 *
 * Rotas com `foraDoAr` ficam de fora — hoje só `/maximize`, que existe mas
 * está sem link no menu e com `robots: noindex` até o lançamento.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const rotas = [INICIO, ...ROTAS.filter((rota) => !rota.foraDoAr)];

  // Com `trailingSlash: true` no `next.config.ts`, "/eventos" responde com um
  // redirecionamento para "/eventos/". Listar a URL sem a barra faria cada
  // linha do sitemap custar um redirect ao rastreador.
  return rotas.map((rota) => ({
    url: rota.href === "/" ? `${site.url}/` : `${site.url}${rota.href}/`,
  }));
}
