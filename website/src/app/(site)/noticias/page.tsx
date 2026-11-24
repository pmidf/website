import type { Metadata } from "next";

import { Arquivo, Hero, ParaImprensa, Vitrine } from "@/components/noticias";
import { organizarNoticias } from "@/content/noticias";
import { archivoTitulo as archivo, interCorpo as inter } from "@/styles/fontes";

export const metadata: Metadata = {
  title: "Notícias",
  description:
    "Reportagens, entrevistas e comunicados sobre o PMI-DF e o universo de gerenciamento de projetos, reunidos em um só lugar.",
  alternates: { canonical: "/noticias" },
};

/**
 * Página Notícias — agregador de matérias publicadas fora do site.
 *
 * Só orquestra a ordem das seções: a lista mora em `src/content/noticias.ts`
 * e o markup em `src/components/noticias/`. Sai estática no build, já que
 * publicar uma notícia é um commit.
 */
export default function NoticiasPage() {
  const { destaque, recentes, arquivo } = organizarNoticias();

  return (
    <div
      className={`${archivo.variable} ${inter.variable} min-h-screen bg-[#F8F5F0] font-[family-name:var(--font-corpo)]`}
    >
      <Hero />
      <Vitrine destaque={destaque} recentes={recentes} />
      <Arquivo grupos={arquivo} />
      <ParaImprensa />
    </div>
  );
}
