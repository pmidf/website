import { getPaginaEventos } from "@/lib/sympla";

/**
 * `GET /api/eventos?offset=6&limit=6`
 *
 * Endpoint que alimenta o botão "Carregar mais" da agenda. A página já entrega
 * os primeiros eventos renderizados no servidor; este handler serve só as
 * fatias seguintes, para que o payload inicial não carregue a agenda inteira.
 *
 * Ele **não** fala com a Sympla a cada chamada: lê da mesma camada cacheada de
 * `lib/sympla`, então mil cliques em "Carregar mais" continuam custando, no
 * máximo, uma requisição externa por janela de revalidação. O `Cache-Control`
 * abaixo põe o CDN na frente disso — a maioria dos cliques nem chega à função.
 */

/** Teto por chamada: o handler pagina a UI, não é um dump da agenda. */
const LIMIT_MAXIMO = 100;
const LIMIT_PADRAO = 6;

const REVALIDATE_SECONDS = Number(process.env.SYMPLA_REVALIDATE_SECONDS ?? 900);

/**
 * Lê um inteiro não-negativo da query string, ignorando lixo (`abc`, `-3`,
 * `1e9`) em favor do padrão — a alternativa seria devolver 400 para um
 * parâmetro que a própria UI monta.
 */
function inteiroPositivo(valor: string | null, padrao: number, maximo: number) {
  const numero = Number(valor);

  if (!Number.isInteger(numero) || numero < 0) return padrao;

  return Math.min(numero, maximo);
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const offset = inteiroPositivo(searchParams.get("offset"), 0, Number.MAX_SAFE_INTEGER);
  const limit = inteiroPositivo(searchParams.get("limit"), LIMIT_PADRAO, LIMIT_MAXIMO);

  const pagina = await getPaginaEventos(offset, limit);

  return Response.json(pagina, {
    status: pagina.status === "ok" ? 200 : 503,
    headers: {
      // `stale-while-revalidate` faz o CDN servir a fatia antiga enquanto
      // busca a nova: ninguém espera pela revalidação.
      "Cache-Control":
        pagina.status === "ok"
          ? `public, s-maxage=${REVALIDATE_SECONDS}, stale-while-revalidate=3600`
          : "no-store",
    },
  });
}
