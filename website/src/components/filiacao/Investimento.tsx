import { Botao } from "@/components/ui/Botao";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TituloSecao } from "@/components/ui/TituloSecao";
import { CATEGORIAS, URL_PMI_GLOBAL } from "@/content/filiacao";

/**
 * Investimento.
 *
 * A página não publica valores de propósito: a anuidade é cobrada em dólar
 * pelo PMI Global e mudaria a cada variação cambial. O CTA manda para a fonte
 * oficial, que é sempre a que está certa.
 */
export function Investimento() {
  return (
    <section className="bg-[#F8F5F0] py-16 lg:py-[88px]">
      <Container
        gutter="amplo"
        className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-[60px]"
      >
        <div className="flex flex-col items-start gap-4 lg:flex-1">
          <Eyebrow>Quanto custa</Eyebrow>
          <TituloSecao className="font-display font-extrabold leading-[1.18] text-[#200F3B]">
            Investimento transparente
          </TituloSecao>
          <p className="text-[16px] leading-[1.58] text-[#5C546E] lg:text-[18px]">
            A anuidade é paga diretamente ao PMI Global. Valores podem variar conforme câmbio e
            categoria (profissional, estudante, aposentado).
          </p>
          <p className="text-[16px] font-medium text-[#200F3B]">
            Consulte os valores atualizados no site oficial do PMI.
          </p>
          <Botao href={URL_PMI_GLOBAL} external variante="escuro" className="mt-2">
            Ver valores no PMI Global
          </Botao>
        </div>

        <div className="flex flex-col gap-5 lg:w-[480px] lg:shrink-0">
          {CATEGORIAS.map((categoria) => (
            <article
              key={categoria.titulo}
              className="rounded-[16px] bg-white px-[30px] py-7 shadow-[0_2px_10px_rgba(32,15,59,0.08)]"
            >
              <span
                aria-hidden
                className={`block h-[5px] w-10 rounded-full ${categoria.barra}`}
              />
              <h3 className="mt-[10px] text-[22px] font-semibold leading-[1.32] text-[#200F3B]">
                {categoria.titulo}
              </h3>
              <p className="mt-[10px] text-[16px] leading-[1.55] text-[#5C546E]">
                {categoria.descricao}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
