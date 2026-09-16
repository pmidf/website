import { CabecalhoSecao } from "@/components/eleicoes/CabecalhoSecao";
import { Container } from "@/components/ui/Container";
import { CRONOGRAMA, CRONOGRAMA_TEXTO } from "@/content/eleicoes";

/**
 * Linha do tempo vertical, dimensionada para caber numa tela.
 *
 * ## O que consumia a altura
 *
 * Na versão anterior cada marco ocupava duas linhas — data numa, descrição na
 * de baixo — e o cabeçalho ficava empilhado acima da lista. Nove marcos assim
 * passavam de mil pixels, e a metade final do calendário só existia depois de
 * rolar.
 *
 * Duas mudanças resolvem sem tirar informação nenhuma:
 *
 * 1. **Data e descrição na mesma linha.** Em duas colunas fixas — a data à
 *    esquerda, sempre no mesmo eixo, e a descrição à direita — cada marco cai
 *    de ~90px para ~46px. O alinhamento da coluna de datas é o que torna o
 *    formato legível: o olho desce por uma régua, não por um texto corrido.
 * 2. **Cabeçalho ao lado, não acima.** Ele deixa de somar altura e passa a
 *    ocupar a folga que a lista deixava à direita — o mesmo arranjo das
 *    seções "Uma decisão…" e "Ficha de candidatura".
 *
 * Somadas, a seção cai para cerca de metade da altura e as nove datas ficam
 * visíveis ao mesmo tempo, que é o ponto: cronologia se entende vendo o
 * conjunto, não descobrindo um marco de cada vez.
 *
 * ## A régua
 *
 * O fio é a borda esquerda de cada item e o ponto é um `span` sobre ela. O
 * último zera a borda para o fio não continuar depois da posse — a linha marca
 * o intervalo entre as datas, não uma continuação.
 */
export function Cronograma() {
  return (
    <section id="cronograma" className="bg-[#F8F5F0] py-16 lg:py-20">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-14">
          <CabecalhoSecao
            eyebrow={CRONOGRAMA_TEXTO.eyebrow}
            titulo={CRONOGRAMA_TEXTO.titulo}
            descricao={CRONOGRAMA_TEXTO.descricao}
          />

          <ol className="lg:pt-2">
            {CRONOGRAMA.map((item, indice) => {
              const ultimo = indice === CRONOGRAMA.length - 1;

              return (
                <li
                  key={item.data + item.descricao}
                  className={`relative border-l-2 pl-7 ${
                    ultimo ? "border-transparent pb-0" : "border-[#200F3B]/12 pb-5"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`absolute -left-[7px] top-[7px] rounded-full border-[3px] ${
                      item.marco
                        ? "h-3.5 w-3.5 border-[#FF610F] bg-[#FF610F]"
                        : "h-3 w-3 border-[#1AC7FF] bg-white"
                    }`}
                  />

                  {/* Duas colunas: a data sempre no mesmo eixo, a descrição
                      começando no mesmo ponto em todas as linhas. É esse
                      alinhamento que deixa a lista varrível de cima a baixo.
                      Abaixo de `sm` volta a empilhar, onde não há largura para
                      duas colunas.
                   *
                   * A primeira coluna é `auto`, e não uma largura fixa: ela se
                   * dimensiona pela célula mais larga, que é uma das três com
                   * etiqueta. Com largura fixa, "22 de outubro de 2026" mais a
                   * etiqueta "Votação encerra" estouravam os 230px e a
                   * etiqueta caía para a linha de baixo — três marcos ficavam
                   * com o dobro da altura dos outros seis, e o espaçamento da
                   * lista perdia o ritmo.
                   *
                   * `whitespace-nowrap` nas duas partes é o que garante isso:
                   * sem ele, o `auto` ainda quebraria a etiqueta para caber no
                   * espaço disponível. */}
                  <div className="grid gap-x-6 gap-y-1 sm:grid-cols-[auto_1fr]">
                    <p className="flex items-center gap-x-2">
                      <span className="whitespace-nowrap text-[15px] font-bold leading-snug text-[#200F3B]">
                        {item.data}
                      </span>
                      {item.marco && (
                        <span className="whitespace-nowrap rounded-[5px] bg-[#FF610F]/12 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.04em] text-[#992905]">
                          {item.marco}
                        </span>
                      )}
                    </p>

                    <p className="min-w-0 text-[15px] leading-snug text-[#5C546E]">
                      {item.descricao}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
