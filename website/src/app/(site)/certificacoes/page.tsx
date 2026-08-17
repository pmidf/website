import type { Metadata } from "next";

import {
  Hero,
  TabsNav,
  CertificacoesPrincipais,
  Comparativo,
  FiliadosDesconto,
  ParceirosATP,
  PDUs,
  Faq,
  CtaFinal,
} from "@/components/certificacoes";

export const metadata: Metadata = {
  title: "Certificações PMI",
  description:
    "Entenda qual certificação PMI faz sentido para sua carreira e veja parceiros ATP, PDUs e dúvidas frequentes.",
  alternates: { canonical: "/certificacoes" },
};

export default function CertificacoesPage() {
  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <Hero />
      <TabsNav />
      <CertificacoesPrincipais />
      <Comparativo />
      <FiliadosDesconto />
      <ParceirosATP />
      <PDUs />
      <Faq />
      <CtaFinal />
    </div>
  );
}