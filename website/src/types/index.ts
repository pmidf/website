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
