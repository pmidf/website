import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/sections/PageHero";
import { Card, CardBody, CardTitle } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { posts } from "@/content/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artigos, novidades e conteúdos da equipe.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Conteúdos e novidades"
        subtitle="O que estamos aprendendo e publicando."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="h-full">
                <time
                  dateTime={post.date}
                  className="font-narrow text-xs font-bold tracking-widest uppercase text-secondary"
                >
                  {new Intl.DateTimeFormat("pt-BR", {
                    dateStyle: "long",
                    timeZone: "UTC",
                  }).format(new Date(post.date))}
                </time>
                <div className="mt-3">
                  <CardTitle>{post.title}</CardTitle>
                  <CardBody>{post.excerpt}</CardBody>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
