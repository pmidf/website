import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TituloSecao } from "@/components/ui/TituloSecao";
import { PASSOS } from "@/content/eventos";

/**
 * Os três passos até a inscrição.
 *
 * É uma `<ol>`: a ordem é a informação. O número vem do índice da lista, então
 * inserir um passo no meio não exige renumerar o conteúdo à mão.
 */
export function ComoSeInscrever() {
  return (
    <section className="bg-[#023041] py-16 lg:py-[88px]">
      <Container gutter="amplo">
        <div className="flex flex-col items-center gap-[14px] text-center">
          {/* Ciano no lugar do laranja: no teal escuro o laranja perde contraste. */}
          <Eyebrow className="text-[#05BFE0]">Inscrições</Eyebrow>
          <TituloSecao className="font-[family-name:var(--font-titulo)] font-extrabold leading-[1.18] text-white">
            Como se inscrever
          </TituloSecao>
          <p className="max-w-[760px] text-[16px] leading-relaxed text-white/75 lg:text-[18px]">
            Todo o processo acontece no Sympla. São três passos, do clique à confirmação.
          </p>
        </div>

        <ol className="mt-12 grid gap-[27px] md:grid-cols-3">
          {PASSOS.map((passo, indice) => (
            <li
              key={passo.titulo}
              className="flex flex-col items-start gap-4 rounded-[16px] border border-white/15 bg-white/5 p-7"
            >
              {/* Ordinal decorativo: a numeração semântica já vem do <ol>. */}
              <span
                aria-hidden
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF610F] text-[16px] font-semibold text-white"
              >
                {String(indice + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[20px] font-semibold leading-[1.32] text-white">
                {passo.titulo}
              </h3>
              <p className="text-[15px] leading-[1.58] text-white/75">{passo.descricao}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
