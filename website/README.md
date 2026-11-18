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
(`/sobre`, `/certificacao`, `/incompany`, `/contato`) e o `/student-club` ainda não
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

## Notícias

O antigo blog virou `/noticias`, e `/blog` redireciona para lá. A lista, em
[`src/content/noticias.ts`](src/content/noticias.ts), aceita dois tipos de item:

- **externa**: matéria publicada fora do site (imprensa, PMI.org, LinkedIn). O card abre o
  link original em nova aba.
- **interna**: matéria publicada no próprio site, em `/noticias/<id>`. O texto fica em
  `src/content/materias/<id>.ts` e é desenhado por `src/components/materia/`.

A ordem da lista não importa, porque a página ordena pela `data` (ISO, `AAAA-MM-DD`).
`destaque: true` fixa o item no card grande do topo; sem nenhum marcado, vai a mais
recente.

**Para cadastrar uma notícia externa:**

1. Se houver imagem, salve em `public/assets/paginas/noticias/<id>.webp` (1200 × 675,
   16:9, comprimida) e registre a chave em `assets.noticias`. Sem imagem, o card usa uma
   capa gerada a partir da categoria. Não aponte para a imagem no site de origem: URLs de
   terceiros mudam e expiram.
2. Acrescente `{ tipo: "externa", href, veiculo, … }` em `NOTICIAS`.

**Para publicar uma matéria interna** (modelo: o release do Summit 2026):

1. Escreva `src/content/materias/<id>.ts` com os blocos do corpo: parágrafo, intertítulo,
   painel de números e foto com citação.
2. Salve as fotos em `public/assets/paginas/noticias/`. Use a maior resolução disponível,
   até 2000 px no lado maior, porque o `.docx` costuma ter fotos melhores que o PDF. Gere
   também um recorte 1200 × 675 para o card e um 1200 × 630 em JPEG para compartilhamento.
   Registre tudo em `assets.noticias`.
3. Acrescente `{ tipo: "interna", materia, … }` em `NOTICIAS`.
4. Acrescente a rota em `src/content/rotas.ts`, com `pai: "/noticias"`, para a trilha e o
   sitemap. Ela é escrita à mão de propósito: a trilha é Client Component, e derivá-la da
   lista levaria o texto das matérias para o JavaScript do navegador.

A página mostra o destaque, as 9 seguintes em grade (`RECENTES_NA_GRADE`) e o restante
num arquivo compacto por ano. Com a lista vazia, aparece um aviso apontando para as
redes, nunca conteúdo de exemplo.

## Formulário de contato

O formulário de `/contato` envia por SMTP, numa Server Action
([`src/app/(site)/contato/enviar.ts`](<src/app/(site)/contato/enviar.ts>)) que usa o
nodemailer. Precisa de três variáveis, descritas no [`.env.example`](.env.example):

| Variável | O que é |
|---|---|
| `SMTP_USER` | Conta que envia, e também o remetente |
| `SMTP_PASS` | No Gmail ou Google Workspace, uma **senha de app**, não a senha da conta |
| `CONTACT_TO` | Caixa que recebe as mensagens |

`SMTP_HOST` e `SMTP_PORT` são opcionais; o padrão é `smtp.gmail.com:465`.

Cadastre as três em Vercel → Settings → Environment Variables, com o ambiente
**Production** marcado, no projeto que serve `pmidf.org` (o que tem o domínio em
Settings → Domains). Variável criada ou alterada no painel só vale a partir do
próximo deploy, então clique em **Redeploy** depois de mexer.

**Quando o envio falha,** a pessoa vê "Tente de novo em instantes ou escreva direto
para…". O motivo fica nos Runtime Logs da Vercel; filtre por `[contato]`:

- `não configurado: faltam …`: a variável listada não existe naquele ambiente, ou
  foi criada depois do último deploy.
- `falha ao enviar: EAUTH 535 AUTH`: senha recusada. No Gmail, gere uma senha de app.
- Nenhuma linha `[contato]`: o envio nem chegou ao servidor. Confira o Firewall da
  Vercel, porque o modo de desafio (Attack Challenge Mode ou Bot Protection em
  *Challenge*) pode barrar o POST do formulário.
