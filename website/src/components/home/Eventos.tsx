import { CardEvento } from "@/components/home/CardEvento";
import { Botao } from "@/components/ui/Botao";
import { Container } from "@/components/ui/Container";
import { TituloSecao } from "@/components/ui/TituloSecao";
import { EVENTOS } from "@/content/home";

/** Seção "Eventos" — próximos encontros com inscrição externa. */
export function Eventos() {
  return (
    <section className="bg-[#F8F5F0] py-14 lg:py-16">
      <Container className="text-center">
        <TituloSecao>Eventos</TituloSecao>
        <p className="mx-auto mt-4 max-w-[676px] text-[18px] leading-relaxed text-[#200F3B] lg:text-[24px]">
          Summits, workshops e encontros que movem a comunidade. Presenciais e online. Inscreva-se
          nos próximos!
        </p>
        <Botao href="/eventos" className="mt-6">
          Saiba mais
        </Botao>

        <div className="mt-12 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {EVENTOS.map((evento) => (
            <CardEvento key={evento.titulo} evento={evento} />
          ))}
        </div>
      </Container>
    </section>
  );
}
