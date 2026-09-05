import type { Metadata } from "next";

import { CtaFinal, Galeria, Hero } from "@/components/voluntarios";

export const metadata: Metadata = {
  title: "Nossos voluntários",
  description:
    "Conheça os voluntários que conduzem as diretorias, conselhos e comitês do PMI Distrito Federal.",
  alternates: { canonical: "/quem-somos/voluntarios" },
};

/**
 * Galeria de voluntários — destino do botão "voluntários" da seção Organograma
 * em Quem Somos.
 *
 * Fica sob `/quem-somos/` porque é isso que ela é: um desdobramento da página
 * institucional. A URL espelha a trilha de navegação — ver `content/rotas.ts`.
 *
 * Não confundir com `/voluntariado`, que explica o programa e leva às vagas:
 * aqui são as pessoas; lá, o convite.
 */
export default function VoluntariosPage() {
  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <Hero />
      <Galeria />
      <CtaFinal />
    </div>
  );
}
