import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="bg-[linear-gradient(110deg,#210040_0%,#4F17A8_48%,#FF610F_100%)] py-14 text-white lg:py-20">
      <Container>
        <p className="text-[13px] text-white/65">Início / Certificações</p>

        <div className="mt-8 max-w-[760px]">
          <h1 className="text-[36px] font-extrabold leading-tight lg:text-[54px]">
            Certificações PMI
          </h1>

          <p className="mt-4 max-w-[700px] text-[16px] leading-relaxed text-white/85 lg:text-[19px]">
            Credenciais reconhecidas em mais de 200 países. Entenda qual faz
            sentido para o seu momento de carreira e onde estudar com desconto
            pelo PMI-DF.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="https://www.pmi.org/certifications"
              target="_blank"
              className="rounded-full bg-[linear-gradient(90deg,#B86A4B_0%,#BEEFFF_100%)] px-7 py-3 text-[14px] font-semibold text-[#200F3B] transition hover:brightness-105"
            >
              Ver certificações no PMI Global →
            </Link>

            <Link
              href="/contato?assunto=certificacao"
              className="rounded-full border border-white/60 px-7 py-3 text-[14px] font-semibold text-white transition hover:bg-white/10"
            >
              Solicitar cupom de desconto
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}