import { site } from "@/content/site";

/**
 * Conteúdo da página de Contato.
 *
 * Os assuntos não são decorativos: vários CTAs do site já apontam para
 * `/contato?assunto=<slug>` (certificação, PDU, palestra, patrocínio, Student
 * Club, cupom Jump). O slug da URL seleciona a opção correspondente no
 * formulário — por isso a lista abaixo é a fonte da verdade dos dois lados.
 * Criar um CTA novo com um slug fora daqui não quebra nada: o formulário cai
 * no assunto padrão.
 */

export const HERO = {
  titulo: "Fale com o PMI-DF",
  subtitulo:
    "Dúvidas sobre filiação, certificação, eventos ou parcerias? Escreva para a gente — respondemos em até 2 dias úteis.",
};

export type OpcaoAssunto = {
  /** Slug que viaja na URL (`?assunto=`). */
  valor: string;
  /** Texto exibido no select e usado no assunto do e-mail. */
  label: string;
};

export const ASSUNTOS: OpcaoAssunto[] = [
  { valor: "geral", label: "Dúvida geral" },
  { valor: "filiacao", label: "Filiação e anuidade" },
  { valor: "certificacao", label: "Certificações PMI" },
  { valor: "pdu", label: "PDUs e recertificação" },
  { valor: "cupom-jump", label: "Cupom de desconto Jump" },
  { valor: "eventos", label: "Eventos e programas" },
  { valor: "palestra", label: "Quero palestrar em um evento" },
  { valor: "patrocinio", label: "Patrocínio e mantenedores" },
  { valor: "incompany", label: "Treinamento InCompany" },
  { valor: "voluntariado", label: "Voluntariado" },
  { valor: "student-club", label: "Student Club" },
  { valor: "mentoring", label: "Mentoring" },
  { valor: "galeria-presidentes", label: "Memória e acervo do capítulo" },
  { valor: "imprensa", label: "Imprensa" },
  { valor: "privacidade", label: "Privacidade e proteção de dados (LGPD)" },
];

/** Usado quando a URL não traz `?assunto=` ou traz um slug desconhecido. */
export const ASSUNTO_PADRAO = "geral";

/** Caixa de entrada que recebe o formulário. */
export const EMAIL_DESTINO = site.contact.email;

export const FORMULARIO = {
  titulo: "Envie sua mensagem",
  descricao:
    "Preencha os campos e o e-mail abre pronto no seu aplicativo de e-mail, já endereçado ao capítulo.",
  enviarLabel: "Abrir e-mail",
};

/**
 * Canal direto exibido ao lado do formulário. `href` é opcional: o endereço
 * fiscal é informação, não link.
 */
export type CanalContato = {
  titulo: string;
  descricao: string;
  href?: string;
  /** Abre em nova aba (WhatsApp, por exemplo). */
  externo?: boolean;
};

export const CANAIS: CanalContato[] = [
  {
    titulo: "E-mail",
    descricao: site.contact.email,
    href: `mailto:${site.contact.email}`,
  },
  {
    titulo: "Telefone e WhatsApp",
    descricao: site.contact.telefone.exibicao,
    href: site.contact.telefone.whatsapp,
    externo: true,
  },
  {
    titulo: "Endereço fiscal",
    descricao: site.contact.address,
  },
  {
    titulo: "Transparência",
    descricao: "Estatuto, atas, certidões e demais documentos do capítulo.",
    href: "/transparencia",
  },
];
