import type { IconType } from "react-icons";

/**
 * Contratos de dados do site institucional PMI-DF.
 *
 * Estes tipos descrevem o *conteúdo* (o que vem de `src/content/`), não as
 * props de componentes — props ficam junto de cada componente. Assim, trocar a
 * origem do conteúdo (CMS, JSON, API) não obriga a mexer na camada visual.
 */

/** Item de navegação do Header e de listas de links internos. */
export type NavLink = {
  label: string;
  href: string;
};

/**
 * Rede social exibida no rodapé. Sempre link externo.
 *
 * `Icone` é o componente vindo de `react-icons` — glifo em `currentColor`, e
 * não um arquivo em `public/`. Herdar a cor do texto é o que permite o hover
 * funcionar sem trocar de imagem.
 */
export type RedeSocial = {
  nome: string;
  href: string;
  Icone: IconType;
};

/**
 * Arte decorativa posicionada em absoluto dentro de um card.
 *
 * `largura`/`altura` são as dimensões **intrínsecas** do arquivo (o `viewBox`
 * do SVG). O navegador deriva a altura renderizada dessa proporção, então um
 * número errado aqui espreme a forma — não são valores de layout.
 */
export type Deco = {
  src: string;
  largura: number;
  altura: number;
  /** Classes de posicionamento e tamanho responsivo dentro do card. */
  classe: string;
};

/** Card da seção "Conheça mais das nossas iniciativas". */
export type Iniciativa = {
  titulo: string;
  descricao: string;
  href: string;
  /** Classe Tailwind do gradiente de fundo do card. */
  gradiente: string;
  deco: Deco;
};

/** Formato de realização de um evento. */
export type FormatoEvento = "Presencial" | "Online" | "Híbrido";

/** Card da seção "Eventos". `href` aponta para inscrição externa (Sympla). */
export type Evento = {
  data: string;
  formato: FormatoEvento;
  titulo: string;
  descricao: string;
  href: string;
  /** Classe Tailwind do gradiente de fundo do card. */
  gradiente: string;
  /** Gradiente aplicado ao texto do chip de formato (via `bg-clip-text`). */
  chipTexto: string;
};

/** Logo de mantenedor. `w`/`h` são as dimensões intrínsecas do arquivo. */
export type Mantenedor = {
  nome: string;
  src: string;
  w: number;
  h: number;
};

/* --- Página Eventos ------------------------------------------------------- */

/**
 * Evento da agenda. Mais rico que o `Evento` da home, que é um resumo de três
 * cards: aqui entram `id`, `categoria` e `local`, usados pelos filtros.
 *
 * O visual sai do `formato` (ver `ESTILO_FORMATO` em `content/eventos.ts`);
 * `gradiente` existe só para os casos em que o protótipo foge dessa regra.
 */
export type EventoAgenda = {
  id: string;
  data: string;
  formato: FormatoEvento;
  categoria: string;
  titulo: string;
  local: string;
  descricao: string;
  href: string;
  /** Sobrescreve o gradiente derivado do formato. */
  gradiente?: string;
};

/** Passo da seção "Como se inscrever". O número é gerado pela ordem da lista. */
export type PassoInscricao = {
  titulo: string;
  descricao: string;
};

/** Card da seção "Faça parte da programação". */
export type ConviteParticipacao = {
  titulo: string;
  descricao: string;
  ctaLabel: string;
  ctaHref: string;
  ctaVariante: "escuro" | "contorno-escuro";
};

/* --- Página Filiação ------------------------------------------------------ */

/**
 * Um dos três motivos para se filiar.
 *
 * Tem duas apresentações: no mobile é um card colorido (`cor`); no desktop, o
 * texto sobreposto a uma forma geométrica posicionada em absoluto. Os dois
 * tratamentos leem o mesmo `texto` — a duplicação está no estilo, não no
 * conteúdo.
 */
export type MotivoFiliacao = {
  texto: string;
  /** Classe de fundo do card no mobile, na cor da forma correspondente. */
  cor: string;
  forma: Deco;
  /** Posicionamento do texto sobre a composição do desktop. */
  textoClasse: string;
};

/** Item das listas de benefícios (PMI Global e PMI-DF). */
export type Beneficio = {
  titulo: string;
  descricao: string;
  /**
   * Ícone do clube de benefícios local. Opcional porque o protótipo desenha
   * ícone só em parte dos itens.
   */
  Icone?: IconType;
};

/** Categoria de anuidade exibida na seção "Investimento". */
export type CategoriaFiliacao = {
  titulo: string;
  descricao: string;
  /** Classe da barrinha colorida no topo do card. */
  barra: string;
};

/** Par pergunta/resposta do acordeão de dúvidas. */
export type PerguntaFrequente = {
  pergunta: string;
  resposta: string;
};

/* --- Página Voluntariado -------------------------------------------------- */

/**
 * Card de título + descrição identificado por uma cor.
 *
 * Serve a duas seções de Voluntariado com formatos visuais distintos — nos
 * benefícios a cor pinta o card inteiro, no Student Club pinta só o quadrado
 * do topo. O que elas compartilham é o dado, não o layout.
 */
export type CardColorido = {
  titulo: string;
  descricao: string;
  /** Classe Tailwind de fundo. */
  cor: string;
};

/** Passo de "Como começar". O número vem da ordem da lista. */
export type PassoVoluntariado = {
  titulo: string;
  descricao: string;
};

/* --- Página Mentoring ----------------------------------------------------- */

/** Card de número da seção "O que é". `cor` é um `var()` de `mentoring.css`. */
export type EstatisticaMentoring = {
  numero: string;
  legenda: string;
  cor: string;
};

/** Um dos dois cards de "Você pode entrar como mentor ou mentorado". */
export type CaminhoMentoring = {
  /** Define a variante visual do card (gradiente roxo vs. branco). */
  perfil: "mentorado" | "mentor";
  titulo: string;
  citacao: string;
  itens: string[];
  ctaLabel: string;
};

/** Etapa numerada da seção "Estrutura do ciclo". */
export type EtapaCiclo = {
  titulo: string;
  descricao: string;
};

/** Card de "O que a mentoria entrega". `cor` é um `var()` de `mentoring.css`. */
export type EntregaMentoring = {
  titulo: string;
  descricao: string;
  cor: string;
};

/* --- Página Quem Somos ----------------------------------------------------- */

/** Um trecho de texto corrido; `forte` marca o pedaço que vai em `<strong>`. */
export type Segmento = {
  texto: string;
  forte?: boolean;
};

/** Um dos dois blocos de texto da Seção 2 ("O que é o PMI e o PMI-DF"). */
/** Cada item de `paragrafos` é um `<p>` próprio, sem margem entre eles —
 * é assim que o Figma estrutura o texto (2 parágrafos no Bloco 1, 3 no
 * Bloco 2), não como um único bloco corrido. */
export type BlocoInstitucional = {
  titulo: string;
  paragrafos: Segmento[][];
};

/** Item da linha do tempo (Seção 3). `cor` é uma cor/gradiente CSS literal — o
 * Figma usa um valor diferente por marco, não um enum reaproveitável. */
export type MarcoTrajetoria = {
  ano: string;
  texto: string;
  cor: string;
};

/** Card de presidente (Seção 5). */
export type Presidente = {
  foto: string;
  nome: string;
  periodo: string;
};

/** Depoimento (Seção 6). `lado` decide de que lado a foto fica; `cardGradiente`
 * e `chipGradiente` são valores CSS literais, um por pessoa. */
export type Depoimento = {
  foto: string;
  nome: string;
  papel: string;
  chipGradiente: string;
  citacao: string;
  legenda: string;
  cardGradiente: string;
  lado: "esquerda" | "direita";
};
