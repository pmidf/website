# Fontes

As fontes do design system são **licenciadas / self-hosted** e por isso **não estão versionadas aqui**.
Nenhuma delas é distribuível livremente:

| Família      | Fundição / origem          | Situação                                                        |
| ------------ | -------------------------- | --------------------------------------------------------------- |
| Aeonik       | CoType Foundry             | Comercial — precisa de licença webfont                           |
| Agrandir     | Pangram Pangram            | Comercial — precisa de licença webfont                           |
| Teodor       | Newglyph                   | Comercial — precisa de licença webfont                           |
| Aptos (+ Narrow, Serif, Mono) | Microsoft | Distribuída com o Office; a licença **não** cobre redistribuição web por padrão |

## O que fazer

Exporte cada estilo em **.woff2** e coloque neste diretório com exatamente estes nomes
(são os nomes referenciados em [`src/styles/fonts.css`](../../src/styles/fonts.css)):

```
Aeonik-Regular.woff2
Aeonik-Medium.woff2
Aeonik-Bold.woff2
Aeonik-RegularItalic.woff2

Agrandir-Bold.woff2

Aptos-Regular.woff2
Aptos-SemiBold.woff2
Aptos-Bold.woff2
Aptos-Italic.woff2

AptosNarrow-Regular.woff2
AptosNarrow-Bold.woff2

AptosSerif-Regular.woff2
AptosSerif-Bold.woff2

AptosMono-Regular.woff2

Teodor-Regular.woff2
Teodor-Light.woff2
```

O protótipo lista 14 estilos de Aeonik, 12 de Aptos e 4 de cada variante. A lista acima é o
subconjunto que a web realmente usa. Se precisar de mais pesos, acrescente o arquivo aqui **e** o
bloco `@font-face` correspondente em `src/styles/fonts.css`.

## Enquanto os arquivos não chegam

O site funciona normalmente: cada `@font-face` sem arquivo é ignorado pelo navegador e o stack cai
no fallback declarado em `--font-*` (Segoe UI / system-ui / Georgia). Nada quebra no build.
