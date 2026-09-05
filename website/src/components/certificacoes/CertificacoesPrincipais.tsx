import { CartaoCertificacao } from "@/components/certificacoes/CartaoCertificacao";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CERTIFICACOES } from "@/content/certificacoes";

/**
 * As credenciais, na mesma divisão do site do PMI Global: as principais em
 * cards escuros com o gem colorido, as especializadas em cards claros com o
 * pentágono, sobre uma faixa escura que separa os dois grupos.
 *
 * A separação não é enfeite — no PMI ela distingue as credenciais de base da
 * profissão das que atendem a uma disciplina específica, e é o que orienta
 * quem está escolhendo por onde começar.
 */
export function CertificacoesPrincipais() {
  const principais = CERTIFICACOES.filter((c) => c.grupo === "principal");
  const especializadas = CERTIFICACOES.filter((c) => c.grupo === "especializada");

  return (
    <>
      <section id="certificacoes" className="bg-[#F8F5F0] py-16 lg:py-20">
        <Container>
          <Eyebrow>As principais credenciais</Eyebrow>

          <h2 className="mt-3 text-[30px] font-extrabold leading-tight text-[#200F3B] lg:text-[42px]">
            Qual certificação é para você
          </h2>

          <p className="mt-4 max-w-[760px] text-[16px] leading-relaxed text-[#5C546E] lg:text-[18px]">
            A emissão, o exame e o pagamento são feitos pelo PMI Global. O PMI-DF ajuda você a se
            preparar e a conseguir desconto com nossos parceiros autorizados.
          </p>

          <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2">
            {principais.map((cert) => (
              <CartaoCertificacao key={cert.id} cert={cert} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#100522] py-16 lg:py-20">
        <Container>
          <Eyebrow className="text-[#1AC7FF]">Certificações especializadas</Eyebrow>

          <h2 className="mt-3 text-[30px] font-extrabold leading-tight text-white lg:text-[42px]">
            Credenciais por disciplina
          </h2>

          <p className="mt-4 max-w-[760px] text-[16px] leading-relaxed text-white/75 lg:text-[18px]">
            Para quem já atua numa frente específica e quer comprovar profundidade nela.
          </p>

          <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2">
            {especializadas.map((cert) => (
              <CartaoCertificacao key={cert.id} cert={cert} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
