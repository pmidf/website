# Assets

Tudo que é servido como arquivo estático (imagens, logos, ícones) mora aqui. Os caminhos são
referenciados **exclusivamente** por [`src/content/assets.ts`](../../src/content/assets.ts) —
nenhum componente escreve caminho na mão. Renomeou um arquivo? Edite lá e o TypeScript aponta
quem quebrou.

## Como a pasta é organizada

A divisão é por **alcance**, não por página: o que se repete no site fica na raiz temática, o que
é exclusivo de uma rota fica em `paginas/<rota>/`. É o que evita a mesma forma geométrica ser
duplicada em cinco pastas quando Sobre, Eventos e InCompany entrarem.

```
public/assets/
├── marca/              identidade — vale para o site inteiro
│   └── logo-pmidf.webp         193 × 75 · lockup padrão (texto escuro), fundo claro
├── formas/             geometria do design system, reaproveitável entre páginas
│   ├── losangos-laranja.webp   379 × 713 · banner de certificações  ("Group 11")
│   ├── triangulo-roxo.webp     143 × 124 · card Filiação            ("Polygon 1")
│   ├── pentagono-azul.webp     147 × 143 · card Student Club        ("Rectangle 43")
│   ├── circulo-laranja.webp    138 × 138 · card Voluntariado        ("Ellipse 1")
│   └── capsula-gradiente.webp 1190 × 470 · fundo do bloco InCompany ("Dark Gradient 8")
├── mantenedores/       logos de parceiros
│   ├── brb-lab.webp            186 × 161
│   ├── brisk.webp              236 × 80
│   └── smartkanvas.webp        314 × 89
└── paginas/            artes exclusivas de uma rota
    ├── home/
    │   ├── hero-fundo.webp    1280 × 567 · fundo full-bleed do Hero
    │   └── hero-brasilia.webp  471 × 450 · foto de Brasília, recorte arredondado
    └── eventos/
        └── banner.webp        1115 × 396 · fundo do "Evento em destaque"
```

Entre parênteses, o nome original do export do Figma. Atenção: `Polygon 1` é o **triângulo**
e `Rectangle 43` é o **pentágono** — os nomes das ferramentas do Figma não descrevem as formas
finais, por isso o repositório usa nomes pelo que a arte é.

## O que ainda falta

- `marca/logo-pmidf-branco.webp` — o lockup entregue é azul-escuro e some no fundo roxo do Hero.
  Enquanto não chega, o Hero renderiza o título como texto branco (ver `Hero.tsx`).

## Ícones não moram aqui

Ícones de interface e de redes sociais vêm do pacote [`react-icons`](https://react-icons.github.io/react-icons/),
declarados em [`src/content/navegacao.ts`](../../src/content/navegacao.ts) — não são arquivos em
`public/`. Ganhos: as marcas ficam atualizadas por quem mantém o conjunto, o glifo herda a cor do
texto via `currentColor` (hover e foco funcionam sem trocar de arquivo) e o SVG é embutido no HTML,
sem requisição extra.

Só desça um ícone para cá se ele for arte exclusiva do PMI-DF, sem equivalente na biblioteca.

Página nova = pasta nova em `paginas/` **e** uma chave nova em `src/content/assets.ts`. Formas,
ícones e marca não se duplicam: são importados de onde já estão.

## Regras de nomenclatura

- **kebab-case, sem acento, sem espaço** — `logo-pmidf-branco.svg`, nunca `Logo PMI (branco).svg`.
- **Descreve o que é, não onde está** — `triangulo-roxo.svg` sobrevive a um redesign da home;
  `deco-card-1.svg` não.
- **Variante como sufixo** — `-branco`, `-mono`, `-2x`.

## Comprima antes de commitar

Os PNG que saem do Figma são grandes demais para um site sem otimizador em runtime — o export
inicial destes 11 arquivos somava **2,2 MB**. Convertidos para WebP (`sharp`, qualidade 82 em
fotos/gradientes e 90 em arte chapada com alpha), foram para **137 KB**, sem diferença visível.

O gradiente do InCompany sozinho caiu de 830 KB para 21 KB. Rode a mesma conversão em todo
bitmap novo — Squoosh no navegador resolve, ou `sharp` que já vem instalado com o Next.

Duas exceções que valem SVG em vez de WebP: os ícones das redes e, se o Figma exportar,
as formas geométricas — são vetor puro e ficariam com uma fração do peso, nítidas em qualquer
densidade de tela.

## ⚠️ Trocou o arquivo? Confira a proporção

`next/image` exige `width`/`height`, e o navegador deriva a altura renderizada **dessa proporção**,
não do arquivo. Substituir uma arte por outra de proporção diferente sem atualizar os números
espreme a imagem.

Os números vivem em dois lugares:

- formas dos cards → `deco.largura` / `deco.altura` em [`src/content/home.ts`](../../src/content/home.ts)
- logos de mantenedor → `w` / `h` em `MANTENEDORES`, mesmo arquivo
- lockup da marca → `width`/`height` no `<Image>` do Header e do Rodapé (hoje `193 × 75`)

## Sem otimização automática

`next.config.ts` usa `output: "export"` + `images.unoptimized: true` — o otimizador do Next exige
servidor Node, que a hospedagem Apache não tem. Consequência: **o arquivo vai para o navegador
exatamente como está aqui**, sem resize, sem conversão de formato, sem `srcset`. É por isso que a
compressão acima é manual e obrigatória.

Ícones SVG são renderizados por `next/image`, ou seja, dentro de um `<img>` — `currentColor` **não**
funciona. Exporte cada ícone já na cor final.

O `hero-fundo.webp` veio em 1280px de largura, mas é usado full-bleed (`sizes="100vw"`): em
monitores acima disso ele é esticado. Como é um gradiente difuso, o borrão é imperceptível — se
o fundo ganhar detalhe algum dia, exporte em 2560px.
