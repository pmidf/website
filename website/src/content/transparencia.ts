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
        href: "https://pmidf.org/wp-content/uploads/PMI_2021_Charter_Agreement_Distrito_Federal_Brazil_PT.pdf",
      },
      {
        tipo: "PDF",
        titulo: "Estatuto Social da Seção Distrito Federal — Brasil",
        descricao: "Project Management Institute",
        href: "https://pmidf.org/wp-content/uploads/LEGAL_DOC_Bylaw_PMI_Distrito_Federal_30-08-24-registrado.pdf",
      },
      {
        tipo: "PDF",
        titulo: "Ata de nomeação da diretoria",
        descricao: "Gestão 2025-2026",
        href: "https://pmidf.org/wp-content/uploads/Ata-PMI-DF-Diretoria-Executiva-Bienio-2025-2026.pdf",
      },
      {
        tipo: "LINK",
        titulo: "Código de Ética e Conduta Profissional do PMI",
        descricao: "Portal do PMI Global",
        href: "https://www.pmi.org/-/media/pmi/documents/public/pdf/ethics/pmi-code-of-ethics.pdf?rev=ba9caa41b351486d863f556e6f10be93&sc_lang_temp=pt-PT",
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
        href: "https://pmidf.org/wp-content/uploads/3-Cadastro-Nacional-de-Pessoa-Juridica.pdf",
        externo: true,
      },
      {
        tipo: "PDF",
        titulo: "Cadastro Fiscal do Distrito Federal",
        descricao: "Emissão: 07 de fevereiro de 2024",
        href: "https://pmidf.org/wp-content/uploads/COMPROVANTE-DE-INSCRICAO-E-DE-SITUACAO-NO-CADASTRO-FISCAL-DO-DISTRITO-FEDERAL-DIF.pdf",
      },
      {
        tipo: "PDF",
        titulo: "Licenciamento — Autorização de Funcionamento",
        descricao: "PMI-DF 2023",
        href: "https://pmidf.org/wp-content/uploads/5-Licenciamento-Autorizacao-de-Funcionamento-PMI-DF-2023.pdf",
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
        href: "https://pmidf.org/wp-content/uploads/Certidao-Negativa-de-Debitos-junto-a-Orgaos-Publicos.pdf",
      },
      {
        tipo: "PDF",
        titulo: "Certidão de Dívida Ativa Negativa",
        descricao: "Junto ao GDF",
        href: "https://pmidf.org/wp-content/uploads/Certidao-de-Divida-Ativa-Negativa-Junto-ao-GDF-1.pdf",
      },
      {
        tipo: "PDF",
        titulo: "Certidão Negativa de Débitos",
        descricao: "Junto aos órgãos públicos",
        href: "https://pmidf.org/wp-content/uploads/Certidao-Negativa-de-Debitos-Junto-aos-Orgaos-Publicos-1.pdf",
      },
      {
        tipo: "PDF",
        titulo: "Certidão Negativa de Débitos Trabalhistas",
        descricao: "Justiça do Trabalho",
        href: "https://pmidf.org/wp-content/uploads/5-Certidao-Negativa-de-Debitos-Trabalhistas.pdf",
      },
      {
        tipo: "PDF",
        titulo:
          "Certidão Negativa de Débitos Relativos aos Tributos Federais e à Dívida Ativa da União",
        descricao: "Receita Federal / PGFN",
        href: "https://pmidf.org/wp-content/uploads/6-Certidao-Negativa-de-Debitos-Relativos-aos-Tributos-Federais-e-a-Divida-Ativa-da-Uniao.pdf",
      },
      {
        tipo: "PDF",
        titulo: "Certidão Negativa de Distribuição",
        descricao: "Ações de falências e recuperações judiciais — 1ª e 2ª instâncias",
        href: "https://pmidf.org/wp-content/uploads/Certidao-Negativa-de-Distribuicao-Acoes-de-Falencias-e-Recuperacoes-Judiciais-1a-e-2a-Instancias-2-1.pdf",
      },
      {
        tipo: "PDF",
        titulo: "Certidão de Regularidade do FGTS (CRF)",
        descricao: "Caixa Econômica Federal",
        href: "https://pmidf.org/wp-content/uploads/Consulta-Regularidade-do-Empregador.pdf",
      },
      {
        tipo: "LINK",
        titulo: "Certidão negativa correccional",
        descricao: "ePAD, CGU-PJ, CEIS, CNEP e CEPIM",
        href: "https://pmidf.org/wp-content/uploads/Certidao-negativa-correcional-ePAD-CGU-PJ-CEIS-CNEP-e-CEPIM.pdf",
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