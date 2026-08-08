import { assets } from "@/content/assets";
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
  { label: "Sobre", href: "/sobre" },
  { label: "Eventos e Programas", href: "/eventos" },
  { label: "Certificação", href: "/certificacao" },
  { label: "InCompany", href: "/incompany" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

/** Redes sociais do rodapé. */
export const REDES: RedeSocial[] = [
  { nome: "LinkedIn", src: assets.social.linkedin, href: "https://linkedin.com" },
  { nome: "Facebook", src: assets.social.facebook, href: "https://facebook.com" },
  { nome: "Instagram", src: assets.social.instagram, href: "https://instagram.com" },
  { nome: "YouTube", src: assets.social.youtube, href: "https://youtube.com" },
  { nome: "WhatsApp", src: assets.social.whatsapp, href: "https://wa.me/" },
];
