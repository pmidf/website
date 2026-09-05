import Image from "next/image";

import { Botao } from "@/components/ui/Botao";
import { Container } from "@/components/ui/Container";
import { assets } from "@/content/assets";
import { EVENTO_DESTAQUE } from "@/content/eventos";

/**
 * Banner do evento principal, subindo sobre o Hero com o topo arredondado.
 *
 * O fundo é uma arte única: gradiente e círculos decorativos já vêm no
 * arquivo, então não há gradiente CSS nem imagens de ornamento posicionadas
 * em absoluto — o que também resolve o recorte no mobile de graça.
 *
 * A arte foi aparada para ser um retângulo opaco de ponta a ponta. O export
 * original trazia margem transparente, sombra e cantos arredondados embutidos:
 * com `object-cover` dentro de um contêiner que também arredonda, a sombra
 * era esticada para dentro do cartão e os cantos da arte apareciam recortados
 * por cima dos cantos do contêiner. Cantos e sombra agora são só CSS.
 */
export function EventoDestaque() {
  return (
    <section className="relative z-10 -mt-12 rounded-t-[32px] bg-[#F8F5F0] pt-10 lg:-mt-16 lg:rounded-t-[50px] lg:pt-[33px]">
      <Container gutter="amplo">
        <div className="relative isolate overflow-hidden rounded-[24px] shadow-[0_4px_16px_rgba(32,15,59,0.18)] px-6 py-10 md:px-10 md:py-12 lg:px-14 lg:py-12">
          <Image
            src={assets.eventos.banner}
            alt=""
            aria-hidden
            fill
            sizes="(max-width: 1280px) 100vw, 1140px"
            className="-z-10 object-cover"
          />

          <div className="flex max-w-[640px] flex-col items-start gap-4">
            <span className="rounded-full border border-white/45 bg-white/20 px-[14px] py-[6px] text-[11px] font-semibold uppercase tracking-[1.4px] text-white">
              {EVENTO_DESTAQUE.chip}
            </span>

            <h2 className="font-[family-name:var(--font-titulo)] text-[30px] font-extrabold leading-[1.12] text-white md:text-[38px] lg:text-[44px]">
              {EVENTO_DESTAQUE.titulo}
            </h2>

            <p className="text-[15px] font-medium leading-[1.5] text-white">
              {EVENTO_DESTAQUE.meta}
            </p>

            <p className="text-[16px] leading-[1.58] text-white">{EVENTO_DESTAQUE.descricao}</p>

            <div className="mt-2 flex flex-wrap gap-[14px]">
              <Botao href={EVENTO_DESTAQUE.inscricaoHref} external variante="branco">
                Inscreva-se no Sympla
              </Botao>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
