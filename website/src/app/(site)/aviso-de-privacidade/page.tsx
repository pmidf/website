import type { Metadata } from "next";

import { Conteudo, ExercerDireitos, Hero } from "@/components/aviso-privacidade";

export const metadata: Metadata = {
  title: "Aviso de Privacidade",
  description:
    "Como o PMI Distrito Federal coleta, usa, compartilha e protege dados pessoais, e como exercer seus direitos previstos na LGPD.",
  alternates: { canonical: "/aviso-de-privacidade" },
};

/**
 * Aviso de Privacidade — destino do link do rodapé, que antes apontava para
 * `/politica-de-privacidade` e caía no 404.
 *
 * A rota tem o mesmo caminho do aviso publicado pelo capítulo em
 * pmidf.org/aviso-de-privacidade, para que links já divulgados continuem
 * válidos. Texto em `src/content/aviso-privacidade.ts`.
 */
export default function AvisoDePrivacidadePage() {
  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <Hero />
      <Conteudo />
      <ExercerDireitos />
    </div>
  );
}
