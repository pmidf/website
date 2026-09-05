import { cache } from "react";

import type { EventoAgenda, FormatoEvento } from "@/types";

/**
 * Integração com a API pública do Sympla (v1.6.0).
 *
 * Esta é a única porta de entrada dos eventos no site. Ela resolve três
 * problemas de uma vez:
 *
 * 1. **Modelagem** — a Sympla devolve um objeto cru (HTML no `detail`, endereço
 *    em partes, categoria em maiúsculas); aqui ele vira o `EventoAgenda` que os
 *    componentes já sabem renderizar.
 * 2. **Cache** — a agenda de um capítulo muda algumas vezes por mês, então cada
 *    visita não pode virar uma chamada externa. Ver "Estratégia de cache".
 * 3. **Degradação** — se o token faltar ou a API cair, a página mostra um estado
 *    vazio honesto em vez de quebrar (ou, pior, de exibir evento fictício).
 *
 * ## Estratégia de cache
 *
 * São quatro camadas, da mais externa para a mais interna:
 *
 * - **ISR da página** (`revalidate` em `(site)/eventos/page.tsx`): o HTML é
 *   servido do CDN e só é regerado a cada janela.
 * - **CDN do route handler** (`Cache-Control` em `app/api/eventos/route.ts`):
 *   os cliques em "Carregar mais" batem na borda, não na função.
 * - **Data Cache do Next** (`cache: "force-cache"` + `next.revalidate`/`tags`
 *   no `fetch`): mesmo em cache miss das camadas acima, a Sympla é chamada no
 *   máximo uma vez por janela de revalidação — para o site inteiro, não por
 *   usuário. É a camada que de fato protege o rate limit.
 * - **Memoização por request** (`cache()` do React): a home e a página de
 *   eventos podem pedir a lista no mesmo render sem refazer o mapeamento.
 *
 * O cache do `fetch` é indexado pela URL, então o parâmetro `from` é ancorado
 * no **início do dia** em São Paulo (e não em `new Date()`), senão cada request
 * geraria uma chave nova e nenhuma das camadas funcionaria.
 *
 * Para invalidar fora da janela, use `POST /api/eventos/revalidate`.
 */

/* --- Configuração --------------------------------------------------------- */

const API_BASE =
  process.env.SYMPLA_API_BASE ?? "https://api.sympla.com.br/public/v1.6.0";

const TIMEZONE = "America/Sao_Paulo";

/** Teto por página da Sympla. A agenda do capítulo cabe folgadamente em uma. */
const PAGE_SIZE = 100;

/**
 * Trava do laço de paginação. Existe para o caso de a API devolver um cursor
 * que não avança — sem ela, um contrato quebrado viraria um laço infinito.
 */
const MAX_PAGINAS = 10;

/** Janela de revalidação em segundos (padrão: 15 min). */
const REVALIDATE_SECONDS = Number(process.env.SYMPLA_REVALIDATE_SECONDS ?? 900);

/** Corta uma Sympla lenta antes que ela segure o render da página. */
const TIMEOUT_MS = Number(process.env.SYMPLA_TIMEOUT_MS ?? 8000);

/** Tag do Data Cache — alvo do `revalidateTag` no webhook de invalidação. */
export const TAG_EVENTOS = "sympla-eventos";

/**
 * Campos pedidos à API.
 *
 * O `fields` do curl de referência (`id,name,start_date,end_date,url`) é o
 * mínimo para listar; o card da agenda também precisa de descrição, local e
 * formato. Pedir só o que se usa evita trafegar o `detail` de todos os eventos
 * à toa — mas `detail` é justamente a origem da descrição, então ele fica.
 */
const FIELDS = [
  "id",
  "name",
  "detail",
  "start_date",
  "end_date",
  "url",
  "image",
  "address",
  "category_prim",
  "cancelled",
].join(",");

/* --- Contrato da API ------------------------------------------------------ */

type SymplaEvent = {
  id?: string | number;
  name?: string;
  detail?: string | null;
  url?: string;
  image?: string;
  start_date?: string;
  end_date?: string;
  cancelled?: string | number | boolean;
  category_prim?: { name?: string };
  address?: {
    name?: string;
    city?: string;
    state?: string;
  };
};

type SymplaResponse = {
  data?: SymplaEvent[];
  pagination?: {
    quantity?: number;
    page_size?: number;
    /** v1.6.0 pagina por cursor opaco; ausente ou vazio significa fim. */
    next_cursor?: string | null;
  };
};

/** Uma fatia da agenda, do jeito que a UI consome. */
export type PaginaEventos = {
  eventos: EventoAgenda[];
  /** Total disponível na agenda inteira — não o tamanho de `eventos`. */
  total: number;
  /** Existe evento além desta fatia? */
  temMais: boolean;
  /**
   * `"ok"` mesmo com zero eventos (agenda vazia é um estado legítimo).
   * `"indisponivel"` distingue "não temos eventos" de "não conseguimos saber".
   */
  status: "ok" | "indisponivel";
};

/* --- Datas ---------------------------------------------------------------- */

const MESES_PT = [
  "JAN",
  "FEV",
  "MAR",
  "ABR",
  "MAI",
  "JUN",
  "JUL",
  "AGO",
  "SET",
  "OUT",
  "NOV",
  "DEZ",
];

/**
 * Partes de uma data no fuso de Brasília.
 *
 * `en-CA` é escolhido de propósito: é o locale cujo formato numérico é
 * ISO (`2026-11-09`), o que torna as partes triviais de ler.
 */
const PARTES_DATA = new Intl.DateTimeFormat("en-CA", {
  timeZone: TIMEZONE,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

function parseSymplaDate(valor?: string) {
  if (!valor) return null;

  // A API às vezes usa " " no lugar do "T"; o Safari não aceita esse formato.
  const data = new Date(valor.replace(" ", "T"));

  return Number.isNaN(data.getTime()) ? null : data;
}

/**
 * Formata como o card espera: `09 NOV 2026`.
 *
 * O fuso é explícito porque a função roda no servidor da Vercel, que opera em
 * UTC: um evento às 22h de Brasília cairia no dia seguinte se usássemos
 * `getDate()`.
 */
function formatarDataCard(valor?: string) {
  const data = parseSymplaDate(valor);

  if (!data) return "";

  const partes = PARTES_DATA.formatToParts(data);
  const parte = (tipo: Intl.DateTimeFormatPartTypes) =>
    partes.find((p) => p.type === tipo)?.value ?? "";

  const mes = MESES_PT[Number(parte("month")) - 1] ?? "";

  return `${parte("day")} ${mes} ${parte("year")}`.trim();
}

/**
 * Início do dia de hoje em Brasília, no formato que o parâmetro `from` espera.
 *
 * Ancorar no dia (e não no instante) é o que mantém a URL — e portanto a chave
 * do Data Cache — estável entre requests. Ver "Estratégia de cache".
 */
function inicioDoDiaEmBrasilia() {
  return `${PARTES_DATA.format(new Date())}T00:00:00`;
}

/* --- Normalização do evento ----------------------------------------------- */

function htmlToText(html?: string | null) {
  if (!html) return "";

  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<(br|\/p|\/div|\/li)\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

/** Corta no espaço anterior ao limite, para não terminar no meio da palavra. */
function cortarTexto(texto: string, limite = 155) {
  const limpo = texto.trim();

  if (limpo.length <= limite) return limpo;

  const corte = limpo.slice(0, limite);
  const ultimoEspaco = corte.lastIndexOf(" ");

  return `${(ultimoEspaco > 0 ? corte.slice(0, ultimoEspaco) : corte).trimEnd()}…`;
}

/**
 * A Sympla não tem campo de formato — ele é inferido.
 *
 * A ordem importa: "híbrido" precisa ser testado antes de "online", porque
 * evento híbrido costuma ser cadastrado na categoria ONLINE.
 */
function detectarFormato(evento: SymplaEvent): FormatoEvento {
  const categoria = evento.category_prim?.name?.toUpperCase() ?? "";
  const nomeLocal = evento.address?.name ?? "";
  const cidade = evento.address?.city ?? "";
  const texto = `${evento.name ?? ""} ${nomeLocal}`.toLowerCase();

  if (
    texto.includes("híbrido") ||
    texto.includes("hibrido") ||
    texto.includes("+ zoom")
  ) {
    return "Híbrido";
  }

  if (categoria === "ONLINE" || (!nomeLocal && !cidade)) {
    return "Online";
  }

  return "Presencial";
}

/**
 * Vocabulário de categorias do capítulo, em ordem de prioridade.
 *
 * `[padrão, rótulo]`: o padrão é buscado no título, o rótulo é o que aparece no
 * card e no filtro. A ordem resolve as sobreposições — "Student Club | Curso
 * Básico" é Student Club, não Curso.
 *
 * A lista é fechada de propósito. A categoria alimenta um `<select>`: deixar o
 * título virar categoria livremente encheria o filtro de valores únicos
 * ("Hackathon 2026", "Workshop de Integração"…) e ele deixaria de filtrar.
 */
const CATEGORIAS_CONHECIDAS: Array<[RegExp, string]> = [
  [/projetagov/i, "PROJETAGov"],
  [/summit/i, "Summit"],
  [/student\s*club/i, "Student Club"],
  [/caf[ée]\s*com\s*projetos/i, "Café com Projetos"],
  [/hackathon/i, "Hackathon"],
  [/mentoring|mentoria/i, "Mentoring"],
  [/workshop/i, "Workshop"],
  [/webinar/i, "Webinar"],
  [/forma[çc][ãa]o/i, "Formação"],
  [/curso/i, "Curso"],
  [/meetup/i, "Meetup"],
  [/painel/i, "Painel"],
  [/palestra/i, "Palestra"],
];

/**
 * A categoria vem do título, não de `category_prim`.
 *
 * A API devolve rótulos internos ("NORMAL", "ONDEMAND", "ONLINE") que não
 * significam nada para quem visita o site. O título, por outro lado, segue a
 * convenção do capítulo — "Workshop | ...", "Student Club | ..." — e é onde a
 * categoria de fato está.
 *
 * Olhamos primeiro o trecho antes do "|" (onde a convenção põe o tipo) e só
 * depois o título inteiro, para não classificar "Workshop | ... Student Club"
 * como Student Club.
 */
function detectarCategoria(evento: SymplaEvent) {
  const titulo = evento.name ?? "";
  const prefixo = titulo.split("|")[0];

  for (const alvo of [prefixo, titulo]) {
    for (const [padrao, rotulo] of CATEGORIAS_CONHECIDAS) {
      if (padrao.test(alvo)) return rotulo;
    }
  }

  if (ehSobDemanda(evento)) return "Sob demanda";

  // "ONLINE" descreve o formato, não o tipo — o chip de formato já mostra isso.
  const categoria = evento.category_prim?.name?.trim();

  if (!categoria || ["ONLINE", "NORMAL"].includes(categoria.toUpperCase())) {
    return "Evento";
  }

  return categoria;
}

/**
 * Curso perene, sem data de realização.
 *
 * A Sympla marca esses como `ONDEMAND` e os estaciona numa data-sentinela lá na
 * frente (hoje, 30/12/2050). Sem tratar isso, o card anunciaria um evento para
 * 2050.
 */
function ehSobDemanda(evento: SymplaEvent) {
  return evento.category_prim?.name?.trim().toUpperCase() === "ONDEMAND";
}

function detectarLocal(evento: SymplaEvent, formato: FormatoEvento) {
  if (formato === "Online") return "Zoom";

  const { city, state, name } = evento.address ?? {};

  if (city && state) return `${city} — ${state}`;

  return name || city || formato;
}

function gerarDescricao(evento: SymplaEvent) {
  const detalhe = htmlToText(evento.detail);

  if (detalhe) return cortarTexto(detalhe);

  return cortarTexto(
    `Participe do evento ${evento.name ?? "do PMI-DF"}. Confira os detalhes e realize sua inscrição na página oficial.`,
  );
}

function estaCancelado(evento: SymplaEvent) {
  const valor = evento.cancelled;

  return valor === true || valor === 1 || valor === "1" || valor === "true";
}

/**
 * `id` estável é requisito, não detalhe: ele vira `key` no React e precisa
 * sobreviver a re-renders e a revalidações do cache. Por isso nada de UUID
 * aleatório — sem `id` da Sympla, derivamos um slug do título e da data.
 */
function derivarId(evento: SymplaEvent) {
  if (evento.id !== undefined && evento.id !== null && evento.id !== "") {
    return String(evento.id);
  }

  const base = `${evento.name ?? "evento"}-${evento.start_date ?? ""}`;

  return base
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Descarta eventos repetidos, preservando a ordem de chegada.
 *
 * A paginação da Sympla pode devolver o mesmo evento em mais de uma página —
 * basta a agenda mudar entre duas requisições do laço para um item deslizar de
 * uma página para a outra. Sem esta poda, o card aparecia duas vezes na agenda
 * e o React ainda reclamava de `key` duplicada.
 *
 * A chave é a mesma de `derivarId`: o `id` da Sympla quando existe e, na falta
 * dele, o slug de nome + data. Reaproveitar a função é o que garante que dois
 * registros considerados iguais aqui também recebam o mesmo `id` no card.
 */
function removerDuplicados(eventos: SymplaEvent[]) {
  const vistos = new Map<string, SymplaEvent>();

  for (const evento of eventos) {
    const chave = derivarId(evento);

    if (!vistos.has(chave)) {
      vistos.set(chave, evento);
    }
  }

  return Array.from(vistos.values());
}

function mapearEvento(evento: SymplaEvent): EventoAgenda {
  const formato = detectarFormato(evento);

  return {
    id: derivarId(evento),
    data: ehSobDemanda(evento)
      ? "SOB DEMANDA"
      : formatarDataCard(evento.start_date ?? evento.end_date),
    formato,
    categoria: detectarCategoria(evento),
    titulo: evento.name?.trim() || "Evento PMI-DF",
    local: detectarLocal(evento, formato),
    descricao: gerarDescricao(evento),
    href: evento.url || "https://www.sympla.com.br/",
  };
}

/* --- Chamada à API -------------------------------------------------------- */

function montarUrl(cursor?: string) {
  const url = new URL(`${API_BASE}/events`);

  url.searchParams.set("published", "published");
  url.searchParams.set("from", inicioDoDiaEmBrasilia());
  url.searchParams.set("timezone", TIMEZONE);
  url.searchParams.set("sort", "asc");
  url.searchParams.set("field_sort", "start_date");
  url.searchParams.set("page_size", String(PAGE_SIZE));
  url.searchParams.set("fields", FIELDS);

  if (cursor) url.searchParams.set("cursor", cursor);

  return url.toString();
}

async function buscarPagina(token: string, cursor?: string) {
  const resposta = await fetch(montarUrl(cursor), {
    headers: { accept: "application/json", s_token: token },
    // Corta a espera sem derrubar o cache: o `signal` só desliga a memoização
    // do React por request, que o `cache()` lá embaixo já cobre.
    signal: AbortSignal.timeout(TIMEOUT_MS),
    cache: "force-cache",
    next: { revalidate: REVALIDATE_SECONDS, tags: [TAG_EVENTOS] },
  });

  if (!resposta.ok) {
    throw new Error(
      `Sympla respondeu ${resposta.status} ${resposta.statusText}`,
    );
  }

  return (await resposta.json()) as SymplaResponse;
}

/**
 * Percorre a paginação por cursor e devolve os eventos crus.
 *
 * O `vistos` não é só higiene: se a API ignorar o cursor e devolver sempre a
 * primeira página, o laço para na primeira repetição em vez de rodar até o
 * teto de páginas.
 */
async function buscarTodasAsPaginas(token: string) {
  const eventos: SymplaEvent[] = [];
  const vistos = new Set<string>();

  let cursor: string | undefined;

  for (let pagina = 0; pagina < MAX_PAGINAS; pagina += 1) {
    const payload = await buscarPagina(token, cursor);
    const lote = payload.data ?? [];

    let novos = 0;

    for (const evento of lote) {
      const id = derivarId(evento);

      if (vistos.has(id)) continue;

      vistos.add(id);
      eventos.push(evento);
      novos += 1;
    }

    cursor = payload.pagination?.next_cursor ?? undefined;

    // Página incompleta significa fim da lista, mesmo com cursor devolvido.
    if (!cursor || novos === 0 || lote.length < PAGE_SIZE) break;
  }

  return eventos;
}

/* --- API pública do módulo ------------------------------------------------ */

/**
 * Agenda completa, já mapeada e ordenada do evento mais próximo ao mais
 * distante.
 *
 * `cache()` memoiza por request: chamar isto na home e na página de eventos no
 * mesmo render custa uma execução só. O cache entre requests é o do `fetch`.
 */
export const getEventosSympla = cache(
  async (): Promise<{ eventos: EventoAgenda[]; status: PaginaEventos["status"] }> => {
    const token = process.env.SYMPLA_TOKEN;

    if (!token) {
      console.warn(
        "[sympla] SYMPLA_TOKEN ausente — a agenda será renderizada vazia.",
      );

      return { eventos: [], status: "indisponivel" };
    }

    try {
      const crus = await buscarTodasAsPaginas(token);

      const eventos = removerDuplicados(crus)
        .filter((evento) => !estaCancelado(evento))
        .sort((a, b) => {
          const inicioA = parseSymplaDate(a.start_date)?.getTime() ?? 0;
          const inicioB = parseSymplaDate(b.start_date)?.getTime() ?? 0;

          return inicioA - inicioB;
        })
        .map(mapearEvento);

      return { eventos, status: "ok" };
    } catch (erro) {
      console.error("[sympla] falha ao carregar a agenda:", erro);

      return { eventos: [], status: "indisponivel" };
    }
  },
);

/**
 * Fatia da agenda para a UI paginada.
 *
 * Fatiar aqui (e não no cliente) é o que permite a página inicial mandar só os
 * primeiros eventos no payload do RSC, em vez da agenda inteira.
 */
export async function getPaginaEventos(
  offset = 0,
  limit = 6,
): Promise<PaginaEventos> {
  const { eventos, status } = await getEventosSympla();

  const inicio = Math.max(0, offset);
  const fim = inicio + Math.max(0, limit);

  return {
    eventos: eventos.slice(inicio, fim),
    total: eventos.length,
    temMais: fim < eventos.length,
    status,
  };
}
