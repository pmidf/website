import { Container } from "@/components/ui/Container";

export function OQueOferecemos() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#FF610F]">
              O que oferecemos
            </p>

            <h2 className="mt-4 text-[30px] font-extrabold leading-tight text-[#200F3B] lg:text-[42px]">
              Seu centro de excelência em gerenciamento de projetos
            </h2>
          </div>

          <div className="space-y-5 text-[16px] leading-relaxed text-[#5C546E] lg:text-[18px]">
            <p>
              Um catálogo de treinamentos corporativos em turmas fechadas, online ou presenciais,
              ministrados por especialistas certificados. Capacitamos seus times a planejar,
              executar e entregar projetos com as melhores práticas do PMI.
            </p>

            <p>
              Nossa missão é fortalecer a comunidade de gerenciamento de projetos do Distrito
              Federal, levando aprendizado aplicado para dentro das organizações.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}