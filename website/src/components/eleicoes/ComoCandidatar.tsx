import { Botao } from "@/components/ui/Botao";
import { Container } from "@/components/ui/Container";
import { CabecalhoSecao } from "@/components/eleicoes/CabecalhoSecao";
import { CANDIDATAR } from "@/content/eleicoes";

/** Fechamento: os três passos e o canal de envio. */
export function ComoCandidatar() {
  return (
    <section id="candidatar" className="bg-white py-16 lg:py-20">
      <Container>
        <CabecalhoSecao
          eyebrow={CANDIDATAR.eyebrow}
          titulo={CANDIDATAR.titulo}
        />

        <div className="mt-8 rounded-[32px] bg-[linear-gradient(110deg,#210040_0%,#4F17A8_52%,#012F44_100%)] px-8 py-10 text-white lg:rounded-[40px] lg:px-12 lg:py-12">
          <h3 className="text-[22px] font-extrabold lg:text-[26px]">Inscrição em 3 passos</h3>

          <ol className="mt-6 flex flex-col gap-4">
            {CANDIDATAR.passos.map((passo, indice) => (
              <li key={passo} className="flex gap-4">
                <span
                  aria-hidden
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-[15px] font-bold"
                >
                  {indice + 1}
                </span>
                <span className="text-[16px] leading-relaxed text-white/90">{passo}</span>
              </li>
            ))}
          </ol>

          {/* `external` não: `mailto:` abre o cliente de e-mail, não uma aba —
              `target="_blank"` deixaria uma janela vazia para trás. */}
          <Botao href={CANDIDATAR.ctaHref} variante="branco" className="mt-8">
            {CANDIDATAR.ctaLabel}
          </Botao>
        </div>

        <p className="mt-8 rounded-[14px] border-l-4 border-[#FF610F] bg-[#F8F5F0] px-6 py-5 text-[15px] leading-relaxed text-[#5C546E]">
          <strong className="font-bold text-[#200F3B]">Prazo: </strong>
          {CANDIDATAR.prazo}
        </p>
      </Container>
    </section>
  );
}
