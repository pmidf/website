import { Botao } from "@/components/ui/Botao";
import { Container } from "@/components/ui/Container";

/**
 * Dobra inicial da página Eventos.
 *
 * O `pb` generoso reserva o espaço que a seção seguinte ocupa ao subir sobre
 * ela com margem negativa — é o que forma a "aba" arredondada.
 */
export function Hero() {
  return (
    <section className="bg-[#023041] pb-24 pt-12 text-center lg:pb-32 lg:pt-14">
      <Container gutter="amplo">
        <h1 className="font-[family-name:var(--font-titulo)] text-[30px] font-extrabold leading-tight text-[#F8F8F8] md:text-[36px] lg:text-[40px]">
          Eventos PMI-DF
        </h1>
        <p className="mx-auto mt-4 max-w-[783px] text-[18px] leading-relaxed text-[#F8F8F8] lg:text-[24px]">
          Summit, workshops, encontros e webinars. Presenciais e online. Tudo o que a comunidade
          de projetos do DF está fazendo agora.
        </p>
        <Botao href="#agenda" variante="texto-petroleo" className="mt-7">
          Ver agenda completa
        </Botao>
      </Container>
    </section>
  );
}
