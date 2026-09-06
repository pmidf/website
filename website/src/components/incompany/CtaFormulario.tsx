import { Botao } from "@/components/ui/Botao";
import { Container } from "@/components/ui/Container";

/**
 * Fechamento da página InCompany.
 *
 * Trazia um formulário próprio de quatro campos cujo botão era um
 * `<button type="button">` sem handler: preencher e clicar não fazia nada, e a
 * mensagem se perdia em silêncio. Em vez de duplicar aqui o envio por SMTP,
 * a seção manda para `/contato`, onde o formulário existe de verdade e já
 * chega com o assunto certo selecionado.
 *
 * Concentrar o envio numa página só também concentra o antispam, o limite por
 * IP e o registro de erro — três coisas que teriam de ser mantidas em dobro.
 */
export function CtaFormulario() {
  return (
    /* Branco, e não o creme #F8F5F0 do resto da página: a seção anterior
       (Formatos) já é creme, e a de Clientes — que fazia a alternância — está
       desativada. Ver o comentário em `(site)/incompany/page.tsx`. */
    <section id="solicitar" className="bg-white py-16 lg:py-24">
      <Container>
        <div className="rounded-[40px] bg-[linear-gradient(110deg,#210040_0%,#4F17A8_52%,#012F44_100%)] px-8 py-14 text-center text-white lg:rounded-[80px] lg:px-16 lg:py-20">
          <h2 className="text-[28px] font-extrabold leading-tight md:text-[34px] lg:text-[40px]">
            Vamos desenhar a trilha do seu time
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-[16px] leading-relaxed text-white/85 lg:text-[18px]">
            Conte o contexto, o número de participantes e o prazo. Retornamos com uma proposta em
            até 2 dias úteis.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Botao href="/contato?assunto=incompany" variante="branco">
              Solicitar proposta
            </Botao>
            <Botao href="#catalogo" variante="contorno-claro">
              Ver catálogo
            </Botao>
          </div>
        </div>
      </Container>
    </section>
  );
}
