import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function FiliadosDesconto() {
  return (
    <section className="bg-[linear-gradient(110deg,#012029_0%,#00485D_100%)] py-12 text-white">
      <Container className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
        <div>
          <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#1AC7FF]">
            Quem é filiado paga menos
          </p>

          <h2 className="mt-4 text-[28px] font-extrabold leading-tight lg:text-[34px]">
            Filiados do PMI têm desconto no exame
          </h2>

          <p className="mt-4 max-w-[760px] text-[15px] leading-relaxed text-white/80">
            A filiação costuma se pagar já na primeira prova. O desconto vale para todas as
            credenciais e também para a renovação.
          </p>
        </div>

        <Link
          href="/filiacao"
          className="rounded-full bg-[linear-gradient(90deg,#B86A4B_0%,#BEEFFF_100%)] px-7 py-3 text-[14px] font-semibold text-[#200F3B] transition hover:brightness-105"
        >
          Quero me filiar
        </Link>
      </Container>
    </section>
  );
}