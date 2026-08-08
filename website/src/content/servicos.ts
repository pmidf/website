/**
 * Catálogo de serviços.
 *
 * Com `output: "export"` no next.config, a rota `/servicos/[slug]` é gerada em
 * build a partir desta lista (ver `generateStaticParams`). Adicionar um serviço
 * aqui é suficiente para criar a página estática correspondente.
 */

export type Servico = {
  slug: string;
  title: string;
  summary: string;
};

export const servicos: Servico[] = [
  {
    slug: "consultoria",
    title: "Consultoria",
    summary: "Diagnóstico e plano de ação sob medida.",
  },
  {
    slug: "implementacao",
    title: "Implementação",
    summary: "Execução ponta a ponta do projeto.",
  },
  {
    slug: "suporte",
    title: "Suporte",
    summary: "Sustentação e evolução contínua.",
  },
];

export function getServico(slug: string): Servico | undefined {
  return servicos.find((s) => s.slug === slug);
}
