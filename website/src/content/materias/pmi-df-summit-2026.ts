import { assets } from "@/content/assets";
import type { FotoMateria, Materia } from "@/types";

/**
 * Release de balanço do PMI-DF Summit 2026 (novembro de 2026).
 *
 * O texto é o do release, sem edição: parágrafos, intertítulos, legendas e a
 * fala do presidente. Mudou só a forma da citação, cuja atribuição ("afirma
 * Matheus Rocha, presidente do PMI Distrito Federal") virou a assinatura com
 * foto do bloco. O painel de números é um resumo a mais, com dados que os
 * parágrafos já trazem.
 *
 * As fotos vieram do .docx original (2000 px no lado maior); o PDF trazia
 * versões reduzidas.
 */

const CREDITO = "Foto: Divulgação/PMI-DF";

const FOTO_LIDERANCA: FotoMateria = {
  src: assets.noticias.summit2026Lideranca,
  largura: 2000,
  altura: 1333,
  alt: "Três pessoas sorrindo diante do painel de marcas do PMI-DF Summit 2026, com os logos do PMI Distrito Federal, da FAPDF e de patrocinadores ao fundo.",
  legenda:
    "Paulo Nicholas, vice-presidente da FAPDF, com Ana Lima e Matheus Rocha, vice-presidente e presidente do PMI-DF, no PMI-DF Summit 2026.",
  credito: CREDITO,
};

const FOTO_TRILHA_GOVERNO: FotoMateria = {
  src: assets.noticias.summit2026TrilhaGoverno,
  largura: 1333,
  altura: 2000,
  alt: "Vista do alto do salão do Monumental Eventos: palco laranja com telão, plateia em pé e estandes de expositores em primeiro plano.",
  legenda: "Palco da trilha Governo, área de convivência e expositores no Monumental Eventos.",
  credito: CREDITO,
};

export const MATERIA_SUMMIT_2026: Materia = {
  chapeu: "Release · PMI-DF Summit 2026",
  tituloCurto: "PMI-DF Summit 2026",
  linhaFina:
    "Com apoio da FAPDF, por meio do Edital Realiza, a 25ª edição do maior encontro de gerenciamento de projetos do Centro-Oeste teve quase 200 palestrantes, mais de 120 voluntários e participantes de 17 unidades da federação",
  local: "Brasília",
  autoria: "PMI Distrito Federal",
  capa: FOTO_LIDERANCA,
  og: assets.noticias.summit2026Og,
  corpo: [
    {
      tipo: "paragrafo",
      lead: true,
      texto:
        "O PMI-DF Summit 2026, maior encontro de gerenciamento de projetos do Centro-Oeste, reuniu mais de 650 participantes nos dias 9 e 10 de novembro, no Monumental Eventos, em Brasília. Promovida pelo PMI Distrito Federal, a 25ª edição do evento teve mais de 800 inscritos e contou com o apoio da Fundação de Apoio à Pesquisa do Distrito Federal (FAPDF), por meio do Edital Realiza. A programação foi encerrada no dia 11, com o Workshop PMFits®, na Faculdade Senac.",
    },
    {
      tipo: "paragrafo",
      texto:
        "Em dois dias, quase 200 palestrantes conduziram palestras, estudos de caso, rodas de conversa e oficinas práticas, distribuídos entre o Palco 360º e quatro trilhas simultâneas: Governo, Engenharia, Tecnologia e Pessoas. A operação do evento envolveu mais de 120 voluntários.",
    },
    {
      tipo: "numeros",
      titulo: "O Summit em números",
      itens: [
        { prefixo: "mais de", valor: "650", rotulo: "participantes" },
        { prefixo: "mais de", valor: "800", rotulo: "inscritos" },
        { prefixo: "quase", valor: "200", rotulo: "palestrantes" },
        { prefixo: "mais de", valor: "120", rotulo: "voluntários" },
        { valor: "17", rotulo: "unidades da federação" },
        { prefixo: "quase", valor: "300", rotulo: "organizações" },
      ],
    },
    { tipo: "secao", id: "quem-estava-no-palco", titulo: "Quem estava no palco" },
    {
      tipo: "paragrafo",
      texto:
        "Os keynotes reuniram nomes de referência da profissão. Margareth Carneiro, PMI Fellow e primeira mulher latino-americana a integrar o conselho global do Project Management Institute, abriu a programação. Ricardo Vargas, um dos nomes mais conhecidos do gerenciamento de projetos no mundo, Mario Trentim, do Conselho de Administração do PMI, e Natália Tavares, líder de comunidade do PMI para a América Latina, completaram o grupo.",
    },
    {
      tipo: "paragrafo",
      texto:
        "A programação também trouxe executivos e gestores à frente de projetos de grande porte. Fausto de Andrade Ribeiro, ex-presidente do Banco do Brasil e atual chairman da Eternit, apresentou um case de infraestrutura. Humberto Fukuda, diretor de Inteligência Artificial da Oracle para a América Latina, falou sobre IA na gestão de projetos. Felipe Moutinho de Melo, gerente de projetos da Petrobras no Campo de Mero, no pré-sal, participou do debate sobre megaprojetos.",
    },
    {
      tipo: "paragrafo",
      texto:
        "Do setor público, subiram ao palco Fernando Mitkiewicz, superintendente de Tecnologia e Transformação Digital da ANAC e ex-secretário de Governo Digital, Tiago Chaves Oliveira, diretor da Controladoria-Geral da União e autor do Guia de Gerenciamento de Portfólios e Projetos do Governo Federal, e Joedson Camilo, diretor nacional de TIC da Polícia Rodoviária Federal. Entre os cases, a Embratur apresentou o Projeto Hermes, solução que dá rastreabilidade a um orçamento anual de R$ 1 bilhão, e a Polícia Civil do DF mostrou como aplica inteligência artificial generativa à perícia criminal.",
    },
    { tipo: "secao", id: "efeito-na-economia-do-df", titulo: "Efeito na economia do DF" },
    {
      tipo: "paragrafo",
      texto:
        "O público reuniu profissionais de quase 300 organizações, entre órgãos públicos, empresas estatais, bancos, cooperativas, consultorias e instituições de ensino, como Sicoob, Caixa, Serpro, RNP, Receita Federal, Embratur, Câmara dos Deputados, ApexBrasil, Senado Federal, Banco do Brasil e BRB.",
    },
    {
      tipo: "paragrafo",
      texto:
        "Embora a maior parte dos participantes seja do Distrito Federal, o evento atraiu profissionais de outras 16 unidades da federação, com destaque para São Paulo, Rio de Janeiro e Goiás, além de participantes de Portugal e da Espanha. Esse fluxo de visitantes movimenta a hotelaria, a gastronomia, o transporte e o turismo de negócios da capital.",
    },
    {
      tipo: "paragrafo",
      texto:
        "A realização também mobilizou uma cadeia de fornecedores em áreas como montagem de estruturas, audiovisual, comunicação visual, alimentação e recepção. Empresas patrocinadoras e expositoras, como AIR, BSSP, IPETEC, Interact, Grupo Plano e Shield, usaram o evento para se aproximar de gestores e tomadores de decisão de organizações públicas e privadas.",
    },
    {
      tipo: "fotoCitacao",
      foto: FOTO_TRILHA_GOVERNO,
      citacao: {
        texto:
          "Brasília concentra os centros de decisão do país, e boa parte dos grandes projetos públicos brasileiros é concebida ou acompanhada daqui. Quando reunimos mais de 650 profissionais para discutir como esses projetos saem do papel, o resultado aparece em duas frentes: na capacidade de entrega das organizações e na economia da cidade, que recebe visitantes, contrata fornecedores e gera negócios",
        autor: "Matheus Rocha",
        cargo: "presidente do PMI Distrito Federal",
        foto: assets.quemSomos.presidenteMatheus,
      },
    },
    {
      tipo: "secao",
      id: "reconhecimento-e-impacto-social",
      titulo: "Reconhecimento e impacto social",
    },
    {
      tipo: "paragrafo",
      texto:
        "O evento também premiou projetos e profissionais. O Prêmio Candango reconheceu casos de inovação, impacto social e produção acadêmica, com vencedores como a startup Cotia, a USP Esalq e a RNP. Os prêmios Melhores do Ano e PMI-DF Awards destacaram projetos, escritórios de projetos e profissionais do Distrito Federal.",
    },
    {
      tipo: "paragrafo",
      texto:
        "Durante os dias de evento, o PMI-DF realizou ainda uma campanha de arrecadação de alimentos em parceria com a Ação Entre Amigos BSB, destinada a duas instituições da Cidade Estrutural que atendem cerca de 150 crianças e suas famílias.",
    },
  ],
  sobre: {
    titulo: "Sobre o PMI-DF",
    texto:
      "O PMI Distrito Federal é o capítulo do Project Management Institute no DF, associação profissional sem fins lucrativos que reúne gerentes de projetos, profissionais de PMO e líderes dos setores público e privado. O PMI-DF Summit é realizado anualmente e chegou em 2026 à sua 25ª edição.",
    link: { rotulo: "summit.pmidf.org", href: "https://summit.pmidf.org/" },
  },
  anexo: {
    rotulo: "Baixar o release",
    href: assets.noticias.summit2026Release,
    tamanho: "PDF, 283 KB",
  },
};
