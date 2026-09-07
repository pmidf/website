import { site } from "@/content/site";

/**
 * Conteúdo da página 404.
 *
 * Os destinos não são enfeite: quem cai aqui veio de um link quebrado, de um
 * endereço digitado errado ou de uma página que mudou de lugar — e em todos os
 * casos continua querendo alguma coisa. Uma 404 que só diz "não encontrado" e
 * oferece "voltar para a home" empurra o trabalho de procurar de volta para
 * quem já se perdeu.
 *
 * A lista cobre as portas de entrada mais procuradas do site, na ordem em que
 * costumam ser úteis: o que está acontecendo, como entrar, o que o capítulo é
 * e como falar com ele.
 */
export const NAO_ENCONTRADA = {
  codigo: "Erro 404",
  titulo: "Esta página não existe",
  descricao:
    "O endereço acessado não existe, mudou de lugar ou foi digitado com algum erro. Abaixo estão os caminhos mais procurados do site.",
  destinos: [
    {
      titulo: "Eventos e programas",
      descricao: "A agenda do capítulo, com inscrições pelo Sympla.",
      href: "/eventos",
    },
    {
      titulo: "Filiação",
      descricao: "Como se filiar ao PMI e escolher o PMI-DF como capítulo.",
      href: "/filiacao",
    },
    {
      titulo: "Certificações",
      descricao: "Qual credencial faz sentido e onde estudar com desconto.",
      href: "/certificacoes",
    },
    {
      titulo: "Quem somos",
      descricao: "A história, a governança e as pessoas por trás do capítulo.",
      href: "/quem-somos",
    },
    {
      titulo: "Voluntariado",
      descricao: "As vagas abertas e como entrar para o time.",
      href: "/voluntariado",
    },
    {
      titulo: "Contato",
      descricao: `Fale com a gente ou escreva para ${site.contact.email}.`,
      href: "/contato",
    },
  ],
  avisoTitulo: "Achou um link quebrado?",
  avisoDescricao:
    "Se você chegou aqui por um link do próprio site, avise a gente — vamos corrigir.",
  avisoCtaLabel: "Reportar o problema",
  avisoCtaHref: "/contato?assunto=geral",
};
