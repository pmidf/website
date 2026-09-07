#!/usr/bin/env node
/**
 * Verificação de redirects pós-migração.
 *
 *   node scripts/verificar-redirects.mjs                      # testa produção
 *   node scripts/verificar-redirects.mjs https://stg.pmidf.org  # staging, antes da virada
 *   node scripts/verificar-redirects.mjs http://localhost:3000  # local, antes de subir
 *
 * Importa o mapa real de `redirects-legado.mjs`, então nunca sai de sincronia
 * com o que está em produção. Verifica três coisas por URL:
 *   1. o status é o esperado (301/308 para redirect, 410 para removida, 200 para mantida)
 *   2. o destino final é exatamente o previsto
 *   3. não há cadeia de redirects (mais de um hop custa sinal e tempo)
 *
 * Rode DEPOIS da virada de DNS e novamente 7 dias depois.
 */

import redirects from '../redirects-legado.mjs';

const BASE = (process.argv[2] || 'https://pmidf.org').replace(/\/$/, '');

/** URLs idênticas nos dois sites: devem responder 200 sem nenhum hop. */
const DEVE_SER_200 = [
  '/',
  '/quem-somos/',
  '/quem-somos/presidentes/',
  '/quem-somos/voluntarios/',
  '/filiacao/',
  '/voluntariado/',
  '/student-club/',
  '/transparencia/',
  '/eventos/',
  '/mentoring/',
  '/certificacoes/',
  '/incompany/',
  '/contato/',
  '/aviso-de-privacidade/',
  // Mídia legada preservada
  '/wp-content/uploads/POLITICA-DE-PRIVACIDADE-E-PROTECAO-DE-DADOS-PESSOAIS.pdf',
  // SEO
  '/robots.txt',
  '/sitemap.xml',
];

/** Espelha GONE_EXATO + alguns prefixos do middleware.ts. Mantenha em sincronia. */
const DEVE_SER_410 = [
  '/login/', '/cadastro/', '/my-account/', '/minha-conta/', '/forgot/', '/reset/',
  '/change/', '/users/', '/user-list-item/',
  '/loja/', '/finalizar-compra/',
  '/eventos-3/locations/', '/eventos-3/categories/', '/eventos-3/tags/',
  '/eventos-3/my-bookings/', '/publicar-um-evento/', '/painel-do-evento/',
  '/submit-organizer-form/', '/organizer-dashboard/', '/event-organizers/',
  '/submit-venue-form/', '/venue-dashboard/', '/event-venues/',
  '/home-nova/', '/boas-festas/', '/padlet/', '/mapa-do-site/', '/mapa/',
  '/category/next-gen/', '/profile/fabricio-franca/', '/wp-json/wp/v2/posts',
  '/wp-login.php',
  // posts legados
  '/os-gerentes-de-projeto-sao-vendedores/',
  '/aumento-de-produtividade/',
  '/mundo-dos-negocios/',
];

const V = '\x1b[32m', X = '\x1b[31m', A = '\x1b[33m', R = '\x1b[0m', D = '\x1b[2m';

/** Segue a cadeia manualmente para contar os hops. */
async function seguir(url, max = 6) {
  const cadeia = [];
  let atual = url;
  for (let i = 0; i < max; i++) {
    let res;
    try {
      res = await fetch(atual, { redirect: 'manual', headers: { 'user-agent': 'verificador-redirects/1.0' } });
    } catch (e) {
      return { erro: e.message, cadeia };
    }
    cadeia.push({ url: atual, status: res.status });
    const loc = res.headers.get('location');
    if (!loc || res.status < 300 || res.status >= 400) {
      return { status: res.status, final: atual, hops: cadeia.length - 1, cadeia };
    }
    atual = new URL(loc, atual).toString();
  }
  return { erro: 'cadeia longa demais (loop?)', cadeia };
}

async function testar(caminho, esperado, destinoEsperado = null) {
  const r = await seguir(BASE + caminho);
  if (r.erro) return { ok: false, caminho, msg: `erro de rede: ${r.erro}` };

  const problemas = [];

  if (esperado === 'redirect') {
    const primeiro = r.cadeia[0].status;
    if (![301, 308].includes(primeiro)) {
      problemas.push(`primeiro status ${primeiro}, esperado 301/308`);
    }
    if (destinoEsperado) {
      const esperadaAbs = new URL(destinoEsperado, BASE).toString();
      if (r.final !== esperadaAbs) {
        problemas.push(`destino ${r.final.replace(BASE, '')} != ${destinoEsperado}`);
      }
    }
    if (r.status !== 200) problemas.push(`destino final responde ${r.status}`);
    if (r.hops > 1) problemas.push(`${r.hops} hops (cadeia de redirect)`);
  } else if (typeof esperado === 'number') {
    // Compara o status FINAL, não o primeiro: com `trailingSlash: true` o Next
    // normaliza `/wp-json/wp/v2/posts` para `/wp-json/wp/v2/posts/` antes de
    // qualquer outra coisa, então um 410 legítimo chega depois de um 308. O
    // que não pode é a cadeia ter mais de um salto.
    if (r.status !== esperado) {
      problemas.push(`status final ${r.status}, esperado ${esperado}`);
    }
    if (r.hops > 1) problemas.push(`${r.hops} hops até o status final`);
  }

  return { ok: problemas.length === 0, caminho, msg: problemas.join(' · '), status: r.status ?? r.cadeia[0].status };
}

async function bloco(titulo, itens) {
  console.log(`\n${titulo}`);
  const falhas = [];
  for (const t of itens) {
    const r = await testar(t.caminho, t.esperado, t.destino);
    if (r.ok) {
      console.log(`  ${V}ok${R}  ${D}${r.status}${R}  ${t.caminho}`);
    } else {
      console.log(`  ${X}FALHA${R}  ${t.caminho}\n        ${A}${r.msg}${R}`);
      falhas.push(r);
    }
  }
  return falhas;
}

const main = async () => {
  console.log(`Verificando ${BASE}\n${'='.repeat(60)}`);
  const falhas = [];

  falhas.push(...await bloco('Páginas que devem responder 200 sem hop', 
    DEVE_SER_200.map((c) => ({ caminho: c, esperado: 200 }))));

  falhas.push(...await bloco(`Redirects 301 (${redirects.length} regras)`,
    redirects
      .filter((r) => !r.source.includes(':'))   // curingas não são testáveis literalmente
      .map((r) => ({ caminho: r.source + '/', esperado: 'redirect', destino: r.destination }))));

  falhas.push(...await bloco('URLs removidas (410 Gone)',
    DEVE_SER_410.map((c) => ({ caminho: c, esperado: 410 }))));

  falhas.push(...await bloco('Sanidade: URL inexistente deve dar 404',
    [{ caminho: '/pagina-que-nunca-existiu-xyz/', esperado: 404 }]));

  console.log(`\n${'='.repeat(60)}`);
  if (falhas.length === 0) {
    console.log(`${V}Tudo certo.${R} Nenhuma falha.`);
  } else {
    console.log(`${X}${falhas.length} falha(s).${R} Corrija antes de enviar o sitemap ao Search Console.`);
    process.exitCode = 1;
  }
};

main();
