import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/sections/PageHero";
import { Card, CardBody, CardTitle } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { servicos } from "@/content/servicos";

export const metadata: Metadata = {
  title: "Serviços",
  description: "Conheça os serviços que oferecemos.",
};

export default function ServicosPage() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title="O que oferecemos"
        subtitle="Serviços desenhados para cada etapa do projeto."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {servicos.map((servico) => (
            <Link key={servico.slug} href={`/servicos/${servico.slug}`}>
              <Card className="h-full">
                <CardTitle>{servico.title}</CardTitle>
                <CardBody>{servico.summary}</CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
