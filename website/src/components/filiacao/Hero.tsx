import { Botao } from "@/components/ui/Botao";
import { Container } from "@/components/ui/Container";
import { URL_PMI_GLOBAL } from "@/content/filiacao";

/** Dobra inicial. O `pb` reserva o espaço que a seção seguinte cobre ao subir. */
export function Hero() {
  return (
    <section className="bg-[#1F0942] pb-24 pt-12 text-center lg:pb-32 lg:pt-14">
      <Container gutter="amplo">
        <h1 className="font-display text-[30px] font-extrabold leading-tight text-[#F8F8F8] md:text-[36px] lg:text-[40px]">
          Filiação PMI-DF
        </h1>
        <p className="mx-auto mt-4 max-w-[783px] text-[18px] leading-relaxed text-[#F8F8F8] lg:text-[24px]">
          Filie-se a maior comunidade de gerenciamentos de projetos do mundo! E participe dos
          eventos do PMI-DF.
        </p>
        <Botao href={URL_PMI_GLOBAL} external variante="claro" className="mt-7">
          Quero me filiar
        </Botao>
      </Container>
    </section>
  );
}
