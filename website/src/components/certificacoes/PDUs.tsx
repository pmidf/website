import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { PDU_CARDS } from "@/content/certificacoes";

const links: Record<string, string> = {
  "Ver agenda": "/eventos",
  "Ver vagas abertas": "/voluntariado",
  "Falar com o PMI-DF": "/contato?assunto=pdu",
};

export function PDUs() {
  return (
    <section id="pdus" className="bg-white py-16 lg:py-24">
      <Container>
        <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#FF610F]">
          Depois da prova
        </p>

        <h2 className="mt-4 text-[30px] font-extrabold leading-tight text-[#200F3B] lg:text-[42px]">
          Manter a credencial ativa
        </h2>

        <p className="mt-4 max-w-[820px] text-[16px] leading-relaxed text-[#5C546E] lg:text-[18px]">
          Certificação PMI não é vitalícia. A cada ciclo de três anos é preciso acumular PDUs —
          unidades de desenvolvimento profissional. Boa parte delas você consegue dentro do
          próprio PMI-DF.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PDU_CARDS.map((item) => (
            <article
              key={item.titulo}
              className="rounded-[16px] bg-[#F8F5F0] px-7 py-8 shadow-[0_2px_12px_rgba(32,15,59,0.06)]"
            >
              <span className="block h-1 w-10 rounded-full bg-[#1AC7FF]" />

              <h3 className="mt-5 text-[20px] font-bold text-[#200F3B]">{item.titulo}</h3>

              <p className="mt-4 text-[15px] leading-relaxed text-[#5C546E]">
                {item.descricao}
              </p>

              <Link
                href={links[item.cta] ?? "/contato"}
                className="mt-6 inline-flex rounded-full bg-[#BEEFFF] px-5 py-2 text-[13px] font-semibold text-[#200F3B] transition hover:brightness-105"
              >
                {item.cta} →
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}