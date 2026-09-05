import { Container } from "@/components/ui/Container";

export function CtaFormulario() {
  return (
    /* Branco, e não o creme #F8F5F0 do resto da página: a seção anterior
       (Formatos) já é creme, e a de Clientes — que fazia a alternância — está
       desativada. Ver o comentário em `(site)/incompany/page.tsx`. */
    <section id="solicitar" className="bg-white py-16 lg:py-24">
      <Container>
        <div className="grid items-center gap-10 rounded-[56px] bg-[linear-gradient(110deg,#210040_0%,#4F17A8_52%,#012F44_100%)] px-8 py-14 text-white lg:grid-cols-[1fr_340px] lg:rounded-[120px] lg:px-16 lg:py-20">
          <div>
            <h2 className="text-[32px] font-extrabold leading-tight lg:text-[46px]">
              Vamos desenhar a trilha do seu time
            </h2>

            <p className="mt-5 max-w-[560px] text-[16px] leading-relaxed text-white/85">
              Conte o contexto, o número de participantes e o prazo. Retornamos com uma proposta em
              até 2 dias úteis.
            </p>
          </div>

          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Nome"
              className="rounded-[8px] border-0 bg-white px-4 py-3 text-[14px] text-[#200F3B] outline-none placeholder:text-[#5C546E]"
            />

            <input
              type="email"
              placeholder="E-mail"
              className="rounded-[8px] border-0 bg-white px-4 py-3 text-[14px] text-[#200F3B] outline-none placeholder:text-[#5C546E]"
            />

            <input
              type="text"
              placeholder="Empresa"
              className="rounded-[8px] border-0 bg-white px-4 py-3 text-[14px] text-[#200F3B] outline-none placeholder:text-[#5C546E]"
            />

            <input
              type="text"
              placeholder="Treinamento de interesse"
              className="rounded-[8px] border-0 bg-white px-4 py-3 text-[14px] text-[#200F3B] outline-none placeholder:text-[#5C546E]"
            />

            <button
              type="button"
              className="mt-2 self-start rounded-full bg-[#BEEFFF] px-6 py-3 text-[14px] font-semibold text-[#200F3B] transition hover:bg-white"
            >
              Enviar solicitação
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}