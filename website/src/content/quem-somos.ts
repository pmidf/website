import { assets } from "@/content/assets";
import type {
  BlocoInstitucional,
  Depoimento,
  MarcoTrajetoria,
  Presidente,
} from "@/types";

/**
 * Conteúdo da página Quem Somos.
 *
 * Puxado do arquivo Figma via MCP (`get_design_context`/`get_metadata`), não
 * transcrito à mão — por isso alguns textos aqui divergem do prompt original
 * (que tinha títulos como "[DEFINIR TÍTULO]" e alguns dados desatualizados).
 * Ver a mensagem de entrega para a lista completa de divergências encontradas.
 */

/* === Seção 1 — Hero ====================================================== */

export const HERO = {
  titulo: "Quem somos",
  // "PMI Distrito Federal" é Aeonik Bold no Figma — mantém o destaque.
  subtitulo: [
    { texto: "A história, a governança e as pessoas por trás do " },
    { texto: "PMI Distrito Federal", forte: true },
    { texto: ". Conheça quem constrói o capítulo todos os dias." },
  ],
  botaoLabel: "Conheça o PMI",
  // O botão existe no Figma em x=87 y=560, fora dos 319px do frame do Hero —
  // erro de posicionamento no protótipo. Mantido, mas centralizado sob o
  // subtítulo em vez de reproduzir a posição órfã.
  botaoHref: "https://www.pmi.org",
};

/* === Seção 2 — O que é o PMI e o PMI-DF ================================== */

export const BLOCO_PMI: BlocoInstitucional = {
  titulo: "O que é o PMI?",
  paragrafos: [
    [
      { texto: "O " },
      { texto: "Project Management Institute", forte: true },
      {
        texto:
          " é a maior associação profissional de gerenciamento de projetos do mundo. ",
      },
    ],
    [
      {
        texto:
          "Reúne mais de 750 mil membros em mais de 290 capítulos. Define padrões, emite certificações reconhecidas globalmente e publica o PMBOK, referência da área.",
      },
    ],
  ],
};

export const BLOCO_PMIDF: BlocoInstitucional = {
  titulo: "O Capítulo do PMI-DF",
  paragrafos: [
    [{ texto: "O PMI-DF é o braço oficial do PMI no Distrito Federal. " }],
    [{ texto: "Traduzimos a missão global em ações locais. " }],
    [
      {
        texto:
          "Promovemos eventos, formamos profissionais, conectamos empresas e fortalecemos a comunidade de projetos DF e entorno.",
      },
    ],
  ],
};

export const FOTO_BRASILIA = {
  src: assets.quemSomos.heroBrasilia,
  alt: "Fotografia de Brasília, sede do PMI Distrito Federal",
  largura: 426,
  altura: 639,
};

/* === Seção 3 — Linha do tempo ("Nossa trajetória") ======================= */

export const TRAJETORIA = {
  titulo: "Nossa trajetória",
  subtitulo: "Mais de duas décadas construindo a comunidade de projetos no DF.",
};

/**
 * `cor` é o valor literal de `background` do chip (cor sólida ou gradiente) —
 * cada marco tem uma cor própria no Figma, sem um padrão reaproveitável entre
 * eles (ver mensagem de entrega: os 2 últimos usam um componente de chip
 * diferente dos 3 primeiros, herdado de outra página).
 *
 * "Primeiro vez" e "PMI GLobal Awards" são erros de digitação que já estavam
 * no texto original do Figma — mantidos verbatim, sinalizados na entrega.
 */
export const MARCOS: MarcoTrajetoria[] = [
  {
    ano: "1999",
    texto: "Início da formação do capítulo",
    cor: "linear-gradient(90deg, #ff610f, #841e04)",
  },
  {
    ano: "2001",
    texto: " formalização do capítulo PMI-DF",
    cor: "linear-gradient(90deg, #ff610f, #841e04)",
  },
  {
    ano: "2010",
    texto:
      "Primeiro vez do Congresso Brasileiro de Gestão, Projetos e Liderança em Brasília",
    cor: "linear-gradient(90deg, #8a38f5, #1f0942)",
  },
  {
    ano: "2020",
    texto: "Realização do primeiro e único CGBPL online.",
    cor: "linear-gradient(90deg, #1ac7ff, #023041)",
  },
  {
    ano: "2021",
    texto: "PMI-DF vence PMI GLobal Awards de melhor capítulo do mundo",
    cor: "linear-gradient(90deg, #1ac7ff, #023041)",
  },
  {
    ano: "2024",
    texto: "Criação do primeiro Student Club do Brasil",
    cor: "#ff610f",
  },
  {
    ano: "2025",
    texto: "Rebranding do PMI-DF Summit, antigo EGP PMI-DF",
    cor: "#200f3b",
  },
];

/* === Seção 4 — Diretoria ("Organograma") ================================= */

export const DIRETORIA = {
  titulo: "Organograma",
  subtitulo: "A diretoria que conduz o PMI-DF nesta gestão 2025-2026.",
  imagem: {
    src: assets.quemSomos.organograma,
    alt: "Organograma da diretoria do PMI-DF, gestão 2025-2026",
    largura: 1280,
    altura: 517,
  },
  rodapeTexto: "Conheça também nossos",
  botaoLabel: "conheça nosso voluntários",
  // Único destino existente no site para "voluntários" (ver INICIATIVAS na
  // home) — a página em si ainda não foi implementada.
  botaoHref: "/voluntariado",
};

/* === Seção 5 — Presidentes ================================================ */

export const PRESIDENTES_TITULO = "Presidentes que nos trouxeram até aqui";
export const PRESIDENTES_SUBTITULO =
  "Cada presidente deixou sua marca na trajetória do capítulo. Conheça quem liderou o PMI-DF desde a fundação.";

export const PRESIDENTES: Presidente[] = [
  {
    foto: assets.quemSomos.presidenteMatheus,
    nome: "Matheus Rocha",
    periodo: "01/01/2025 até 31/12/2026",
  },
  {
    foto: assets.quemSomos.presidenteCristina,
    nome: "Cristina Duarte",
    periodo: "01/01/2023 até 31/12/2024",
  },
  {
    foto: assets.quemSomos.presidenteGino,
    nome: "Gino Terentim",
    periodo: "01/01/2021 até 31/12/2022",
  },
];

export const PRESIDENTES_BOTAO_LABEL = "Ver galeria completa";
// Sem destino real definido — não existe página de galeria ainda.
export const PRESIDENTES_BOTAO_HREF = "#";

/* === Seção 6 — Depoimentos ("Vozes da comunidade") ======================= */

export const DEPOIMENTOS_TITULO = "Vozes da comunidade";
export const DEPOIMENTOS_SUBTITULO =
  "Quem faz o PMI-DF acontecer conta o que mudou na carreira e na vida.";

export const DEPOIMENTOS: Depoimento[] = [
  {
    foto: assets.quemSomos.depoimentoAna,
    nome: "Ana Paula Sometes",
    papel: "Presidente do Student Club",
    chipGradiente: "linear-gradient(90deg, #8a38f5, #1f0942)",
    citacao:
      "Voluntariar-se é se desafiar o tempo todo e descobrir que podemos ir muito além do que acreditávamos ser possível lá no ponto de partida. Quando olho para poucos meses atrás e percebo os novos conhecimentos que adquiri, as habilidades que desenvolvi, as pessoas queridas com quem troquei experiências e o impacto do trabalho que o nosso time realizou, sinto que todo o investimento do meu tempo neste propósito valeu cada segundo",
    legenda: "Membro há 1 anos",
    cardGradiente: "var(--gradiente-mentorado)",
    lado: "esquerda",
  },
  {
    foto: assets.quemSomos.depoimentoLucas,
    nome: "Rodrigo Ferreira",
    papel: "Engenheiro de Produção PMP",
    chipGradiente: "linear-gradient(90deg, #1ac7ff, #023041)",
    citacao:
      "Eu não esperava que um trabalho voluntário mudasse a forma como enxergo minha carreira. No PMI DF, aprendi que liderar não é ter todas as respostas, é criar espaço para as pessoas certas crescerem. Ganhei mais que experiência: ganhei amigos que viraram parceiros de caminhada profissional. O PMI DF não forma apenas gestores de projeto. Forma quem decide assumir a própria trajetória, e não faz isso sozinho.",
    legenda: "1 ano de atuação",
    cardGradiente: "linear-gradient(180deg, #023041, #057ba7)",
    lado: "direita",
  },
  {
    foto: assets.quemSomos.depoimentoCamila,
    nome: "Renata Marra",
    papel: "Diretora PMI-DF",
    chipGradiente: "linear-gradient(90deg, #ff610f, #841e04)",
    citacao:
      "Desde que me envolvi com o PMI-DF, venho desenvolvendo novas habilidades, ampliando minha visão e aprendendo diariamente com pessoas incríveis. Quanto mais me envolvo, mais preparada e confiante me sinto profissionalmente. É um forte sentimento de pertencimento, somado à vontade genuína de gerar impacto, contribuir e fazer a diferença. Acredito que pessoas transformam projetos, e projetos transformam pessoas.",
    legenda: "Participante ativa desde 2024",
    cardGradiente: "linear-gradient(180deg, #841e04, #ff610f)",
    lado: "esquerda",
  },
];