import { Header } from "@/components/layout/Header";
import { Rodape } from "@/components/layout/Rodape";
import { Trilha } from "@/components/layout/Trilha";

/**
 * Shell institucional: Header, trilha de navegação e Rodapé em volta de todas
 * as páginas do site. Está num route group para que futuras áreas sem chrome
 * (ex.: landing pages de campanha) possam viver fora dele sem tocar no layout
 * raiz.
 *
 * A trilha fica aqui, e não em cada página, porque é um requisito de
 * acessibilidade do site inteiro (WCAG 2.4.8): uma página nova nasce com ela
 * bastando ganhar uma linha em `content/rotas.ts`. Ela se esconde sozinha na
 * home e em rotas desconhecidas.
 */
export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Trilha />
        {children}
      </main>
      <Rodape />
    </>
  );
}
