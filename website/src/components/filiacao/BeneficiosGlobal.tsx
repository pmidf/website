import { FaixaSecao } from "@/components/filiacao/FaixaSecao";
import { FotoSecao } from "@/components/filiacao/FotoSecao";
import { Container } from "@/components/ui/Container";
import { assets } from "@/content/assets";
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
          <p className="mt-3 text-[17px] leading-relaxed text-white lg:text-[19px]">
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
              <p className="text-[18px] font-bold lg:text-[20px]">{item.titulo}</p>
              <p className="mt-1 text-[16px] leading-relaxed lg:text-[17px]">{item.descricao}</p>
            </li>
          ))}
        </ul>

        <FotoSecao
          src={assets.filiacao.encontro}
          alt="Filiados reunidos no salão do Encontro de Filiados do PMI-DF"
          className="mx-auto lg:mx-0"
        />
      </Container>
    </section>
  );
}
