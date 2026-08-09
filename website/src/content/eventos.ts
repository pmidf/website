import type {
  ConviteParticipacao,
  EventoAgenda,
  FormatoEvento,
  PassoInscricao,
} from "@/types";

/**
 * Conteúdo da página Eventos.
 *
 * Publicar um evento é acrescentar um item em `EVENTOS` — os filtros de
 * formato e categoria se atualizam sozinhos a partir da lista.
 */

/** Opções do filtro de formato. "Todos" é estado da UI, não um formato real. */
export const FORMATOS: Array<FormatoEvento | "Todos"> = [
  "Todos",
  "Presencial",
  "Online",
  "Híbrido",
];

/** Rótulo do filtro de categoria quando nenhuma está selecionada. */
export const TODAS_CATEGORIAS = "Todas as categorias";

/** Quantos cards aparecem antes do "Carregar mais". */
export const EVENTOS_POR_PAGINA = 6;

/**
 * Tratamento visual por formato: gradiente do card e gradiente aplicado ao
 * texto do chip (via `bg-clip-text`).
 */
export const ESTILO_FORMATO: Record<FormatoEvento, { card: string; chip: string }> = {
  Presencial: {
    card: "bg-[linear-gradient(180deg,#841E04_0%,#FF610F_76%)]",
    chip: "bg-[linear-gradient(90deg,#FF8C33_0%,#992905_100%)]",
  },
  Online: {
    card: "bg-[linear-gradient(180deg,#012029_0%,#00799E_76%)]",
    chip: "bg-[linear-gradient(90deg,#1AC7FF_0%,#023041_100%)]",
  },
  Híbrido: {
    card: "bg-[linear-gradient(180deg,#2A0A5C_0%,#4F17A8_76%)]",
    chip: "bg-[linear-gradient(90deg,#B465FF_0%,#380F78_100%)]",
  },
};

/** Gradiente roxo usado pelos cards que fogem da cor do próprio formato. */
const GRADIENTE_ROXO = "bg-[linear-gradient(180deg,#2A0A5C_0%,#4F17A8_76%)]";
const GRADIENTE_TEAL = "bg-[linear-gradient(180deg,#012029_0%,#00799E_76%)]";

/** Evento que abre a página, no banner "Evento em destaque". */
export const EVENTO_DESTAQUE = {
  chip: "Evento em destaque",
  titulo: "PMI-DF Summit 2026",
  meta: "09 NOV 2026 · Presencial, Brasília — DF · Inscrições pelo Sympla",
  descricao:
    "O maior encontro de gerenciamento de projetos do Distrito Federal. Um dia inteiro de palestras, painéis e networking com profissionais, estudantes e empresas.",
  inscricaoHref: "https://www.sympla.com.br/",
  programacaoHref: "/eventos/summit-2026",
} as const;

export const EVENTOS: EventoAgenda[] = [
  {
    id: "summit-2026",
    data: "09 NOV 2026",
    formato: "Presencial",
    categoria: "Summit",
    titulo: "PMI-DF Summit 2026",
    local: "Brasília — DF",
    descricao:
      "Reunindo profissionais, estudantes, empresas e especialistas para compartilhar tendências, experiências e oportunidades de networking.",
    href: "https://www.sympla.com.br/",
  },
  {
    id: "webinar-fator-humano",
    data: "26 NOV 2026",
    formato: "Online",
    categoria: "Webinar",
    titulo: "Webinar | O fator humano nos projetos",
    local: "Zoom",
    descricao:
      "Voltado para profissionais, estudantes e líderes que desejam desenvolver uma visão mais estratégica e humana sobre gestão de projetos.",
    href: "https://www.sympla.com.br/",
    gradiente: GRADIENTE_ROXO,
  },
  {
    id: "workshop-pmp",
    data: "29 NOV 2026",
    formato: "Online",
    categoria: "Workshop",
    titulo: "Workshop: Preparação para PMP",
    local: "Zoom",
    descricao:
      "Voltado para profissionais que desejam se preparar para a certificação PMP®, uma das credenciais mais reconhecidas no mundo.",
    href: "https://www.sympla.com.br/",
  },
  {
    id: "meetup-carreira",
    data: "05 DEZ 2026",
    formato: "Presencial",
    categoria: "Meetup",
    titulo: "Meetup PMI-DF | Carreira em projetos",
    local: "Impact Hub Brasília",
    descricao:
      "Encontro aberto da comunidade para troca de experiências sobre transição e evolução de carreira em gerenciamento de projetos.",
    href: "https://www.sympla.com.br/",
    gradiente: GRADIENTE_ROXO,
  },
  {
    id: "painel-ia",
    data: "12 DEZ 2026",
    formato: "Híbrido",
    categoria: "Painel",
    titulo: "Painel | IA aplicada a projetos",
    local: "Impact Hub + Zoom",
    descricao:
      "Especialistas discutem o uso prático de inteligência artificial no planejamento, na execução e no controle de projetos.",
    href: "https://www.sympla.com.br/",
    gradiente: GRADIENTE_TEAL,
  },
  {
    id: "student-club-primeiros-passos",
    data: "18 DEZ 2026",
    formato: "Presencial",
    categoria: "Student Club",
    titulo: "Student Club | Primeiros passos",
    local: "Brasília — DF",
    descricao:
      "Sessão introdutória para universitários que querem conhecer a área de projetos e o programa Student Club do capítulo.",
    href: "https://www.sympla.com.br/",
  },
];

export const PASSOS: PassoInscricao[] = [
  {
    titulo: "Escolha o evento",
    descricao:
      "Navegue pela agenda e use os filtros de formato ou categoria para achar o que faz sentido para você.",
  },
  {
    titulo: "Inscreva-se no Sympla",
    descricao:
      "O botão leva direto à página oficial do evento no Sympla, onde a inscrição e o pagamento são concluídos.",
  },
  {
    titulo: "Receba a confirmação",
    descricao:
      "O ingresso e os detalhes de acesso chegam por e-mail. Filiados ao PMI-DF têm condições especiais.",
  },
];

export const CONVITES: ConviteParticipacao[] = [
  {
    titulo: "Quer palestrar?",
    descricao:
      "Compartilhe sua experiência com a comunidade de projetos do Distrito Federal. Envie sua proposta de tema para os próximos eventos do capítulo.",
    ctaLabel: "Enviar proposta",
    ctaHref: "/contato?assunto=palestra",
    ctaVariante: "escuro",
  },
  {
    titulo: "Quer patrocinar?",
    descricao:
      "Conecte sua marca a uma audiência qualificada de gerentes de projeto, executivos, empresas e estudantes de todo o DF.",
    ctaLabel: "Falar com o PMI-DF",
    ctaHref: "/contato?assunto=patrocinio",
    ctaVariante: "contorno-escuro",
  },
];
