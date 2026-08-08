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

/** Rede social exibida no rodapé. Sempre link externo. */
export type RedeSocial = {
  nome: string;
  src: string;
  href: string;
};

/** Card da seção "Conheça mais das nossas iniciativas". */
export type Iniciativa = {
  titulo: string;
  descricao: string;
  href: string;
  /** Classe Tailwind do gradiente de fundo do card. */
  gradiente: string;
  /** Caminho da imagem decorativa (ornamental, sem valor semântico). */
  deco: string;
  /** Classes de posicionamento/tamanho da decoração dentro do card. */
  decoClasse: string;
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
