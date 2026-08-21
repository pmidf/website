import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { TREINAMENTOS } from "@/content/incompany";

export function Catalogo() {
  return (
    <section id="catalogo" className="bg-white py-16 lg:py-24">
      <Container>
        <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#FF610F]">
          Catálogo
        </p>

        <h2 className="mt-4 text-[30px] font-extrabold leading-tight text-[#200F3B] lg:text-[42px]">
          Treinamentos disponíveis
        </h2>

        <p className="mt-4 max-w-[820px] text-[16px] leading-relaxed text-[#5C546E]">
          Dez formações em turma fechada. Todas geram certificado e PDUs. Carga horária e formato
          podem ser ajustados na proposta.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {["Todos", "Online", "Presencial", "Híbrido"].map((item, index) => (
            <button
              key={item}
              type="button"
              className={`rounded-full px-5 py-2 text-[13px] font-semibold ${
                index === 0
                  ? "bg-[#210040] text-white"
                  : "border border-[#200F3B]/20 bg-white text-[#200F3B]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TREINAMENTOS.map((item) => (
            <article
              key={item.titulo}
              className={`flex min-h-[360px] flex-col rounded-[16px] px-7 py-7 text-white shadow-[0_8px_18px_rgba(32,15,59,0.18)] ${item.cor}`}
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-[12px] bg-[#1AC7FF]">
                <span className="h-0 w-0 border-b-[34px] border-l-[20px] border-r-[20px] border-b-white border-l-transparent border-r-transparent" />
              </span>

              <h3 className="mt-6 text-[21px] font-extrabold leading-tight">{item.titulo}</h3>

              <div className="mt-5 grid gap-2 border-y border-white/20 py-4 text-[13px] text-white/85">
                <p className="flex justify-between gap-4">
                  <span>Carga horária</span>
                  <strong>{item.carga}</strong>
                </p>
                <p className="flex justify-between gap-4">
                  <span>Formato</span>
                  <strong>{item.formato}</strong>
                </p>
                <p className="flex justify-between gap-4">
                  <span>Modalidade</span>
                  <strong>{item.modalidade}</strong>
                </p>
                <p className="flex justify-between gap-4">
                  <span>Mínimo</span>
                  <strong>{item.min}</strong>
                </p>
              </div>

              <p className="mt-4 flex-1 text-[14px] leading-relaxed text-white/85">
                {item.descricao}
              </p>

              <Link
                href="#solicitar"
                className="mt-6 self-start rounded-full bg-[#BEEFFF] px-5 py-2 text-[13px] font-semibold text-[#200F3B] transition hover:bg-white"
              >
                Ver ementa →
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}