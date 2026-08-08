import type { Metadata } from "next";

import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com nosso time.",
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Vamos conversar"
        subtitle="Escolha o canal que preferir."
      />
      <Section>
        <dl className="grid gap-8 sm:grid-cols-3">
          <div>
            <dt className="font-narrow text-xs font-bold tracking-widest uppercase text-secondary">
              E-mail
            </dt>
            <dd className="mt-2">
              <a
                href={`mailto:${site.contact.email}`}
                className="text-primary hover:underline"
              >
                {site.contact.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-narrow text-xs font-bold tracking-widest uppercase text-secondary">
              Telefone
            </dt>
            <dd className="mt-2 text-muted">{site.contact.phone}</dd>
          </div>
          <div>
            <dt className="font-narrow text-xs font-bold tracking-widest uppercase text-secondary">
              Endereço
            </dt>
            <dd className="mt-2 text-muted">{site.contact.address}</dd>
          </div>
        </dl>

        {/*
          O site é exportado estaticamente (`output: "export"`), então não há
          Server Action nem route handler para receber um POST. O formulário
          precisa apontar para um serviço externo (Formspree, Basin, API própria)
          ou embutir o widget do CRM. Definir antes de implementar.
        */}
      </Section>
    </>
  );
}
