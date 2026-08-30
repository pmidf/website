/**
 * Dados institucionais do capítulo — alimentam metadata, robots e sitemap.
 * A navegação (menu e redes sociais) fica em `src/content/navegacao.ts`.
 */

export const site = {
  name: "PMI Distrito Federal",
  shortName: "PMI-DF",
  description:
    "Capítulo oficial do Project Management Institute no Distrito Federal. Conectamos profissionais, empresas e instituições às melhores práticas de gestão, projetos e liderança.",
  // TODO: confirmar o domínio de produção — usado em metadataBase, robots e sitemap.
  url: "https://pmidf.org.br",
  locale: "pt-BR",
  contact: {
    email: "contato@pmidf.org.br",
    phone: "+55 61 0000-0000",
    address:
      "Impact Hub Brasília - SGAN 601 Edifício Íon. Lote H - Asa Norte, Brasília - DF, 70830-019",
  },
} as const;
