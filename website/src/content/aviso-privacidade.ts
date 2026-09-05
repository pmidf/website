import { site } from "@/content/site";

/**
 * Conteúdo do Aviso de Privacidade (`/aviso-de-privacidade`).
 *
 * Transcrito do aviso publicado pelo capítulo em pmidf.org/aviso-de-privacidade
 * e reorganizado nas seções abaixo. É documento jurídico: alterar redação aqui
 * muda o que o capítulo declara aos titulares, então mudanças de texto passam
 * pela diretoria — o que este arquivo controla é a apresentação.
 *
 * E-mails e endereço vêm de `content/site.ts` para não existirem em duas
 * versões no site.
 *
 * TODO: confirmar com a diretoria (1) o CNPJ e (2) o endereço do controlador —
 * o aviso publicado traz o endereço do Edifício FINATEC, enquanto o rodapé do
 * site traz o Impact Hub como endereço fiscal. Aqui usamos o do rodapé para
 * não haver dois endereços diferentes no mesmo site.
 * TODO: confirmar a data da última revisão do documento.
 */

export type SecaoAviso = {
  titulo: string;
  paragrafos?: string[];
  /** Lista não ordenada exibida depois dos parágrafos. */
  itens?: string[];
  /** Blocos com título próprio (ex.: as três origens dos dados coletados). */
  subsecoes?: {
    titulo: string;
    itens: string[];
  }[];
};

export const HERO = {
  titulo: "Aviso de Privacidade",
  subtitulo:
    "Como o PMI Distrito Federal coleta, usa, compartilha e protege os seus dados pessoais.",
};

export const INTRODUCAO = [
  "O PMI Distrito Federal tem o compromisso de oferecer excelência, segurança e salvaguardas equivalentes às do PMI Global no tratamento de dados pessoais.",
  "Este aviso explica, em linguagem direta, quais dados coletamos, para que os usamos, com quem eventualmente os compartilhamos e quais são os seus direitos como titular.",
];

/** Versão completa e assinada do documento, hospedada pelo capítulo. */
export const POLITICA_COMPLETA = {
  label: "Ler a Política de Privacidade e Proteção de Dados Pessoais (PDF)",
  href: "https://pmidf.org/wp-content/uploads/POLITICA-DE-PRIVACIDADE-E-PROTECAO-DE-DADOS-PESSOAIS.pdf",
};

export const SECOES: SecaoAviso[] = [
  {
    titulo: "Quem trata os seus dados",
    paragrafos: [
      `O controlador dos dados pessoais é o PMI Chapter Distrito Federal, inscrito no CNPJ sob o nº 04.271.340/0001-08, com endereço em ${site.contact.address}.`,
      `Dúvidas sobre este aviso ou sobre o tratamento dos seus dados podem ser enviadas para ${site.contact.email} ou, diretamente ao encarregado de proteção de dados, para ${site.contact.emailDpo}.`,
    ],
  },
  {
    titulo: "Quais dados coletamos",
    subsecoes: [
      {
        titulo: "Dados fornecidos por você",
        itens: [
          "Informações preenchidas em formulários do site, como o de contato.",
          "Dados de filiação ao capítulo.",
          "Inscrições em webinars, cursos, eventos e programas.",
          "Solicitações relacionadas a certificações.",
        ],
      },
      {
        titulo: "Dados obtidos de terceiros",
        itens: [
          "Informações vindas de parceiros e prestadores de serviço.",
          "Bases de dados públicas.",
          "Redes sociais, quando você interage com nossos perfis.",
        ],
      },
      {
        titulo: "Dados coletados automaticamente",
        itens: [
          "Características do navegador e do sistema operacional.",
          "Endereço IP, identificadores do dispositivo e URLs de origem.",
          "Páginas acessadas, tempo de visita e padrões de navegação.",
          "Cookies, pixel tags, beacons e objetos locais compartilhados, usados para melhorar a navegação e direcionar comunicações.",
        ],
      },
    ],
  },
  {
    titulo: "Princípios que seguimos na coleta",
    itens: [
      "Coletamos apenas os dados essenciais à finalidade informada.",
      "Dados adicionais só são coletados mediante consentimento.",
      "Toda coleta é acompanhada da informação sobre o seu uso.",
      "Os dados são usados apenas para as finalidades declaradas.",
    ],
  },
  {
    titulo: "Para que usamos os seus dados",
    subsecoes: [
      {
        titulo: "Execução de serviços e contratos",
        itens: [
          "Transações, cadastros e contratação de serviços.",
          "Verificação e atualização de dados.",
          "Atendimento e relacionamento com filiados e participantes.",
          "Comunicações e ações promocionais do capítulo.",
        ],
      },
      {
        titulo: "Cumprimento de obrigação legal",
        itens: [
          "Due diligence e auditorias.",
          "Processos judiciais, administrativos e arbitrais.",
          "Prevenção e apuração de fraudes.",
        ],
      },
      {
        titulo: "Legítimo interesse",
        itens: [
          "Análises internas e pesquisas de mercado.",
          "Melhoria dos serviços e personalização da experiência.",
          "Prevenção a fraudes e proteção do capítulo e dos titulares.",
        ],
      },
      {
        titulo: "Consentimento",
        itens: ["Qualquer outra finalidade para a qual você tenha autorizado expressamente."],
      },
    ],
  },
  {
    titulo: "Com quem compartilhamos",
    paragrafos: [
      "Os dados pessoais podem ser compartilhados, sempre dentro das finalidades acima, com:",
    ],
    itens: [
      "Empresas parceiras e fornecedores homologados.",
      "Parceiros de campanhas promocionais.",
      "Agências de publicidade e provedores de análise de dados.",
      "Autoridades governamentais e órgãos do Judiciário, quando exigido.",
      "Empresas afiliadas e subsidiárias, inclusive no exterior.",
      "Terceiros envolvidos em operações societárias.",
    ],
  },
  {
    titulo: "Por quanto tempo guardamos",
    paragrafos: [
      "Os dados são eliminados quando deixam de ser úteis para as finalidades que motivaram a coleta, ou mediante a sua solicitação de exclusão.",
      "A exceção são as hipóteses em que a guarda é exigida por obrigação legal ou regulatória.",
    ],
  },
  {
    titulo: "Como protegemos",
    itens: [
      "Proteção contra acessos não autorizados.",
      "Acesso restrito aos locais de armazenamento das informações.",
      "Renovação diária do backup das informações.",
    ],
    paragrafos: [
      "Nenhuma transmissão de dados pela Internet pode ser garantida como 100% segura. O compromisso do capítulo é com a segurança dos dados a partir do momento em que os recebe.",
    ],
  },
  {
    titulo: "Transferência internacional",
    paragrafos: [
      "Seus dados podem ser transferidos e processados em servidores localizados fora do Brasil, em especial nos Estados Unidos.",
      "Nesses casos, o capítulo se compromete a assegurar padrões de proteção em níveis adequados ou superiores aos exigidos pela LGPD.",
    ],
  },
  {
    titulo: "Seus direitos como titular",
    paragrafos: ["A qualquer momento, você pode solicitar:"],
    itens: [
      "Confirmação da existência de tratamento dos seus dados.",
      "Acesso aos dados que temos sobre você.",
      "Correção de dados incompletos, inexatos ou desatualizados.",
      "Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos.",
      "Portabilidade dos dados.",
      "Eliminação dos dados tratados com base no consentimento.",
      "Informação sobre com quem os seus dados foram compartilhados.",
      "Revogação do consentimento.",
    ],
  },
  {
    titulo: "Links para outros sites",
    paragrafos: [
      "Este aviso não se aplica a sites de terceiros acessados a partir de links publicados aqui, que têm políticas de privacidade próprias.",
      "O PMI-DF e o PMI Global não são responsáveis pelo conteúdo nem pelas práticas de privacidade desses sites.",
    ],
  },
  {
    titulo: "Legislação aplicável",
    paragrafos: [
      "Este aviso observa a Lei Federal nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais (LGPD).",
    ],
  },
  {
    titulo: "Atualizações deste aviso",
    paragrafos: [
      "Sempre que este aviso for atualizado, a nova versão será publicada nesta página com a data da revisão. Mudanças relevantes serão comunicadas aos titulares afetados.",
    ],
  },
];

/** Bloco de fechamento com os canais para exercer os direitos acima. */
export const EXERCER_DIREITOS = {
  titulo: "Como exercer os seus direitos",
  descricao:
    "Envie a sua solicitação por qualquer um dos canais abaixo. Pedidos passam por validação de identidade, e qualquer recusa é sempre justificada.",
  ctaLabel: "Falar com o PMI-DF",
  ctaHref: "/contato?assunto=privacidade",
};
