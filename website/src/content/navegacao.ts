import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";

import { site } from "@/content/site";
import type { NavLink, RedeSocial } from "@/types";

/**
 * Dados do "chrome" do site (Header e Rodapé).
 *
 * Alterar o menu ou as redes = alterar este arquivo. Fica separado de
 * `content/home.ts` porque esse conteúdo aparece em todas as páginas, não só
 * na home.
 */

/** Menu principal — desktop e mobile leem a mesma lista. */
export const NAV_LINKS: NavLink[] = [
  { label: "Sobre", href: "/quem-somos" },
  { label: "Eventos e Programas", href: "/eventos" },
  { label: "Certificação", href: "/certificacoes" },
  { label: "InCompany", href: "/incompany" },
  // Blog ainda não desenvolvido — descomentar junto com a rota `(site)/blog/`.
  // { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

/**
 * Redes sociais do rodapé.
 *
 * Ícones do conjunto Font Awesome 6 Brands via `react-icons` — as marcas
 * oficiais, mantidas por terceiros, em vez de SVGs soltos em `public/`. O Next
 * já otimiza `react-icons/*` por padrão, então só os cinco glifos usados vão
 * para o bundle.
 *
 * TODO: confirmar os perfis do capítulo. O WhatsApp deriva do telefone em
 * `content/site.ts` — não escreva o número aqui.
 */
export const REDES: RedeSocial[] = [
  { nome: "LinkedIn", href: "https://www.linkedin.com/company/pmi-df/", Icone: FaLinkedinIn },
  { nome: "Facebook", href: "https://www.facebook.com/pmidistritofederal", Icone: FaFacebookF },
  { nome: "Instagram", href: "https://www.instagram.com/pmidf/", Icone: FaInstagram },
  { nome: "YouTube", href: "https://www.youtube.com/@PMIDF-BR", Icone: FaYoutube },
  { nome: "WhatsApp", href: site.contact.telefone.whatsapp, Icone: FaWhatsapp },
];
