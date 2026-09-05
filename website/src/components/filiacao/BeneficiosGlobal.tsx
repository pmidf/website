import { FaixaSecao } from "@/components/filiacao/FaixaSecao";
import { FotoCircular } from "@/components/filiacao/FotoCircular";
import { Container } from "@/components/ui/Container";
import { TituloSecao } from "@/components/ui/TituloSecao";
import { BENEFICIOS_GLOBAL } from "@/content/filiacao";

/** O que vem junto com a filiação ao PMI Global. */
export function BeneficiosGlobal() {
  return (
    <section className="overflow-x-clip bg-[#F8F5F0] pb-16 pt-12 lg:pb-20">
      <Container>
        <FaixaSecao cor="bg-[#1F0942]" lado="esquerda" className="lg:max-w-[560px]">
          <TituloSecao className="font-display font-extrabold leading-[1.18] text-white">
            Benefícios do PMI
          </TituloSecao>
          <p className="mt-4 text-[18px] leading-snug text-white lg:text-[24px]">
            Recursos que vêm com a filiação. Tudo que o PMI oferece a mais de 800 mil profissionais
            no mundo.
          </p>
        </FaixaSecao>
      </Container>

      <Container className="mt-10 flex flex-col gap-10 lg:mt-14 lg:flex-row lg:items-center lg:gap-16">
        <ul className="flex flex-col gap-6 lg:flex-1">
          {BENEFICIOS_GLOBAL.map((item) => (
            /* Alinhada à esquerda, como todo o resto da página: centralizada,
               a lista não batia nem com o título da faixa acima nem com a
               lista da seção seguinte, que tem ícones e é alinhada. */
            <li key={item.titulo} className="text-[#1F0942]">
              <p className="text-[20px] font-bold lg:text-[24px]">{item.titulo}</p>
              <p className="mt-1 text-[17px] leading-snug lg:text-[24px]">{item.descricao}</p>
            </li>
          ))}
        </ul>

        <FotoCircular className="mx-auto lg:mx-0" />
      </Container>
    </section>
  );
}
