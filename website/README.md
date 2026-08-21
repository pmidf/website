# Website institucional

Next.js 16 (App Router) + TypeScript + Tailwind CSS 4, hospedado na Vercel com
runtime Node.

## Comandos

```bash
npm run dev     # desenvolvimento em http://localhost:3000
npm run build
npm run lint
```

O site já foi um export estático (`output: "export"`) para o Apache da HostGator.
A integração com o Sympla exigiu runtime — export estático não tem ISR nem Route
Handlers, então a agenda só mudaria a cada deploy e o token teria de ser resolvido
no build. `trailingSlash: true` continua ligado para não mexer nas URLs indexadas.

## Agenda de eventos (Sympla)

Os eventos das páginas `/` e `/eventos` vêm da API pública do Sympla, não de
arquivos em `src/content/`. Publicar um evento é publicá-lo no Sympla.

Configure `SYMPLA_TOKEN` (veja [`.env.example`](.env.example)) — em
`.env.local` no desenvolvimento e em Settings → Environment Variables na Vercel.
Sem o token a agenda renderiza um estado vazio com link para o Sympla; ela nunca
cai em conteúdo de exemplo.

A camada de dados é [`src/lib/sympla.ts`](src/lib/sympla.ts), que documenta a
estratégia de cache em detalhe. Em resumo: a Sympla é consultada no máximo uma
vez a cada 15 minutos **para o site inteiro** — ISR na página, `Cache-Control`
no route handler, Data Cache no `fetch` e memoização por request.

A página abre com 6 eventos renderizados no servidor; "Ver mais" busca as fatias
seguintes em `GET /api/eventos?offset=&limit=`, que lê do cache e não da Sympla.

Para publicar um evento sem esperar os 15 minutos, defina
`SYMPLA_REVALIDATE_SECRET` e chame:

```bash
curl -X POST -H "x-revalidate-secret: $SYMPLA_REVALIDATE_SECRET" \
  https://SEU-DOMINIO/api/eventos/revalidate/
```

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
    (site)/          rotas com chrome (Header + Rodapé)
    api/eventos/     paginação da agenda + invalidação de cache sob demanda
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
  lib/               helpers e a integração com o Sympla (sympla.ts)
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
`src/content/assets.ts`. `images.unoptimized` continua ligado (herança do export
estático), então o arquivo chega ao navegador como está — comprima antes de
commitar e prefira SVG. Agora que há runtime, ligar o otimizador é possível, mas
é uma mudança à parte: mexe na entrega de imagem do site inteiro. A lista do que exportar do Figma, com tamanhos, está no
[README de `public/assets`](public/assets/README.md).

## Rotas dinâmicas

Quando o blog entrar, `/blog/[slug]` pode resolver o slug em runtime. Prefira
ainda assim `generateStaticParams` para os slugs conhecidos: prerenderiza o que
já existe e deixa o resto sob demanda.

## Formulário de contato

Com runtime disponível, a futura página de contato pode usar Server Actions ou um
route handler (veja `src/app/api/eventos/` como referência) — ou continuar
apontando para um serviço externo (Formspree, Basin) ou para o widget do CRM.
