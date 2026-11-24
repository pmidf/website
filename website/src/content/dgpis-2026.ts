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
 * Sem `foto`, o `Avatar` mostra as iniciais em gradiente.
 */
export const PALESTRANTES: Palestrante[] = [
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
];
