import Link from "next/link";

import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="bg-[linear-gradient(110deg,#210040_0%,#4F17A8_48%,#FF610F_100%)] py-14 text-white lg:py-20">
      <Container>
        <p className="text-[13px] text-white/60">Início / Student Club</p>

        <div className="mt-10 max-w-[720px]">
          <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#1AC7FF]">
            Comunidade estudantil
          </p>

          <h1 className="mt-4 text-[36px] font-extrabold leading-tight lg:text-[54px]">
            PMI-DF Student Club
          </h1>

          <p className="mt-5 max-w-[650px] text-[16px] leading-relaxed text-white/85 lg:text-[19px]">
            O clube estudantil oficial do PMI Distrito Federal. Um espaço para quem está começando
            na carreira de projetos aprender, praticar e se conectar com o mercado.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#participar"
              className="rounded-full bg-white/80 px-7 py-3 text-[14px] font-semibold text-[#200F3B] transition hover:bg-white"
            >
              Quero fazer parte →
            </Link>

            <Link
              href="#beneficios"
              className="rounded-full border border-white/60 px-7 py-3 text-[14px] font-semibold text-white transition hover:bg-white/10"
            >
              Conhecer benefícios
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}