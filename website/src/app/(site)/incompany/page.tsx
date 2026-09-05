import type { Metadata } from "next";

import {
  Catalogo,
  // Clientes,
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
      {/* "Quem já treinou com a gente" fica fora do ar enquanto não houver
          logos de clientes para exibir — a seção renderizava 4 placeholders
          tracejados. O componente segue em `components/incompany/Clientes.tsx`;
          para reativar, descomente aqui e no import acima.

          Ao voltar, `CtaFormulario` precisa retomar o fundo creme (#F8F5F0):
          hoje ele é branco justamente porque passou a seguir Formatos, que já
          é creme. */}
      {/* <Clientes /> */}
      <CtaFormulario />
    </div>
  );
}