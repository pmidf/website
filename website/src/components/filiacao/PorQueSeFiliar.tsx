import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { TituloSecao } from "@/components/ui/TituloSecao";
import { MOTIVOS } from "@/content/filiacao";

/**
 * Os três motivos, em duas apresentações do mesmo conteúdo.
 *
 * Até `xl` são três cards coloridos empilhados. A partir daí entra a
 * composição do Figma: um canvas fixo de 725 × 690 com as formas sobrepostas
 * e o texto por cima, em coordenadas absolutas.
 *
 * O corte é `xl`, e não `lg`: a composição soma 725 + 24 de gap + 400 da
 * coluna de título = 1149px, todos rígidos. Entre 1024 e 1229px de janela
 * isso não cabia na coluna de conteúdo e vazava para fora da tela.
 *
 * A composição é `aria-hidden` e a lista some só visualmente (`lg:hidden`,
 * não `display:none` no DOM em todos os tamanhos): quem usa leitor de tela
 * recebe a lista semântica em qualquer largura, sem ouvir o texto duas vezes.
 */
export function PorQueSeFiliar() {
  return (
    <section className="relative z-10 -mt-12 rounded-t-[32px] bg-[#F8F5F0] pt-14 shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] lg:-mt-16 lg:rounded-t-[50px] lg:pt-20">
      <Container>
        <div className="xl:flex xl:items-start xl:gap-6">
          <div className="xl:w-[400px] xl:shrink-0 xl:pt-24">
            <TituloSecao className="font-display font-extrabold leading-[1.18] text-[#200F3B]">
              Por que se filiar
            </TituloSecao>
            <p className="mt-2 text-[18px] text-[#200F3B] lg:text-[24px]">
              Três motivos para se filiar agora
            </p>
          </div>

          {/* Mobile e tablet */}
          <ul className="mt-10 grid gap-5 md:grid-cols-3 xl:hidden">
            {MOTIVOS.map((motivo) => (
              <li
                key={motivo.texto}
                className={`rounded-[20px] p-6 text-[17px] leading-relaxed text-[#F8F8F8] ${motivo.cor}`}
              >
                {motivo.texto}
              </li>
            ))}
          </ul>

          {/* Desktop — formas primeiro, texto depois: a ordem no DOM é o que
              define o empilhamento, e o pentágono cobre as outras duas. */}
          <div aria-hidden className="relative hidden h-[690px] w-[725px] shrink-0 xl:block">
            {MOTIVOS.map((motivo) => (
              <Image
                key={motivo.forma.src}
                src={motivo.forma.src}
                alt=""
                width={motivo.forma.largura}
                height={motivo.forma.altura}
                className={`absolute max-w-none ${motivo.forma.classe}`}
              />
            ))}

            {MOTIVOS.map((motivo) => (
              <p
                key={motivo.texto}
                className={`absolute flex items-center text-[24px] leading-tight text-[#F8F8F8] ${motivo.textoClasse}`}
              >
                {motivo.texto}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
