import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { getPost, posts } from "@/content/posts";

/** Necessário para `output: "export"`: sem isto a rota dinâmica não é gerada. */
export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) return {};

  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  return (
    <>
      <PageHero eyebrow="Blog" title={post.title} subtitle={post.excerpt} />
      <Section>
        <article className="max-w-3xl text-muted">
          Conteúdo do post a partir do protótipo.
        </article>
      </Section>
    </>
  );
}
