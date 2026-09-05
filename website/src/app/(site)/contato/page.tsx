import type { Metadata } from "next";

import { Canais, Hero } from "@/components/contato";
import { ASSUNTOS, ASSUNTO_PADRAO } from "@/content/contato";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com o PMI Distrito Federal: filiação, certificação, eventos, treinamentos InCompany e parcerias.",
  alternates: { canonical: "/contato" },
};

/**
 * Página de Contato.
 *
 * Vários CTAs do site chegam aqui com `?assunto=<slug>` (certificação, PDU,
 * palestra, patrocínio, Student Club, cupom Jump). O slug é resolvido no
 * servidor e vira o valor inicial do select — validado contra `ASSUNTOS`, para
 * que um parâmetro inventado na URL não entre no formulário.
 */
export default async function ContatoPage(props: PageProps<"/contato">) {
  const { assunto } = await props.searchParams;
  const slug = Array.isArray(assunto) ? assunto[0] : assunto;

  const assuntoInicial = ASSUNTOS.some((opcao) => opcao.valor === slug)
    ? (slug as string)
    : ASSUNTO_PADRAO;

  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <Hero />
      <Canais assuntoInicial={assuntoInicial} />
    </div>
  );
}
