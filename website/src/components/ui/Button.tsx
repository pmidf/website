import Link from "next/link";

import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover",
  outline:
    "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
  ghost: "text-primary hover:bg-surface",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors disabled:pointer-events-none disabled:opacity-50";

type StyleProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

type AsLink = StyleProps & { href: string } & Omit<
    React.ComponentPropsWithoutRef<typeof Link>,
    keyof StyleProps
  >;

type AsButton = StyleProps & { href?: never } & Omit<
    React.ComponentPropsWithoutRef<"button">,
    keyof StyleProps
  >;

/** Renderiza `<Link>` quando recebe `href`, `<button>` caso contrário. */
export function Button(props: AsLink | AsButton) {
  const { variant = "primary", size = "md", className, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (rest.href !== undefined) {
    const { href, ...linkProps } = rest as Omit<AsLink, keyof StyleProps>;
    return <Link href={href} className={classes} {...linkProps} />;
  }

  const { href: _ignored, ...buttonProps } = rest as Omit<
    AsButton,
    keyof StyleProps
  >;
  void _ignored;
  return <button className={classes} {...buttonProps} />;
}
