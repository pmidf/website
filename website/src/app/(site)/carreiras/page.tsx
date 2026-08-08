import type { Metadata } from "next";

import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Carreiras",
  description: "Vagas abertas e como é trabalhar conosco.",
};

export default function CarreirasPage() {
  return (
    <>
      <PageHero
        eyebrow="Carreiras"
        title="Trabalhe com a gente"
        subtitle="Cultura, benefícios e vagas abertas."
      />
      <Section>
        <SectionHeading title="Vagas abertas" />
        <p className="mt-6 max-w-3xl text-muted">
          Conteúdo da página a partir do protótipo.
        </p>
      </Section>
    </>
  );
}
