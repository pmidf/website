import Link from "next/link";
import { Botao } from "@/components/ui/Botao";

import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="bg-[linear-gradient(110deg,#210040_0%,#4F17A8_48%,#FF610F_100%)] py-14 text-white lg:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_420px]">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#1AC7FF]">
              Para empresas e órgãos
            </p>

            <h1 className="mt-4 text-[36px] font-extrabold leading-tight lg:text-[54px]">
              Treinamentos corporativos PMI-DF
            </h1>

            <p className="mt-5 max-w-[680px] text-[16px] leading-relaxed text-white/85 lg:text-[19px]">
              Capacitação em gerenciamento de projetos desenhada para o seu time, com conteúdo PMI,
              instrutores certificados e PDUs para quem já é credenciado.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Botao
                href="#solicitar"
                variante="texto-roxo"
              >
                Solicitar proposta
              </Botao>

              <Link
                href="#catalogo"
                className="rounded-full border border-white/60 px-7 py-3 text-[14px] font-semibold text-white transition hover:bg-white/10"
              >
                Ver catálogo →
              </Link>
            </div>
          </div>

          <div className="hidden rounded-[18px] bg-[#210040]/70 p-8 shadow-[0_12px_28px_rgba(0,0,0,0.22)] lg:block">
            <div className="grid grid-cols-3 gap-6">
              <span className="h-24 w-24 rounded-full bg-[#1AC7FF]" />
              <span className="h-24 w-24 rounded-[12px] bg-[#FF610F]" />
              <span />
              <span className="col-span-2 h-20 rounded-[10px] bg-white" />
              <span className="h-14 w-14 rounded-full bg-white" />
              <span />
              <span className="h-0 w-0 border-b-[72px] border-l-[42px] border-r-[42px] border-b-[#4F17A8] border-l-transparent border-r-transparent opacity-60" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}