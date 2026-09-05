import { PARCEIROS_CERTIFICACAO } from "@/content/parceiros-certificacao";
import { ParceiroBanner } from "./ParceiroBanner";

export function ParceirosSection() {
  return (
    <section className="bg-[#F8F5F0] py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
        <div className="max-w-[780px]">
          <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#FF610F]">
            Onde estudar
          </p>

          <h2 className="mt-4 font-[family-name:var(--font-titulo)] text-[32px] font-extrabold leading-tight text-[#26114D] lg:text-[44px]">
            Parceiros ATP do PMI-DF
          </h2>

          <p className="mt-5 text-[16px] leading-relaxed text-[#5C546E] lg:text-[18px]">
            ATP significa Authorized Training Partner, empresas autorizadas pelo PMI
            a usar o conteúdo oficial em cursos preparatórios. Aqui você pode dar
            destaque aos parceiros e caminhos recomendados.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {PARCEIROS_CERTIFICACAO.map((parceiro) => (
            <ParceiroBanner
              key={parceiro.nome}
              badge={parceiro.badge}
              nome={parceiro.nome}
              logoText={parceiro.logoText}
              descricao={parceiro.descricao}
              detalhe={parceiro.detalhe}
              ctaPrincipal={parceiro.ctaPrincipal}
              ctaSecundario={parceiro.ctaSecundario}
              observacao={parceiro.observacao}
              observacaoCta={parceiro.observacaoCta}
            />
          ))}
        </div>
      </div>
    </section>
  );
}