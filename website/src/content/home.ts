import { assets } from "@/content/assets";
import type { Evento, Iniciativa, Mantenedor } from "@/types";

/**
 * Conteúdo das seções da home.
 *
 * Os componentes de seção são "burros" de propósito: só recebem estes arrays e
 * renderizam. Publicar um novo evento ou trocar um mantenedor não exige tocar
 * em nenhum arquivo .tsx.
 */

/**
 * Cada iniciativa recebe a forma da própria família cromática: triângulo roxo
 * para Filiação, pentágono azul para o Student Club, círculo laranja para o
 * Voluntariado — a mesma lógica de cor dos gradientes.
 *
 * As formas são centralizadas na área reservada pelo `pt-[190px]` do card e
 * encolhem no mobile, onde o card é mais estreito.
 */
export const INICIATIVAS: Iniciativa[] = [
  {
    titulo: "Filiação",
    descricao:
      "Acesso global, local e benefícios. Conecte-se a mais de 750 mil profissionais. Receba publicações, ferramentas e descontos exclusivos.",
    href: "/filiacao",
    gradiente: "bg-[linear-gradient(180deg,#000000_0%,#1F0942_60%)]",
    deco: {
      src: assets.formas.trianguloRoxo,
      largura: 143,
      altura: 124,
      classe: "left-1/2 top-6 w-[128px] -translate-x-1/2 md:w-[143px]",
    },
  },
  {
    titulo: "Student Club",
    descricao:
      "Para estudantes que pensam grande. Networking e eventos voltados ao início de carreira. O primeiro passo no mundo dos projetos.",
    href: "/student-club",
    gradiente: "bg-[linear-gradient(180deg,#000000_0%,#023041_40%)]",
    deco: {
      src: assets.formas.pentagonoAzul,
      largura: 147,
      altura: 143,
      classe: "left-1/2 top-8 w-[132px] -translate-x-1/2 md:w-[147px]",
    },
  },
  {
    titulo: "Voluntariado",
    descricao:
      "Construa o PMI-DF com a gente. Ocupe um cargo, lidere iniciativas e desenvolva habilidades reais de liderança. Doe tempo, colha experiência e networking.",
    href: "/voluntariado",
    gradiente: "bg-[linear-gradient(180deg,#000000_0%,#E35308_100%)]",
    deco: {
      src: assets.formas.circuloLaranja,
      largura: 138,
      altura: 138,
      classe: "left-1/2 top-8 w-[124px] -translate-x-1/2 md:w-[138px]",
    },
  },
];

export const EVENTOS: Evento[] = [
  {
    data: "09 NOV 2026",
    formato: "Presencial",
    titulo: "PMI-DF Summit 2026",
    descricao:
      "Reunindo profissionais, estudantes, empresas e especialistas para compartilhar tendências, experiências e oportunidades de networking.",
    href: "https://www.sympla.com.br/",
    gradiente: "bg-[linear-gradient(180deg,#841E04_0%,#FF610F_76%)]",
    chipTexto: "bg-[linear-gradient(90deg,#FF610F_0%,#841E04_100%)]",
  },
  {
    data: "26 NOV 2026",
    formato: "Online",
    titulo: "Webinar | O fator humano nos projetos",
    descricao:
      "Voltado para profissionais, estudantes e líderes que desejam desenvolver uma visão mais estratégica e humana sobre gestão de projetos.",
    href: "https://www.sympla.com.br/",
    gradiente: "bg-[linear-gradient(180deg,#1F0942_0%,#4F17A8_100%)]",
    chipTexto: "bg-[linear-gradient(90deg,#8A38F5_0%,#1F0942_100%)]",
  },
  {
    data: "29 NOV 2026",
    formato: "Online",
    titulo: "Workshop: Preparação para PMP",
    descricao:
      "Voltado para profissionais que desejam se preparar para a certificação PMP®, uma das credenciais mais reconhecidas no mundo.",
    href: "https://www.sympla.com.br/",
    gradiente: "bg-[linear-gradient(180deg,#023041_0%,#057BA7_100%)]",
    chipTexto: "bg-[linear-gradient(90deg,#1AC7FF_0%,#023041_100%)]",
  },
];

export const MANTENEDORES: Mantenedor[] = [
  { nome: "BRB Lab", src: assets.mantenedores.brbLab, w: 186, h: 161 },
  { nome: "Brisk", src: assets.mantenedores.brisk, w: 236, h: 80 },
  { nome: "SmartKanvas", src: assets.mantenedores.smartkanvas, w: 314, h: 89 },
];
