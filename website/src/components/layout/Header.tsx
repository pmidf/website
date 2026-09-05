"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

import { Container } from "@/components/ui/Container";
import { assets } from "@/content/assets";

type MenuLink = {
  label: string;
  href: string;
};

type MenuItem = {
  label: string;
  href?: string;
  children?: MenuLink[];
};

const MENU_ITEMS: MenuItem[] = [
  {
    label: "Sobre",
    children: [
      { label: "Quem somos", href: "/quem-somos" },
      { label: "Filiação", href: "/filiacao" },
      { label: "Voluntariado", href: "/voluntariado" },
      { label: "Student Club", href: "/student-club" },
      { label: "Transparência", href: "/transparencia" },
    ],
  },
  {
    label: "Eventos e Programas",
    children: [
      { label: "Eventos", href: "/eventos" },
      // Maximize sai do menu até o lançamento do programa. A página continua
      // em `(site)/maximize/` (com noindex) para revisão interna — basta
      // descomentar esta linha quando for ao ar.
      // { label: "Maximize", href: "/maximize" },
      { label: "Mentoring", href: "/mentoring" },
    ],
  },
  {
    label: "Certificação",
    href: "/certificacoes",
  },
  {
    label: "InCompany",
    href: "/incompany",
  },
  // O blog ainda não foi desenvolvido — sem página em `(site)/blog/`, o item
  // levava direto ao 404. Descomentar junto com a criação da rota.
  // {
  //   label: "Blog",
  //   href: "/blog",
  // },
  {
    label: "Contato",
    href: "/contato",
  },
];

/**
 * Seta que marca um item com submenu.
 *
 * É um glifo do Font Awesome 6 via `react-icons` — o mesmo conjunto das redes
 * sociais do rodapé —, e não o caractere "▾" que estava aqui antes. O caractere
 * dependia da fonte do sistema para existir e para ter peso: no fallback ele
 * saía fino e desalinhado da linha de base, o que o fazia parecer menor do que
 * os 12px declarados.
 *
 * O tamanho vem por `className` porque o menu desktop e o mobile têm escalas
 * de texto diferentes (16/18px contra 17px numa linha de toque).
 *
 * A cor é sempre `currentColor`: o botão inteiro (rótulo + seta) muda de cor
 * junto no hover e quando o submenu abre, em vez de a seta ter vida própria.
 */
function Seta({ aberta, className }: { aberta: boolean; className: string }) {
  return (
    <FaChevronDown
      aria-hidden
      className={`${className} transition-transform duration-200 ${
        aberta ? "rotate-180" : ""
      }`}
    />
  );
}

export function Header() {
  const [aberto, setAberto] = useState(false);
  const [submenuDesktop, setSubmenuDesktop] = useState<string | null>(null);
  const [submenuMobile, setSubmenuMobile] = useState<string | null>(null);

  function alternarSubmenuDesktop(label: string) {
    setSubmenuDesktop((atual) => (atual === label ? null : label));
  }

  function alternarSubmenuMobile(label: string) {
    setSubmenuMobile((atual) => (atual === label ? null : label));
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F8F8F8]/95 backdrop-blur">
      <Container className="flex h-[72px] items-center justify-between lg:h-[95px]">
        <Link href="/" aria-label="PMI Distrito Federal — página inicial">
          <Image
            src={assets.marca.logo}
            alt="PMI Distrito Federal"
            width={193}
            height={75}
            loading="eager"
            className="h-[42px] w-auto lg:h-[80px]"
          />
        </Link>

        {/* Navegação desktop */}
        <nav className="hidden items-center gap-1 lg:flex">
          {MENU_ITEMS.map((item) => {
            const temSubmenu = Boolean(item.children?.length);
            const estaAberto = submenuDesktop === item.label;

            if (!temSubmenu && item.href) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-[16px] text-[#200F3B] transition hover:text-[#FF610F] xl:text-[18px]"
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div
                key={item.label}
                className="relative"
              >
                <button
                  type="button"
                  onClick={() => alternarSubmenuDesktop(item.label)}
                  aria-expanded={estaAberto}
                  aria-haspopup="menu"
                  /* A cor sai de um ternário, e não de duas classes `text-*`
                     empilhadas: utilitários da mesma propriedade são resolvidos
                     pela ordem da folha de estilo gerada, não pela ordem em que
                     foram escritos. */
                  className={`flex items-center gap-1.5 px-3 py-2 text-[16px] transition hover:text-[#FF610F] xl:text-[18px] ${
                    estaAberto ? "text-[#FF610F]" : "text-[#200F3B]"
                  }`}
                >
                  {item.label}
                  <Seta aberta={estaAberto} className="h-[13px] w-[13px]" />
                </button>

                {estaAberto && (
                  <div
                    role="menu"
                    className="absolute left-0 top-full mt-2 w-[240px] rounded-[16px] border border-[#200F3B]/10 bg-white p-2 shadow-[0_12px_30px_rgba(32,15,59,0.14)]"
                  >
                    {/* Bico apontando para o botão: é o que liga o cartão ao
                        item que o abriu. Sem ele, o painel flutua solto sobre a
                        página e não se lê como parte daquele item do menu.
                        Um quadrado girado 45°, com as bordas de cima e da
                        esquerda visíveis, forma o triângulo com o mesmo traço
                        do cartão. */}
                    <span
                      aria-hidden
                      className="absolute -top-[6px] left-6 h-[11px] w-[11px] rotate-45 rounded-tl-[2px] border-l border-t border-[#200F3B]/10 bg-white"
                    />

                    {item.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        role="menuitem"
                        onClick={() => setSubmenuDesktop(null)}
                        className="block rounded-[10px] px-4 py-3 text-[15px] font-medium text-[#200F3B] transition hover:bg-[#F6F1FA] hover:text-[#FF610F]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Botão do menu mobile/tablet */}
        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          aria-expanded={aberto}
          aria-controls="menu-mobile"
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-md lg:hidden"
        >
          <span
            className={`h-[2px] w-6 bg-[#200F3B] transition ${
              aberto ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-[#200F3B] transition ${
              aberto ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-[#200F3B] transition ${
              aberto ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </Container>

      {/* Navegação mobile/tablet */}
      <nav
        id="menu-mobile"
        hidden={!aberto}
        className="border-t border-[#200F3B]/10 bg-[#F8F8F8] lg:hidden"
      >
        <Container className="flex flex-col py-2">
          {MENU_ITEMS.map((item) => {
            const temSubmenu = Boolean(item.children?.length);
            const estaAberto = submenuMobile === item.label;

            if (!temSubmenu && item.href) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setAberto(false)}
                  className="border-b border-[#200F3B]/5 py-3 text-[17px] text-[#200F3B] last:border-0"
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div key={item.label} className="border-b border-[#200F3B]/5">
                <button
                  type="button"
                  onClick={() => alternarSubmenuMobile(item.label)}
                  aria-expanded={estaAberto}
                  className={`flex w-full items-center justify-between py-3 text-left text-[17px] transition ${
                    estaAberto ? "text-[#FF610F]" : "text-[#200F3B]"
                  }`}
                >
                  {item.label}
                  {/* No mobile a seta ganha um disco: numa lista em que quase
                      todo item é um link direto, o disco é o que diferencia à
                      distância os dois itens que abrem submenu — e dá alvo de
                      toque ao redor de um glifo de 13px. */}
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full transition ${
                      estaAberto ? "bg-[#FF610F]/10" : "bg-[#200F3B]/[0.06]"
                    }`}
                  >
                    <Seta aberta={estaAberto} className="h-[13px] w-[13px]" />
                  </span>
                </button>

                {estaAberto && (
                  <div className="flex flex-col pb-2 pl-4">
                    {item.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => {
                          setAberto(false);
                          setSubmenuMobile(null);
                        }}
                        className="rounded-[8px] px-3 py-2 text-[15px] text-[#5C546E] transition hover:bg-white hover:text-[#FF610F]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </Container>
      </nav>
    </header>
  );
}