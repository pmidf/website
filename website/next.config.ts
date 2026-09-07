import type { NextConfig } from "next";

import redirectsLegado from "./redirects-legado.mjs";

/**
 * O site roda na Vercel com runtime Node.
 *
 * O `output: "export"` que existia aqui (para o Apache da HostGator) foi
 * removido junto com a integração do Sympla: export estático não tem ISR nem
 * Route Handlers, então a agenda só mudaria a cada deploy e o `s_token` teria
 * de ser resolvido no build. Com runtime, o token fica no servidor e a agenda
 * revalida sozinha — ver `src/lib/sympla.ts`.
 */
const nextConfig: NextConfig = {
  /**
   * Crítico para a migração do WordPress.
   *
   * O site antigo servia todas as URLs com barra final. Sem isto, as seis URLs
   * que são idênticas nos dois sites (`/certificacoes/`, `/contato/`,
   * `/mentoring/`, `/student-club/`, `/transparencia/`,
   * `/aviso-de-privacidade/`) responderiam 308 antes do 200 — um hop extra em
   * cada uma, à toa.
   */
  trailingSlash: true,

  images: {
    unoptimized: true, // herdado do export; ligar a otimização é um passo à parte
  },

  /** Mapa de 301 do site antigo. Ver `redirects-legado.mjs`. */
  async redirects() {
    return redirectsLegado;
  },

  async headers() {
    return [
      {
        /**
         * Mídia legada do WordPress preservada em `public/wp-content/`.
         *
         * O PDF da política de privacidade é linkado no rodapé de todas as
         * páginas do site antigo — e também pela nossa própria página de
         * aviso de privacidade. Sem o arquivo copiado para
         * `public/wp-content/uploads/`, os dois links quebram na virada.
         */
        source: "/wp-content/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
