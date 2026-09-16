import { CabecalhoSecao } from "@/components/eleicoes/CabecalhoSecao";
import { Container } from "@/components/ui/Container";
import { FICHA } from "@/content/eleicoes";

/**
 * O que compõe o perfil que vai à plataforma de votação.
 *
 * ## Por que duas colunas
 *
 * Os três blocos da seção — cabeçalho, os dois componentes da ficha e o
 * exemplo — estavam empilhados a 820px dentro de um container de 1200px.
 * Nenhum deles ocupava a largura toda, então a seção inteira era uma coluna
 * estreita encostada à esquerda, com quase 400px de vazio à direita e nada
 * ali para justificar a folga.
 *
 * Agora o cabeçalho ocupa uma coluna fixa à esquerda e todo o conteúdo desce
 * pela direita. A assimetria passa a ser deliberada — um lado pergunta, o
 * outro responde — em vez de parecer texto que não alcançou a margem.
 *
 * ## Os componentes numerados
 *
 * O texto de apoio diz que a ficha "tem dois componentes"; numerá-los faz o
 * desenho confirmar a frase, em vez de deixar o leitor contar. É a mesma
 * numeração das etapas do processo, algumas seções acima.
 */
export function Ficha() {
  return (
    <section id="ficha" className="bg-[#F8F5F0] py-16 lg:py-20">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-14">
          <CabecalhoSecao
            eyebrow={FICHA.eyebrow}
            titulo={FICHA.titulo}
            descricao={FICHA.descricao}
          />

          <div className="lg:pt-9">
            {/* `<dl>`: cada componente é um par rótulo/descrição, e é assim
                que o leitor de tela anuncia. */}
            <dl className="flex flex-col gap-5">
              {FICHA.campos.map((campo, indice) => (
                <div
                  key={campo.titulo}
                  className="rounded-[16px] bg-white p-6 shadow-[0_2px_10px_rgba(32,15,59,0.08)] lg:p-7"
                >
                  <dt className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#4F17A8] text-[13px] font-bold text-white"
                    >
                      {indice + 1}
                    </span>
                    <span className="text-[17px] font-bold leading-snug text-[#200F3B]">
                      {campo.titulo}
                    </span>
                  </dt>

                  {/* O recuo alinha a descrição com o título, e não com o
                      número — 28px do badge mais os 12px do gap. */}
                  <dd className="mt-3 text-[15px] leading-relaxed text-[#5C546E] lg:pl-10">
                    {campo.descricao}
                  </dd>
                </div>
              ))}
            </dl>

            <figure className="mt-5 rounded-[0_16px_16px_0] border-l-4 border-[#FF610F] bg-white px-6 py-5">
              <figcaption className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#992905]">
                {FICHA.exemploRotulo}
              </figcaption>
              <blockquote className="mt-3 max-w-[68ch] text-[15px] italic leading-relaxed text-[#5C546E]">
                {FICHA.exemplo}
              </blockquote>
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
}
