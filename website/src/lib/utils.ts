/**
 * Concatena classes condicionalmente, descartando valores falsy.
 *
 * Deliberadamente sem `clsx`/`tailwind-merge`: o projeto ainda não tem conflito
 * de classes para resolver. Se surgir necessidade de merge de utilitários
 * Tailwind, troque por `tailwind-merge` aqui — a assinatura não muda.
 */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
