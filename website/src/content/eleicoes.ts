import type {
  CargoEleicao,
  DocumentoEleicao,
  EtapaEleicao,
  MarcoCronograma,
  MembroComite,
} from "@/types";

/**
 * Conteúdo da página de Eleições.
 *
 * É documento de processo eleitoral: datas, requisitos e regras saem daqui e
 * precisam bater com o Edital. Mudança de texto passa pelo Comitê Eleitoral —
 * o que este arquivo controla é a apresentação.
 *
 * A rota `/eleicoes` é a mesma do site antigo, de propósito: ela já tem
 * histórico de indexação e links externos. Por isso saiu do mapa de 301 em
 * `redirects-legado.mjs` e virou página de verdade.
 *
 * TODO: a cada biênio, atualizar `CICLO`, `CRONOGRAMA`, `COMITE` e os links
 * dos documentos. O resto do texto é estável entre eleições.
 */

export const CICLO = "Biênio 2027–2028";

/** Canal oficial do Comitê. Aparece em quatro lugares — declarado uma vez. */
export const EMAIL_COMITE = "eleicoes@pmidf.org";

export const HERO = {
  ciclo: `Processo eleitoral · ${CICLO}`,
  titulo: "Eleições da Diretoria Executiva",
  descricao:
    "A comunidade elege a próxima Diretoria Executiva do capítulo. Conheça o processo, verifique os requisitos e apresente sua candidatura.",
};

/* === Contextualização ===================================================== */

export const CONTEXTO = {
  eyebrow: "Sobre a eleição",
  titulo: "Uma decisão que pertence a toda a comunidade",
  paragrafos: [
    "A cada dois anos, os filiados do PMI Distrito Federal escolhem, por voto direto, quem conduzirá o capítulo. Esta eleição define os três cargos da Diretoria Executiva para o mandato de 1º de janeiro de 2027 a 31 de dezembro de 2028.",
    "O processo é conduzido pelo Comitê Eleitoral, de forma independente e em conformidade com o Estatuto do PMI-DF, os estatutos e políticas do PMI® e o Acordo de Constituição do Capítulo. Todos os filiados em situação regular têm direito a votar e a se candidatar, respeitados os requisitos de cada cargo.",
  ],
};

export const CARGOS: CargoEleicao[] = [
  {
    titulo: "Presidente",
    descricao:
      "Representa legalmente o capítulo e lidera o planejamento estratégico e a gestão global do PMI-DF.",
    cor: "bg-[#4F17A8]",
  },
  {
    titulo: "Vice-Presidência de Administração, Finanças e Governança",
    descricao:
      "Responsável pela governança administrativa, orçamento, finanças e registros institucionais.",
    cor: "bg-[#1AC7FF]",
  },
  {
    titulo: "Vice-Presidência de Desenvolvimento Profissional",
    descricao:
      "Conduz eventos, programas educacionais, certificações e trilhas de desenvolvimento dos filiados.",
    cor: "bg-[#FF610F]",
  },
];

/* === Processo ============================================================= */

export const PROCESSO = {
  eyebrow: "Como funciona",
  titulo: "O processo eleitoral, do início ao fim",
  descricao:
    "São quatro etapas, todas com prazos definidos no cronograma. A votação é 100% eletrônica, em plataforma fornecida pelo PMI®.",
  conduta:
    "Não é permitida campanha eleitoral organizada, arrecadação de fundos ou atividade em nome de candidato. O Comitê Eleitoral é o único distribuidor dos materiais eleitorais, garantindo igualdade entre todas as candidaturas.",
};

/** O número de cada etapa vem da ordem da lista. */
export const ETAPAS: EtapaEleicao[] = [
  {
    titulo: "Candidatura",
    descricao:
      "Filiados elegíveis se inscrevem individualmente para um cargo, enviando a ficha de perfil ao Comitê Eleitoral.",
  },
  {
    titulo: "Homologação",
    descricao:
      "O Comitê Eleitoral verifica os requisitos de cada candidatura e divulga os candidatos aptos à comunidade.",
  },
  {
    titulo: "Votação",
    descricao:
      "Cada filiado em situação regular recebe o link da plataforma BigPulse e vota. Vence quem tiver a maioria dos votos por cargo.",
  },
  {
    titulo: "Homologação e posse",
    descricao:
      "O resultado é homologado em Assembleia Geral. Os eleitos tomam posse em 1º de janeiro de 2027.",
  },
];

/* === Cronograma =========================================================== */

export const CRONOGRAMA_TEXTO = {
  eyebrow: "Datas oficiais",
  titulo: "Cronograma",
  descricao:
    "Guarde as datas de votação. O link chega por e-mail aos filiados ativos no início da janela de votação.",
};

/** `marco` destaca as datas que a pessoa não pode perder. */
export const CRONOGRAMA: MarcoCronograma[] = [
  { data: "Até 15 de setembro de 2026", descricao: "Publicação do Edital de Eleições." },
  { data: "15 de setembro de 2026", descricao: "Abertura do prazo para candidaturas." },
  { data: "30 de setembro de 2026", descricao: "Encerramento do prazo para candidaturas." },
  {
    data: "1º de outubro de 2026",
    descricao: "Convocação da Assembleia Geral e apresentação dos candidatos.",
  },
  {
    data: "10 de outubro de 2026",
    descricao: "Lembrete da Assembleia e reforço das candidaturas.",
  },
  {
    data: "15 de outubro de 2026",
    descricao: "Abertura da votação eletrônica na plataforma do PMI®.",
    marco: "Votação abre",
  },
  {
    data: "22 de outubro de 2026",
    descricao: "Encerramento da votação eletrônica.",
    marco: "Votação encerra",
  },
  {
    data: "30 de outubro de 2026",
    descricao: "Assembleia Geral para homologação do resultado.",
  },
  {
    data: "1º de janeiro de 2027",
    descricao: "Posse da nova Diretoria Executiva.",
    marco: "Posse",
  },
];

/* === Requisitos =========================================================== */

export const REQUISITOS = {
  eyebrow: "Quem pode concorrer",
  titulo: "Requisitos de elegibilidade",
  descricao:
    "Os requisitos são cumulativos e verificados pelo Comitê Eleitoral. O filiado pode concorrer a apenas um cargo e deve estar adimplente com o PMI® e o PMI-DF.",
  grupos: [
    {
      titulo: "Presidência",
      nota: "Todos os requisitos das Vice-Presidências, e mais:",
      itens: [
        "4 anos de trabalho voluntário junto ao PMI®.",
        "Ter exercido integralmente um mandato de cargo eletivo em gestões anteriores.",
        "Ter exercido cargo de Diretor ou Diretor Adjunto no PMI-DF.",
      ],
    },
    {
      titulo: "Vice-Presidências",
      itens: [
        "Filiação regular e adimplente junto ao PMI®, com no mínimo 2 anos ininterruptos de filiação ao capítulo até um dia antes do início da eleição online.",
        "3 anos de trabalho voluntário junto ao PMI®.",
        "2 anos de trabalho voluntário junto ao PMI-DF.",
        "Ter exercido cargo de Diretor ou Diretor Adjunto.",
      ],
    },
  ],
};

/* === Ficha de candidatura ================================================= */

export const FICHA = {
  eyebrow: "O que enviar",
  titulo: "Ficha de candidatura",
  descricao:
    "Sua candidatura é apresentada à comunidade por um perfil que será exibido na plataforma de votação. Ele tem dois componentes:",
  campos: [
    {
      titulo: "Foto",
      descricao: "Formato 3x4, tom profissional (como no LinkedIn) e alta resolução.",
    },
    {
      titulo: "Texto de apresentação — máximo 300 palavras",
      descricao:
        "De 1 a 3 parágrafos, escritos na terceira pessoa, descrevendo formação acadêmica, experiência profissional e experiência de voluntariado dentro e fora do PMI. Inclua o link do seu perfil no LinkedIn, se desejar. Não é recomendado incluir propostas de trabalho para o mandato, já que o planejamento do capítulo segue as diretrizes do PMI® e a colaboração entre os voluntários eleitos.",
    },
  ],
  exemploRotulo: "Exemplo de texto de apresentação",
  exemplo:
    "Joana Silva, PMP, MBA, é Analista de Sistemas por formação e atua há mais de 10 anos como gerente de projetos, especialmente em infraestrutura de TI. É graduada pela Universidade Federal Fluminense (UFF) e pós-graduada em Gerenciamento de Projetos pela FGV. Voluntária do PMI desde 2014, coordenou o Projeto Mulheres de Fases do Capítulo Mato Grosso do Sul e já serviu como Diretora de Filiação e Vice-Presidente de Finanças do capítulo.",
};

/* === Documentos =========================================================== */

export const DOCUMENTOS_TEXTO = {
  eyebrow: "Documentos oficiais",
  titulo: "Baixe os documentos da eleição",
  descricao:
    "Leia com atenção antes de se candidatar ou votar. Todos os documentos são disponibilizados pelo Comitê Eleitoral.",
};

/**
 * Sem `href`, o card aparece desabilitado com "Em breve" — é o caso do
 * Estatuto. Publicou? Basta preencher a URL.
 */
export const DOCUMENTOS: DocumentoEleicao[] = [
  {
    titulo: "Edital de Eleições",
    descricao: "Regras completas do processo eleitoral, requisitos e cronograma oficial.",
    acao: "Baixar PDF",
    href: "https://drive.google.com/file/d/1VDjMJLiAbN_fvUHjulp3HpK4ne5bUe8y/view?usp=drive_link",
  },
  {
    titulo: "Modelo de ficha de candidatura",
    descricao: "Formulário de perfil do candidato para preencher e enviar ao Comitê Eleitoral.",
    acao: "Baixar modelo",
    href: "https://docs.google.com/document/d/1W7ml8Ba3ubeKbfGTah5kRuNXd6nKfWCu/edit?usp=drive_link&ouid=115500838450014535568&rtpof=true&sd=true",
  },
  {
    titulo: "Estatuto do PMI-DF",
    descricao: "Estatuto Social vigente do capítulo, base de todo o processo eleitoral.",
    acao: "Baixar PDF",
    href: "https://drive.google.com/file/d/12piJOd4h_dSr9kAkJX7mUAjy_01AiST9/view",
  },
];

/* === Comitê Eleitoral ===================================================== */

export const COMITE_TEXTO = {
  eyebrow: "Quem conduz",
  titulo: "Comitê Eleitoral",
  descricao:
    "O processo é conduzido de forma independente pelo Comitê Eleitoral, responsável por receber as candidaturas, verificar os requisitos e zelar pela lisura de todas as etapas.",
};

export const COMITE: MembroComite[] = [
  { nome: "Cristina Duarte", papel: "Presidente do Comitê Eleitoral", preside: true },
  { nome: "Thiago Lopes", papel: "2º membro do Comitê Eleitoral" },
  { nome: "Robério Santos", papel: "3º membro do Comitê Eleitoral" },
];

/* === Como se candidatar =================================================== */

export const CANDIDATAR = {
  eyebrow: "Passo a passo",
  titulo: "Como apresentar sua candidatura",
  passos: [
    "Confirme que você atende a todos os requisitos do cargo pretendido e está adimplente com o PMI® e o PMI-DF.",
    "Prepare sua ficha de candidatura: foto 3x4 e texto de apresentação de até 300 palavras.",
    "Envie o formulário de candidatura preenchido, com foto e texto, para o e-mail do Comitê Eleitoral entre 15 e 30 de setembro de 2026.",
  ],
  ctaLabel: EMAIL_COMITE,
  ctaHref: `mailto:${EMAIL_COMITE}?subject=${encodeURIComponent("Candidatura Eleições 2027-2028")}`,
  prazo:
    "Candidaturas recebidas após 30 de setembro de 2026 não serão aceitas. Em caso de pendência de adimplência, o Comitê Eleitoral poderá solicitar a regularização dentro do prazo por ele estipulado.",
};
