import { EVENTOS } from "@/content/eventos";
import type { EventoAgenda, FormatoEvento } from "@/types";

type SymplaEvent = {
  id?: string | number;
  name?: string;
  detail?: string | null;
  url?: string;
  image?: string;
  start_date?: string;
  end_date?: string;
  category_prim?: {
    name?: string;
  };
  address?: {
    name?: string;
    city?: string;
    state?: string;
  };
  cancelled?: string | number | boolean;
};

type SymplaResponse = {
  data?: SymplaEvent[];
  pagination?: {
    has_next?: boolean;
  };
};

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

const API_BASE =
  process.env.SYMPLA_API_BASE || "https://api.sympla.com.br/public/v1.5.1";

const PAGE_SIZE = 100;

const REVALIDATE_SECONDS = Number(
  process.env.SYMPLA_REVALIDATE_SECONDS || 900,
);

const HIDE_PAST_EVENTS =
  process.env.SYMPLA_HIDE_PAST_EVENTS === "true";

function parseSymplaDate(value?: string) {
  if (!value) return null;

  const normalizada = value.replace(" ", "T");
  const data = new Date(normalizada);

  if (Number.isNaN(data.getTime())) {
    return null;
  }

  return data;
}

function criarChaveEvento(evento: SymplaEvent) {
  const id = String(evento.id || "").trim();

  if (id) {
    return `id:${id}`;
  }

  const nome = String(evento.name || "").trim().toLowerCase();
  const data = String(evento.start_date || evento.end_date || "").trim();

  return `fallback:${nome}:${data}`;
}

function removerDuplicados(eventos: SymplaEvent[]) {
  const mapa = new Map<string, SymplaEvent>();

  for (const evento of eventos) {
    const chave = criarChaveEvento(evento);

    if (!mapa.has(chave)) {
      mapa.set(chave, evento);
    }
  }

  return Array.from(mapa.values());
}

function debugDuplicados(eventos: SymplaEvent[], etapa: string) {
  const contagem = new Map<string, SymplaEvent[]>();

  for (const evento of eventos) {
    const chave = criarChaveEvento(evento);

    if (!contagem.has(chave)) {
      contagem.set(chave, []);
    }

    contagem.get(chave)?.push(evento);
  }

  const duplicados = Array.from(contagem.entries()).filter(
    ([, lista]) => lista.length > 1,
  );

  console.log(`\n[DEBUG DUPLICADOS] ${etapa}`);
  console.log(`Total de eventos: ${eventos.length}`);
  console.log(`Total de chaves únicas: ${contagem.size}`);
  console.log(`Total de duplicados: ${duplicados.length}`);

  if (duplicados.length > 0) {
    for (const [chave, lista] of duplicados) {
      console.log(`\nDuplicado encontrado: ${chave}`);

      for (const evento of lista) {
        console.log({
          id: evento.id,
          name: evento.name,
          start_date: evento.start_date,
          end_date: evento.end_date,
        });
      }
    }
  }

  console.log("[FIM DEBUG DUPLICADOS]\n");
}

function criarIdEvento(evento: SymplaEvent) {
  const id = String(evento.id || "").trim();

  if (id) {
    return id;
  }

  const nome = String(evento.name || "evento")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  const data = String(evento.start_date || evento.end_date || "")
    .slice(0, 10)
    .replaceAll("-", "");

  return `${nome}-${data}`;
}

function formatarDataCard(value?: string) {
  const data = parseSymplaDate(value);

  if (!data) return "";

  const dia = String(data.getDate()).padStart(2, "0");
  const mes = MESES_PT[data.getMonth()];
  const ano = data.getFullYear();

  return `${dia} ${mes} ${ano}`;
}

function htmlToText(html?: string | null) {
  if (!html) return "";

  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<\/p>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function cortarTexto(texto: string, limite = 155) {
  const limpo = texto.trim();

  if (limpo.length <= limite) return limpo;

  return `${limpo.slice(0, limite).split(" ").slice(0, -1).join(" ")}...`;
}

function detectarFormato(evento: SymplaEvent): FormatoEvento {
  const categoria = evento.category_prim?.name?.toUpperCase() || "";
  const local = evento.address?.name || "";
  const cidade = evento.address?.city || "";
  const textoGeral = `${evento.name || ""} ${local}`.toLowerCase();

  if (
    textoGeral.includes("híbrido") ||
    textoGeral.includes("hibrido") ||
    textoGeral.includes("+ zoom")
  ) {
    return "Híbrido";
  }

  if (categoria === "ONLINE" || (!local && !cidade)) {
    return "Online";
  }

  return "Presencial";
}

function detectarCategoria(evento: SymplaEvent) {
  const categoria = evento.category_prim?.name?.trim();

  if (!categoria) return "Evento";

  if (categoria.toUpperCase() === "ONLINE") return "Webinar";

  return categoria;
}

function detectarLocal(evento: SymplaEvent, formato: FormatoEvento) {
  if (formato === "Online") return "Zoom";

  const cidade = evento.address?.city;
  const estado = evento.address?.state;
  const nomeLocal = evento.address?.name;

  if (cidade && estado) return `${cidade} — ${estado}`;
  if (nomeLocal) return nomeLocal;

  return formato;
}

function gerarDescricao(evento: SymplaEvent) {
  const detalhe = htmlToText(evento.detail);

  if (detalhe) return cortarTexto(detalhe);

  const titulo = evento.name || "evento";

  return cortarTexto(
    `Participe do evento ${titulo}. Confira os detalhes e realize sua inscrição na página oficial.`,
  );
}

function eventoEstaCanceladoOuPassado(evento: SymplaEvent) {
  if (
    evento.cancelled === true ||
    evento.cancelled === 1 ||
    evento.cancelled === "1" ||
    evento.cancelled === "true"
  ) {
    return true;
  }

  const dataReferencia = parseSymplaDate(evento.end_date || evento.start_date);

  if (!dataReferencia) return false;

  return dataReferencia.getTime() < Date.now();
}

function mapearEvento(evento: SymplaEvent): EventoAgenda {
  const formato = detectarFormato(evento);

  return {
    id: criarIdEvento(evento),
    data: formatarDataCard(evento.start_date || evento.end_date),
    formato,
    categoria: detectarCategoria(evento),
    titulo: evento.name || "Evento PMI-DF",
    local: detectarLocal(evento, formato),
    descricao: gerarDescricao(evento),
    href: evento.url || "https://www.sympla.com.br/",
  };
}

export async function getEventosSympla(): Promise<EventoAgenda[]> {
  const token = process.env.SYMPLA_TOKEN;

  if (!token) {
    console.warn("SYMPLA_TOKEN não definido. Usando eventos estáticos como fallback.");
    return EVENTOS;
  }

  try {
    const eventos: SymplaEvent[] = [];
    let page = 1;

    while (true) {
      const url = new URL(`${API_BASE}/events`);

      url.searchParams.set("page", String(page));
      url.searchParams.set("page_size", String(PAGE_SIZE));

      const response = await fetch(url.toString(), {
        headers: {
          s_token: token,
          Accept: "application/json",
        },
        next: {
          revalidate: REVALIDATE_SECONDS,
        },
      });

      if (!response.ok) {
        throw new Error(`Erro ao buscar Sympla: ${response.status}`);
      }

      const payload = (await response.json()) as SymplaResponse;

      eventos.push(...(payload.data || []));

      if (!payload.pagination?.has_next) break;

      page += 1;
    }

    const filtrados = HIDE_PAST_EVENTS
  ? eventos.filter((evento) => !eventoEstaCanceladoOuPassado(evento))
  : eventos;

  debugDuplicados(eventos, "Antes de filtrar eventos antigos");
  debugDuplicados(filtrados, "Depois de filtrar eventos antigos");

  const semDuplicados = removerDuplicados(filtrados);

  console.log("Eventos após remover duplicados:", semDuplicados.length);

  return semDuplicados
  .sort((a, b) => {
    const dataA = parseSymplaDate(a.start_date)?.getTime() || 0;
    const dataB = parseSymplaDate(b.start_date)?.getTime() || 0;

    return dataB - dataA;
  })
  .map(mapearEvento);
  } catch (error) {
    console.error(error);
    console.warn("Falha na Sympla. Usando eventos estáticos como fallback.");

    return EVENTOS;
  }
}