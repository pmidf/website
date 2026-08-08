/**
 * Dicionário único de assets estáticos.
 *
 * Nenhum componente escreve caminho de imagem "na mão": todos importam daqui.
 * Renomear um arquivo exportado do Figma vira uma edição em um só lugar, e o
 * TypeScript aponta imediatamente quem usava a chave removida.
 *
 * Os arquivos devem ser exportados do Figma para `public/assets/`.
 */
export const assets = {
  logo: "/assets/logo-pmidf.svg",
  wordmark: "/assets/pmi-distrito-federal.svg",
  heroBg: "/assets/hero-bg.png",
  fotoBrasilia: "/assets/foto-brasilia.png",
  bannerDeco: "/assets/deco-banner.svg",
  incompanyGradient: "/assets/incompany-gradient.svg",
  decoFiliacao: "/assets/deco-filiacao.png",
  decoStudentClub: "/assets/deco-student-club.png",
  decoVoluntariado: "/assets/deco-voluntariado.png",
  mantenedores: {
    brbLab: "/assets/mantenedores/brb-lab.png",
    brisk: "/assets/mantenedores/brisk.png",
    smartkanvas: "/assets/mantenedores/smartkanvas.png",
  },
  social: {
    instagram: "/assets/icons/instagram.svg",
    linkedin: "/assets/icons/linkedin.svg",
    facebook: "/assets/icons/facebook.svg",
    youtube: "/assets/icons/youtube.svg",
    whatsapp: "/assets/icons/whatsapp.svg",
  },
} as const;
