import type { Metadata } from "next";

import {
  CtasTransparencia,
  Documentos,
  Governanca,
  Hero,
} from "@/components/transparencia";

export const metadata: Metadata = {
  title: "Transparência",
  description:
    "Documentos institucionais, fiscais e regulatórios do PMI-DF disponíveis para consulta pública.",
  alternates: { canonical: "/transparencia" },
};

export default function TransparenciaPage() {
  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <Hero />
      <Governanca />
      <Documentos />
      <CtasTransparencia />
    </div>
  );
}