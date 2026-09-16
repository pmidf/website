import { FaFileLines } from "react-icons/fa6";

import { Container } from "@/components/ui/Container";
import { CabecalhoSecao } from "@/components/eleicoes/CabecalhoSecao";
import { DOCUMENTOS, DOCUMENTOS_TEXTO } from "@/content/eleicoes";

/**
 * Documentos oficiais.
 *
 * Sem `href`, o card vira um `<div>` em vez de um link morto: um `<a href="#">`
 * continuaria recebendo foco e seria anunciado como link, prometendo um
 * destino que não existe.
 */
export function Documentos() {
  return (
    <section id="documentos" className="bg-white py-16 lg:py-20">
      <Container>
        <CabecalhoSecao
          eyebrow={DOCUMENTOS_TEXTO.eyebrow}
          titulo={DOCUMENTOS_TEXTO.titulo}
          descricao={DOCUMENTOS_TEXTO.descricao}
        />

        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DOCUMENTOS.map((documento) => {
            const disponivel = Boolean(documento.href);

            const conteudo = (
              <>
                <span
                  aria-hidden
                  className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#F8F5F0] text-[#4F17A8]"
                >
                  <FaFileLines className="h-5 w-5" />
                </span>

                <h3 className="mt-5 text-[19px] font-bold leading-tight text-[#200F3B]">
                  {documento.titulo}
                </h3>

                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#5C546E]">
                  {documento.descricao}
                </p>

                <span
                  className={`mt-5 text-[15px] font-semibold ${
                    disponivel ? "text-[#4F17A8]" : "text-[#5C546E]"
                  }`}
                >
                  {documento.acao}
                  {disponivel && " →"}
                </span>
              </>
            );

            const caixa =
              "flex h-full flex-col rounded-[16px] border border-[#200F3B]/10 bg-white p-7 shadow-[0_2px_10px_rgba(32,15,59,0.06)]";

            return (
              <li key={documento.titulo}>
                {disponivel ? (
                  <a
                    href={documento.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${caixa} transition hover:border-[#1AC7FF] hover:shadow-[0_10px_26px_rgba(32,15,59,0.12)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F17A8]`}
                  >
                    {conteudo}
                  </a>
                ) : (
                  <div className={`${caixa} opacity-60`}>{conteudo}</div>
                )}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
