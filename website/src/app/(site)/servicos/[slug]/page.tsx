import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { getServico, servicos } from "@/content/servicos";

/** Necessário para `output: "export"`: sem isto a rota dinâmica não é gerada. */
export function generateStaticParams() {
  return servicos.map((servico) => ({ slug: servico.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/servicos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const servico = getServico(slug);

  if (!servico) return {};

  return { title: servico.title, description: servico.summary };
}

export default async function ServicoPage({
  params,
}: PageProps<"/servicos/[slug]">) {
  const { slug } = await params;
  const servico = getServico(slug);

  if (!servico) notFound();

  return (
    <>
      <PageHero
        eyebrow="Serviço"
        title={servico.title}
        subtitle={servico.summary}
      />
      <Section>
        <p className="max-w-3xl text-muted">
          Conteúdo do serviço a partir do protótipo.
        </p>
      </Section>
    </>
  );
}
