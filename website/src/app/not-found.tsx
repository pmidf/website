import type { Metadata } from "next";
import Link from "next/link";

import { Header } from "@/components/layout/Header";
import { Rodape } from "@/components/layout/Rodape";
import { Botao } from "@/components/ui/Botao";
import { Container } from "@/components/ui/Container";
import { NAO_ENCONTRADA } from "@/content/nao-encontrada";

/**
 * Página 404.
 *
 * ## Por que o Header e o Rodapé aparecem aqui
 *
 * Esta página vive na raiz de `app/`, e não no route group `(site)` — o Next
 * usa `app/not-found.tsx` para qualquer URL que não casa com rota nenhuma, e
 * renderiza só com o layout raiz. Como o layout raiz é apenas `<html>` e
 * `<body>`, a 404 saía sem menu, sem rodapé e sem trilha: quem chegava por um
 * link quebrado ficava numa página sem saída, com um botão só.
 *
 * Mover a página para dentro do `(site)` não resolveria — um `not-found` de
 * segmento só atende às chamadas de `notFound()` daquele segmento, não às URLs
 * que não existem. Então o chrome é montado aqui, à mão.
 *
 * O status HTTP 404 é responsabilidade do Next, que já o envia; o `noindex`
 * abaixo é redundante de propósito, para o caso de a página ser alcançada por
 * um caminho que devolva 200.
 */
export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Header />

      <main className="flex-1 bg-[#F8F5F0]">
        <section className="bg-[linear-gradient(90deg,#1F0942_13%,#FF610F_50%,#1AC7FF_89%)] py-14 text-center lg:py-20">
          <Container>
            <p className="text-[13px] font-semibold uppercase tracking-[1.6px] text-white/80">
              {NAO_ENCONTRADA.codigo}
            </p>

            <h1 className="mt-3 text-[30px] font-extrabold leading-tight text-[#F8F8F8] md:text-[36px] lg:text-[40px]">
              {NAO_ENCONTRADA.titulo}
            </h1>

            <p className="mx-auto mt-4 max-w-[767px] text-[18px] leading-relaxed text-[#F8F8F8] lg:text-[24px]">
              {NAO_ENCONTRADA.descricao}
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Botao href="/" variante="branco">
                Ir para a página inicial
              </Botao>
              <Botao href="/contato" variante="contorno-claro">
                Falar com o PMI-DF
              </Botao>
            </div>
          </Container>
        </section>

        <section className="py-16 lg:py-20">
          <Container>
            <h2 className="text-[24px] font-extrabold leading-tight text-[#200F3B] lg:text-[30px]">
              Para onde você quer ir
            </h2>

            <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {NAO_ENCONTRADA.destinos.map((destino) => (
                <li key={destino.href}>
                  {/* O card inteiro é o link, não só o título: numa lista de
                      atalhos, um alvo de clique do tamanho do cartão erra
                      menos — sobretudo no toque. */}
                  <Link
                    href={destino.href}
                    className="flex h-full flex-col rounded-[16px] border border-[#200F3B]/10 bg-white p-6 transition hover:border-[#FF610F]/40 hover:shadow-[0_8px_20px_rgba(32,15,59,0.1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F17A8]"
                  >
                    <span className="text-[18px] font-bold text-[#200F3B]">
                      {destino.titulo}
                    </span>
                    <span className="mt-2 text-[15px] leading-relaxed text-[#5C546E]">
                      {destino.descricao}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-12 flex flex-col gap-4 rounded-[18px] border-l-4 border-[#FF610F] bg-white px-6 py-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-[17px] font-bold text-[#200F3B]">
                  {NAO_ENCONTRADA.avisoTitulo}
                </p>
                <p className="mt-1 max-w-[640px] text-[15px] leading-relaxed text-[#5C546E]">
                  {NAO_ENCONTRADA.avisoDescricao}
                </p>
              </div>

              <Botao
                href={NAO_ENCONTRADA.avisoCtaHref}
                variante="escuro"
                className="shrink-0"
              >
                {NAO_ENCONTRADA.avisoCtaLabel}
              </Botao>
            </div>
          </Container>
        </section>
      </main>

      <Rodape />
    </>
  );
}
