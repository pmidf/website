import { Botao } from "@/components/ui/Botao";
import { Container } from "@/components/ui/Container";
import { EXERCER_DIREITOS } from "@/content/aviso-privacidade";
import { site } from "@/content/site";

/**
 * Fechamento com os canais de contato do encarregado (LGPD).
 *
 * Os e-mails aparecem como links `mailto:` e não como texto: exercer um
 * direito não deveria exigir copiar e colar endereço.
 */
export function ExercerDireitos() {
  const canais = [
    { rotulo: "Encarregado de dados", valor: site.contact.emailDpo },
    { rotulo: "Contato geral", valor: site.contact.email },
  ];

  return (
    <section className="bg-white py-16 lg:py-20">
      <Container>
        <div className="rounded-[32px] bg-[linear-gradient(110deg,#210040_0%,#4F17A8_52%,#012F44_100%)] px-8 py-12 text-white lg:rounded-[56px] lg:px-16 lg:py-16">
          <h2 className="text-[26px] font-extrabold leading-tight lg:text-[36px]">
            {EXERCER_DIREITOS.titulo}
          </h2>
          <p className="mt-4 max-w-[640px] text-[16px] leading-relaxed text-white/85 lg:text-[18px]">
            {EXERCER_DIREITOS.descricao}
          </p>

          <ul className="mt-8 flex flex-col gap-3">
            {canais.map((canal) => (
              <li key={canal.valor} className="text-[16px]">
                <span className="text-white/70">{canal.rotulo}: </span>
                <a
                  href={`mailto:${canal.valor}`}
                  className="font-semibold underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {canal.valor}
                </a>
              </li>
            ))}
          </ul>

          <Botao href={EXERCER_DIREITOS.ctaHref} variante="claro" className="mt-8">
            {EXERCER_DIREITOS.ctaLabel}
          </Botao>
        </div>
      </Container>
    </section>
  );
}
