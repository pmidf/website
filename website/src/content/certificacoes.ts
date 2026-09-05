import { assets } from "@/content/assets";
import type { CertificacaoPMI } from "@/types";

/**
 * As quatro credenciais que o capítulo destaca, na mesma organização do site
 * do PMI Global: as principais em cards escuros com o gem colorido, as
 * especializadas em cards claros com o pentágono.
 *
 * O `gem` é a peça original do PMI, baixada do site deles: círculo para a
 * CAPM, triângulo para a PMP, pentágono para as especializadas. `gemAltura`
 * varia porque as três têm proporções diferentes — o triângulo é mais baixo
 * que largo. Quem chega
 * vindo de lá reconhece a peça.
 *
 * Os textos são nossos (em português, com o recorte do capítulo); a estrutura
 * do card é a deles: rótulo, gem, sigla, nome por extenso, exigência de
 * experiência, descrição e um "saiba mais" para a página oficial.
 */
export const CERTIFICACOES: CertificacaoPMI[] = [
  {
    grupo: "principal",
    id: "capm",
    sigla: "CAPM®",
    titulo: "Certified Associate in Project Management (CAPM)®",
    experiencia: "Sem exigência de experiência",
    descricao:
      "Para quem está começando na área e quer comprovar domínio dos fundamentos do gerenciamento de projetos que os times esperam.",
    href: "https://www.pmi.org/certifications/certified-associate-capm",
    fundo: "bg-[#023041]",
    sigla_cor: "text-[#1AC7FF]",
    gem: assets.certificacoes.gemCapm,
    gemLargura: 440,
    gemAltura: 440,
  },
  {
    grupo: "principal",
    id: "pmp",
    sigla: "PMP®",
    titulo: "Project Management Professional (PMP)®",
    experiencia: "3+ anos liderando projetos",
    descricao:
      "A credencial mais reconhecida da profissão. Valida sua capacidade de conduzir pessoas, processos e prioridades do início ao fim.",
    href: "https://www.pmi.org/certifications/project-management-pmp",
    fundo: "bg-[#1F0942]",
    sigla_cor: "text-[#B465FF]",
    gem: assets.certificacoes.gemPmp,
    gemLargura: 440,
    gemAltura: 379,
  },
  {
    grupo: "especializada",
    id: "acp",
    sigla: "PMI-ACP®",
    titulo: "PMI Agile Certified Practitioner (PMI-ACP)®",
    experiencia: "2+ anos em times ágeis",
    descricao:
      "Para quem atua com Scrum, Kanban e outras abordagens ágeis e quer comprovar domínio prático além de um framework só.",
    href: "https://www.pmi.org/certifications/agile-acp",
    fundo: "bg-[#F8F5F0]",
    sigla_cor: "text-[#200F3B]",
    gem: assets.certificacoes.gemEspecializacao,
    gemLargura: 440,
    gemAltura: 420,
  },
  {
    grupo: "especializada",
    id: "pmocp",
    sigla: "PMI-PMOCP™",
    titulo: "PMI PMO Certified Professional (PMI-PMOCP)™",
    experiencia: "3+ anos em PMO",
    descricao:
      "Para quem estrutura, avalia e evolui escritórios de projetos, com foco em entrega de valor e não apenas em controle.",
    href: "https://www.pmi.org/certifications/pmo-certified-professional-pmocp",
    fundo: "bg-[#F8F5F0]",
    sigla_cor: "text-[#200F3B]",
    gem: assets.certificacoes.gemEspecializacao,
    gemLargura: 440,
    gemAltura: 420,
  },
];

export const COMPARATIVO = [
  ["CAPM®", "Nenhuma", "Início de carreira e estudantes", "150 questões • 3 h"],
  ["PMP®", "3 anos liderando projetos", "Profissionais em atuação", "180 questões • 230 min"],
  ["PMI-ACP®", "2 anos em times ágeis", "Quem trabalha com ágil", "120 questões • 3 h"],
  ["PMI-PMOCP™", "3 anos em PMO", "Quem estrutura escritório de projeto", "Baseado em cenários"],
];

export const PDU_CARDS = [
  {
    titulo: "Participando de eventos",
    descricao:
      "Summits, workshops e webinars do capítulo geram PDUs revisáveis.",
    cta: "Ver agenda",
  },
  {
    titulo: "Sendo voluntário",
    descricao:
      "Horas dedicadas ao capítulo contam como PDUs de serviço à profissão.",
    cta: "Ver vagas abertas",
  },
  {
    titulo: "Em treinamentos ATP",
    descricao:
      "Cursos do parceiro autorizado geram PDUs de educação formal.",
    cta: "Falar com o PMI-DF",
  },
];

export const FAQ_CERTIFICACOES = [
  {
    pergunta: "Preciso ser filiado ao PMI para me certificar?",
    resposta:
      "Não. A filiação não é obrigatória, mas dá desconto no exame e na renovação — e costuma se pagar já na primeira prova.",
  },
  {
    pergunta: "O PMI-DF aplica a prova?",
    resposta:
      "Não. A inscrição e a realização do exame são feitas pelos canais oficiais do PMI Global.",
  },
  {
    pergunta: "Qual a diferença entre um curso ATP e um curso comum?",
    resposta:
      "O ATP é parceiro autorizado pelo PMI e usa conteúdo oficial, instrutores avaliados e horas reconhecidas para elegibilidade.",
  },
  {
    pergunta: "Como consigo o cupom de desconto da JUMP?",
    resposta:
      "Você pode solicitar o cupom diretamente com o capítulo pelos canais de contato do PMI-DF.",
  },
];