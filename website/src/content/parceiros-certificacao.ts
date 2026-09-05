export type ParceiroCertificacao = {
  nome: string;
  /** Iniciais exibidas na placa quando não há arquivo de logo. */
  logoText: string;
  descricao: string;
  /** Site do parceiro. Um destino por card — o único CTA de cada um. */
  href: string;
};

/**
 * Os três parceiros de treinamento do capítulo.
 *
 * Todos os três são Authorized Training Partners do PMI — por isso o selo é da
 * seção, e não de cada card. Antes cada um trazia um rótulo diferente
 * ("Turma de abril — vagas limitadas", "Treinamento corporativo"), o que dava
 * a entender que só o primeiro era ATP e transformava a seção numa vitrine de
 * ofertas com prazo, que envelhece sozinha.
 *
 * Cada card tem um CTA só, para o site do parceiro. A solicitação de cupom é
 * uma ação do capítulo, não de um parceiro específico, então virou um único
 * botão no fim da seção.
 */
export const PARCEIROS_CERTIFICACAO: ParceiroCertificacao[] = [
  {
    nome: 'Jump Educação',
    logoText: 'J',
    descricao:
      'Treinamentos preparatórios para PMP®, CAPM® e PMI-ACP®, com conteúdo oficial e horas de contato válidas para a inscrição no exame.',
    href: 'https://www.jumpeducacao.com.br/',
  },
  {
    nome: 'Plano Consulting',
    logoText: 'PC',
    descricao:
      'Turmas ao vivo com método e acompanhamento, para quem prefere um cronograma definido e estudo em grupo até a aprovação.',
    href: 'https://plano.consulting/',
  },
  {
    nome: 'DC | DinsmoreCompass',
    logoText: 'DC',
    descricao:
      'Educação corporativa e preparatório PMP® autorizado pelo PMI, com foco no desenvolvimento de competências de times inteiros.',
    href: 'https://www.dc.srv.br/preparatoriopmpatpdopmi.html',
  },
];

/** Diretório oficial do PMI, para conferir se um provedor é autorizado. */
export const DIRETORIO_ATP =
  'https://www.pmi.org/certifications/certification-resources/authorized-training-partners';
