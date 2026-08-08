/**
 * Fonte única de verdade para dados institucionais e navegação.
 * Alterar o menu = alterar este arquivo (Header, Footer e sitemap leem daqui).
 */

export const site = {
  name: "Nome da Empresa",
  shortName: "Empresa",
  description:
    "Descrição institucional da empresa em uma frase, usada como meta description padrão.",
  url: "https://www.exemplo.com.br",
  locale: "pt-BR",
  contact: {
    email: "contato@exemplo.com.br",
    phone: "+55 11 0000-0000",
    address: "Rua Exemplo, 123 — São Paulo, SP",
  },
  social: {
    linkedin: "https://linkedin.com/company/exemplo",
    instagram: "https://instagram.com/exemplo",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
};

/** Menu principal do Header. */
export const mainNav: NavItem[] = [
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Soluções", href: "/solucoes" },
  { label: "Cases", href: "/cases" },
  { label: "Blog", href: "/blog" },
  { label: "Carreiras", href: "/carreiras" },
];

/** Colunas do Footer. */
export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Empresa",
    items: [
      { label: "Sobre", href: "/sobre" },
      { label: "Cases", href: "/cases" },
      { label: "Carreiras", href: "/carreiras" },
    ],
  },
  {
    title: "O que fazemos",
    items: [
      { label: "Serviços", href: "/servicos" },
      { label: "Soluções", href: "/solucoes" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Política de Privacidade", href: "/politica-de-privacidade" },
      { label: "Termos de Uso", href: "/termos-de-uso" },
    ],
  },
];
