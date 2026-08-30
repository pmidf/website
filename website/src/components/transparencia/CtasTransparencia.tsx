import { Botao } from "@/components/ui/Botao";
import { Container } from "@/components/ui/Container";
import { CTAS_TRANSPARENCIA } from "@/content/transparencia";

const estilos = {
  roxo: "bg-[linear-gradient(180deg,#2A0A5C_0%,#4F17A8_100%)] text-white",
  azul: "bg-[linear-gradient(180deg,#012029_0%,#00799E_100%)] text-white",
  claro: "bg-Blue text-[#200F3B]",
};

/** Cards com fundo escuro (roxo/azul) usam botão branco para contraste;
 * o card claro usa botão escuro. */
const variantePorCard = {
  roxo: "branco",
  azul: "branco",
  claro: "escuro",
} as const;

export function CtasTransparencia() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          {CTAS_TRANSPARENCIA.map((item) => (
            <article
              key={item.titulo}
              className={`rounded-[18px] px-7 py-8 shadow-[0_4px_16px_rgba(32,15,59,0.08)] ${
                estilos[item.variante as keyof typeof estilos]
              }`}
            >
              <h3 className="text-[22px] font-bold">{item.titulo}</h3>

              <p
                className={`mt-4 text-[15px] leading-relaxed ${
                  item.variante === "claro" ? "text-[#5C546E]" : "text-white/85"
                }`}
              >
                {item.descricao}
              </p>

              <Botao
                href={item.href}
                external={item.externo}
                variante={variantePorCard[item.variante as keyof typeof variantePorCard]}
                className="mt-7"
              >
                {item.cta}
              </Botao>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}