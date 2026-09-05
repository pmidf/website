import type { EtapaCiclo, FaseCronograma, PerfilMentoring } from '@/types';

/**
 * Conteúdo da página Mentoring — 14º Ciclo.
 *
 * Transcrito do material enviado pela coordenação do programa. É documento
 * com valor de chamada pública: datas, requisitos e links de inscrição saem
 * daqui e precisam bater com o edital. Quando o ciclo virar, o que muda é
 * este arquivo — a página não conhece nenhuma data.
 *
 * Nenhum hex aqui: as cores dos cards são variáveis de
 * `src/styles/mentoring.css`.
 */

/* === Links externos ======================================================= */

/** Edital completo, no Drive do capítulo. Repetido em 3 CTAs da página. */
export const LINK_EDITAL =
  'https://drive.google.com/file/d/1vykD8w-adl_J-2B9t3ADu3tvXI031jr3/view';

/**
 * Mentores se inscrevem pelo VEP (o portal de voluntariado do PMI Global) e
 * mentorados por formulário — são fluxos diferentes, não dois botões para o
 * mesmo lugar.
 */
export const LINK_INSCRICAO_MENTOR =
  'https://volunteer.pmi.org/opportunities/73218';
export const LINK_INSCRICAO_MENTORADO =
  'https://docs.google.com/forms/d/e/1FAIpQLSfjuv4qEFlDDMRZPhnUwttab2hcMM8Dp4_76gksFM97t1QVEA/viewform';

/** Canal da coordenação do programa — não é o contato geral do capítulo. */
export const EMAIL_PROGRAMA = 'mentoria@pmidf.org';

/* === Seção 1 — Hero ======================================================= */

export const HERO = {
  ciclo: '14º Ciclo',
  titulo: 'Programa de Mentoring',
  objetivo:
    'O Programa de Mentoring tem como objetivo estimular e proporcionar a disseminação de conhecimento na área de gerenciamento de projetos, através de interações entre mentor e mentorado.',
  ctaLabel: 'Acesse o edital',
};

/* === Seção 2 — Datas do ciclo ============================================= */

/**
 * Os três dados que alguém vem procurar na página. Ficam na dobra logo abaixo
 * do hero, antes de qualquer texto corrido.
 */
export const DATAS_CHAVE = [
  {
    rotulo: 'Inscrições',
    valor: '06/08 a 13/08/2026',
    detalhe: 'Mentores pelo VEP e mentorados por formulário.',
  },
  {
    rotulo: 'Duração da mentoria',
    valor: '03/09 a 19/11/2026',
    detalhe: 'Do kick-off ao evento de encerramento.',
  },
  {
    rotulo: 'Dúvidas',
    valor: EMAIL_PROGRAMA,
    detalhe: 'Coordenação do programa.',
    href: `mailto:${EMAIL_PROGRAMA}`,
  },
];

/* === Seção 3 — Edital de abertura ========================================= */

export const EDITAL = {
  rotulo: 'Chamada pública',
  titulo: 'Edital de abertura',
  texto:
    'O PMI-DF, no uso das atribuições e considerando a necessidade de entregar benefício ao associado e disseminar o conhecimento sobre as boas práticas de Gerenciamento de Projetos, torna público que, no período de 03/09 a 19/11/2026, teremos o Programa de Mentoring 14º Ciclo, conforme informações contidas neste Edital.',
};

/* === Seção 4 — Quem pode participar ======================================= */

export const PERFIS: PerfilMentoring[] = [
  {
    perfil: 'mentor',
    titulo: 'Mentores',
    descricao:
      'Poderão participar do Programa de Mentoria os profissionais filiados ao Capítulo PMI-DF com experiência de, pelo menos, 5 anos em Gestão de Projetos e que não tenham desistido ou abandonado a mentoria em ciclos anteriores sem justa causa. Será dada preferência a profissionais filiados ao PMI-DF, abrindo-se vaga para o público externo caso não seja atingido o quórum mínimo de mentores.',
    requisitos: [
      'Preferencialmente, ser filiado ao Capítulo PMI-DF.',
      'Possuir experiência comprovada de, no mínimo, 5 (cinco) anos em Gestão de Projetos.',
      'É desejável — mas não obrigatório — possuir certificação do PMI (PMP®, PMI-PBA®, PgMP®, PfMP®, PMI-RMP®, PMI-SP®, DASM®, PMI-ACP®, DASSM®, DAVSC® ou DAC®).',
      'Possuir experiência em projetos multidisciplinares e, preferencialmente, multiculturais.',
      'Possuir experiência prévia em trabalhos voluntários.',
      'Ter experiência em orientação de trabalhos acadêmicos e/ou docência, quando aplicável.',
      'Ser fluente em língua portuguesa.',
      'Ter disponibilidade mínima de 2 (duas) horas semanais durante o ciclo.',
    ],
    ctaLabel: 'Quero ser mentor',
    ctaHref: LINK_INSCRICAO_MENTOR,
  },
  {
    perfil: 'mentorado',
    titulo: 'Mentorados',
    descricao:
      'Poderão participar quaisquer interessados em aprimorar seus conhecimentos profissionais em gerenciamento de projetos e que desejem obter conselhos e absorver experiências de profissionais gabaritados, desde que não tenham desistido ou abandonado a mentoria em ciclos anteriores sem justa causa. Será dada prioridade a filiados e voluntários do PMI-DF, abrindo-se vaga para o público externo apenas caso não seja atingido o quórum mínimo de mentorados.',
    requisitos: [
      'Ter interesse comprovado em aprimorar seus conhecimentos e práticas em Gerenciamento de Projetos.',
      'Filiados e voluntários do Capítulo PMI-DF terão prioridade no processo seletivo.',
      'Não ter desistido de ciclos anteriores do Programa sem justificativa aceita pela Coordenação.',
      'Ser fluente em língua portuguesa.',
      'Ter disponibilidade mínima de 2 (duas) horas semanais durante o ciclo, incluindo tempo para desenvolvimento do projeto final.',
    ],
    ctaLabel: 'Quero ser mentorado',
    ctaHref: LINK_INSCRICAO_MENTORADO,
  },
];

/* === Seção 5 — Cronograma ================================================= */

export const CRONOGRAMA: FaseCronograma[] = [
  {
    fase: 'Inscrição de mentores (VEP) e mentorados (formulário)',
    data: '06/08 a 13/08/2026',
  },
  {
    fase: 'Triagem e seleção de mentores e mentorados',
    data: '13/08 a 16/08/2026',
  },
  { fase: 'Publicação dos selecionados', data: '17/08/2026' },
  { fase: 'Reunião de kick-off (início oficial)', data: '20/08/2026' },
  { fase: 'Execução da mentoria', data: '31/08 a 06/11/2026' },
  { fase: 'Avaliação dos projetos pela banca', data: '09/11 a 18/11/2026' },
  {
    fase: 'Evento de pitch, divulgação dos vencedores e reunião de encerramento',
    data: '19/11/2026',
  },
  { fase: 'Emissão e entrega dos certificados', data: 'Até 27/11/2026' },
];

/* === Seção 6 — Etapas do programa ========================================= */

/** O que acontece em cada momento do ciclo. A numeração vem da ordem da lista. */
export const ETAPAS_PROGRAMA: EtapaCiclo[] = [
  {
    titulo: 'Kick-off',
    descricao:
      'Primeira reunião do ciclo, em que mentores e mentorados são apresentados uns aos outros e o processo de mentoria da dupla é definido.',
  },
  {
    titulo: 'Mentoring',
    descricao:
      'Fase de maior importância do programa: mentores e mentorados em contato, conforme o processo estabelecido pela dupla, com o conhecimento sendo disseminado.',
  },
  {
    titulo: 'Relatórios',
    descricao:
      'Os relatórios de mentoria avaliam o desenvolvimento dos trabalhos das duplas e a condução do programa pela coordenação.',
  },
  {
    titulo: 'Apresentação final',
    descricao:
      'Mentores e mentorados expõem seus principais aprendizados e as lições aprendidas ao longo do ciclo.',
  },
  {
    titulo: 'Reunião final',
    descricao:
      'Encerramento oficial do ciclo, com a avaliação dos projetos pela banca e a divulgação dos vencedores no evento de pitch.',
  },
  {
    titulo: 'Certificados',
    descricao:
      'Entrega do certificado de participação no programa a mentores e mentorados.',
  },
];

/* === Seção 7 — Selecionados =============================================== */

/**
 * Quadro dos selecionados do ciclo. Enquanto a lista não sai, cada grupo
 * mostra o estado em que está — em vez de sumir da página e deixar quem se
 * inscreveu sem resposta.
 */
export const SELECIONADOS = {
  rotulo: 'Resultado',
  titulo: 'Selecionados do 14º Ciclo',
  descricao:
    'A relação de mentores e mentorados selecionados é publicada aqui após a triagem, conforme o cronograma.',
  grupos: [
    { titulo: 'Mentores', status: 'Em processo de inscrição e seleção' },
    { titulo: 'Mentorados', status: 'Em processo de inscrição e seleção' },
  ],
};

/* === Seção 8 — Fechamento ================================================= */

export const FECHAMENTO = {
  titulo: 'Ficou com alguma dúvida?',
  descricao:
    'Consulte o edital do programa ou fale com a coordenação. Todas as regras de participação, seleção e certificação estão detalhadas no documento.',
  ctaLabel: 'Acesse o edital',
};
