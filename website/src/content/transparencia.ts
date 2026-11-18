import { site } from "@/content/site";

export type TipoDocumento = "PDF" | "LINK";

export type DocumentoTransparencia = {
  tipo: TipoDocumento;
  titulo: string;
  descricao: string;
  /**
   * Onde o documento abre. Sem `href`, o item aparece como "Em atualização",
   * sem link — melhor do que levar a uma página de erro.
   */
  href?: string;
  /** Link para fora do site (Google Drive, portais oficiais). */
  externo?: boolean;
};

export type GrupoDocumentos = {
  titulo: string;
  documentos: DocumentoTransparencia[];
};

/**
 * Documentos do capítulo.
 *
 * ## Por que vários itens estão sem link
 *
 * Os PDFs moravam em `pmidf.org/wp-content/uploads/`, no servidor do
 * WordPress, que saiu do ar quando o domínio passou para a Vercel. Na
 * migração só a Política de Privacidade foi copiada para
 * `public/wp-content/uploads/`; os demais nunca vieram, e o link respondia
 * erro. Também não há cópia no Wayback Machine.
 *
 * Cada item volta a ter `href` quando o capítulo enviar o link — em geral do
 * Google Drive, compartilhado como "Qualquer pessoa com o link → Leitor"
 * (sem isso, o Drive pede login a quem clica). Link do Drive entra com
 * `externo: true`. PDF hospedado aqui vai em `public/wp-content/uploads/`, com
 * caminho relativo (`/wp-content/uploads/arquivo.pdf`): é a pasta que o
 * middleware deixa passar como mídia legada.
 */
export const GRUPOS_DOCUMENTOS: GrupoDocumentos[] = [
  {
    titulo: "Documentos institucionais",
    documentos: [
      {
        tipo: "PDF",
        titulo: "Charter Agreement Distrito Federal",
        descricao: "Acordo de capítulo com o PMI",
      },
      {
        tipo: "PDF",
        titulo: "Estatuto Social da Seção Distrito Federal — Brasil",
        descricao: "Project Management Institute",
      },
      {
        tipo: "PDF",
        titulo: "Ata de nomeação da diretoria",
        descricao: "Gestão 2025-2026",
      },
      {
        tipo: "LINK",
        titulo: "Código de Ética e Conduta Profissional do PMI",
        descricao: "Portal do PMI",
        // Sem `?rev=…&sc_lang_temp=pt-PT`: com esses parâmetros o PMI responde
        // 200 com um arquivo de 0 byte — o download abria vazio. A URL limpa
        // entrega o PDF de verdade (1,7 MB).
        href: "https://www.pmi.org/-/media/pmi/documents/public/pdf/ethics/pmi-code-of-ethics.pdf",
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
      },
      {
        tipo: "PDF",
        titulo: "Cadastro Fiscal do Distrito Federal",
        descricao: "Emissão: 07 de fevereiro de 2024",
      },
      {
        tipo: "PDF",
        titulo: "Licenciamento — Autorização de Funcionamento",
        descricao: "PMI-DF 2023",
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
      },
      {
        tipo: "PDF",
        titulo: "Certidão de Dívida Ativa Negativa",
        descricao: "Junto ao GDF",
      },
      {
        tipo: "PDF",
        titulo: "Certidão Negativa de Débitos",
        descricao: "Junto aos órgãos públicos",
      },
      {
        tipo: "PDF",
        titulo: "Certidão Negativa de Débitos Trabalhistas",
        descricao: "Justiça do Trabalho",
      },
      {
        tipo: "PDF",
        titulo:
          "Certidão Negativa de Débitos Relativos aos Tributos Federais e à Dívida Ativa da União",
        descricao: "Receita Federal / PGFN",
      },
      {
        tipo: "PDF",
        titulo: "Certidão Negativa de Distribuição",
        descricao: "Ações de falências e recuperações judiciais — 1ª e 2ª instâncias",
      },
      {
        tipo: "PDF",
        titulo: "Certidão de Regularidade do FGTS (CRF)",
        descricao: "Caixa Econômica Federal",
      },
      {
        tipo: "LINK",
        titulo: "Certidão negativa correccional",
        descricao: "ePAD, CGU-PJ, CEIS, CNEP e CEPIM",
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
    descricao: "Denúncias de conduta são tratadas diretamente pelo PMI, em canal próprio.",
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