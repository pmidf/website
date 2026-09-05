import type { Voluntario } from "@/types";

/**
 * Galeria de voluntários — conteúdo de `/quem-somos/voluntarios`, destino do
 * botão "voluntários" da seção Organograma em Quem Somos.
 *
 * ## De onde vêm os nomes
 *
 * Da própria arte do organograma da gestão 2025-2026
 * (`public/assets/paginas/quem-somos/organograma.webp`), que já publica esses
 * nomes no site — aqui eles viram texto, o que a imagem não permite: pesquisa,
 * leitor de tela e link individual.
 *
 * As posições marcadas como "EM BREVE" no organograma ficaram de fora: entram
 * quando forem preenchidas. Nenhum nome foi inventado para completar a grade.
 *
 * TODO: fotos individuais. Hoje só existem embutidas na imagem do organograma;
 * exportadas para `public/assets/paginas/voluntarios/<nome>.webp`, basta
 * preencher `foto` — sem ela, o card usa o avatar de iniciais.
 * TODO: `linkedin` de cada pessoa, quando o capítulo autorizar a divulgação.
 */

export const HERO = {
  titulo: "Nossos voluntários",
  subtitulo:
    "O PMI-DF é feito por quem doa tempo e experiência ao capítulo. Estes são os profissionais que conduzem as diretorias, conselhos e comitês da gestão 2025-2026.",
};

export const INTRO = {
  eyebrow: "Gestão 2025-2026",
  titulo: "Quem constrói o capítulo",
  descricao:
    "Toda a diretoria do PMI-DF é voluntária. São profissionais de projetos que se organizam em diretorias, conselhos e comitês para manter os eventos, os programas e a governança do capítulo funcionando.",
};

/** Ordem dos grupos na página — a mesma leitura do organograma, de cima para baixo. */
export const GRUPOS: string[] = [
  "Diretoria Executiva",
  "Diretoria",
  "Diretoria Adjunta",
  "Student Club",
  "Conselhos",
  "Comitês",
];

export const VOLUNTARIOS: Voluntario[] = [
  { nome: "Matheus Rocha", papel: "Presidente", diretoria: "Diretoria Executiva" },
  { nome: "Ana Lima", papel: "Vice-presidente", diretoria: "Diretoria Executiva" },

  { nome: "Cristina Duarte", papel: "Administração", diretoria: "Diretoria" },
  { nome: "Luiz Clemêncio", papel: "Engajamento", diretoria: "Diretoria" },
  { nome: "Renata Marra", papel: "Eventos", diretoria: "Diretoria" },
  { nome: "Ricardo André", papel: "Certificação", diretoria: "Diretoria" },
  { nome: "Wanda Marques", papel: "Projetos Sociais", diretoria: "Diretoria" },

  { nome: "Karina Batista", papel: "Educação", diretoria: "Diretoria Adjunta" },
  { nome: "Lucelino de Sousa", papel: "Certificação", diretoria: "Diretoria Adjunta" },
  { nome: "Thiago Lopes", papel: "Jurídico", diretoria: "Diretoria Adjunta" },
  { nome: "Vitor Feijó", papel: "Tecnologia", diretoria: "Diretoria Adjunta" },
  { nome: "André Luiz", papel: "Voluntariado", diretoria: "Diretoria Adjunta" },
  { nome: "Natasha Rodrigues", papel: "DE&I", diretoria: "Diretoria Adjunta" },

  { nome: "Ana Sometes", papel: "Presidente do Student Club", diretoria: "Student Club" },

  { nome: "Robério Santos", papel: "Conselho Fiscal", diretoria: "Conselhos" },
  { nome: "José Alves", papel: "Conselho Consultivo", diretoria: "Conselhos" },

  { nome: "Lilian Campos", papel: "Comitê de Governança", diretoria: "Comitês" },
];

/** Bloco final: convite para entrar no time. As vagas moram no VEP do PMI Global. */
export const CTA_FINAL = {
  titulo: "Quer aparecer nesta página?",
  descricao:
    "As vagas de voluntariado do capítulo são publicadas no VEP, o portal de engajamento do PMI Global. Escolha uma área, candidate-se e venha construir o PMI-DF com a gente.",
  ctaLabel: "Ver vagas abertas",
  ctaSecundarioLabel: "Como funciona o voluntariado",
  ctaSecundarioHref: "/voluntariado",
};
