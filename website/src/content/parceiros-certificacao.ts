type ParceiroCta = {
  label: string;
  href: string;
};

export type ParceiroCertificacao = {
  badge: string;
  nome: string;
  descricao: string;
  detalhe?: string;
  logoText?: string;
  logoSrc?: string;
  logoAlt?: string;
  ctaPrincipal: ParceiroCta;
  ctaSecundario?: ParceiroCta;
  observacao?: string;
  observacaoCta?: ParceiroCta;
};

export const PARCEIROS_CERTIFICACAO: ParceiroCertificacao[] = [
  {
    badge: "Authorized Training Partner",
    nome: "JUMP",
    logoText: "J",
    descricao:
      "Parceira do PMI-DF em treinamentos preparatórios para PMP®, CAPM® e PMI-ACP®. Filiados e participantes do capítulo têm cupom de desconto nos cursos.",
    detalhe:
      "Conteúdo oficial, instrutores avaliados e horas de contato válidas para apoiar sua preparação com mais segurança.",
    ctaPrincipal: {
      label: "Solicitar cupom de desconto",
      href: "/contato?assunto=cupom-jump",
    },
    ctaSecundario: {
      label: "Ver cursos ↗",
      href: "https://jumppmi.com.br",
    },
    observacao:
      "Procura outro parceiro? O diretório oficial do PMI lista todos os Authorized Training Partners e permite verificar se um provedor é autorizado.",
    observacaoCta: {
      label: "Abrir diretório ↗",
      href: "https://www.pmi.org/",
    },
  },
  {
    badge: "Turma de abril - vagas limitadas",
    nome: "Plano Academy",
    logoText: "PA",
    descricao:
      "Passe no PMP® na primeira tentativa com uma turma ao vivo, preparada para quem quer foco, método e acompanhamento durante a jornada.",
    detalhe:
      "Início: 20/04/2026 · Horário: 18h30 às 22h30 · Seg e Qui · Modalidade: Online ao vivo · Carga horária: 40h em 10 encontros.",
    ctaPrincipal: {
      label: "Quero minha vaga",
      href: "/contato?assunto=plano-academy",
    },
    ctaSecundario: {
      label: "Conhecer programa ↗",
      href: "#",
    },
    observacao:
      "Ideal para quem precisa de um cronograma definido e quer estudar com foco em aprovação.",
  },
  {
    badge: "Treinamento corporativo",
    nome: "DC | DinsmoreCompass",
    logoText: "DC",
    descricao:
      "Referência em gestão de projetos, processos e pessoas, com educação corporativa e treinamentos autorizados pelo PMI para desenvolvimento técnico de equipes.",
    detalhe:
      "A DC possui atuação em educação corporativa, Academia DC e treinamentos voltados ao desenvolvimento de competências em projetos.",
    ctaPrincipal: {
      label: "Solicitar proposta",
      href: "https://www.dc.srv.br/contato/",
    },
    ctaSecundario: {
      label: "Visitar site ↗",
      href: "https://www.dc.srv.br",
    },
    observacao:
      "Boa opção para empresas que querem capacitação in company e jornadas estruturadas em gerenciamento de projetos.",
  },
];