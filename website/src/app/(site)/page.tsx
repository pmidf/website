import type { Metadata } from "next";

import {
  Destaques,
  Eventos,
  Hero,
  InCompany,
  Iniciativas,
  Mantenedores,
} from "@/components/home";
import { site } from "@/content/site";

/**
 * A porta de entrada do site: `(site)/page.tsx` responde por `/`, a raiz do
 * domínio.
 *
 * `title` passa pelo template `%s | PMI-DF` do layout raiz, virando
 * "Home | PMI-DF" na aba e no resultado de busca. Se preferir o padrão de
 * mercado para home (só o nome da organização), troque por `site.name` —
 * `absolute: site.name` ignora o template por completo.
 */
/**
 * A seção "Eventos" lê a agenda do Sympla, então a home também é ISR — mesma
 * janela da página /eventos.
 */
export const revalidate = 900;

export const metadata: Metadata = {
  title: "Home",
  description: site.description,
  alternates: { canonical: "/" },
};

/**
 * co
 *
 * Só orquestra a ordem das seções — todo conteúdo vem de `src/content/` e todo
 * markup vive em `src/components/home/`. Header e Rodapé são responsabilidade
 * do layout do route group `(site)`.
 */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <Hero />
      <Destaques />
      <Iniciativas />
      <Eventos />
      <InCompany />
      <Mantenedores />
    </div>
  );
}
