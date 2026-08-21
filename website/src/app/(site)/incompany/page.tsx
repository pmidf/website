import type { Metadata } from "next";

import {
  Catalogo,
  Clientes,
  ComoFunciona,
  CtaFormulario,
  Formatos,
  Ganhos,
  Hero,
  OQueOferecemos,
} from "@/components/incompany";

export const metadata: Metadata = {
  title: "InCompany",
  description:
    "Treinamentos corporativos PMI-DF para empresas que querem desenvolver equipes em gerenciamento de projetos.",
  alternates: { canonical: "/incompany" },
};

export default function InCompanyPage() {
  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <Hero />
      <OQueOferecemos />
      <Ganhos />
      <ComoFunciona />
      <Catalogo />
      <Formatos />
      <Clientes />
      <CtaFormulario />
    </div>
  );
}