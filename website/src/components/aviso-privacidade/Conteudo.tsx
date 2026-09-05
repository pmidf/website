import { Container } from "@/components/ui/Container";
import {
  INTRODUCAO,
  POLITICA_COMPLETA,
  SECOES,
} from "@/content/aviso-privacidade";

/**
 * Corpo do aviso.
 *
 * Coluna única e estreita (72ch): é texto para ler de ponta a ponta, e linha
 * longa demais faz o olho perder a próxima. Cada seção é uma `<section>` com
 * `<h2>`, então o índice do leitor de tela reproduz a estrutura do documento —
 * é assim que se navega um texto jurídico sem rolar a página inteira.
 */
export function Conteudo() {
  return (
    <div className="bg-[#F8F5F0] py-16 lg:py-20">
      <Container>
        <div className="max-w-[72ch]">
          {INTRODUCAO.map((paragrafo) => (
            <p
              key={paragrafo}
              className="mt-4 text-[16px] leading-relaxed text-[#200F3B] first:mt-0 lg:text-[18px]"
            >
              {paragrafo}
            </p>
          ))}

          <a
            href={POLITICA_COMPLETA.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-[12px] border border-[#200F3B]/15 bg-white px-5 py-4 text-[15px] font-semibold text-[#4F17A8] underline-offset-2 transition hover:bg-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F17A8]"
          >
            {POLITICA_COMPLETA.label}
          </a>

          {SECOES.map((secao) => (
            <section key={secao.titulo} className="mt-12">
              <h2 className="text-[22px] font-extrabold leading-tight text-[#200F3B] lg:text-[26px]">
                {secao.titulo}
              </h2>
              <span
                aria-hidden
                className="mt-3 block h-[3px] w-14 rounded-full bg-[linear-gradient(90deg,#FF610F,#1AC7FF)]"
              />

              {secao.paragrafos?.map((paragrafo) => (
                <p
                  key={paragrafo}
                  className="mt-4 text-[16px] leading-relaxed text-[#5C546E] lg:text-[17px]"
                >
                  {paragrafo}
                </p>
              ))}

              {secao.itens && (
                <ul className="mt-4 flex flex-col gap-2">
                  {secao.itens.map((item) => (
                    <li
                      key={item}
                      className="relative pl-6 text-[16px] leading-relaxed text-[#5C546E] lg:text-[17px]"
                    >
                      <span
                        aria-hidden
                        className="absolute left-0 top-[0.6em] h-[7px] w-[7px] rounded-full bg-[#FF610F]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {secao.subsecoes?.map((subsecao) => (
                <div key={subsecao.titulo} className="mt-6">
                  <h3 className="text-[17px] font-bold text-[#200F3B] lg:text-[18px]">
                    {subsecao.titulo}
                  </h3>
                  <ul className="mt-3 flex flex-col gap-2">
                    {subsecao.itens.map((item) => (
                      <li
                        key={item}
                        className="relative pl-6 text-[16px] leading-relaxed text-[#5C546E] lg:text-[17px]"
                      >
                        <span
                          aria-hidden
                          className="absolute left-0 top-[0.6em] h-[7px] w-[7px] rounded-full bg-[#1AC7FF]"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          ))}
        </div>
      </Container>
    </div>
  );
}
