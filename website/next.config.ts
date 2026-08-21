import type { NextConfig } from "next";

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
  trailingSlash: true, // mantém as URLs já indexadas (/eventos/) inalteradas
  images: {
    unoptimized: true, // herdado do export; ligar a otimização é um passo à parte
  },
};

export default nextConfig;
