import Link from "next/link";

import { Container } from "@/components/ui/Container";

export function CtaFinal() {
  return (
    <section className="bg-[#F8F5F0] py-16 lg:py-24">
      <Container>
        <div className="rounded-[56px] bg-[linear-gradient(110deg,#210040_0%,#4F17A8_48%,#FF610F_100%)] px-8 py-14 text-center text-white lg:rounded-[120px] lg:px-16 lg:py-20">
          <h2 className="text-[34px] font-extrabold leading-tight lg:text-[50px]">
            Junte-se a nós!
          </h2>

          <p className="mx-auto mt-5 max-w-[640px] text-[16px] leading-relaxed text-white/85 lg:text-[18px]">
            Vagas abertas o ano todo. Faça parte do único clube estudantil de gerenciamento de
            projetos do Distrito Federal.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contato?assunto=student-club"
              className="rounded-full bg-white/80 px-7 py-3 text-[14px] font-semibold text-[#200F3B] transition hover:bg-white"
            >
              Quero entrar no clube →
            </Link>

            <Link
              href="/contato"
              className="rounded-full border border-white/60 px-7 py-3 text-[14px] font-semibold text-white transition hover:bg-white/10"
            >
              Falar com o capítulo
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}