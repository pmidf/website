import type { Metadata } from "next";

import { Galeria, Hero } from "@/components/presidentes";

export const metadata: Metadata = {
  title: "Presidentes",
  description:
    "Galeria dos presidentes do PMI Distrito Federal desde a fundação do capítulo, em 2000 — quem liderou cada gestão, com biografia e LinkedIn.",
  alternates: { canonical: "/quem-somos/presidentes" },
};

/**
 * Galeria completa de presidentes — destino do "Ver galeria completa" da
 * Seção 5 de Quem Somos, que mostra só as gestões mais recentes.
 *
 * Só orquestra as seções: conteúdo em `src/content/presidentes.ts`, markup em
 * `src/components/presidentes/`.
 */
export default function PresidentesPage() {
  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <Hero />
      <Galeria />
    </div>
  );
}
