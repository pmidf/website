# Website institucional

Next.js 16 (App Router) + TypeScript + Tailwind CSS 4, exportado como site estático
(`output: "export"`) para hospedagem em Apache/HostGator.

## Comandos

```bash
npm run dev     # desenvolvimento em http://localhost:3000
npm run build   # gera o site estático em ./out
npm run lint
```

O deploy é o conteúdo de `out/` enviado para o `public_html`. `trailingSlash: true`
faz cada rota virar `pasta/index.html`, que é o que o Apache espera.

## Design tokens

Todos os tokens vivem num único lugar: o bloco `@theme` em
[`src/app/globals.css`](src/app/globals.css). Cores e famílias de fonte vêm do design
system e **não devem ser inventadas em componentes** — se um valor não existe no
`@theme`, ele precisa ser adicionado lá primeiro.

A escala nativa `violet` do Tailwind é zerada (`--color-violet-*: initial`) para que
apenas os tons oficiais existam. Um `bg-violet-400` (que não faz parte da paleta)
falha de forma visível em vez de aplicar um roxo genérico do framework.

Componentes devem preferir os **tokens semânticos** (`bg-primary`, `text-muted`,
`bg-surface`, `bg-inverse`…) aos tons crus (`bg-violet-500`). Trocar a marca vira
uma edição de poucas linhas.

## Fontes

Aeonik, Aptos e Teodor são licenciadas e não estão versionadas no repositório.
Veja [`public/fonts/README.md`](public/fonts/README.md) para a lista de arquivos
`.woff2` esperados. Sem eles o site funciona normalmente, caindo nos fallbacks
declarados em `--font-*`.

## Estrutura

```
src/
  app/
    (site)/          rotas institucionais (Header + Footer)
    layout.tsx       <html>/<body>, metadata base
    sitemap.ts       derivado de src/content/
  components/
    layout/          Header, Footer, Container
    ui/              Button, Card, Section
    sections/        blocos de página reutilizáveis
  content/           navegação, serviços, posts — fonte única de verdade
  lib/               helpers
  styles/            @font-face
```

Adicionar um item ao menu = editar [`src/content/site.ts`](src/content/site.ts).
Header, Footer e sitemap leem daí.

## Rotas dinâmicas

`/servicos/[slug]` e `/blog/[slug]` são geradas em build a partir de
`src/content/servicos.ts` e `src/content/posts.ts` via `generateStaticParams` —
obrigatório com `output: "export"`.

## Formulário de contato

O site é estático: não há Server Actions nem route handlers para receber POST.
A página de contato precisa apontar para um serviço externo (Formspree, Basin,
API própria) ou embutir o widget do CRM.
