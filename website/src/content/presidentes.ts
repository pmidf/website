import { assets } from "@/content/assets";
import type { Idioma, Presidente } from "@/types";

/**
 * Galeria completa de presidentes — conteúdo de `/quem-somos/presidentes`,
 * destino do botão "Ver galeria completa" da página Quem Somos.
 *
 * Esta é a fonte única da lista: a Seção 5 de Quem Somos importa daqui e
 * mostra só as gestões mais recentes (ver `content/quem-somos.ts`). A ordem é
 * cronológica inversa — a gestão atual primeiro.
 *
 * ## Sobre as biografias
 *
 * Cada bio existe em português e inglês, e `bioOriginal` marca qual das duas a
 * pessoa escreveu. O campo não aparece mais na tela (o aviso de tradução foi
 * retirado a pedido), mas continua aqui: é o registro de qual das duas versões
 * é a original e qual é a vertida, e sem ele uma revisão futura não teria como
 * saber qual texto não pode ser reescrito. Os originais foram mantidos palavra
 * por palavra, com os desvios de redação de quem escreveu — corrigi-los seria
 * reescrever a pessoa.
 *
 * Bios em inglês foram vertidas para o português e vice-versa. Nomes próprios
 * de prêmios, cursos, instituições, livros e metodologias ficam na língua
 * original nos dois lados: "Prêmio Notabile" não vira "Notabile Award".
 *
 * ## Sobre as fotos
 *
 * O retrato de cada presidente é a foto do perfil do LinkedIn, exportada e
 * salva em `public/assets/paginas/quem-somos/` (a mesma pasta que a Seção 5 de
 * Quem Somos já usa), depois declarada em `content/assets.ts`.
 *
 * As imagens são cópias locais das fotos de perfil do LinkedIn. Elas não podem
 * ser referenciadas direto: o `media.licdn.com` serve URLs assinadas que
 * expiram em semanas, e a galeria ficaria sem rosto sozinha.
 *
 * TODO: falta o retrato de Rogério Aparecido — `presidente-rogerio.webp` em
 * `public/assets/paginas/quem-somos/`, `.webp` quadrado de 400px de lado. Com o
 * arquivo na pasta, acrescente a chave em `content/assets.ts` e o campo `foto`
 * na entrada correspondente aqui. Sem ele, o card usa o avatar de iniciais e a
 * coluna continua alinhada.
 */

export const HERO = {
  titulo: "Presidentes do PMI-DF",
  subtitulo:
    "Desde a fundação do capítulo, em 2000, cada gestão deixou sua marca na trajetória do PMI Distrito Federal. Conheça quem liderou o capítulo ao longo dos anos.",
};

/** Rótulos da página em cada idioma — trocados junto com as biografias. */
export const TEXTOS: Record<Idioma, {
  nomeIdioma: string;
  seletorRotulo: string;
  gestaoAtual: string;
  verLinkedin: string;
  semBio: string;
}> = {
  pt: {
    nomeIdioma: "Português",
    seletorRotulo: "Biografias em",
    gestaoAtual: "Gestão atual",
    verLinkedin: "LinkedIn",
    semBio: "Biografia ainda não disponível.",
  },
  en: {
    nomeIdioma: "English",
    seletorRotulo: "Biographies in",
    gestaoAtual: "Current term",
    verLinkedin: "LinkedIn",
    semBio: "Biography not available yet.",
  },
};

export const GALERIA_PRESIDENTES: Presidente[] = [
  {
    nome: "Matheus Rocha",
    periodo: "01/01/2025 até 31/12/2026",
    foto: assets.quemSomos.presidenteMatheus,
    linkedin: "https://www.linkedin.com/in/matheus-frr/",
    bioOriginal: "pt",
    bio: {
      pt: [
        "Matheus Rocha é Presidente do PMI-DF, onde lidera iniciativas de alinhamento estratégico e fortalece a integração de projetos junto ao PMI Global. Integra também o PMO Corporativo da Eletrobras, contribuindo para transformar dados em insights estratégicos, impulsionar a adoção das melhores práticas de gerenciamento de projetos e promover a evolução tecnológica.",
        "Pós-graduado em Gestão de Projetos e em Gestão de Pessoas e Recursos Humanos, possui certificações como PMP, PMI-PMOCP, Scrum, Six Sigma e Management 3.0. É dedicado à educação, à tecnologia e a causas sociais, buscando continuamente inovação para gerar valor e impacto positivo.",
      ],
      en: [
        "Matheus Rocha is President of PMI-DF, where he leads strategic alignment initiatives and strengthens project integration with PMI Global. He is also part of the Corporate PMO at Eletrobras, helping turn data into strategic insight, drive the adoption of project management best practices and promote technological development.",
        "With postgraduate degrees in Project Management and in People and Human Resources Management, he holds certifications such as PMP, PMI-PMOCP, Scrum, Six Sigma and Management 3.0. He is committed to education, technology and social causes, continuously seeking innovation to generate value and positive impact.",
      ],
    },
  },
  {
    nome: "Cristina Duarte",
    periodo: "01/01/2023 até 31/12/2024",
    foto: assets.quemSomos.presidenteCristina,
    linkedin: "https://www.linkedin.com/in/cristina-basili-duarte/",
    bioOriginal: "pt",
    bio: {
      pt: [
        "Bacharel em Administração de Empresa, pela FUMEC — MG (1987), pós-graduada em Computação Gráfica pelo IETEC — MG (1993). Possui certificação IBM — Certified Specialist Rational Requirements Management w/ Use Cases v.2003 (2009). Atua como Analista de Sistemas desde 1988 e atualmente é Líder de Relacionamento na Dataprev. Presidente no biênio 2023/2024 e atualmente Diretora de Administração, Finanças e Tesouraria para o biênio 2025/2026 no PMI-DF.",
      ],
      en: [
        "Bachelor's degree in Business Administration from FUMEC — MG (1987) and a postgraduate degree in Computer Graphics from IETEC — MG (1993). She holds the IBM Certified Specialist certification in Rational Requirements Management w/ Use Cases v.2003 (2009). She has worked as a Systems Analyst since 1988 and is currently Relationship Lead at Dataprev. President for the 2023/2024 term and currently Director of Administration, Finance and Treasury for the 2025/2026 term at PMI-DF.",
      ],
    },
  },
  {
    nome: "Gino Terentim",
    periodo: "01/01/2021 até 31/12/2022",
    foto: assets.quemSomos.presidenteGino,
    linkedin: "https://www.linkedin.com/in/ginoterentim/",
    bioOriginal: "pt",
    bio: {
      pt: [
        "Doutorando pela Université de Bordeaux, com MBE em Economia Brasileira pela FEA/USP e MBA em Gerenciamento de Projetos pela ESALQ/USP, possui amplo conhecimento em Planejamento Estratégico, Gerenciamento de Portfólios, Programas e Projetos, Lean e Agile.",
        "Direcionado a reinventar a educação e o aprendizado (um dos objetivos de desenvolvimento sustentável) por meio do que chamo de “educação digital”, fazendo uso das tecnologias exponenciais para oferecer educação extraordinária, de forma acessível, a todos. Já treinamos mais de 5 mil profissionais ao longo de um ano. Acredito na educação como um importante vetor de transformação de realidades e impacto social.",
      ],
      en: [
        "A doctoral candidate at Université de Bordeaux, with an MBE in Brazilian Economics from FEA/USP and an MBA in Project Management from ESALQ/USP, he has broad knowledge of Strategic Planning, Portfolio, Program and Project Management, Lean and Agile.",
        "Driven to reinvent education and learning (one of the sustainable development goals) through what I call “digital education”, using exponential technologies to deliver extraordinary education, affordably, to everyone. We have already trained more than 5,000 professionals in a single year. I believe education is a powerful vector for transforming realities and creating social impact.",
      ],
    },
  },
  {
    nome: "Nathália Tatagiba",
    periodo: "01/01/2018 até 31/12/2020",
    foto: assets.quemSomos.presidenteNathalia,
    linkedin: "https://www.linkedin.com/in/nathaliatatagiba/",
    bioOriginal: "en",
    bio: {
      pt: [
        "Sou focada na entrega de projetos, programas e portfólios baseados em resultados, com ênfase em gestão de mudanças, cultura organizacional e tecnologia para resultados. Nos últimos dez anos, fui responsável por vários projetos nas áreas de defesa nacional, logística e tecnologia. Atualmente atuo como gerente de contratos de TI na Hepta. Em 2018 fui eleita Presidente do Project Management Institute — Chapter Distrito Federal (PMI-DF) para o biênio 2019-2020; antes disso, fui voluntária como vice-presidente, diretora de certificação e no PMO. Tive a oportunidade de engajar pessoas em nossos projetos e de compartilhar conhecimento e experiência por meio da promoção do gerenciamento de projetos.",
      ],
      en: [
        "I am focused on delivering results-based project, program, and portfolio, with a focus on change management, organizational culture and technology for results. During the past ten years, I was responsible for several projects in national defense, logistics, and technology. Currently, I have been working with IT Contract Manager at Hepta, In 2018 I was elected President of the Project Management Institute – Chapter Distrito Federal (PMI-DF) for biennium 2019-2020, before I was volunteer as vice-president, certification director, and PMO. I could the experience the chance to engage people in our projects, share knowledge and experience through the project management promotion.",
      ],
    },
  },
  {
    nome: "Rogério Aparecido",
    periodo: "01/01/2017 até 31/12/2017",
    linkedin: "https://www.linkedin.com/in/rogeriosilva1010/",
    bioOriginal: "pt",
    bio: {
      pt: [
        "Mestre em Gestão do Conhecimento e da Tecnologia da Informação pela Universidade Católica de Brasília e bacharel em Ciência da Computação pela Universidade São Caetano do Sul. Fez MBA em Marketing e Controller e especialização em Empreendedorismo e Inovação; e Programa de Gestão Avançada. Tem experiência na área de docência, sendo professor-adjunto de graduação e pós-graduação na FACSENAC-DF por 11 anos. E, também, professor de graduação em Introdução à Administração, Administração da Produção e Operações para cursos de Administração e Gestão de RH na Faculdade JK Asa Norte-DF.",
        "Trabalhou como superintendente na Valec — Engenharia, Construções e Ferrovia S.A., sendo responsável pelas áreas de Administração, Patrimônio, Licitações, Contratos e Tecnologia da Informação. No início de 2018, ingressou no poder executivo federal como diretor no Ministério do Planejamento e Orçamento, encarregado da gestão de cargos e carreiras e do desenvolvimento do pessoal civil do executivo.",
        "Ainda, esteve à frente da presidência regional de organização internacional do Project Management Institute (PMI) e atuou na gestão de projetos na comunidade empresarial e na certificação de profissionais em gestão de projetos.",
      ],
      en: [
        "Master's degree in Knowledge and Information Technology Management from Universidade Católica de Brasília and a bachelor's degree in Computer Science from Universidade São Caetano do Sul. He holds an MBA in Marketing and Controllership, a specialisation in Entrepreneurship and Innovation, and completed an Advanced Management Program. He has experience in teaching, having served as an adjunct professor in undergraduate and postgraduate courses at FACSENAC-DF for 11 years, and also as an undergraduate lecturer in Introduction to Administration and Production and Operations Management for the Administration and HR Management programmes at Faculdade JK Asa Norte-DF.",
        "He worked as a superintendent at Valec — Engenharia, Construções e Ferrovia S.A., responsible for Administration, Assets, Procurement, Contracts and Information Technology. In early 2018 he joined the federal executive branch as a director at the Ministry of Planning and Budget, in charge of position and career management and of the development of the executive branch's civil personnel.",
        "He also led the regional presidency of the international organisation Project Management Institute (PMI) and worked on project management within the business community and on the certification of project management professionals.",
      ],
    },
  },
  {
    nome: "José Alves",
    periodo: "01/01/2015 até 31/12/2016",
    foto: assets.quemSomos.presidenteJose,
    linkedin: "https://www.linkedin.com/in/jos%C3%A9-carlos-alves-pmp-7008555/",
    bioOriginal: "pt",
    bio: {
      pt: [
        "Gerente de Projetos e Economista com pós-graduação em Gestão Empresarial, tem atuado nos últimos 20 anos em projetos de remodelagem de negócios e de estruturas organizacionais, com atuação em projetos estratégicos no setor público (Caixa e Ministério da Fazenda) e no setor privado. É o atual Diretor da Global Escola de Gestão, sediada em Brasília. Também é profissional certificado PMP pelo Project Management Institute desde 2002 e Certified Practitioner na metodologia PMO VALUE RING. É o autor da Metodologia Gerenciamento de Projetos Primeiros Passos, na qual já capacitou centenas de pessoas. Também é o autor do livro Gerenciamento de Projetos Fácil e Prático — Os 5 princípios para o sucesso do(a) Gerente de Projetos.",
      ],
      en: [
        "A Project Manager and Economist with a postgraduate degree in Business Management, he has spent the past 20 years on business and organisational redesign projects, working on strategic initiatives in the public sector (Caixa and the Ministry of Finance) and in the private sector. He is the current Director of Global Escola de Gestão, based in Brasília. He has also been a PMP certified professional with the Project Management Institute since 2002 and is a Certified Practitioner in the PMO VALUE RING methodology. He is the author of the Metodologia Gerenciamento de Projetos Primeiros Passos, through which he has trained hundreds of people, and of the book Gerenciamento de Projetos Fácil e Prático — Os 5 princípios para o sucesso do(a) Gerente de Projetos.",
      ],
    },
  },
  {
    nome: "Francisco Abreu",
    periodo: "01/01/2013 até 31/12/2014",
    foto: assets.quemSomos.presidenteFrancisco,
    linkedin: "https://www.linkedin.com/in/francisco-jos%C3%A9-de-abreu-26718018/",
    bioOriginal: "pt",
    bio: {
      pt: [
        "Gestor e Gerente Sênior de Programas, Portfólios e Projetos com sólida experiência em Administração e Gestão de Equipes. Atuo no Banco Central do Brasil desde 1985. Participei de equipes de desenvolvimento de soluções de política bancária para o Sistema Financeiro Nacional. Completei dezenas de treinamentos técnicos específicos (Sistemas Distribuídos Object-Oriented, SGBD, Web-based, Business Intelligence, Desenvolvimento Ágil), além de treinamentos especializados em Liderança e Gestão, tais como Negociação, Comunicação, Pessoas e Liderança. Estas duas perspectivas completam um quadro de sólidos conhecimentos na Gestão de Tecnologia da Informação.",
        "Entre 1990 e 2002, licenciado do Banco Central, morei em São Paulo trabalhando na iniciativa privada. Durante este período atuei como gerente de projetos implementando soluções em várias empresas, principalmente do Setor Financeiro.",
        "Desde 2010 participo ativamente como voluntário no PMI — Project Management Institute, ocupando várias posições de diretoria, inclusive a de Presidente no biênio 2013/14.",
      ],
      en: [
        "Manager and Senior Program, Portfolio and Project Manager with solid experience in Administration and Team Management. I have worked at the Central Bank of Brazil since 1985. I took part in teams developing banking policy solutions for the Brazilian National Financial System. I have completed dozens of specific technical courses (Object-Oriented Distributed Systems, DBMS, Web-based, Business Intelligence, Agile Development), as well as specialised training in Leadership and Management, such as Negotiation, Communication, People and Leadership. These two perspectives round out a solid body of knowledge in Information Technology Management.",
        "Between 1990 and 2002, on leave from the Central Bank, I lived in São Paulo working in the private sector. During that period I worked as a project manager implementing solutions at several companies, mainly in the Financial Sector.",
        "Since 2010 I have taken an active part as a volunteer at PMI — Project Management Institute, holding several board positions, including President for the 2013/14 term.",
      ],
    },
  },
  {
    nome: "Marcelo Cota",
    periodo: "01/01/2011 até 31/12/2012",
    foto: assets.quemSomos.presidenteMarcelo,
    linkedin: "https://www.linkedin.com/in/marcelocota/",
    bioOriginal: "pt",
    bio: {
      pt: [
        "Head of Human Resources Department no Banco Central do Brasil e Doutor em Administração pela FEA/USP. Professor de graduação e pós-graduação (MBA) desde 1999. Além da academia, possui experiência nos setores público, privado e terceiro setor. No setor público desde 1993, atua no Banco Central tendo percorrido ciclos de carreira técnica e gerencial nas áreas de TI, planejamento, projetos e chefia de gabinete da Diretoria de Administração. Atualmente é Chefe do Departamento de Gestão de Pessoas.",
      ],
      en: [
        "Head of the Human Resources Department at the Central Bank of Brazil and Doctor in Administration from FEA/USP. Undergraduate and postgraduate (MBA) lecturer since 1999. Beyond academia, he has experience in the public, private and third sectors. In the public sector since 1993, he has worked at the Central Bank through both technical and managerial career tracks in IT, planning and projects, and as chief of staff of the Administration Board. He is currently Head of the People Management Department.",
      ],
    },
  },
  {
    nome: "Giuseppe Janino",
    periodo: "01/01/2009 até 31/12/2010",
    foto: assets.quemSomos.presidenteGiuseppe,
    linkedin: "https://www.linkedin.com/in/giuseppejanino/",
    bioOriginal: "pt",
    bio: {
      pt: [
        "Gestor em Tecnologia da Informação (TI). Membro do Project Management Institute (PMI) EUA e do PMI Chapter Distrito Federal/Brasil. Coautor do Projeto da Urna Eletrônica do Sistema Eleitoral Brasileiro. Project Management Professional (PMP); MBA Executivo em Tecnologia da Informação pela TWA/Universidade Estácio de Sá — RJ; pós-graduado em Análise de Sistemas e Redes de Computadores pela Universidade Católica de Brasília (UCB); graduado em Matemática pelo Centro Universitário de Brasília (UniCEUB).",
        "Prêmio Tecnologia, Inovação e Progresso pela Câmara de Comércio Eletrônico e pela George Washington University; Prêmio CIO de 2009 na categoria Governo pela Editora Abril; Prêmio Notabile — Personalidade Mais Inovadora do Brasil da área de Tecnologia da Informação e Comunicação (TIC) no Setor Governamental (2010); Prêmio Cidadania Digital — ABRID (2011); Prêmio Notabile — Personalidade Mais Influente do Brasil da área de TIC no Setor Governamental (2012); Prêmio Profissional de Tecnologia da Informação Governo Federal 2012 — Informática Hoje; Prêmio Profissional de Tecnologia da Informação Categoria Judiciário 2013 — Informática Hoje; Prêmio Notabile — Personalidade Mais Inovadora do Brasil da área de TIC no Setor Governamental (2013); Prêmio Notabile Homenagem Especial IT4CIO (2014); Prêmio Profissional de Tecnologia da Informação Categoria Serviço Público Federal 2015 — Informática Hoje; Comenda Ordem do Mérito Assis Brasil; 4award 2018 Referência em TI; 4award 2019 Referência em TI; finalista no Prêmio Pico da Neblina IT4CIO (2020).",
        "Atualmente, atua como membro do Comitê Gestor da Identificação Civil Nacional; ex-Presidente do PMI Chapter Distrito Federal/Brasil, membro do Conselho Consultivo do PMI Chapter Distrito Federal/Brasil e Secretário de Tecnologia da Informação do Tribunal Superior Eleitoral.",
      ],
      en: [
        "Information Technology (IT) manager. Member of the Project Management Institute (PMI) USA and of the PMI Chapter Distrito Federal/Brazil. Co-author of the Electronic Voting Machine Project of the Brazilian Electoral System. Project Management Professional (PMP); Executive MBA in Information Technology from TWA/Universidade Estácio de Sá — RJ; postgraduate degree in Systems Analysis and Computer Networks from Universidade Católica de Brasília (UCB); bachelor's degree in Mathematics from Centro Universitário de Brasília (UniCEUB).",
        "Prêmio Tecnologia, Inovação e Progresso, from the Brazilian Chamber of Electronic Commerce and George Washington University; 2009 CIO Award in the Government category, from Editora Abril; Prêmio Notabile — Most Innovative Personality in Brazil in Information and Communication Technology (ICT) in the Government Sector (2010); Prêmio Cidadania Digital — ABRID (2011); Prêmio Notabile — Most Influential Personality in Brazil in ICT in the Government Sector (2012); Prêmio Profissional de Tecnologia da Informação, Federal Government 2012 — Informática Hoje; Prêmio Profissional de Tecnologia da Informação, Judiciary category 2013 — Informática Hoje; Prêmio Notabile — Most Innovative Personality in Brazil in ICT in the Government Sector (2013); Prêmio Notabile Special Tribute IT4CIO (2014); Prêmio Profissional de Tecnologia da Informação, Federal Public Service category 2015 — Informática Hoje; Comenda Ordem do Mérito Assis Brasil; 4award 2018 IT Reference; 4award 2019 IT Reference; finalist for the Prêmio Pico da Neblina IT4CIO (2020).",
        "He currently serves on the Steering Committee of the Brazilian National Civil Identification; he is a former President of the PMI Chapter Distrito Federal/Brazil, a member of the Advisory Board of the PMI Chapter Distrito Federal/Brazil and Secretary of Information Technology at the Superior Electoral Court.",
      ],
    },
  },
  {
    nome: "Rodrigo Loureiro",
    periodo: "01/01/2005 até 31/12/2008",
    foto: assets.quemSomos.presidenteRodrigo,
    linkedin: "https://www.linkedin.com/in/rodrigojfl/",
  },
  {
    nome: "Yuri Cesário Araújo",
    periodo: "01/01/2003 até 31/12/2004",
    foto: assets.quemSomos.presidenteYuri,
    linkedin: "https://www.linkedin.com/in/yuri-cesario-araujo/",
    bioOriginal: "en",
    bio: {
      pt: [
        "Yuri é executivo sênior de vendas de TI, com mais de 15 anos de experiência e um histórico de sucesso em grandes multinacionais do setor. É especialista em transformação digital, com ampla experiência em vendas consultivas para executivos C-level em soluções de nuvem, serviços de consultoria, software corporativo e analytics. Como executivo de vendas, superou sua meta muitas vezes, ampliando a participação de mercado de todas as empresas por onde passou e superando as expectativas de venda. É especialista em vendas tanto para o mercado privado quanto para o Governo brasileiro.",
        "Uma conquista importante foi a venda de um sistema corporativo inteligente baseado em nuvem para o Governo de Brasília — uma licitação pública complexa, com grandes players do mercado. Yuri desenhou uma estratégia inteligente para superar os concorrentes e vencer o contrato de 16 milhões de reais, que aumentou a receita da empresa em 32% em relação ao ano fiscal anterior. Na formação, tem MBA Internacional pela Universidade de Manchester e é certificado PMP, AWS, Azure e Oracle Cloud.",
      ],
      en: [
        "Yuri is a Sr. IT Sales Executive with more than 15 years of experience with a successful track record of sales at large IT multinational companies. He is an expert in the Digital Transformation with an extensive experience in Consultative Sales for C-level executives of Cloud Solutions, Advisory Services, Enterprise Software and Analytics. As a Sales Executive, Yuri overachieved his quota many times, increasing the market share of all companies and overcoming the sales expectation. He is an specialist in sales for the private market and also for the Brazilian Government.",
        "One important achievement was the selling of a Intelligent Enterprise System based on Cloud for the Brasília Government. A complex Public Tender with big market players. Yuri was able to design a smart strategy to defeat the competitors and win the deal of 16 million Reais that increased the revenue of the Company in 32% compared with the previous fiscal year. About education Yuri has an International MBA by the Manchester University and he is PMP, AWS, Azure and Oracle Cloud Certified.",
      ],
    },
  },
  {
    nome: "Margareth Carneiro",
    periodo: "01/02/2001 até 31/12/2002",
    foto: assets.quemSomos.presidenteMargareth,
    linkedin: "https://www.linkedin.com/in/margarethcarneiro/",
    bioOriginal: "en",
    bio: {
      pt: [
        "Margareth Carneiro — PMP, SPC (SAFe), Prince 2, MSP, PMO-CC, MBA, MSc, PhD — é uma profissional conhecida e reconhecida na área de Gerenciamento de Portfólios, Programas e Projetos. É palestrante nacional e internacional, professora e consultora na área. Atualmente trabalha no MCTI. Tem vários anos de experiência na gestão de programas e projetos, especialmente nos setores de TI e Governo. Como consultora, ajudou empresas a implantar PMOs, processos, práticas, metodologias e ferramentas (inclusive de software) para gerenciar seu portfólio de programas e projetos. Margareth é professora da FGV e do IBMEC desde 2002 e voluntária ativa do PMI desde 1999. Foi Presidente e Fundadora do Capítulo PMI-DF, diretora do PMI GovSIG (PMI Government Specific Group) por 4 anos e Chair do PMI GovSIG por 3 anos. Por seu trabalho como voluntária, recebeu 4 prêmios do PMI: a) PMI GovSIG Member of the Year — 2002; b) PMI Distinguished Award — 2003 — PMI; c) uma das 25 mulheres mais influentes em gerenciamento de projetos no mundo — PM Network, 2006; d) PMI Leadership Award — 2007.",
      ],
      en: [
        "Margareth Carneiro, PMP, SPC (SAFe), Prince 2, MSP, PMO-CC, MBA, MSc, PhD is a well-known and well-named professional in Portfolio, Program and Project Management area. She is a national and international speaker, teacher and consultant in PM area. Currently she is working at MCTI. She has several years of experience in managing programs and projects, especially in IT and Government sectors. As consultant, she helped companies to implement PMO, processes, practices, methodologies and tools (including SW) to manage their portfolio of program and projects. Margareth is a teacher of FGV and IBMEC since 2002. She is an active volunteer in PMI since 1999. She was the President and Founder of PMI-DF Chapter, PMI GovSIG (PMI Government Specific Group) director for 4 years and PMI GovSIG Chair for 3 years. For his hard work as volunteer, she is recipient of 4 PMI Awards: a) PMI GovSIG member of the Year — 2002, b) PMI Distinguished Award — 2003 — PMI, c) One of the 25 Influential women in PM in the world — PMNetwork, 2006, d) PMI Leadership Award — 2007.",
      ],
    },
  },
];

/**
 * Quantas gestões a Seção 5 de Quem Somos exibe antes do "Ver galeria
 * completa". As três do protótipo — mudar aqui muda lá, não o contrário.
 */
export const PRESIDENTES_EM_DESTAQUE = 3;
