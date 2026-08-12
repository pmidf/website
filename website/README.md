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
    (site)/          rotas com chrome (Header + Rodapé) — hoje só a home
    layout.tsx       <html>/<body>, metadata base
    not-found.tsx    404
    sitemap.ts       lista de rotas estáticas
  components/
    layout/          Header, Rodape
    ui/              Container, Botao, TituloSecao, Eyebrow
    home/            seções da home     — orquestradas por (site)/page.tsx
    eventos/         seções de Eventos  — orquestradas por (site)/eventos/page.tsx
    filiacao/        seções de Filiação — orquestradas por (site)/filiacao/page.tsx
    voluntariado/    seções de Voluntariado
  content/           navegação, assets, conteúdo das seções — fonte única de verdade
  types/             contratos do conteúdo (Iniciativa, EventoAgenda, Mantenedor…)
  lib/               helpers
  styles/            @font-face, mentoring.css
```

**Rotas prontas:** `/`, `/eventos`, `/filiacao`, `/mentoring` e `/voluntariado`. As demais do menu
(`/sobre`, `/certificacao`, `/incompany`, `/blog`, `/contato`) e o `/student-club` ainda não
existem — os links já apontam para elas e caem no 404 até serem criadas. Cada página nova entra como `src/app/(site)/<rota>/page.tsx`, ganha uma linha em
`staticRoutes` no `sitemap.ts` e, se tiver arte própria, uma pasta em
`public/assets/paginas/<rota>/`.

### Duas convenções de estilo convivem

Home e Eventos são Tailwind com componentes em `src/components/<pagina>/`; Mentoring é CSS
global com prefixo `mtr-` em `src/styles/mentoring.css`, num `page.tsx` único. Vale escolher uma
antes da próxima página — hoje as duas funcionam, mas dobram o custo de manter o design system.

Os primitivos de `components/ui/` são o ponto de reuso entre páginas. Quando duas páginas pedem
tratamentos diferentes do mesmo elemento (a margem lateral do `Container`, o estilo do `Botao`),
a diferença entra como **variante nomeada** — nunca como utilitário Tailwind extra por
`className`, porque duas classes da mesma propriedade são resolvidas pela ordem da folha de
estilo gerada, não pela ordem em que foram escritas.

Adicionar um item ao menu = editar [`src/content/navegacao.ts`](src/content/navegacao.ts).
Header e Rodapé leem daí; o sitemap e a metadata leem de
[`src/content/site.ts`](src/content/site.ts).

Nenhum componente escreve texto de seção ou caminho de imagem inline: publicar um evento é
editar `src/content/home.ts`, trocar uma arte é editar `src/content/assets.ts`.

## Imagens e assets

Vão em [`public/assets/`](public/assets/README.md), sempre referenciados via
`src/content/assets.ts`. O export estático desliga o otimizador de imagem do Next
(`images.unoptimized`), então o arquivo chega ao navegador como está — comprima antes de
commitar e prefira SVG. A lista do que exportar do Figma, com tamanhos, está no
[README de `public/assets`](public/assets/README.md).

## Rotas dinâmicas

Quando o blog entrar, `/blog/[slug]` precisa de `generateStaticParams` lendo de
`src/content/` — obrigatório com `output: "export"`, que não tem servidor para
resolver slug em runtime.

## Formulário de contato

O site é estático: não há Server Actions nem route handlers para receber POST.
A futura página de contato precisa apontar para um serviço externo (Formspree,
Basin, API própria) ou embutir o widget do CRM.
