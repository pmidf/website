import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="bg-[linear-gradient(110deg,#210040_0%,#4F17A8_48%,#FF610F_100%)] py-16 text-white lg:py-24">
      <Container>
        <p className="text-[13px] text-white/70">Início / Sobre / Transparência</p>

        <div className="mt-8 max-w-[760px]">
          <h1 className="text-[38px] font-extrabold leading-tight lg:text-[56px]">
            Transparência
          </h1>

          <p className="mt-5 max-w-[720px] text-[17px] leading-relaxed text-white/90 lg:text-[21px]">
            Documentos institucionais, fiscais e regulatórios do PMI-DF, disponíveis para consulta
            pública.
          </p>
        </div>
      </Container>
    </section>
  );
}