import localFont from "next/font/local";

/**
 * Archivo e Inter, servidas a partir do próprio repositório.
 *
 * ## Por que não `next/font/google`
 *
 * Até a versão 16.3 do Next, o Turbopack quebra quando o Google Fonts responde
 * com URLs no formato `fonts.gstatic.com/l/font?kit=…&skey=…&v=…` em vez do
 * habitual `/s/<família>/…/*.woff2`. Ele divide a query no `&` e cada
 * `@font-face` falha com "Can't resolve
 * '@vercel/turbopack-next/internal/font/google/font'" ("next/font/google
 * queries have exactly one entry"). O Google alterna os dois formatos de uma
 * requisição para outra, então o `next dev` e o `next build` passavam ou
 * quebravam conforme a sorte — inclusive no deploy. Com os arquivos aqui, o
 * build não depende mais do Google.
 *
 * ## Os arquivos
 *
 * São os mesmos `.woff2` que o `next/font/google` baixava (subset `latin`,
 * Google Fonts v20/v25):
 * - `inter-latin.woff2` — Inter **variável**, pesos 400–700 num arquivo só;
 * - `archivo-800-latin.woff2` — Archivo ExtraBold (800), só para títulos.
 *
 * O subset `latin` cobre todo o português (acentos, ç, º, travessão, aspas
 * curvas). Caracteres fora dele — raros num site em pt-BR — caem na fonte de
 * fallback. Ambas as famílias são SIL Open Font License 1.1 (ver `OFL-*.txt`
 * nesta pasta), que permite redistribuir os arquivos.
 *
 * ## Por que quatro exportações
 *
 * As páginas usam dois pares de nomes de variável: `--font-titulo` /
 * `--font-corpo` (Eventos, DGPIS, Notícias, Maximize) e `--font-archivo` /
 * `--font-inter` (Quem Somos e Mentoring, cujas folhas de estilo já leem esses
 * nomes). O `variable` é fixo por chamada do `localFont`, então cada par é uma
 * chamada — os arquivos são os mesmos.
 */

/* Os caminhos se repetem em cada chamada de propósito: o `next/font` lê as
 * opções em tempo de compilação e só aceita literais — uma constante aqui
 * quebra o build ("Font loader values must be explicitly written literals"). */

export const archivoTitulo = localFont({
  src: "./archivo-800-latin.woff2",
  weight: "800",
  variable: "--font-titulo",
  display: "swap",
});

export const interCorpo = localFont({
  src: "./inter-latin.woff2",
  weight: "400 700",
  variable: "--font-corpo",
  display: "swap",
});

export const archivo = localFont({
  src: "./archivo-800-latin.woff2",
  weight: "800",
  variable: "--font-archivo",
  display: "swap",
});

export const inter = localFont({
  src: "./inter-latin.woff2",
  weight: "400 700",
  variable: "--font-inter",
  display: "swap",
});
