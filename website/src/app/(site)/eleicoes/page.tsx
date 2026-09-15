import type { Metadata } from "next";

import {
  Comite,
  ComoCandidatar,
  Contexto,
  Cronograma,
  Documentos,
  Ficha,
  Hero,
  Processo,
  Requisitos,
} from "@/components/eleicoes";
import { CICLO } from "@/content/eleicoes";

export const metadata: Metadata = {
  title: "Eleições",
  description:
    `Eleições da Diretoria Executiva do PMI-DF, ${CICLO}: processo, cronograma, requisitos de elegibilidade e como apresentar sua candidatura.`,
  alternates: { canonical: "/eleicoes" },
};

/**
 * Página de Eleições.
 *
 * A rota é `/eleicoes` de propósito: é a mesma do site antigo. Ela estava no
 * mapa de 301 apontando para `/quem-somos/` e saiu de lá quando esta página
 * passou a existir — o endereço tem histórico de indexação e links externos,
 * e mantê-lo evita queimar esse sinal num redirecionamento.
 *
 * Só orquestra a ordem das seções: conteúdo em `src/content/eleicoes.ts`,
 * markup em `src/components/eleicoes/`.
 *
 * A ordem responde às perguntas de quem chega: o que está em jogo → como
 * funciona → quando → posso me candidatar → o que enviar → onde estão as
 * regras → quem conduz → como faço.
 */
export default function EleicoesPage() {
  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <Hero />
      <Contexto />
      <Processo />
      <Cronograma />
      <Requisitos />
      <Ficha />
      <Documentos />
      <Comite />
      <ComoCandidatar />
    </div>
  );
}
