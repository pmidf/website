import { CardIniciativa } from "@/components/home/CardIniciativa";
import { Container } from "@/components/ui/Container";
import { TituloSecao } from "@/components/ui/TituloSecao";
import { INICIATIVAS } from "@/content/home";

/** Seção "Conheça mais das nossas iniciativas" — três caminhos de entrada no PMI-DF. */
export function Iniciativas() {
  return (
    <section className="bg-[#F8F5F0] pb-16 pt-4">
      <Container>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <TituloSecao>
            Conheça mais das
            <br className="hidden lg:block" /> nossas iniciativas
          </TituloSecao>
          <p className="max-w-[557px] text-[18px] leading-relaxed text-[#200F3B] lg:text-[24px]">
            Três caminhos para fazer parte do PMI-DF.
            <br className="hidden lg:block" /> Escolha o seu e cresça com a comunidade.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[100px]">
          {INICIATIVAS.map((item) => (
            <CardIniciativa key={item.titulo} item={item} />
          ))}
        </div>
      </Container>

      {/* Régua roxa que separa iniciativas de eventos */}
      <div className="mt-16 h-3 w-full bg-[#371075]" />
    </section>
  );
}
