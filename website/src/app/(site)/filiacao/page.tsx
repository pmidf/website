import type { Metadata } from "next";

import {
  BeneficiosGlobal,
  BeneficiosLocais,
  CtaFinal,
  Hero,
  Investimento,
  PerguntasFrequentes,
  PorQueSeFiliar,
  PraQuemE,
} from "@/components/filiacao";

export const metadata: Metadata = {
  title: "Filiação",
  description:
    "Filie-se ao PMI e escolha o PMI-DF como capítulo. Benefícios globais e locais, descontos em certificações e a comunidade de gerenciamento de projetos do Distrito Federal.",
  alternates: { canonical: "/filiacao" },
};

/**
 * Página Filiação.
 *
 * Só orquestra a ordem das seções — conteúdo em `src/content/filiacao.ts`,
 * markup em `src/components/filiacao/`. Header e Rodapé vêm do layout do route
 * group `(site)`.
 *
 * Diferente de Eventos e Mentoring, esta página usa a tipografia global do
 * site (Aeonik/Aptos, via tokens do `globals.css`) — é o que o protótipo pede,
 * com `var(--font-display)` nos títulos.
 */
export default function FiliacaoPage() {
  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <Hero />
      <PorQueSeFiliar />
      <BeneficiosGlobal />
      <BeneficiosLocais />
      <PraQuemE />
      <Investimento />
      <PerguntasFrequentes />
      <CtaFinal />
    </div>
  );
}
