/**
 * Dados institucionais do capítulo — alimentam metadata, robots, sitemap,
 * rodapé, página de contato e o link de WhatsApp.
 *
 * É a fonte única de e-mail, telefone e endereço: nenhum componente escreve
 * um desses valores à mão. A navegação (menu e redes sociais) fica em
 * `src/content/navegacao.ts`.
 */

/**
 * Telefone do capítulo em três formas, porque cada destino precisa de uma:
 * o texto que a pessoa lê, o `tel:` que o celular disca e o `wa.me`, que só
 * aceita dígitos com código do país e sem sinais.
 *
 * `numero` é a única informação real aqui — as outras duas derivam dela, então
 * trocar o telefone é editar uma linha.
 */
const TELEFONE_DDD = "61";
const TELEFONE_NUMERO = "993514145";

const telefone = {
  /** Como aparece na tela. */
  exibicao: `(${TELEFONE_DDD}) ${TELEFONE_NUMERO.slice(0, 5)}-${TELEFONE_NUMERO.slice(5)}`,
  /** Destino de um link `tel:` — formato E.164. */
  link: `tel:+55${TELEFONE_DDD}${TELEFONE_NUMERO}`,
  /** Conversa no WhatsApp. O `wa.me` exige só dígitos, com o 55 na frente. */
  whatsapp: `https://wa.me/55${TELEFONE_DDD}${TELEFONE_NUMERO}`,
} as const;

export const site = {
  name: "PMI Distrito Federal",
  shortName: "PMI-DF",
  description:
    "Capítulo oficial do Project Management Institute no Distrito Federal. Conectamos profissionais, empresas e instituições às melhores práticas de gestão, projetos e liderança.",
  /** Domínio de produção — usado em metadataBase, robots, sitemap e JSON-LD. */
  url: "https://pmidf.org",
  locale: "pt-BR",
  contact: {
    email: "contato@pmidf.org",
    /** Canal do encarregado de dados (LGPD) — ver `/aviso-de-privacidade`. */
    emailDpo: "dpo@pmidf.org",
    telefone,
    address:
      "Impact Hub Brasília - SGAN 601 Edifício Íon. Lote H - Asa Norte, Brasília - DF, 70830-019",
  },
} as const;
