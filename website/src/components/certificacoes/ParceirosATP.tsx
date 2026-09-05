import { Container } from "@/components/ui/Container";
import { PARCEIROS_CERTIFICACAO } from "@/content/parceiros-certificacao";
import { ParceiroBanner } from "./ParceiroBanner";

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

        <div className="mt-12 space-y-10">
          {PARCEIROS_CERTIFICACAO.map((parceiro) => (
            <ParceiroBanner
              key={parceiro.nome}
              badge={parceiro.badge}
              nome={parceiro.nome}
              logoText={parceiro.logoText}
              logoSrc={parceiro.logoSrc}
              logoAlt={parceiro.logoAlt}
              descricao={parceiro.descricao}
              detalhe={parceiro.detalhe}
              ctaPrincipal={parceiro.ctaPrincipal}
              ctaSecundario={parceiro.ctaSecundario}
              observacao={parceiro.observacao}
              observacaoCta={parceiro.observacaoCta}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}