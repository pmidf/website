import type { Metadata } from "next";

import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Cases",
  description: "Resultados entregues para nossos clientes.",
};

export default function CasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Cases"
        title="Resultados que entregamos"
        subtitle="Seleção de projetos e resultados."
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
