import type { Metadata } from "next";

import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Condições de uso do site.",
};

export default function TermosDeUsoPage() {
  return (
    <>
      <PageHero title="Termos de Uso" />
      <Section>
        <div className="max-w-3xl text-muted">
          Texto jurídico a ser fornecido pelo cliente.
        </div>
      </Section>
    </>
  );
}
