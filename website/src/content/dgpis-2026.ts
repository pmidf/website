import { assets } from "@/content/assets";
import type { Palestrante } from "@/types";

/**
 * Palestrantes do 5º DGPIS 2026, na ordem em que aparecem na seção.
 *
 * O resto do conteúdo da página ainda mora em constantes dentro do próprio
 * `page.tsx`. Os palestrantes saíram de lá porque a seção é um Client
 * Component à parte e porque é a lista que mais vai mudar até o evento.
 *
 * ## Como incluir ou trocar uma foto
 *
 * 1. Salve em `public/assets/paginas/dgpis-2026/<id>.webp`, quadrada, com 400px
 *    de lado (o maior retrato da seção tem 168px; 400 cobre telas de alta
 *    densidade) ou no tamanho original, se for menor — não amplie.
 * 2. Registre o caminho em `assets.dgpis2026` (`src/content/assets.ts`).
 * 3. Preencha `foto: assets.dgpis2026.<chave>` no palestrante abaixo.
 *
 * Sem `foto`, o `Avatar` mostra as iniciais em gradiente. Sem `cargo`, `bio` ou
 * `linkedin`, o painel só deixa de mostrar aquele item.
 */
export const PALESTRANTES: Palestrante[] = [
  {
    id: "matheus-rocha",
    foto: assets.dgpis2026.matheusRocha,
    nome: "Matheus Rocha",
    cargo: "Presidente do PMI-DF",
    // Mesmo texto da galeria de presidentes (`content/presidentes.ts`).
    bio: "Matheus Rocha é Presidente do PMI-DF, onde lidera iniciativas de alinhamento estratégico e fortalece a integração de projetos junto ao PMI. Integra também o PMO Corporativo da Eletrobras, contribuindo para transformar dados em insights estratégicos, impulsionar a adoção das melhores práticas de gerenciamento de projetos e promover a evolução tecnológica.",
    linkedin: "https://www.linkedin.com/in/matheus-frr/",
  },
  {
    id: "ana-lima",
    foto: assets.dgpis2026.anaLima,
    nome: "Ana Lima",
    cargo: "Vice-presidente do PMI-DF",
    // Resumo do texto do perfil no LinkedIn.
    bio: "Vice-presidente do PMI-DF e Gerente Executiva de TI no Sicoob, responsável pela tecnologia de Crédito Pessoa Física. Engenheira de Computação e mestre em Computação Aplicada pela UnB, tem mais de 16 anos de experiência em tecnologia e mais de 10 em gestão. É docente há mais de 5 anos na UnB, FGV e IESB, com mais de 10 artigos científicos publicados.",
    linkedin: "https://www.linkedin.com/in/ana-fernandes-lima/",
  },
  {
    id: "cristina-duarte",
    foto: assets.dgpis2026.cristinaDuarte,
    nome: "Cristina Duarte",
    cargo: "Diretora de Administração do PMI-DF",
    // Mesmo texto da galeria de presidentes (`content/presidentes.ts`).
    bio: "Bacharel em Administração de Empresa, pela FUMEC — MG (1987), pós-graduada em Computação Gráfica pelo IETEC — MG (1993). Possui certificação IBM — Certified Specialist Rational Requirements Management w/ Use Cases v.2003 (2009). Atua como Analista de Sistemas desde 1988 e atualmente é Líder de Relacionamento na Dataprev. Presidente no biênio 2023/2024 e atualmente Diretora de Administração, Finanças e Tesouraria para o biênio 2025/2026 no PMI-DF.",
    linkedin: "https://www.linkedin.com/in/cristina-basili-duarte/",
  },
  {
    id: "claudio-roberto",
    foto: assets.dgpis2026.claudioRoberto,
    nome: "Claudio Roberto",
    cargo: "Diretor do Instituto Bancorbrás",
    // Resumo do texto do perfil no LinkedIn.
    bio: "Diretor Geral de Negócios e Marketing do Grupo Bancorbrás, com mais de 23 anos de casa: começou como digitador e chegou à liderança de áreas estratégicas. Lidera iniciativas de inovação como o Trib Pass, benefício corporativo que promove equilíbrio entre rotina e descanso. Também dirige o Instituto Bancorbrás, organização social com programas de educação e cidadania em comunidades de todo o país.",
    linkedin: "https://www.linkedin.com/in/claudio-roberto-nogueira/",
  },
  {
    id: "nathalia-tatagiba",
    foto: assets.dgpis2026.nathaliaTatagiba,
    nome: "Nathalia Tatagiba",
    cargo: "Líder Impacto Social PMI LATAM",
    bio: "Líder de Impacto Social (Brasil) - PMI, Líder de Tecnologia no Luizalabs (Magalu) e à frente da operação da Lu no WhatsApp com IA Generativa! PMP®, ex-presidente do PMI-DF e professora de MBA, traz uma bagagem gigante sobre inovação, produtos digitais e governança.",
    // O link recebido estava sem `/in/` e não abria — confirmar o perfil.
    linkedin: "https://www.linkedin.com/in/nathaliatatagiba",
  },
  {
    id: "dani-estevam",
    foto: assets.dgpis2026.daniEstevam,
    nome: "Dani Estevam",
    cargo: "CEO da Ficus Collab",
    bio: "Administradora, especialista em Gestão de Pessoas e referência em articulação de ecossistemas de inovação e impacto socioambiental. CEO da Ficus Collab, líder da Governança no Distrito Inovador e Coordenadora da Coalizão pelo Impacto Brasília.",
    linkedin: "https://www.linkedin.com/in/daniestevam/",
  },
  {
    id: "lucas-ramalho-maciel",
    foto: assets.dgpis2026.lucasRamalhoMaciel,
    nome: "Lucas Ramalho Maciel",
    cargo: "Secretário-Executivo Adjunto",
    bio: "Lucas Ramalho Maciel é Especialista em Políticas Públicas e Gestão Governamental, Engenheiro Agrônomo e mestre em Agronegócio pela Universidade de Brasília (UnB), com mais de 20 anos de experiência no Governo Federal na formulação, coordenação e implementação de políticas públicas voltadas ao desenvolvimento produtivo, à sustentabilidade, à inovação e à transformação econômica.",
    linkedin: "https://www.linkedin.com/in/lucas-ramalho-maciel-3aa797a0",
  },
  {
    id: "erik-ferraz",
    foto: assets.dgpis2026.erikFerraz,
    nome: "Erik Ferraz",
    cargo: "Oficial de Projetos",
    bio: "Profissional com experiência no sistema ONU, iniciou sua carreira no UNICEF e desde 2010, integra a Organização Internacional do Trabalho (OIT), onde gerencia projetos de combate ao trabalho infantil e análogo à escravidão, com foco em cadeias produtivas como cacau, carnaúba e açaí. Especializou-se também em Inteligência Artificial e seus impactos no mundo do trabalho.",
    linkedin: "https://www.linkedin.com/in/erikferraz",
  },
  {
    id: "flavio-almeida-batista",
    foto: assets.dgpis2026.flavioAlmeidaBatista,
    nome: "Flávio Almeida Batista",
    cargo: "CEO do Instituto Farol na Quebrada",
    bio: "Flávio Almeida é empreendedor social, fundador e CEO do Instituto Farol Na Quebrada e da 3D Social – Gestão com Propósitos. Especialista em gestão, inovação e IA aplicada ao Terceiro Setor, desenvolve sistemas, automações e agentes de IA para democratizar o acesso à tecnologia, fortalecer a governança, a eficiência operacional e a mensuração de impacto social.",
    linkedin: "https://www.linkedin.com/in/fl%C3%A1vio-almeida-729a731ba/",
  },
  {
    id: "ricardo-assis",
    foto: assets.dgpis2026.ricardoAssis,
    nome: "Ricardo Assis",
    cargo: "Gestor de Projetos Sociais",
    bio: "Ricardo Assis é doutorando em Desenvolvimento Sustentável (UnB), mestre em Planejamento Territorial e Políticas Públicas (UEFS) e graduado em Gestão Pública, com pesquisa premiada pelo CNAS. Possui mais de 17 anos de experiência em gestão de projetos sociais, políticas públicas, participação social e cooperação internacional, com atuação no Brasil, América Central e África.",
    linkedin: "https://www.linkedin.com/in/ricardoldeassis/",
  },
  {
    id: "thalyta-cabral",
    foto: assets.dgpis2026.thalytaCabral,
    nome: "Thalyta Cabral",
    cargo: "Líder de Metodologia e Impacto",
    bio: "Gestora de projetos com mais de 15 anos de experiência na concepção e condução de iniciativas de impacto, especialmente nos campos da economia criativa e do terceiro setor. Na Acelera Colab, atua como Líder de Metodologia e Impacto, apoiando a estruturação de projetos e processos. Sua trajetória inclui a gestão de projetos e contratos com organizações de nível nacional.",
    linkedin: "https://br.linkedin.com/in/thalyta-cabral-0086a4b1",
  },
  {
    id: "larissa-sampaio",
    foto: assets.dgpis2026.larissaSampaio,
    nome: "Larissa Sampaio",
    cargo: "Consultora de projetos sociais",
    bio: "Larissa Sampaio é consultora de projetos sociais e comunicação. Mestra em Direitos Humanos e Cidadania pela UnB, atua com projetos de impacto social e políticas públicas, com foco na garantia de direitos e na participação social, sempre partindo das pessoas e dos territórios. Alia gestão de projetos, pesquisa e comunicação estratégica para gerar resultados concretos.",
    linkedin: "https://www.linkedin.com/in/larissacsampaiob/",
  },
  {
    id: "dalton-leca",
    foto: assets.dgpis2026.daltonLeca,
    nome: "Dalton Leça",
    cargo: "Head de Estratégia e Agilidade",
    bio: "Acredito que projetos transformam realidades quando as pessoas se sentem seguras, engajadas e felizes. Head de Estratégia, Processos e Agilidade e voluntário no Instituto Bancorbrás, conecto planejamento e execução. PMP® e Management 3.0®, autor de “Rindo para Não Chorar”, uso o humor para criar ambientes leves e mostrar que medir impacto e cuidar de gente andam juntos.",
    linkedin: "https://www.linkedin.com/in/daltonleca",
  },
];
