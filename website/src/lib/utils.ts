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

/**
 * Iniciais de um nome, para o avatar de quem ainda não tem foto.
 *
 * Duas letras no máximo (primeiro e último nome) — "de", "da", "dos" e afins
 * ficam de fora, senão "Lucelino de Sousa" viraria "LD".
 */
const PARTICULAS = new Set(["de", "da", "do", "das", "dos", "e"]);

export function iniciais(nome: string): string {
  const partes = nome
    .trim()
    .split(/\s+/)
    .filter((parte) => !PARTICULAS.has(parte.toLowerCase()));

  if (partes.length === 0) return "";

  const primeira = partes[0][0];
  const ultima = partes.length > 1 ? partes[partes.length - 1][0] : "";

  return `${primeira}${ultima}`.toUpperCase();
}
