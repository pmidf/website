import type { Metadata } from "next";

import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Soluções",
  description: "Soluções desenhadas para cada segmento.",
};

export default function SolucoesPage() {
  return (
    <>
      <PageHero
        eyebrow="Soluções"
        title="Soluções por segmento"
        subtitle="Resumo das soluções oferecidas."
      />
      <Section>
        <SectionHeading title="Conteúdo" />
        <p className="mt-6 max-w-3xl text-muted">
          Conteúdo da página a partir do protótipo.
        </p>
      </Section>
    </>
  );
}
