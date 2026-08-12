import type { Metadata } from "next";

import {
  Beneficios,
  ComoComecar,
  Hero,
  OQueE,
  PraQuemE,
  StudentClub,
} from "@/components/voluntariado";

export const metadata: Metadata = {
  title: "Voluntariado",
  description:
    "Construa o PMI-DF com a gente. Mais de 190 voluntários ativos em comitês, diretorias e programas — networking, liderança e PDUs para sua certificação.",
  alternates: { canonical: "/voluntariado" },
};

/**
 * Página Voluntariado.
 *
 * Conteúdo em `src/content/voluntariado.ts`, markup em
 * `src/components/voluntariado/`. Header e Rodapé vêm do layout do route group
 * `(site)`.
 *
 * Sem estado em nenhuma seção: a página inteira é Server Component e não
 * embarca JavaScript próprio.
 */
export default function VoluntariadoPage() {
  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <Hero />
      <OQueE />
      <PraQuemE />
      <Beneficios />
      <ComoComecar />
      <StudentClub />
    </div>
  );
}
