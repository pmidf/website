import { site } from "@/content/site";

export type TipoDocumento = "PDF" | "LINK";

export type DocumentoTransparencia = {
  tipo: TipoDocumento;
  titulo: string;
  descricao: string;
  href: string;
  externo?: boolean;
};

export type GrupoDocumentos = {
  titulo: string;
  documentos: DocumentoTransparencia[];
};

export const GRUPOS_DOCUMENTOS: GrupoDocumentos[] = [
  {
    titulo: "Documentos institucionais",
    documentos: [
      {
        tipo: "PDF",
        titulo: "Charter Agreement Distrito Federal",
        descricao: "Acordo de capítulo com o PMI Global",
        href: "/documentos/transparencia/charter-agreement.pdf",
      },
      {
        tipo: "PDF",
        titulo: "Estatuto Social da Seção Distrito Federal — Brasil",
        descricao: "Project Management Institute",
        href: "/documentos/transparencia/estatuto-social.pdf",
      },
      {
        tipo: "PDF",
        titulo: "Ata de nomeação da diretoria",
        descricao: "Gestão 2025-2026",
        href: "/documentos/transparencia/ata-nomeacao-diretoria.pdf",
      },
      {
        tipo: "LINK",
        titulo: "Código de Ética e Conduta Profissional do PMI",
        descricao: "Portal do PMI Global",
        href: "https://www.pmi.org/about/ethics",
        externo: true,
      },
    ],
  },
  {
    titulo: "Registros e licenças",
    documentos: [
      {
        tipo: "LINK",
        titulo: "Cadastro Nacional de Pessoa Jurídica (CNPJ)",
        descricao: "Receita Federal",
        href: "https://solucoes.receita.fazenda.gov.br/Servicos/cnpjreva/Cnpjreva_Solicitacao.asp",
        externo: true,
      },
      {
        tipo: "PDF",
        titulo: "Cadastro Fiscal do Distrito Federal",
        descricao: "Emissão: 07 de fevereiro de 2024",
        href: "/documentos/transparencia/cadastro-fiscal-df.pdf",
      },
      {
        tipo: "PDF",
        titulo: "Licenciamento — Autorização de Funcionamento",
        descricao: "PMI-DF 2023",
        href: "/documentos/transparencia/licenciamento-autorizacao.pdf",
      },
    ],
  },
  {
    titulo: "Certidões negativas",
    documentos: [
      {
        tipo: "PDF",
        titulo: "Certidão de Dívida Ativa Negativa",
        descricao: "Junto aos órgãos públicos",
        href: "/documentos/transparencia/certidao-divida-ativa-negativa.pdf",
      },
      {
        tipo: "PDF",
        titulo: "Certidão de Dívida Ativa Negativa",
        descricao: "Junto ao GDF",
        href: "/documentos/transparencia/certidao-divida-ativa-gdf.pdf",
      },
      {
        tipo: "PDF",
        titulo: "Certidão Negativa de Débitos",
        descricao: "Junto aos órgãos públicos",
        href: "/documentos/transparencia/certidao-negativa-debitos.pdf",
      },
      {
        tipo: "PDF",
        titulo: "Certidão Negativa de Débitos Trabalhistas",
        descricao: "Justiça do Trabalho",
        href: "/documentos/transparencia/certidao-trabalhista.pdf",
      },
      {
        tipo: "PDF",
        titulo:
          "Certidão Negativa de Débitos Relativos aos Tributos Federais e à Dívida Ativa da União",
        descricao: "Receita Federal / PGFN",
        href: "/documentos/transparencia/certidao-tributos-federais.pdf",
      },
      {
        tipo: "PDF",
        titulo: "Certidão Negativa de Distribuição",
        descricao: "Ações de falências e recuperações judiciais — 1ª e 2ª instâncias",
        href: "/documentos/transparencia/certidao-distribuicao.pdf",
      },
      {
        tipo: "PDF",
        titulo: "Certidão de Regularidade do FGTS (CRF)",
        descricao: "Caixa Econômica Federal",
        href: "/documentos/transparencia/certidao-fgts.pdf",
      },
      {
        tipo: "LINK",
        titulo: "Certidão negativa correccional",
        descricao: "ePAD, CGU-PJ, CEIS, CNEP e CEPIM",
        href: "https://certidoes.cgu.gov.br/",
        externo: true,
      },
    ],
  },
];

export const CTAS_TRANSPARENCIA = [
  {
    titulo: "Falar com a gestão",
    descricao: "Dúvidas sobre governança, prestação de contas ou documentos do capítulo.",
    cta: "Enviar e-mail",
    // Endereço vem de `content/site.ts`, a fonte única de contato do capítulo.
    href: `mailto:${site.contact.email}`,
    variante: "roxo",
  },
  {
    titulo: "Canal de ética do PMI",
    descricao: "Denúncias de conduta são tratadas diretamente pelo PMI Global, em canal próprio.",
    cta: "Acessar canal ↗",
    href: "https://www.pmi.org/about/ethics",
    variante: "azul",
    externo: true,
  },
  {
    titulo: "Política de privacidade",
    descricao: "Como o PMI-DF trata dados pessoais de filiados, voluntários e participantes.",
    cta: "Ler política",
    href: "/politica-de-privacidade",
    variante: "claro",
  },
];