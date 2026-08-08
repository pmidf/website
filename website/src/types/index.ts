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
