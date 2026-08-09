/**
 * Dicionário único de assets estáticos.
 *
 * Nenhum componente escreve caminho de imagem "na mão": todos importam daqui.
 * Renomear um arquivo exportado do Figma vira uma edição em um só lugar, e o
 * TypeScript aponta imediatamente quem usava a chave removida.
 *
 * Organização de `public/assets/` (ver README de lá):
 *   marca/        identidade — vale para o site inteiro
 *   formas/       geometria decorativa do design system, reaproveitável
 *   mantenedores/ logos de parceiros
 *   paginas/<rota>/ fotos e artes exclusivas de uma página só
 *
 * Todos os bitmaps são .webp: o export estático não tem otimizador em runtime,
 * então a compressão é feita uma vez, na entrada do repositório.
 */
export const assets = {
  marca: {
    /**
     * Lockup padrão (193 × 75), texto azul-escuro — só funciona sobre fundo
     * claro. Falta a versão branca para uso sobre o roxo do Hero.
     */
    logo: "/assets/marca/logo-pmidf.webp",
  },

  /**
   * Formas geométricas da identidade. Ficam fora de `paginas/` de propósito:
   * as mesmas peças reaparecem em Sobre, Eventos e InCompany.
   */
  formas: {
    losangosLaranja: "/assets/formas/losangos-laranja.webp",
    pentagonoAzul: "/assets/formas/pentagono-azul.webp",
    trianguloRoxo: "/assets/formas/triangulo-roxo.webp",
    circuloLaranja: "/assets/formas/circulo-laranja.webp",
    capsulaGradiente: "/assets/formas/capsula-gradiente.webp",
    /* Versões grandes, usadas na composição de "Por que se filiar". */
    circuloCiano: "/assets/formas/circulo-ciano.webp",
    trianguloLaranja: "/assets/formas/triangulo-laranja.webp",
    pentagonoRoxo: "/assets/formas/pentagono-roxo.webp",
  },

  mantenedores: {
    brbLab: "/assets/mantenedores/brb-lab.webp",
    brisk: "/assets/mantenedores/brisk.webp",
    smartkanvas: "/assets/mantenedores/smartkanvas.webp",
  },

  /**
   * Ícones de redes sociais não moram aqui: vêm de `react-icons` (Font Awesome
   * 6 Brands), declarados em `src/content/navegacao.ts`.
   */

  /** Artes exclusivas da home. Outras páginas ganham a própria chave aqui. */
  home: {
    heroFundo: "/assets/paginas/home/hero-fundo.webp",
    heroBrasilia: "/assets/paginas/home/hero-brasilia.webp",
  },

<<<<<<< HEAD
  eventos: {
    /**
     * Fundo do banner "Evento em destaque" (1115 × 396). O gradiente e os
     * círculos decorativos já vêm embutidos na arte — não há gradiente CSS
     * nem SVGs de ornamento nessa seção.
     */
    banner: "/assets/paginas/eventos/banner.webp",
  },

  filiacao: {
    /** Foto quadrada (572 × 572) recortada em círculo, repetida em 3 seções. */
    fotoEvento: "/assets/paginas/filiacao/foto-evento.webp",
=======
  /**
   * Artes exclusivas da página Quem Somos. Exportadas do Figma via MCP
   * (`get_design_context`/`download_assets`) e convertidas para .webp no
   * tamanho de exibição — ver histórico do PR para os nós de origem.
   */
  quemSomos: {
    heroBrasilia: "/assets/paginas/quem-somos/hero-brasilia.webp",
    organograma: "/assets/paginas/quem-somos/organograma.webp",
    presidenteMatheus: "/assets/paginas/quem-somos/presidente-matheus.webp",
    presidenteCristina: "/assets/paginas/quem-somos/presidente-cristina.webp",
    presidenteGino: "/assets/paginas/quem-somos/presidente-gino.webp",
    depoimentoAna: "/assets/paginas/quem-somos/depoimento-ana.webp",
    depoimentoLucas: "/assets/paginas/quem-somos/depoimento-lucas.webp",
    depoimentoCamila: "/assets/paginas/quem-somos/depoimento-camila.webp",
>>>>>>> quemsomos
  },
} as const;
