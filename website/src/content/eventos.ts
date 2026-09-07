import type { ConviteParticipacao, FormatoEvento, PassoInscricao } from "@/types";

/**
 * Conteúdo *estático* da página Eventos.
 *
 * A agenda em si não mora aqui: ela vem da API do Sympla, em `lib/sympla.ts`.
 * Publicar um evento é publicá-lo no Sympla — os filtros de formato e categoria
 * se derivam sozinhos do que a API devolve. O que fica neste arquivo são os
 * rótulos, o tratamento visual e os textos institucionais.
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

/** Evento que abre a página, no banner "Evento em destaque". */
/**
 * Dados conferidos na página do evento no Sympla: 09/11/2026 09h a 11/11/2026
 * 13h, no Monumental Eventos. Antes o banner dizia "um dia inteiro", apontava
 * para a home do Sympla e tinha um botão "Ver programação" para
 * `/eventos/summit-2026`, rota que não existe — o clique caía no 404.
 */
/**
 * Eventos da Sympla que não devem aparecer na agenda.
 *
 * Existe porque a API não tem como dizer que um item está fora do ar: uma
 * edição antiga republicada continua respondendo `published: 1` e
 * `cancelled: 0`, igual à edição vigente. Conferimos os dois registros do
 * "Workshop para Certificação CAPM®" campo a campo — não há diferença
 * nenhuma no dado. Só quem cuida do Sympla sabe qual é qual.
 *
 * Vale principalmente para os cursos gravados (Sympla Play, categoria
 * `ONDEMAND`), que ficam publicados por tempo indeterminado e acumulam
 * versões, mas funciona para qualquer evento.
 *
 * ## Como usar
 *
 * Cole a URL da página do evento, exatamente como aparece no navegador. A
 * comparação ignora barra final, maiúsculas e query string, então não é
 * preciso limpar o endereço antes.
 *
 * A alternativa definitiva é despublicar o item no próprio Sympla — aí ele
 * some da API e esta lista nem precisa saber que ele existiu.
 */
export const EVENTOS_OCULTOS: string[] = [
  // Edição antiga do workshop de CAPM; a que vale é a /3430962.
  "https://www.sympla.com.br/play/workshop-para-certificacao-capm-r/1875615",
];

export const EVENTO_DESTAQUE = {
  chip: "Evento em destaque",
  titulo: "PMI-DF Summit 2026",
  meta: "09 a 11 de novembro de 2026 · Monumental Eventos, Brasília — DF",
  descricao:
    "O maior encontro de gerenciamento de projetos do Distrito Federal. Três dias de palestras, painéis e networking com profissionais, estudantes e empresas.",
  inscricaoHref: "https://www.sympla.com.br/evento/pmi-df-summit-2026/3199543",
} as const;

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
