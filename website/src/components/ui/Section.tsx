import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

type Tone = "default" | "surface" | "surface-alt" | "inverse";

const tones: Record<Tone, string> = {
  default: "bg-background",
  surface: "bg-surface",
  "surface-alt": "bg-surface-alt",
  inverse: "bg-inverse text-inverse-foreground",
};

export function Section({
  tone = "default",
  className,
  children,
}: {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={cn("py-section", tones[tone], className)}>
      <Container>{children}</Container>
    </section>
  );
}

/** Cabeçalho padrão de seção: eyebrow + título + subtítulo. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow && (
        <p className="font-narrow text-xs font-bold tracking-widest uppercase text-secondary">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted">{subtitle}</p>
      )}
    </div>
  );
}
