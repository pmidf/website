/**
 * Mapa de redirects 301 — migração WordPress → Next.js (pmidf.org)
 * ----------------------------------------------------------------
 * Arquivo ESM: importado pelo `next.config.ts` e pelo verificador em
 * `scripts/verificar-redirects.mjs`, para o teste nunca sair de sincronia com
 * o que está em produção.
 *
 * Origem das URLs: https://pmidf.org/page-sitemap.xml (lido em 07/09/2026)
 *
 * DESTINOS VÁLIDOS (as 14 rotas do site novo — nenhuma outra pode ser usada):
 *   /                          /eventos/
 *   /quem-somos/               /mentoring/
 *   /quem-somos/presidentes/   /certificacoes/
 *   /quem-somos/voluntarios/   /incompany/
 *   /filiacao/                 /contato/
 *   /voluntariado/             /aviso-de-privacidade/
 *   /student-club/
 *   /transparencia/
 *
 * REGRAS APLICADAS
 * 1. `source` escrito SEM barra final. Com `trailingSlash: true` no next.config.js,
 *    o Next normaliza o caminho antes de casar a regra, e `/conheca/` bate em `/conheca`.
 * 2. Nenhuma regra aponta para a home, exceto o índice do blog (`/blog`), que é
 *    uma página de listagem — 301 em massa para a home é tratado como soft 404.
 * 3. URLs idênticas nos dois sites NÃO entram aqui. São seis e devem responder 200
 *    direto, sem hop nenhum:
 *      /certificacoes/  /contato/  /mentoring/
 *      /student-club/   /transparencia/  /aviso-de-privacidade/
 * 4. Posts do blog vivem na RAIZ (ex.: /aumento-de-produtividade/), não em /blog/.
 *    Eles não são redirecionados — vão para 410 no middleware.ts.
 */

const redirectsLegado = [
  // ─────────────────────────────────────────────────────────────
  // Institucional  →  /quem-somos/
  // ─────────────────────────────────────────────────────────────
  { source: '/conheca', destination: '/quem-somos/' },
  { source: '/conheca/pmi-distrito-federal', destination: '/quem-somos/' },

  // ATENÇÃO: as três abaixo são o conteúdo evergreen que traz busca não-marca
  // ("o que é gerenciamento de projetos"). Se um dia virarem artigos do blog,
  // troque o destino aqui — é o único ponto a alterar.
  { source: '/conheca/o-que-e-o-pmi', destination: '/quem-somos/' },
  { source: '/conheca/o-que-e-gerenciamento-de-projetos', destination: '/quem-somos/' },
  { source: '/conheca/quem-sao-os-gerentes-de-projetos', destination: '/quem-somos/' },

  // Se /quem-somos/voluntarios/ listar diretoria e conselho, troque o destino
  // destas duas para /quem-somos/voluntarios/.
  { source: '/conheca/diretoria', destination: '/quem-somos/' },
  { source: '/conheca/conselho', destination: '/quem-somos/' },

  { source: '/conheca/galeria-dos-presidentes', destination: '/quem-somos/presidentes/' },
  { source: '/comite-gov', destination: '/quem-somos/' },
  { source: '/projetagov', destination: '/quem-somos/' },
  { source: '/scfc', destination: '/quem-somos/' },
  { source: '/escritorio-de-projetos', destination: '/quem-somos/' },

  // Publicações
  { source: '/publicacoes', destination: '/quem-somos/' },
  { source: '/envolva-se/publicacao', destination: '/quem-somos/' },

  // Eleições (processo institucional — sem página equivalente no site novo)
  { source: '/eleicoes', destination: '/quem-somos/' },
  { source: '/eleicoes-2024', destination: '/quem-somos/' },
  { source: '/eleicao-fiscal', destination: '/quem-somos/' },

  // ─────────────────────────────────────────────────────────────
  // Parcerias e patrocinadores  →  /quem-somos/
  // Não há página de parcerias no site novo. Se ela for criada,
  // este bloco inteiro passa a apontar para ela.
  // ─────────────────────────────────────────────────────────────
  { source: '/parcerias', destination: '/quem-somos/' },
  { source: '/patrocinador', destination: '/quem-somos/' },
  { source: '/fgv', destination: '/quem-somos/' },
  { source: '/via-appia', destination: '/quem-somos/' },
  { source: '/sas', destination: '/quem-somos/' },
  { source: '/universo-bpm', destination: '/quem-somos/' },
  { source: '/conexao-agil', destination: '/quem-somos/' },
  { source: '/plano-consultoria', destination: '/quem-somos/' },

  // ─────────────────────────────────────────────────────────────
  // Governança  →  /transparencia/
  // ─────────────────────────────────────────────────────────────
  { source: '/governanca', destination: '/transparencia/' },

  // ─────────────────────────────────────────────────────────────
  // Filiação e benefícios  →  /filiacao/
  // ─────────────────────────────────────────────────────────────
  { source: '/envolva-se', destination: '/filiacao/' },
  { source: '/envolva-se/filiacao', destination: '/filiacao/' },
  { source: '/area-de-membros', destination: '/filiacao/' },

  { source: '/clube-de-beneficios', destination: '/filiacao/' },
  { source: '/clube-de-beneficios/desconto-de-10-fgv', destination: '/filiacao/' },
  { source: '/clube-de-beneficios/desconto-de-30-ibmec', destination: '/filiacao/' },
  { source: '/clube-de-beneficios/desconto-de-15-jump-treinamentos', destination: '/filiacao/' },
  { source: '/clube-de-beneficios/desconto-de-35-hucmi', destination: '/filiacao/' },
  { source: '/clube-de-beneficios/desconto-de-55-preparatorio-capm-2023', destination: '/filiacao/' },
  { source: '/clube-de-beneficios/desconto-ate-37-alianca-america-idiomas', destination: '/filiacao/' },
  { source: '/clube-de-beneficios/desconto-de-10-work-avanti', destination: '/filiacao/' },
  { source: '/clube-de-beneficios/desconto-de-20-wise-up', destination: '/filiacao/' },
  { source: '/clube-de-beneficios/descontos-de-ate-30-empie-training', destination: '/filiacao/' },
  { source: '/clube-de-beneficios/desconto-de-20-e-muito-mais-sirius', destination: '/filiacao/' },
  { source: '/clube-de-beneficios/desconto-ate-35-scitarc', destination: '/filiacao/' },
  { source: '/clube-de-beneficios/desconto-20-escrita', destination: '/filiacao/' },
  // Rede de segurança: qualquer subpágina de benefício que não esteja na lista acima.
  { source: '/clube-de-beneficios/:slug*', destination: '/filiacao/' },

  // ─────────────────────────────────────────────────────────────
  // Voluntariado e comunidade  →  /voluntariado/
  // ─────────────────────────────────────────────────────────────
  { source: '/envolva-se/voluntariado', destination: '/voluntariado/' },
  { source: '/envolva-se/voluntariado-do-ano', destination: '/voluntariado/' },
  { source: '/envolva-se/projetos', destination: '/voluntariado/' },
  { source: '/comunidade', destination: '/voluntariado/' },
  { source: '/next-gen', destination: '/voluntariado/' },

  // ─────────────────────────────────────────────────────────────
  // Eventos, prêmios e capacitações  →  /eventos/
  // ─────────────────────────────────────────────────────────────
  { source: '/desenvolva-se', destination: '/eventos/' },
  { source: '/desenvolva-se/eventos-e-capacitacoes', destination: '/eventos/' },
  { source: '/desenvolva-se/cursos', destination: '/eventos/' },
  { source: '/desenvolva-se/oportunidades-de-emprego', destination: '/eventos/' },
  { source: '/desenvolva-se/vitrine', destination: '/eventos/' },
  { source: '/capacitacao', destination: '/eventos/' },
  { source: '/programacao', destination: '/eventos/' },

  // Encontro de Gerenciamento de Projetos (EGP)
  { source: '/egp', destination: '/eventos/' },
  { source: '/egp-2022', destination: '/eventos/' },
  { source: '/egp-2022/programacao-egp', destination: '/eventos/' },
  { source: '/egp-2022/candidatos', destination: '/eventos/' },
  { source: '/egp-2022/finalistas-2022', destination: '/eventos/' },
  { source: '/egp-2022/premio-candango-2022', destination: '/eventos/' },
  { source: '/egp-2022/premio-melhores-do-ano-2022', destination: '/eventos/' },
  { source: '/egp-2022/universidia-2022', destination: '/eventos/' },
  { source: '/egp-2022/:slug*', destination: '/eventos/' },

  // Prêmios (podem ter backlink de imprensa — nunca deixar cair em 404)
  { source: '/premio-candango', destination: '/eventos/' },
  { source: '/premio-candango-2023', destination: '/eventos/' },
  { source: '/premio-candango-2024', destination: '/eventos/' },
  { source: '/melhores-do-ano', destination: '/eventos/' },
  { source: '/escritorio-de-projetos/premio-melhores-do-ano-2023', destination: '/eventos/' },
  { source: '/escritorio-de-projetos-pmo-artefatos', destination: '/eventos/' },

  // Eventos avulsos encerrados
  { source: '/universidia', destination: '/eventos/' },
  { source: '/hackathon', destination: '/eventos/' },
  { source: '/dgpis', destination: '/eventos/' },
  { source: '/semana-da-carreira-2023', destination: '/eventos/' },

  // Listagem do plugin de eventos (as subpáginas de sistema vão para 410)
  { source: '/eventos-3', destination: '/eventos/' },

  // ─────────────────────────────────────────────────────────────
  // Mentoring  →  /mentoring/
  // ─────────────────────────────────────────────────────────────
  { source: '/mentoring/mentoring-ciclo-12', destination: '/mentoring/' },
  { source: '/maximize-mentoria', destination: '/mentoring/' },
  { source: '/desenvolva-se/mentoring-2020', destination: '/mentoring/' },
  { source: '/desenvolva-se/mentoring-2021', destination: '/mentoring/' },
  { source: '/desenvolva-se/mentoring-2022', destination: '/mentoring/' },
  { source: '/desenvolva-se/mentoring-2023', destination: '/mentoring/' },

  // ─────────────────────────────────────────────────────────────
  // Certificações  →  /certificacoes/
  // ─────────────────────────────────────────────────────────────
  { source: '/manutencao-da-certificacao', destination: '/certificacoes/' },

  // ─────────────────────────────────────────────────────────────
  // In Company  →  /incompany/
  // O site antigo usava hífen. Este é o único hop evitável que sobrou.
  // ─────────────────────────────────────────────────────────────
  { source: '/in-company', destination: '/incompany/' },

  // ─────────────────────────────────────────────────────────────
  // Contato  →  /contato/
  // ─────────────────────────────────────────────────────────────
  { source: '/faq', destination: '/contato/' },

  // ─────────────────────────────────────────────────────────────
  // Privacidade  →  /aviso-de-privacidade/
  // /politica-de-privacidade é linkada no banner de cookies do WP,
  // não aparece no sitemap.
  // ─────────────────────────────────────────────────────────────
  { source: '/politica-de-privacidade', destination: '/aviso-de-privacidade/' },

  // ─────────────────────────────────────────────────────────────
  // Índice do blog
  // Página de listagem: a home é substituto legítimo.
  // Os POSTS (na raiz) NÃO entram aqui — ver middleware.ts.
  // ─────────────────────────────────────────────────────────────
  { source: '/blog', destination: '/' },
];

// Todos permanentes (301). `permanent: true` no Next emite 308, que o Google
// trata como equivalente a 301 e preserva o método HTTP.
export default redirectsLegado.map((r) => ({ ...r, permanent: true }));
