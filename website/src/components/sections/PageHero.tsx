import { Container } from "@/components/layout/Container";

/** Hero padrão das páginas internas — mantém as 10 páginas visualmente coerentes. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="bg-inverse text-inverse-foreground">
      <Container className="py-20 sm:py-28">
        {eyebrow && (
          <p className="font-narrow text-xs font-bold tracking-widest uppercase text-highlight">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg text-violet-50/75">{subtitle}</p>
        )}
      </Container>
    </div>
  );
}
