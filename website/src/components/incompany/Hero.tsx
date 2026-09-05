import { Botao } from "@/components/ui/Botao";
import { Container } from "@/components/ui/Container";

/**
 * Dobra inicial, na mesma forma das demais páginas.
 *
 * O bloco de formas geométricas que ocupava a coluna da direita saiu: era um
 * arranjo de círculos, quadrados e um triângulo montado com utilitários, sem
 * relação com as formas do design system (que vivem em `assets.formas`) e sem
 * dizer nada sobre o serviço. Com ele fora, o hero volta a ser uma coluna
 * centralizada como o das demais páginas.
 */
export function Hero() {
  return (
    <section className="bg-[linear-gradient(90deg,#1F0942_13%,#FF610F_50%,#1AC7FF_89%)] py-14 text-center lg:py-20">
      <Container>
        <h1 className="text-[30px] font-extrabold leading-tight text-[#F8F8F8] md:text-[36px] lg:text-[40px]">
          Treinamentos corporativos PMI-DF
        </h1>

        <p className="mx-auto mt-4 max-w-[767px] text-[18px] leading-relaxed text-[#F8F8F8] lg:text-[24px]">
          Capacitação em gerenciamento de projetos desenhada para o seu time, com conteúdo PMI,
          instrutores certificados e PDUs para quem já é credenciado.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-4">
          <Botao href="#solicitar" variante="branco">
            Solicitar proposta
          </Botao>
          <Botao href="#catalogo" variante="contorno-claro">
            Ver catálogo
          </Botao>
        </div>
      </Container>
    </section>
  );
}
