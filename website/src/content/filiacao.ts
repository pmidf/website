import {
  FaGraduationCap,
  FaHandshake,
  FaLanguage,
  FaTag,
  FaUserGroup,
} from "react-icons/fa6";

import { assets } from "@/content/assets";
import type {
  Beneficio,
  CategoriaFiliacao,
  MotivoFiliacao,
  PerguntaFrequente,
} from "@/types";

/**
 * Conteúdo da página Filiação.
 *
 * A filiação em si acontece no portal do PMI Global — todos os CTAs saem do
 * site. Por isso a URL é uma constante: quando o capítulo tiver um link de
 * afiliado ou uma landing própria, muda em um lugar só.
 */
export const URL_PMI_GLOBAL = "https://www.pmi.org/membership";

/**
 * Os três motivos, em duas apresentações.
 *
 * No desktop o protótipo desenha uma composição de 725 × 690 com as formas
 * sobrepostas e o texto por cima; abaixo de `lg` isso vira três cards
 * coloridos. As medidas de `forma` e `textoClasse` são as coordenadas do
 * Figma — não arredonde ao editar.
 */
export const MOTIVOS: MotivoFiliacao[] = [
  {
    texto:
      "Posicione-se no mercado de gerenciamento de projetos, faça parte de algo grande",
    cor: "bg-[#05BFE0]",
    forma: {
      src: assets.formas.circuloCiano,
      largura: 361,
      altura: 361,
      classe: "left-[29px] top-0 h-[361px] w-[361px]",
    },
    textoClasse: "left-[84px] top-[84px] h-[166px] w-[195px] text-right",
  },
  {
    texto: "Descontos em certificações, eventos e treinamentos de parceiros.",
    cor: "bg-[#FF610F]",
    forma: {
      src: assets.formas.trianguloLaranja,
      largura: 385,
      altura: 437,
      /* O protótipo cota 518 × 518, mas a arte exportada é 385 × 437. Mantive
       * a altura de 518 e derivei a largura da proporção real (456) — forçar o
       * quadrado esticaria o triângulo em 13%. */
      classe: "left-0 top-[165px] h-[518px] w-[456px]",
    },
    textoClasse: "left-[163px] top-[358px] h-[139px] w-[161px] text-center",
  },
  {
    texto:
      "Acesse o estado da arte do gerenciamento de projeto e torne-se uma referência! PMBOK, padrões globais, ferramentas e publicações exclusivas e networking qualificado.",
    cor: "bg-[#4F17A8]",
    forma: {
      src: assets.formas.pentagonoRoxo,
      largura: 440,
      altura: 428,
      classe: "left-[285px] top-[36px] h-[428px] w-[440px]",
    },
    textoClasse: "left-[377px] top-[148px] h-[260px] w-[255px] text-center",
  },
];

export const BENEFICIOS_GLOBAL: Beneficio[] = [
  {
    titulo: "PMBOK Guide",
    descricao:
      "Acesso digital à edição mais recente do guia de gerenciamento de projetos mais influente da área.",
  },
  {
    titulo: "Padrões e publicações",
    descricao: "Biblioteca completa de standards, artigos e estudos do PMI.",
  },
  {
    titulo: "Desconto em certificações",
    descricao:
      "Economia significativa nas provas PMP, CAPM, PMI-ACP e demais credenciais.",
  },
  {
    titulo: "Comunidades de prática",
    descricao: "Grupos temáticos por indústria e metodologia, em escala global.",
  },
  {
    titulo: "ProjectManagement.com",
    descricao: "Acesso premium à maior plataforma de conteúdo da área.",
  },
  {
    titulo: "PMI Store",
    descricao: "Descontos em livros, cursos e materiais oficiais.",
  },
];

/** Clube de benefícios local. Ícones do Font Awesome 6 via `react-icons`. */
export const BENEFICIOS_LOCAIS: Beneficio[] = [
  {
    titulo: "FGV",
    descricao: "10% de desconto em cursos de pós-graduação e curta duração",
    Icone: FaGraduationCap,
  },
  {
    titulo: "Aulas de inglês",
    descricao: "Condições especiais em escolas parceiras",
    Icone: FaLanguage,
  },
  {
    titulo: "Mentoring",
    descricao: "Prioridade no programa oficial do capítulo",
    Icone: FaUserGroup,
  },
  {
    titulo: "Networking local",
    descricao: "Encontros presenciais com profissionais e empresas do DF",
    Icone: FaHandshake,
  },
  {
    titulo: "Descontos",
    descricao: "nos eventos presenciais, workshops",
    Icone: FaTag,
  },
];

export const PERFIS: string[] = [
  "Trabalha com projetos e quer evoluir na carreira.",
  "Pretende tirar uma certificação PMI nos próximos 12 meses.",
  "Quer construir rede de contatos (networking) no DF, Brasil e até internacionalmente.",
  "Busca ambiente de metodologia ativa e aprendizado para fomentar discussões de gerenciamento de projetos.",
  "Busca se posicionar no mercado de projetos.",
  "Deseja ter acesso aos benefícios do PMI e PMI-DF.",
];

export const CATEGORIAS: CategoriaFiliacao[] = [
  {
    titulo: "Profissional",
    descricao: "Anuidade padrão do PMI Global + taxa do capítulo PMI-DF.",
    barra: "bg-[#4F17A8]",
  },
  {
    titulo: "Estudante",
    descricao: "Valor promocional para alunos de graduação ou pós-graduação.",
    barra: "bg-[#05BFE0]",
  },
];

/**
 * TODO: só a primeira resposta veio do protótipo. As outras três são rascunho
 * e precisam de revisão do capítulo antes de ir ao ar.
 */
export const FAQ: PerguntaFrequente[] = [
  {
    pergunta: "Preciso ser certificado para me filiar?",
    resposta: "Não. Filiação e certificação são independentes.",
  },
  {
    pergunta: "A filiação dá direito à certificação?",
    resposta:
      "Não. A filiação dá desconto nas provas, mas a certificação é um processo separado, com requisitos e exame próprios.",
  },
  {
    pergunta: "Como escolho o PMI-DF como capítulo?",
    resposta:
      "Durante o cadastro no portal do PMI Global, na etapa de escolha de capítulo, selecione PMI Distrito Federal. É esse passo que conecta você à comunidade local.",
  },
  {
    pergunta: "Posso cancelar?",
    resposta:
      "Sim. A filiação é anual e não renova automaticamente sem aviso. O cancelamento é feito na sua conta do PMI Global.",
  },
];
