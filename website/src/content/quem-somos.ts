import { assets } from "@/content/assets";
import {
  GALERIA_PRESIDENTES,
  PRESIDENTES_EM_DESTAQUE,
} from "@/content/presidentes";
import type { BlocoInstitucional, Depoimento, MarcoTrajetoria } from "@/types";

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
    [{ texto: "O PMI-DF é o braço oficial do PMI no DF e entorno. " }],
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
  /**
   * Embed do Canva, e não mais uma imagem exportada.
   *
   * A diretoria muda a cada gestão e as posições "em breve" vão sendo
   * preenchidas ao longo do biênio. Com o embed, quem cuida da arte publica no
   * Canva e o site acompanha — antes cada troca exigia exportar um .webp,
   * commitar e esperar um deploy.
   *
   * `href` é o link de origem: cumpre a atribuição pedida pelo Canva e é a
   * saída para quem não conseguir carregar o iframe (rede corporativa,
   * bloqueador de terceiros) ou quiser ver os nomes em tela cheia.
   */
  embed: {
    src: "https://www.canva.com/design/DAGd-DS6jJI/--jfPioB7IaP9cnlVNNoSg/view?embed",
    titulo: "Organograma da diretoria do PMI-DF, gestão 2025-2026",
    href:
      "https://www.canva.com/design/DAGd-DS6jJI/--jfPioB7IaP9cnlVNNoSg/view" +
      "?utm_content=DAGd-DS6jJI&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
    nome: "ORGANOGRAMA PMI-DF",
    autor: "Comunicação PMI",
  },
  rodapeTexto:
    "O organograma mostra os cargos. Por trás de cada um há uma pessoa que doa tempo ao capítulo.",
  botaoLabel: "Conhecer nossos voluntários",
  // Galeria de quem ocupa as posições do organograma. Não confundir com
  // `/voluntariado`, que explica o programa e leva às vagas abertas.
  botaoHref: "/quem-somos/voluntarios",
};

/* === Seção 5 — Presidentes ================================================ */

export const PRESIDENTES_TITULO = "Presidentes que nos trouxeram até aqui";
export const PRESIDENTES_SUBTITULO =
  "Cada presidente deixou sua marca na trajetória do capítulo. Conheça quem liderou o PMI-DF desde a fundação.";

/**
 * Só as gestões mais recentes. A lista completa vive em
 * `content/presidentes.ts` (fonte única) e é exibida em `/quem-somos/presidentes` — esta
 * seção é a prévia que leva até lá.
 */
export const PRESIDENTES = GALERIA_PRESIDENTES.slice(0, PRESIDENTES_EM_DESTAQUE);

export const PRESIDENTES_BOTAO_LABEL = "Ver galeria completa";
export const PRESIDENTES_BOTAO_HREF = "/quem-somos/presidentes";

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