import type { Metadata } from "next";

import {
  Agenda,
  ComoSeInscrever,
  EventoDestaque,
  FacaParte,
  Hero,
} from "@/components/eventos";
import { EVENTO_DESTAQUE, EVENTOS_POR_PAGINA } from "@/content/eventos";
import { getPaginaEventos } from "@/lib/sympla";
import { archivoTitulo as archivo, interCorpo as inter } from "@/styles/fontes";

/*
 * Archivo e Inter vêm de `@/styles/fontes`, com os arquivos no próprio
 * repositório (lá está por que não `next/font/google`). Os nomes das variáveis
 * são semânticos (título / corpo) para que os componentes não precisem saber
 * qual família está por trás.
 *
 * A página Mentoring carrega as mesmas duas famílias; a home usa Aeonik e
 * Aptos. Essa divergência veio dos protótipos e vale unificar quando o design
 * system fechar.
 */
/**
 * ISR: o HTML sai do CDN e só é regerado a cada janela. Alinhado ao
 * `revalidate` do `fetch` em `lib/sympla` — de nada adianta a página revalidar
 * de 15 em 15 minutos se o dado por baixo estiver preso num cache mais longo.
 */
export const revalidate = 900;

export const metadata: Metadata = {
  title: "Eventos e Programas",
  description:
    "Summit, workshops, encontros e webinars do PMI-DF. Presenciais e online, com inscrição pelo Sympla.",
  alternates: { canonical: "/eventos" },
};

/**
 * Página Eventos.
 *
 * Só orquestra a ordem das seções — conteúdo em `src/content/eventos.ts`,
 * markup em `src/components/eventos/`. Header e Rodapé vêm do layout do route
 * group `(site)` e a agenda vem da Sympla via `lib/sympla`.
 */
export default async function EventosPage() {
  // Só a primeira página vai no payload do RSC; o "Ver mais" busca o resto em
  // `/api/eventos`.
  const { eventos, total, status } = await getPaginaEventos(0, EVENTOS_POR_PAGINA);

  return (
    <div
      className={`${archivo.variable} ${inter.variable} min-h-screen bg-[#F8F5F0] font-[family-name:var(--font-corpo)]`}
    >
      <Hero />
      {!EVENTO_DESTAQUE.oculto && <EventoDestaque />}
      <Agenda
        eventosIniciais={eventos}
        total={total}
        status={status}
        comoAba={EVENTO_DESTAQUE.oculto}
      />
      <ComoSeInscrever />
      <FacaParte />
    </div>
  );
}
