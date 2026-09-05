import { FaLinkedinIn } from "react-icons/fa6";

import { Avatar } from "@/components/ui/Avatar";
import { Container } from "@/components/ui/Container";
import { DEPOIMENTOS, DEPOIMENTOS_ESTUDANTES } from "@/content/student-club";

/**
 * Depoimentos dos estudantes.
 *
 * ## Por que colunas CSS e não grade
 *
 * Os textos têm tamanhos muito desiguais — de um parágrafo a dois longos. Numa
 * grade, todos os cards de uma linha esticariam até a altura do maior, e os
 * curtos ficariam com um vão de espaço em branco embaixo. Com `columns`, cada
 * card ocupa só a altura que precisa e a coluna segue preenchendo, sem quebrar
 * a ordem de leitura do DOM. `break-inside-avoid` impede que um card seja
 * partido no meio entre duas colunas.
 *
 * O texto vai em `<blockquote>` com `<cite>` no rodapé: é citação de uma
 * pessoa identificada, e a marcação diz isso a quem lê por leitor de tela.
 */
export function Depoimentos() {
  return (
    <section className="bg-[#F8F5F0] py-16 lg:py-24">
      <Container>
        <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#FF610F]">
          {DEPOIMENTOS.eyebrow}
        </p>

        <h2 className="mt-4 max-w-[760px] text-[30px] font-extrabold leading-tight text-[#200F3B] lg:text-[42px]">
          {DEPOIMENTOS.titulo}
        </h2>

        <p className="mt-4 max-w-[720px] text-[16px] leading-relaxed text-[#5C546E] lg:text-[18px]">
          {DEPOIMENTOS.descricao}
        </p>

        <div className="mt-12 gap-6 lg:columns-2 lg:gap-8">
          {DEPOIMENTOS_ESTUDANTES.map((estudante) => (
            <figure
              key={estudante.nome}
              className="mb-6 break-inside-avoid rounded-[24px] bg-white p-7 shadow-[0_2px_10px_rgba(32,15,59,0.08)] lg:mb-8 lg:p-8"
            >
              <blockquote className="flex flex-col gap-4">
                {estudante.paragrafos.map((paragrafo) => (
                  <p
                    key={paragrafo.slice(0, 40)}
                    className="text-[16px] leading-relaxed text-[#5C546E]"
                  >
                    {paragrafo}
                  </p>
                ))}
              </blockquote>

              <figcaption className="mt-7 flex items-center gap-4 border-t border-[#200F3B]/10 pt-6">
                <Avatar nome={estudante.nome} foto={estudante.foto} tamanho={64} />

                <cite className="min-w-0 not-italic text-[17px] font-bold text-[#200F3B]">
                  {estudante.nome}
                </cite>

                <a
                  href={estudante.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn de ${estudante.nome}`}
                  className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0A66C2] text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A66C2]"
                >
                  <FaLinkedinIn aria-hidden className="h-[17px] w-[17px]" />
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
