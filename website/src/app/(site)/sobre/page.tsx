import type { Metadata } from "next";

import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Quem somos, nossa história e o que nos move.",
};

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre"
        title="Quem somos"
        subtitle="Resumo institucional da empresa."
      />
      <Section>
        <SectionHeading title="Nossa história" />
        <p className="mt-6 max-w-3xl text-muted">
          Conteúdo da página a partir do protótipo.
        </p>
      </Section>
    </>
  );
}
