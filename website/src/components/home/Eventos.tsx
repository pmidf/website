import { CardEvento } from "@/components/eventos/CardEvento";
import { Botao } from "@/components/ui/Botao";
import { Container } from "@/components/ui/Container";
import { TituloSecao } from "@/components/ui/TituloSecao";
import { getEventosSympla } from "@/lib/sympla";

/** Seção "Eventos" — próximos encontros com inscrição externa. */
export async function Eventos() {
  const eventos = await getEventosSympla();

  const eventosHome = eventos.slice(0, 3);

  return (
    <section className="bg-[#F8F5F0] py-14 lg:py-16">
      <Container className="text-center">
        <TituloSecao>Eventos</TituloSecao>

        <p className="mx-auto mt-4 max-w-[676px] text-[18px] leading-relaxed text-[#200F3B] lg:text-[24px]">
          Summit, Workshops e treinamentos que movem a comunidade. Presenciais e online. Inscreva-se
          nos próximos!
        </p>

        <Botao href="/eventos" className="mt-6">
          Saiba mais
        </Botao>

        {eventosHome.length > 0 && (
          <div className="mt-12 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {eventosHome.map((evento) => (
              <CardEvento key={evento.id} evento={evento} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}