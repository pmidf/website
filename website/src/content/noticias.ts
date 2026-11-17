import { assets } from "@/content/assets";
import { MATERIA_SUMMIT_2026 } from "@/content/materias/pmi-df-summit-2026";
import type { CategoriaNoticia, Materia, Noticia, NoticiaInterna } from "@/types";

/**
 * Conteúdo da página Notícias.
 *
 * A lista mistura dois tipos de item:
 * - **externa**: matéria publicada fora do site (imprensa, PMI.org,
 *   LinkedIn). O card abre o link original em nova aba.
 * - **interna**: matéria publicada aqui, em `/noticias/<id>`, com o texto em
 *   `src/content/materias/`.
 *
 * A ordem da lista não importa: a página ordena pela `data`.
 *
 * ## Como cadastrar uma externa
 *
 * 1. Imagem (opcional): salve em `public/assets/paginas/noticias/<id>.webp`,
 *    1200 × 675 (16:9), e registre a chave em `assets.noticias`. Sem imagem,
 *    o card usa a capa gerada a partir da categoria.
 * 2. Acrescente `{ tipo: "externa", href, veiculo, … }` abaixo.
 *
 * ## Como publicar uma interna
 *
 * 1. Escreva a matéria em `src/content/materias/<id>.ts` (ver o Summit 2026
 *    como modelo) e registre as fotos em `assets.noticias`.
 * 2. Acrescente `{ tipo: "interna", materia, … }` abaixo.
 * 3. Acrescente a rota em `content/rotas.ts` (`pai: "/noticias"`), para a
 *    trilha e o sitemap. Ela não é derivada daqui de propósito: a trilha é
 *    Client Component, e importar esta lista levaria o texto das matérias para
 *    o JavaScript do navegador.
 *
 * `destaque: true` fixa um item no card grande do topo.
 *
 * Nada de item de exemplo aqui: uma notícia inventada num site institucional
 * é pior do que nenhuma — com a lista vazia, a página mostra um aviso honesto.
 */
export const NOTICIAS: Noticia[] = [
  {
    tipo: "interna",
    id: "pmi-df-summit-2026",
    titulo:
      "PMI-DF Summit 2026 reúne mais de 650 profissionais em Brasília e movimenta a economia do Distrito Federal",
    resumo: MATERIA_SUMMIT_2026.linhaFina,
    data: "2026-11-12",
    categoria: "Comunicado",
    imagem: assets.noticias.summit2026Card,
    materia: MATERIA_SUMMIT_2026,
  },
];

/** Quantos cards cabem na grade "Mais recentes" antes de cair no arquivo. */
export const RECENTES_NA_GRADE = 9;

export const NOTICIAS_TEXTO = {
  hero: {
    eyebrow: "PMI-DF em pauta",
    titulo: "Notícias",
    subtitulo:
      "O que se fala sobre o PMI-DF e o universo de projetos: reportagens, entrevistas e comunicados reunidos em um só lugar.",
  },
  destaque: "Em destaque",
  recentes: "Mais recentes",
  arquivo: {
    eyebrow: "Arquivo",
    titulo: "Notícias anteriores",
  },
  vazio: {
    titulo: "As primeiras notícias chegam em breve",
    descricao:
      "Enquanto isso, acompanhe o dia a dia do capítulo nas nossas redes.",
  },
  imprensa: {
    eyebrow: "Imprensa",
    titulo: "Viu o PMI-DF numa matéria que não está aqui?",
    descricao:
      "Mande o link para a nossa comunicação. Se você é jornalista ou quer sugerir uma pauta, fale com a gente também.",
    cta: "Fale com a gente",
    href: "/contato",
  },
} as const;

/**
 * Capa usada quando a notícia não tem imagem.
 *
 * Um gradiente por categoria, todos tirados da paleta já em uso no site. As
 * classes ficam escritas por inteiro para o Tailwind encontrá-las ao varrer o
 * código.
 *
 * O nome do veículo fica centralizado em branco, então o meio de cada
 * gradiente precisa ser escuro. Por isso "Comunidade PMI" não usa o
 * gradiente-assinatura dos heros: nele o centro é laranja e a ponta é ciano,
 * e o texto branco some. Fica o roxo → ciano do `Avatar`, com o ciano só no
 * canto.
 */
export const ESTILO_CATEGORIA: Record<CategoriaNoticia, { capa: string }> = {
  "PMI-DF na mídia": { capa: "bg-[linear-gradient(135deg,#1F0942_0%,#4F17A8_100%)]" },
  Comunicado: { capa: "bg-[linear-gradient(135deg,#023041_0%,#005C77_100%)]" },
  "Comunidade PMI": {
    capa: "bg-[linear-gradient(135deg,#371075_0%,#4F17A8_50%,#1AC7FF_115%)]",
  },
  Artigo: { capa: "bg-[linear-gradient(135deg,#841E04_0%,#FF610F_100%)]" },
};

/**
 * Para onde o card leva e quem assina.
 *
 * A interna aponta para a própria rota e é assinada pelo capítulo; a externa
 * carrega o link e o veículo de origem. Centralizado aqui para card, destaque
 * e arquivo não decidirem isso cada um do seu jeito.
 */
export function destinoNoticia(noticia: Noticia): {
  href: string;
  externo: boolean;
  veiculo: string;
} {
  return noticia.tipo === "interna"
    ? { href: `/noticias/${noticia.id}`, externo: false, veiculo: "PMI-DF" }
    : { href: noticia.href, externo: true, veiculo: noticia.veiculo };
}

/** Notícias com página própria — as rotas de `/noticias/[slug]`. */
export const MATERIAS: NoticiaInterna[] = NOTICIAS.filter(
  (noticia): noticia is NoticiaInterna => noticia.tipo === "interna",
);

export function materiaPorSlug(slug: string): NoticiaInterna | undefined {
  return MATERIAS.find((noticia) => noticia.id === slug);
}

/**
 * Minutos de leitura, a 200 palavras por minuto — a média usada para texto
 * corrido em português. Conta o texto que a pessoa lê de fato: linha fina,
 * parágrafos, citação e o "Sobre".
 */
export function tempoDeLeitura(materia: Materia): number {
  const textos = [materia.linhaFina, materia.sobre.texto];
  for (const bloco of materia.corpo) {
    if (bloco.tipo === "paragrafo") textos.push(bloco.texto);
    if (bloco.tipo === "fotoCitacao") textos.push(bloco.citacao.texto);
  }
  const palavras = textos.join(" ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(palavras / 200));
}

const MESES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];

/**
 * "2026-11-10" → "10 nov 2026" (ou "10 nov" com `ano: false`).
 *
 * A data é desmontada na mão de propósito: `new Date("2026-11-10")` lê a
 * string como meia-noite em UTC, e formatada no fuso de Brasília ela vira o
 * dia 9. Como só existe dia, mês e ano, não há fuso a considerar.
 */
export function formatarData(iso: string, { ano = true }: { ano?: boolean } = {}): string {
  const [a, m, d] = iso.split("-");
  const texto = `${d} ${MESES[Number(m) - 1]}`;
  return ano ? `${texto} ${a}` : texto;
}

export type GrupoArquivo = { ano: string; noticias: Noticia[] };

export type NoticiasOrganizadas = {
  destaque?: Noticia;
  recentes: Noticia[];
  arquivo: GrupoArquivo[];
};

/**
 * Divide a lista nas três faixas da página: o card grande, a grade e o
 * arquivo por ano.
 *
 * O destaque é o primeiro item marcado com `destaque: true`, ou o mais
 * recente quando nenhum está marcado. Ele sai das outras faixas para não
 * aparecer duas vezes.
 */
export function organizarNoticias(lista: Noticia[] = NOTICIAS): NoticiasOrganizadas {
  // ISO ordena como texto; o `id` desempata para a ordem não depender da
  // posição no arquivo quando duas notícias saem no mesmo dia.
  const ordenadas = [...lista].sort(
    (a, b) => b.data.localeCompare(a.data) || a.id.localeCompare(b.id),
  );

  const destaque = ordenadas.find((n) => n.destaque) ?? ordenadas[0];
  const restantes = ordenadas.filter((n) => n !== destaque);

  const arquivo: GrupoArquivo[] = [];
  for (const noticia of restantes.slice(RECENTES_NA_GRADE)) {
    const ano = noticia.data.slice(0, 4);
    const grupo = arquivo.at(-1);
    if (grupo?.ano === ano) grupo.noticias.push(noticia);
    else arquivo.push({ ano, noticias: [noticia] });
  }

  return {
    destaque,
    recentes: restantes.slice(0, RECENTES_NA_GRADE),
    arquivo,
  };
}
