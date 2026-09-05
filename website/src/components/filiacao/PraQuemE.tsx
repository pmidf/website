import { FaixaSecao } from "@/components/filiacao/FaixaSecao";
import { FotoCircular } from "@/components/filiacao/FotoCircular";
import { Container } from "@/components/ui/Container";
import { TituloSecao } from "@/components/ui/TituloSecao";
import { PERFIS } from "@/content/filiacao";

/** Perfis para quem a filiação faz sentido. */
export function PraQuemE() {
  return (
    <section className="overflow-x-clip bg-[#F8F5F0] pb-16 pt-12 lg:pb-20">
      <Container>
        <FaixaSecao cor="bg-[#FF610F]" lado="esquerda" className="py-7 lg:max-w-[430px] lg:py-8">
          <TituloSecao className="font-display font-extrabold leading-[1.18] text-[#F8F8F8]">
            Pra quem é
          </TituloSecao>
          <p className="mt-2 text-[18px] text-[#F8F8F8] lg:text-[24px]">
            Filiação faz sentido se você
          </p>
        </FaixaSecao>
      </Container>

      <Container className="mt-10 flex flex-col gap-10 lg:mt-14 lg:flex-row lg:items-center lg:gap-16">
        <ul className="list-disc space-y-3 pl-6 lg:flex-1 lg:pl-9">
          {PERFIS.map((perfil) => (
            <li key={perfil} className="text-[17px] leading-snug text-[#200F3B] lg:text-[24px]">
              {perfil}
            </li>
          ))}
        </ul>

        <FotoCircular className="mx-auto lg:mx-0" />
      </Container>
    </section>
  );
}
