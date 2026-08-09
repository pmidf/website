import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";

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
  { label: "Certificação", href: "/certificacao" },
  { label: "InCompany", href: "/incompany" },
  { label: "Blog", href: "/blog" },
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
 * TODO: trocar pelos perfis reais do capítulo.
 */
export const REDES: RedeSocial[] = [
  { nome: "LinkedIn", href: "https://linkedin.com", Icone: FaLinkedinIn },
  { nome: "Facebook", href: "https://facebook.com", Icone: FaFacebookF },
  { nome: "Instagram", href: "https://instagram.com", Icone: FaInstagram },
  { nome: "YouTube", href: "https://youtube.com", Icone: FaYoutube },
  { nome: "WhatsApp", href: "https://wa.me/", Icone: FaWhatsapp },
];
