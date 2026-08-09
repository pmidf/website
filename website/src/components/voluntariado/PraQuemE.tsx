import { Botao } from "@/components/ui/Botao";
import { Container } from "@/components/ui/Container";
import { TituloSecao } from "@/components/ui/TituloSecao";
import { PERFIS, URL_VEP } from "@/content/voluntariado";

/** Perfis que o capítulo procura. */
export function PraQuemE() {
  return (
    <section className="bg-[#200F3B] py-16 lg:py-[90px]">
      <Container gutter="amplo">
        <TituloSecao className="font-display font-extrabold leading-[1.18] text-[#F8F8F8]">
          Pra quem é
        </TituloSecao>

        <ul className="mt-8 max-w-[721px] list-disc space-y-3 pl-6 lg:pl-9">
          {PERFIS.map((perfil) => (
            <li key={perfil} className="text-[17px] leading-snug text-[#F8F8F8] lg:text-[24px]">
              {perfil}
            </li>
          ))}
        </ul>

        <Botao href={URL_VEP} external variante="branco" className="mt-10">
          Saiba mais
        </Botao>
      </Container>
    </section>
  );
}
