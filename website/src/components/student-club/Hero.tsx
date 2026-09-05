import { Botao } from "@/components/ui/Botao";
import { Container } from "@/components/ui/Container";

/**
 * Dobra inicial, na mesma forma das demais páginas: título centralizado na
 * escala 30/36/40, subtítulo de apoio e CTAs pelo `Botao` do design system.
 *
 * A foto do clube saiu daqui e desceu para "Onde os gerentes de projeto se
 * formam" — no hero ela empurrava a primeira seção de conteúdo para fora da
 * dobra, e ilustra melhor o texto que explica o programa.
 */
export function Hero() {
  return (
    <section className="bg-[linear-gradient(90deg,#1F0942_13%,#FF610F_50%,#1AC7FF_89%)] py-14 text-center lg:py-20">
      <Container>
        <h1 className="text-[30px] font-extrabold leading-tight text-[#F8F8F8] md:text-[36px] lg:text-[40px]">
          PMI-DF Student Club
        </h1>

        <p className="mx-auto mt-4 max-w-[767px] text-[18px] leading-relaxed text-[#F8F8F8] lg:text-[24px]">
          O clube estudantil oficial do PMI Distrito Federal. Um espaço para quem está começando na
          carreira de projetos aprender, praticar e se conectar com o mercado.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-4">
          <Botao href="#participar" variante="branco">
            Quero fazer parte
          </Botao>
          <Botao href="#beneficios" variante="contorno-claro">
            Conhecer benefícios
          </Botao>
        </div>
      </Container>
    </section>
  );
}
