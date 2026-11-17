import { FotoCitacao } from "@/components/materia/FotoCitacao";
import { Numeros } from "@/components/materia/Numeros";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import type { BlocoMateria } from "@/types";

/**
 * Corpo da matéria, bloco a bloco.
 *
 * Duas larguras: o texto corre em 720px (65–75 caracteres por linha, a faixa
 * confortável de leitura) e a mídia abre para os 1040px da foto principal.
 * Cada bloco traz a própria margem de cima; o primeiro zera a sua.
 */
export function Corpo({ blocos }: { blocos: BlocoMateria[] }) {
  return (
    <div className="bg-white pt-10 lg:pt-14">
      <Container gutter="amplo" className="[&>*:first-child]:mt-0">
        {blocos.map((bloco, indice) => {
          switch (bloco.tipo) {
            case "paragrafo":
              return (
                <p
                  key={indice}
                  className={cn(
                    "mx-auto mt-6 max-w-[720px]",
                    bloco.lead
                      ? "text-[20px] leading-[1.65] text-[#200F3B] lg:text-[21px]"
                      : "text-[17px] leading-[1.75] text-[#200F3B]/85 lg:text-[18px]",
                  )}
                >
                  {bloco.texto}
                </p>
              );

            case "secao":
              return (
                <h2
                  key={indice}
                  id={bloco.id}
                  className="mx-auto mt-14 max-w-[720px] scroll-mt-32 font-[family-name:var(--font-titulo)] text-[26px] font-extrabold leading-[1.2] text-[#200F3B] lg:text-[30px]"
                >
                  <span
                    aria-hidden
                    className="mb-4 block h-1 w-10 rounded-full bg-[linear-gradient(90deg,#1F0942_0%,#FF610F_50%,#1AC7FF_100%)]"
                  />
                  {bloco.titulo}
                </h2>
              );

            case "numeros":
              return <Numeros key={indice} titulo={bloco.titulo} itens={bloco.itens} />;

            case "fotoCitacao":
              return <FotoCitacao key={indice} foto={bloco.foto} citacao={bloco.citacao} />;
          }
        })}
      </Container>
    </div>
  );
}
