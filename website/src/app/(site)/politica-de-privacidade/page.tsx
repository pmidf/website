import type { Metadata } from "next";

import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como tratamos seus dados pessoais.",
};

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <PageHero title="Política de Privacidade" />
      <Section>
        <div className="max-w-3xl text-muted">
          Texto jurídico a ser fornecido pelo cliente.
        </div>
      </Section>
    </>
  );
}
