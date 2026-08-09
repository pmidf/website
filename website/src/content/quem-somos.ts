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
  botaoLabel: "Conheça o PMI Global",
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
          "Reúne mais de 500 mil membros em mais de 200 países. Define padrões, emite certificações reconhecidas globalmente e publica o PMBOK, referência da área.",
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
          "Promovemos eventos, formamos profissionais, conectamos empresas e fortalecemos a comunidade de projetos em Brasília.",
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
    ano: "2000",
    texto: "Fundação do capítulo PMI-DF",
    cor: "linear-gradient(90deg, #ff610f, #841e04)",
  },
  {
    ano: "2010",
    texto:
      "Primeiro vez do Congresso Brasileiro de Gestão, Projetos e Liderança em Brasília",
    cor: "linear-gradient(90deg, #8a38f5, #1f0942)",
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
  botaoLabel: "+190 voluntários ativos",
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
    periodo: "Gestão 2025/2026",
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
    nome: "Ana Luiza Martins",
    papel: "Desenvolvedora Front-end",
    chipGradiente: "linear-gradient(90deg, #8a38f5, #1f0942)",
    citacao:
      "Participar da comunidade mudou completamente a forma como eu aprendo tecnologia. Além do conhecimento técnico, encontrei pessoas que realmente incentivam meu crescimento profissional e pessoal.",
    legenda: "Membro há 2 anos",
    cardGradiente: "var(--gradiente-mentorado)",
    lado: "esquerda",
  },
  {
    foto: assets.quemSomos.depoimentoLucas,
    nome: "Lucas Costa",
    papel: "Voluntário de Projetos",
    chipGradiente: "linear-gradient(90deg, #1ac7ff, #023041)",
    citacao:
      "Comecei como voluntário buscando experiência prática e hoje já participei de projetos que fortaleceram meu portfólio e minha confiança. O ambiente é colaborativo e acolhedor desde o primeiro contato.",
    legenda: "1 ano de atuação",
    cardGradiente: "linear-gradient(180deg, #023041, #057ba7)",
    lado: "direita",
  },
  {
    foto: assets.quemSomos.depoimentoCamila,
    nome: "Camila Ferreira",
    papel: "UX/UI Designer",
    chipGradiente: "linear-gradient(90deg, #ff610f, #841e04)",
    citacao:
      "A comunidade me ajudou a transformar ideias em projetos reais. Cada evento, workshop e troca com outras pessoas trouxe novas perspectivas para minha carreira na área de tecnologia.",
    legenda: "Participante ativa desde 2023",
    cardGradiente: "linear-gradient(180deg, #841e04, #ff610f)",
    lado: "esquerda",
  },
];