import { NextResponse, type NextRequest } from 'next/server';

/**
 * 410 Gone — URLs legadas do WordPress que foram descontinuadas de propósito.
 * ---------------------------------------------------------------------------
 * Por que 410 e não 404, e por que não 301:
 *
 *   301 → só quando existe destino equivalente. Redirecionar uma página de
 *         checkout ou um dashboard de plugin para a home é lido pelo Google
 *         como soft 404: o sinal é descartado e o relatório fica sujo.
 *   404 → funciona, mas o Google reagenda o rastreamento por meses e a URL
 *         fica reaparecendo no Search Console.
 *   410 → "isto foi removido de propósito". Desindexação mais rápida e o
 *         relatório de Páginas do GSC estabiliza sozinho.
 *
 * Regra de segurança: nenhuma URL com clique orgânico ou backlink externo
 * pode entrar nestas listas. Se aparecer uma no relatório do Search Console,
 * mova para o mapa de 301 em redirects-legado.js.
 */

/** Caminhos exatos (sem barra final — a normalização cuida disso). */
const GONE_EXATO = new Set<string>([
  // ── Autenticação e conta (nunca deveriam ter sido indexadas) ──
  '/login',
  '/cadastro',
  '/my-account',
  '/minha-conta',
  '/forgot',
  '/reset',
  '/change',
  '/users',
  '/user-list-item',

  // ── E-commerce (WooCommerce desligado junto com o WordPress) ──
  '/loja',
  '/finalizar-compra',
  '/carrinho',

  // ── Plugin de eventos: telas internas e arquivos gerados ──
  '/eventos-3/locations',
  '/eventos-3/categories',
  '/eventos-3/tags',
  '/eventos-3/my-bookings',
  '/publicar-um-evento',
  '/painel-do-evento',
  '/submit-organizer-form',
  '/organizer-dashboard',
  '/event-organizers',
  '/submit-venue-form',
  '/venue-dashboard',
  '/event-venues',

  // ── Rascunhos, campanhas sazonais e sobras ──
  '/home-nova',      // duplicata da home, estava indexada
  '/boas-festas',    // campanha de dezembro/2021
  '/padlet',
  '/mapa-do-site',
  '/mapa',

  // ── Posts do blog legado (vivem na RAIZ, sem prefixo /blog/) ──
  // Estes sete foram confirmados no site. A lista completa sai de:
  //   curl -s 'https://pmidf.org/wp-json/wp/v2/posts?per_page=100&page=1' \
  //     | jq -r '.[].slug' | sed 's|^|  "/|; s|$|",|'
  // Rode ANTES de desligar o WordPress — depois não tem como recuperar.
  '/os-gerentes-de-projeto-sao-vendedores',
  '/um-gerente-de-projeto-pode-se-tornar-um-coach-agil',
  '/aumento-de-produtividade',
  '/4-coisas-que-voce-deve-incluir-durante-uma-configuracao-de-equipe',
  '/como-navegar-na-parte-central-chata-de-seus-projetos',
  '/como-aceitar-uma-entrevista-preliminar',
  '/mundo-dos-negocios',
]);

/** Prefixos: o próprio caminho e tudo abaixo dele. */
const GONE_PREFIXO: string[] = [
  '/category',      // arquivos de categoria do WP (ex.: /category/next-gen/)
  '/tag',
  '/author',
  '/profile',       // perfis públicos de autores/voluntários (ver LGPD)
  '/wp-admin',
  '/wp-includes',
  '/wp-json',
  '/feed',
  '/comments',
];

/** Arquivos soltos do WordPress na raiz. */
const GONE_ARQUIVOS = new Set<string>([
  '/wp-login.php',
  '/xmlrpc.php',
  '/wp-cron.php',
]);

const PAGINA_410 = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Página removida — PMI-DF</title>
<style>
  :root { color-scheme: light }
  body { margin:0; min-height:100vh; display:flex; align-items:center; justify-content:center;
         font-family: system-ui, -apple-system, "Segoe UI", sans-serif; background:#fafafa; color:#1a1a1a }
  main { max-width:32rem; padding:2rem; text-align:center }
  h1 { font-size:1.5rem; margin:0 0 .75rem }
  p { line-height:1.6; color:#555; margin:0 0 1.5rem }
  a { display:inline-block; padding:.7rem 1.4rem; border-radius:.4rem;
      background:#1a3a6b; color:#fff; text-decoration:none; font-weight:600 }
</style>
</head>
<body>
  <main>
    <h1>Esta página não existe mais</h1>
    <p>O conteúdo que você procurava fazia parte da versão anterior do site
       e foi descontinuado. Nosso site foi renovado.</p>
    <a href="/">Ir para a página inicial</a>
  </main>
</body>
</html>`;

function normalizar(pathname: string): string {
  const p = pathname.toLowerCase();
  return p.length > 1 && p.endsWith('/') ? p.slice(0, -1) : p;
}

function estaRemovida(path: string): boolean {
  if (GONE_EXATO.has(path)) return true;
  if (GONE_ARQUIVOS.has(path)) return true;
  return GONE_PREFIXO.some((pre) => path === pre || path.startsWith(pre + '/'));
}

export function middleware(request: NextRequest) {
  const path = normalizar(request.nextUrl.pathname);

  // Permalinks antigos por ID: /?p=123 — resquício de links muito antigos.
  const ehPermalinkAntigo =
    path === '' || path === '/' ? request.nextUrl.searchParams.has('p') : false;

  if (estaRemovida(path) || ehPermalinkAntigo) {
    return new NextResponse(PAGINA_410, {
      status: 410,
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'x-robots-tag': 'noindex',
        'cache-control': 'public, max-age=3600',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Roda em tudo, exceto:
     *  - assets internos do Next
     *  - arquivos de SEO que precisam responder normalmente
     *  - /wp-content/  → é onde ficam as mídias legadas copiadas para public/
     */
    '/((?!_next/static|_next/image|wp-content|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};
