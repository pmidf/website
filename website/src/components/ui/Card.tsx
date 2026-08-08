import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-background p-7 transition-shadow hover:shadow-lg hover:shadow-violet-800/5",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="font-display text-xl font-bold">{children}</h3>;
}

export function CardBody({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-muted">{children}</p>;
}
