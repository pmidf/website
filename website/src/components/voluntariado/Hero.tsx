import { Botao } from "@/components/ui/Botao";
import { Container } from "@/components/ui/Container";
import { URL_VEP } from "@/content/voluntariado";

/** Dobra inicial. O `pb` reserva o espaço que a seção seguinte cobre ao subir. */
export function Hero() {
  return (
    <section className="bg-[#FF610F] pb-24 pt-12 text-center lg:pb-28 lg:pt-14">
      <Container gutter="amplo">
        <h1 className="font-display text-[30px] font-extrabold leading-tight text-[#F8F8F8] md:text-[36px] lg:text-[40px]">
          Voluntariado PMI-DF
        </h1>
        <p className="mx-auto mt-4 max-w-[783px] text-[18px] text-[#F8F8F8] lg:text-[24px]">
          Onde a sua jornada começa.
        </p>
        <Botao href={URL_VEP} external variante="claro" className="mt-7">
          Ver vagas abertas
        </Botao>
      </Container>
    </section>
  );
}
