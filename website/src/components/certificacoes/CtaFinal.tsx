import Link from "next/link";

import { Container } from "@/components/ui/Container";

export function CtaFinal() {
  return (
    <section className="bg-[#F8F5F0] pb-20 pt-8 lg:pb-28">
      <Container>
        <div className="rounded-[56px] bg-[linear-gradient(110deg,#210040_0%,#4F17A8_48%,#012F44_100%)] px-8 py-14 text-center text-white lg:rounded-[120px] lg:px-16 lg:py-20">
          <h2 className="text-[34px] font-extrabold leading-tight lg:text-[50px]">
            Pronto para se certificar?
          </h2>

          <p className="mx-auto mt-5 max-w-[650px] text-[16px] leading-relaxed text-white/85 lg:text-[18px]">
            A inscrição acontece no portal do PMI Global. Se quiser desconto no curso
            preparatório ou ajuda para escolher a credencial, fale com o capítulo.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="https://www.pmi.org/certifications"
              target="_blank"
              className="rounded-full bg-[linear-gradient(90deg,#B86A4B_0%,#BEEFFF_100%)] px-7 py-3 text-[14px] font-semibold text-[#200F3B] transition hover:brightness-105"
            >
              Ir para o PMI Global →
            </Link>

            <Link
              href="/contato?assunto=certificacao"
              className="rounded-full border border-white/70 px-7 py-3 text-[14px] font-semibold text-white transition hover:bg-white/10"
            >
              Falar com o PMI-DF
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}