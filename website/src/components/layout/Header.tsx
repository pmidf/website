"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
      { label: "Transparência", href: "/transparencia" },
    ],
  },
  {
    label: "Eventos e Programas",
    children: [
      { label: "Eventos", href: "/eventos" },
      { label: "Maximize", href: "/maximize" },
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
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contato",
    href: "/contato",
  },
];

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
                  className="flex items-center gap-2 px-3 py-2 text-[16px] text-[#200F3B] transition hover:text-[#FF610F] xl:text-[18px]"
                >
                  {item.label}
                  <span
                    className={`text-[12px] transition-transform ${
                      estaAberto ? "rotate-180" : ""
                    }`}
                  >
                    ▾
                  </span>
                </button>

                {estaAberto && (
                  <div
                    role="menu"
                    className="absolute left-0 top-full mt-3 w-[240px] rounded-[16px] border border-[#200F3B]/10 bg-white p-2 shadow-[0_12px_30px_rgba(32,15,59,0.14)]"
                  >
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
                  className="flex w-full items-center justify-between py-3 text-left text-[17px] text-[#200F3B]"
                >
                  {item.label}
                  <span
                    className={`text-[13px] transition-transform ${
                      estaAberto ? "rotate-180" : ""
                    }`}
                  >
                    ▾
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