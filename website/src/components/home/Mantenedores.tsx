import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { TituloSecao } from "@/components/ui/TituloSecao";
import { MANTENEDORES } from "@/content/home";

/** Vitrine de logos dos parceiros que sustentam o capítulo. */
export function Mantenedores() {
  return (
    <section className="bg-[#F8F5F0] py-14 lg:py-16">
      <Container className="text-center">
        <TituloSecao>Mantenedores</TituloSecao>
        <p className="mx-auto mt-4 max-w-[858px] text-[18px] leading-relaxed text-[#200F3B] lg:text-[24px]">
          Empresas, instituições e parceiros estratégicos que nos apoiam por meio de patrocínio,
          colaboração institucional e incentivo às nossas iniciativas.
        </p>

        <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-16 gap-y-10 lg:gap-x-[140px]">
          {MANTENEDORES.map((m) => (
            <li key={m.nome}>
              <Image
                src={m.src}
                alt={m.nome}
                width={m.w}
                height={m.h}
                className="h-[70px] w-auto object-contain lg:h-[90px]"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
