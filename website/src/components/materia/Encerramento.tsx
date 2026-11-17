import Link from "next/link";
import { FaArrowLeft, FaFilePdf } from "react-icons/fa6";

import { Compartilhar } from "@/components/materia/Compartilhar";
import { Botao } from "@/components/ui/Botao";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";
import type { NoticiaInterna } from "@/types";

/**
 * Fim da matéria: o "Sobre" e o contato para a imprensa do release, depois
 * as ações (compartilhar, baixar o PDF, voltar para a lista).
 *
 * O contato vem de `content/site.ts`, e não do texto da matéria: é o mesmo
 * e-mail e telefone do release, e assim uma troca de número não deixa uma
 * matéria antiga apontando para o canal velho.
 */
export function Encerramento({ noticia, url }: { noticia: NoticiaInterna; url: string }) {
  const { sobre, anexo } = noticia.materia;
  const { email, telefone } = site.contact;
  const link = "font-semibold text-[#4F17A8] underline decoration-[#4F17A8]/30 underline-offset-4 transition hover:text-[#FF610F] hover:decoration-[#FF610F]";

  return (
    <footer className="bg-white pb-20 pt-14 lg:pb-28">
      <Container gutter="amplo">
        <div className="mx-auto max-w-[720px]">
          <section
            aria-labelledby="sobre-o-pmi-df"
            className="rounded-[16px] border-l-4 border-[#4F17A8] bg-[#F8F5F0] p-6 lg:p-8"
          >
            <h2
              id="sobre-o-pmi-df"
              className="font-[family-name:var(--font-titulo)] text-[20px] font-extrabold text-[#200F3B]"
            >
              {sobre.titulo}
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-[#200F3B]/85">
              {sobre.texto}
              {sobre.link && (
                <>
                  {" "}
                  Mais informações:{" "}
                  <a href={sobre.link.href} target="_blank" rel="noopener noreferrer" className={link}>
                    {sobre.link.rotulo}
                  </a>
                </>
              )}
            </p>
          </section>

          <section
            aria-labelledby="contato-imprensa"
            // Borda transparente da mesma espessura da do "Sobre": sem ela, o
            // texto desta caixa começaria 4px antes do da caixa de cima.
            className="mt-4 rounded-[16px] border-l-4 border-transparent bg-[#F8F5F0] p-6 lg:p-8"
          >
            <h2
              id="contato-imprensa"
              className="font-[family-name:var(--font-titulo)] text-[20px] font-extrabold text-[#200F3B]"
            >
              Contato para a imprensa
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-[#200F3B]/85">
              {site.name}:{" "}
              <a href={`mailto:${email}`} className={link}>
                {email}
              </a>{" "}
              <span aria-hidden>|</span>{" "}
              <a href={telefone.link} className={`${link} whitespace-nowrap`}>
                {telefone.exibicao}
              </a>
            </p>
          </section>

          <div className="mt-12 flex flex-col gap-6 border-t border-[#200F3B]/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <Compartilhar url={url} titulo={noticia.titulo} />

            {anexo && (
              <Botao href={anexo.href} external variante="contorno-escuro" className="self-start sm:self-auto">
                <span className="inline-flex items-center gap-2">
                  <FaFilePdf aria-hidden className="h-4 w-4" />
                  {anexo.rotulo}
                  <span className="text-[#1F0942]/60">({anexo.tamanho})</span>
                </span>
              </Botao>
            )}
          </div>

          <Link
            href="/noticias"
            className="group mt-10 inline-flex items-center gap-2 text-[15px] font-semibold text-[#4F17A8] transition hover:text-[#FF610F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F17A8]"
          >
            <FaArrowLeft
              aria-hidden
              className="h-3 w-3 transition motion-safe:group-hover:-translate-x-1"
            />
            Todas as notícias
          </Link>
        </div>
      </Container>
    </footer>
  );
}
