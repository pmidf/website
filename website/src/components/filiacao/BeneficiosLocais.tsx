import { FaixaSecao } from "@/components/filiacao/FaixaSecao";
import { FotoCircular } from "@/components/filiacao/FotoCircular";
import { Container } from "@/components/ui/Container";
import { TituloSecao } from "@/components/ui/TituloSecao";
import { BENEFICIOS_LOCAIS } from "@/content/filiacao";

/**
 * Clube de benefícios do capítulo. Espelha a seção anterior: a faixa encosta
 * na borda oposta e a foto troca de lado (`lg:flex-row-reverse`).
 */
export function BeneficiosLocais() {
  return (
    <section className="bg-[#F8F5F0] pb-16 pt-12 lg:pb-20">
      <FaixaSecao cor="bg-[#023041]" lado="direita" className="lg:w-[690px] lg:pl-10 lg:pr-[70px]">
        <TituloSecao className="font-display font-extrabold leading-[1.18] text-[#F8F5F0]">
          Benefícios exclusivos do PMI-DF
        </TituloSecao>
        <p className="mt-3 text-[18px] text-[#F8F5F0] lg:text-[24px]">
          Clube de Benefícios PMI-DF.
        </p>
        <p className="mt-3 text-[17px] leading-snug text-[#F8F5F0] lg:text-[24px]">
          Vantagens para os filiados. Atualizamos a lista regularmente!
        </p>
      </FaixaSecao>

      <Container
        gutter="amplo"
        className="mt-10 flex flex-col gap-10 lg:mt-14 lg:flex-row-reverse lg:items-center lg:gap-16"
      >
        <ul className="flex flex-col gap-6 lg:flex-1">
          {BENEFICIOS_LOCAIS.map(({ titulo, descricao, Icone }) => (
            <li key={titulo} className="flex items-start gap-4">
              {/* O ícone é decorativo: o título ao lado já nomeia o benefício.
                  Sem ícone, o espaço é reservado para manter o alinhamento. */}
              {Icone ? (
                <Icone
                  aria-hidden
                  className="h-[42px] w-[42px] shrink-0 text-[#4F17A8] lg:h-[53px] lg:w-[53px]"
                />
              ) : (
                <span aria-hidden className="h-[42px] w-[42px] shrink-0 lg:h-[53px] lg:w-[53px]" />
              )}
              <div className="text-[#1F0942]">
                <p className="text-[20px] font-bold lg:text-[24px]">{titulo}</p>
                <p className="mt-1 text-[17px] leading-snug lg:text-[24px]">{descricao}</p>
              </div>
            </li>
          ))}
        </ul>

        <FotoCircular className="mx-auto lg:mx-0" />
      </Container>
    </section>
  );
}
