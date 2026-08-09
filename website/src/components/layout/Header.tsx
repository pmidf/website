"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Container } from "@/components/ui/Container";
import { assets } from "@/content/assets";
import { NAV_LINKS } from "@/content/navegacao";

/**
 * Cabeçalho fixo do site.
 *
 * Client Component pelo estado do menu mobile — é o único ponto interativo do
 * chrome, então o resto da página permanece Server Component.
 */
export function Header() {
  const [aberto, setAberto] = useState(false);

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
            className="h-[42px] w-auto lg:h-[53px]"
          />
        </Link>

        {/* Navegação desktop */}
        <nav className="hidden items-center lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-2 py-2 text-[16px] text-[#200F3B] transition hover:text-[#FF610F] xl:text-[18px]"
            >
              {link.label}
            </Link>
          ))}
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
            className={`h-[2px] w-6 bg-[#200F3B] transition ${aberto ? "opacity-0" : ""}`}
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
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setAberto(false)}
              className="border-b border-[#200F3B]/5 py-3 text-[17px] text-[#200F3B] last:border-0"
            >
              {link.label}
            </Link>
          ))}
        </Container>
      </nav>
    </header>
  );
}
