import { revalidateTag } from "next/cache";

import { TAG_EVENTOS } from "@/lib/sympla";

/**
 * `POST /api/eventos/revalidate` — invalidação sob demanda da agenda.
 *
 * A janela de revalidação (15 min por padrão) é o suficiente no dia a dia. Este
 * endpoint existe para o caso em que ela não é: publicou um evento no Sympla e
 * precisa dele no ar agora, sem esperar e sem refazer o deploy.
 *
 * Protegido por `SYMPLA_REVALIDATE_SECRET`. Sem o segredo configurado o
 * endpoint fica desligado — um "revalide tudo" aberto na internet é um vetor de
 * DoS barato contra o rate limit da Sympla.
 */
export async function POST(request: Request) {
  const segredo = process.env.SYMPLA_REVALIDATE_SECRET;

  if (!segredo) {
    return Response.json(
      { erro: "Revalidação sob demanda desabilitada." },
      { status: 404 },
    );
  }

  // Aceita header (preferível) ou query string, para caber em webhooks que só
  // deixam configurar a URL.
  const { searchParams } = new URL(request.url);
  const enviado =
    request.headers.get("x-revalidate-secret") ?? searchParams.get("secret");

  if (enviado !== segredo) {
    return Response.json({ erro: "Não autorizado." }, { status: 401 });
  }

  // `profile: "max"` dá semântica stale-while-revalidate: a próxima visita
  // recebe o conteúdo antigo na hora e a atualização acontece por trás.
  revalidateTag(TAG_EVENTOS, "max");

  return Response.json(
    { revalidado: true, tag: TAG_EVENTOS, em: new Date().toISOString() },
    { headers: { "Cache-Control": "no-store" } },
  );
}
