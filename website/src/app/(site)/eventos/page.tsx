import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";

import {
  Agenda,
  ComoSeInscrever,
  EventoDestaque,
  FacaParte,
  Hero,
} from "@/components/eventos";
import { EVENTOS_POR_PAGINA } from "@/content/eventos";
import { getPaginaEventos } from "@/lib/sympla";

/**
 * Archivo e Inter vêm do Google Fonts via `next/font`, que baixa e serve os
 * arquivos do nosso domínio no build — mesma política self-hosted do resto do
 * site. Os nomes das variáveis são semânticos (título / corpo) para que os
 * componentes não precisem saber qual família está por trás.
 *
 * A página Mentoring carrega as mesmas duas famílias; a home usa Aeonik e
 * Aptos. Essa divergência veio dos protótipos e vale unificar quando o design
 * system fechar.
 */
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-titulo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-corpo",
  display: "swap",
});

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
      <EventoDestaque />
      <Agenda eventosIniciais={eventos} total={total} status={status} />
      <ComoSeInscrever />
      <FacaParte />
    </div>
  );
}
