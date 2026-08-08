import type {
  CaminhoMentoring,
  EntregaMentoring,
  EstatisticaMentoring,
  EtapaCiclo,
} from "@/types";

/**
 * Conteúdo da página Mentoring, transcrito do protótipo Figma.
 *
 * As cores dos cards são referências a variáveis declaradas em
 * `src/styles/mentoring.css` — nenhum hex aqui, para que trocar a paleta
 * continue sendo uma edição em um arquivo só.
 */

/**
 * Destino dos CTAs de inscrição.
 *
 * O protótipo não define a URL do formulário: por ora todos os botões levam à
 * âncora da seção "Próximo ciclo". Trocar aqui quando o link real existir.
 */
export const LINK_INSCRICAO = "#inscricoes";

export const ESTATISTICAS: EstatisticaMentoring[] = [
  { numero: "12", legenda: "ciclos realizados", cor: "var(--roxo-primario)" },
  {
    numero: "Centenas",
    legenda: "de profissionais impactados",
    cor: "var(--laranja)",
  },
];

export const CAMINHOS: CaminhoMentoring[] = [
  {
    perfil: "mentorado",
    titulo: "Sou mentorado",
    citacao:
      "Quero acelerar minha trajetória em gerenciamento de projetos com alguém que já percorreu o caminho.",
    itens: [
      "Você trabalha com projetos e busca direção clara.",
      "Quer feedback honesto de quem viveu o que você está vivendo.",
      "Precisa de um espelho para tomar decisões de carreira.",
    ],
    ctaLabel: "Inscrever-me como mentorado",
  },
  {
    perfil: "mentor",
    titulo: "Sou mentor",
    citacao: "Quero devolver ao ecossistema o que aprendi na minha jornada.",
    itens: [
      "Você tem experiência sólida em projetos.",
      "Está disposto a doar tempo e atenção.",
      "Acredita que ensinar acelera quem ensina.",
    ],
    ctaLabel: "Inscrever-me como mentor",
  },
];

export const ETAPAS_CICLO: EtapaCiclo[] = [
  {
    titulo: "Inscrição",
    descricao: "Mentores e mentorados se cadastram nos períodos definidos.",
  },
  {
    titulo: "Matching",
    descricao:
      "A coordenação combina duplas por perfil, objetivo e disponibilidade.",
  },
  {
    titulo: "Kickoff",
    descricao: "Encontro de abertura com todos os participantes.",
  },
  {
    titulo: "Encontros regulares",
    descricao: "Sessões periódicas entre dupla, no ritmo acordado.",
  },
  {
    titulo: "Acompanhamento",
    descricao: "A coordenação apoia e resolve o que precisar durante o ciclo.",
  },
  {
    titulo: "Encerramento",
    descricao: "Avaliação, celebração e feedback.",
  },
];

export const ENTREGAS: EntregaMentoring[] = [
  {
    titulo: "Direção",
    descricao: "Clareza sobre próximos passos de carreira.",
    cor: "var(--ciano)",
  },
  {
    titulo: "Rede",
    descricao: "Vínculo com profissionais do ecossistema PMI-DF.",
    cor: "var(--laranja)",
  },
  {
    titulo: "Aprendizado bidirecional",
    descricao: "Mentores também crescem no processo.",
    cor: "var(--roxo-primario)",
  },
  {
    titulo: "PDUs",
    descricao:
      "Horas de mentoria contam para manutenção de certificações PMI.",
    cor: "var(--laranja)",
  },
  {
    titulo: "Reconhecimento",
    descricao: "Certificado de participação emitido pelo capítulo.",
    cor: "var(--ciano)",
  },
];