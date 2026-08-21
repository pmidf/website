import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { CTAS_TRANSPARENCIA } from "@/content/transparencia";

const estilos = {
  roxo: "bg-[linear-gradient(180deg,#2A0A5C_0%,#4F17A8_100%)] text-white",
  azul: "bg-[linear-gradient(180deg,#012029_0%,#00799E_100%)] text-white",
  claro: "bg-Blue text-[#200F3B]",
};

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

              <Link
                href={item.href}
                target={item.externo ? "_blank" : undefined}
                rel={item.externo ? "noopener noreferrer" : undefined}
                className="mt-7 inline-flex rounded-full bg-[linear-gradient(90deg,#B86A4B_0%,#BEEFFF_100%)] px-6 py-3 text-[14px] font-semibold text-[#200F3B] transition hover:brightness-105"
              >
                {item.cta}
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}