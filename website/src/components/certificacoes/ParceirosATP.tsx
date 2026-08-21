import Link from "next/link";

import { Container } from "@/components/ui/Container";

export function ParceirosATP() {
  return (
    <section id="parceiros-atp" className="bg-[#F8F5F0] py-16 lg:py-24">
      <Container>
        <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#FF610F]">
          Onde estudar
        </p>

        <h2 className="mt-4 text-[30px] font-extrabold leading-tight text-[#200F3B] lg:text-[42px]">
          Parceiros ATP do PMI-DF
        </h2>

        <p className="mt-4 max-w-[820px] text-[16px] leading-relaxed text-[#5C546E] lg:text-[18px]">
          ATP significa Authorized Training Partner: empresas autorizadas pelo PMI a usar o
          conteúdo oficial dos cursos preparatórios. Só um ATP garante material aprovado,
          instrutores avaliados e horas de contato válidas para a inscrição no exame.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="border-t-2 border-[#4F17A8] pt-5">
            <h3 className="text-[18px] font-bold text-[#200F3B]">Conteúdo oficial</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[#5C546E]">
              O material vem do PMI, não de uma adaptação. É o mesmo padrão em qualquer país.
            </p>
          </article>

          <article className="border-t-2 border-[#4F17A8] pt-5">
            <h3 className="text-[18px] font-bold text-[#200F3B]">Instrutores avaliados</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[#5C546E]">
              Profissionais certificados e auditados periodicamente pelo próprio PMI.
            </p>
          </article>

          <article className="border-t-2 border-[#4F17A8] pt-5">
            <h3 className="text-[18px] font-bold text-[#200F3B]">Horas de contato válidas</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[#5C546E]">
              As horas exigidas na inscrição do exame são aceitas sem questionamento.
            </p>
          </article>
        </div>

        <div className="mt-12 rounded-[18px] bg-[linear-gradient(110deg,#210040_0%,#4F17A8_100%)] p-7 text-white shadow-[0_8px_22px_rgba(32,15,59,0.16)] lg:p-9">
          <div className="grid items-center gap-8 lg:grid-cols-[140px_1fr]">
            <div className="h-[92px] rounded-[12px] bg-white" />

            <div>
              <span className="inline-flex rounded-full bg-[#1AC7FF] px-4 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#012029]">
                Authorized Training Partner
              </span>

              <h3 className="mt-4 text-[28px] font-extrabold leading-tight">JUMP</h3>

              <p className="mt-3 max-w-[760px] text-[15px] leading-relaxed text-white/85">
                Parceira do PMI-DF em treinamentos preparatórios para PMP®, CAPM® e PMI-ACP®.
                Filiados e participantes do capítulo têm cupom de desconto nos cursos.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/contato?assunto=cupom-jump"
                  className="rounded-full bg-[linear-gradient(90deg,#B86A4B_0%,#BEEFFF_100%)] px-7 py-3 text-[14px] font-semibold text-[#200F3B] transition hover:brightness-105"
                >
                  Solicitar cupom de desconto
                </Link>

                <Link
                  href="https://www.pmi.org/certifications/certification-resources/authorized-training-partners"
                  target="_blank"
                  className="rounded-full border border-white/60 px-6 py-3 text-[14px] font-semibold text-white transition hover:bg-white/10"
                >
                  Ver cursos ↗
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-l-4 border-[#FF610F] pl-5 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-[780px] text-[15px] leading-relaxed text-[#5C546E]">
            Procura outro parceiro? O diretório oficial do PMI lista todos os Authorized Training
            Partners e permite verificar se um provedor é autorizado.
          </p>

          <Link
            href="https://www.pmi.org/certifications/certification-resources/authorized-training-partners"
            target="_blank"
            className="rounded-full bg-[linear-gradient(90deg,#B86A4B_0%,#BEEFFF_100%)] px-7 py-3 text-[14px] font-semibold text-[#200F3B] transition hover:brightness-105"
          >
            Abrir diretório ↗
          </Link>
        </div>
      </Container>
    </section>
  );
}