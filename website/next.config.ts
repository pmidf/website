import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        // gera site 100% estático na pasta /out
  trailingSlash: true,     // gera /sobre/index.html — essencial no Apache da HostGator
  images: {
    unoptimized: true,     // o otimizador de imagem do Next exige servidor Node
  },
  // basePath: "/subpasta", // só se o site NÃO ficar na raiz do domínio
};

export default nextConfig;
