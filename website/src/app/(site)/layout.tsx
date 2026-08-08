import { Header } from "@/components/layout/Header";
import { Rodape } from "@/components/layout/Rodape";

/**
 * Shell institucional: Header + Rodapé em volta de todas as páginas do site.
 * Está num route group para que futuras áreas sem chrome (ex.: landing pages
 * de campanha) possam viver fora dele sem tocar no layout raiz.
 */
export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Rodape />
    </>
  );
}
