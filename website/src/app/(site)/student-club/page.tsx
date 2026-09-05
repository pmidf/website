import type { Metadata } from "next";

import {
  Beneficios,
  ComoParticipar,
  CtaFinal,
  Depoimentos,
  Faq,
  Hero,
  MissaoValores,
  OQueE,
  QuemPodeParticipar,
} from "@/components/student-club";

export const metadata: Metadata = {
  title: "PMI-DF Student Club",
  description:
    "Comunidade estudantil do PMI-DF para estudantes que querem aprender, praticar e se conectar com o mercado de gerenciamento de projetos.",
  alternates: { canonical: "/student-club" },
};

export default function StudentClubPage() {
  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <Hero />
      <OQueE />
      <MissaoValores />
      <Beneficios />
      <ComoParticipar />
      <Depoimentos />
      <QuemPodeParticipar />
      <Faq />
      <CtaFinal />
    </div>
  );
}