import type { CardColorido, PassoVoluntariado } from "@/types";

/**
 * Conteúdo da página Voluntariado.
 *
 * As vagas moram no VEP (Volunteer Engagement Portal) do PMI Global, não no
 * site — por isso todos os CTAs apontam para a mesma URL, declarada uma vez.
 */
/**
 * Busca já filtrada pelo capítulo Distrito Federal no VEP e ordenada da vaga
 * mais recente para a mais antiga — os filtros viajam na query string, então
 * a URL precisa ser copiada inteira, sem "limpar" os parâmetros.
 */
export const URL_VEP =
  "https://volunteer.pmi.org/search?size=n_10_n" +
  "&filters%5B0%5D%5Bfield%5D=chapterName.keyword" +
  "&filters%5B0%5D%5Bvalues%5D%5B0%5D=Distrito+Federal%2C+Brazil+Chapter" +
  "&filters%5B0%5D%5Btype%5D%5Btype%5D=any" +
  "&sort%5B0%5D%5Bfield%5D=postingStartDate" +
  "&sort%5B0%5D%5Bdirection%5D=desc" +
  "#tab=All";

export const PERFIS: string[] = [
  "Pessoas movidas por propósito que querem impactar a comunidade do Distrito Federal e deixar sua marca pessoal",
  "Profissionais em busca de expandir seu networking, conhecer novas pessoas e se envolver com uma comunidade de projetos",
  "Estudantes que se interessam pela área e querem experiência profissional",
  "Profissionais em busca de recolocação profissional",
  "Pessoas que têm disponibilidade para atuar em voluntariado",
];

/**
 * A ordem segue a leitura em Z do protótipo — coluna esquerda e depois
 * direita, alternando as cores por linha. Reordenar quebra o ritmo cromático.
 */
export const BENEFICIOS: CardColorido[] = [
  {
    titulo: "Networking qualificado",
    descricao:
      "Trabalhe lado a lado com gerentes de projeto sêniores, executivos e líderes do mercado.",
    cor: "bg-[#FF610F]",
  },
  {
    titulo: "Descontos em eventos",
    descricao: "Acesso gratuito ou com desconto em workshops, cursos e outros eventos.",
    cor: "bg-[#1AC7FF]",
  },
  {
    titulo: "Recolocação profissional",
    descricao: "Voluntários frequentemente são indicados para vagas pela rede do capítulo.",
    cor: "bg-[#4F17A8]",
  },
  {
    titulo: "Desenvolvimento de liderança",
    descricao:
      "Gerencie equipes, orçamentos e entregas sem o risco do ambiente corporativo.",
    cor: "bg-[#FF610F]",
  },
  {
    titulo: "Currículo que se destaca",
    descricao:
      "Experiência em PMI pesa em entrevistas e promoções. É reconhecida globalmente.",
    cor: "bg-[#1AC7FF]",
  },
  {
    titulo: "PDUs para certificação",
    descricao: "Horas de voluntariado contam para manutenção de credenciais PMI.",
    cor: "bg-[#4F17A8]",
  },
];

export const PASSOS: PassoVoluntariado[] = [
  {
    titulo: "Acesse o VEP.",
    descricao: "O Volunteer Engagement Portal lista todas as vagas abertas no PMI-DF.",
  },
  {
    titulo: "Candidate-se.",
    descricao: "Envie seu interesse pela plataforma se candidatando.",
  },
];

export const CARDS_STUDENT_CLUB: CardColorido[] = [
  {
    titulo: "Eventos próprios",
    descricao:
      "Encontros, palestras e atividades pensados para quem ainda está na graduação.",
    cor: "bg-[#FF610F]",
  },
  {
    titulo: "Mentoria com sêniores",
    descricao:
      "Contato direto com profissionais experientes do capítulo, desde o primeiro dia.",
    cor: "bg-[#05BFE0]",
  },
  {
    titulo: "Primeiro contato real",
    descricao:
      "Vivência prática em gerenciamento de projetos antes mesmo de entrar no mercado.",
    cor: "bg-[#4F17A8]",
  },
];
