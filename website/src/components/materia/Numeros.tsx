import { cn } from "@/lib/utils";
import type { NumeroMateria } from "@/types";

/**
 * Painel "em números": os dados que o texto traz espalhados, reunidos para
 * leitura de relance. Não substitui nada — os parágrafos seguem inteiros.
 *
 * O primeiro tile é escuro para dar ponto de entrada ao olho; os demais ficam
 * no creme do site. O prefixo ("mais de", "quase") fica pequeno acima do
 * número, mas é lido em sequência com ele: "mais de 650 participantes".
 */
export function Numeros({ titulo, itens }: { titulo: string; itens: NumeroMateria[] }) {
  return (
    <section aria-labelledby="em-numeros" className="mx-auto mt-12 max-w-[720px]">
      <h2
        id="em-numeros"
        className="font-[family-name:var(--font-corpo)] text-[13px] font-semibold uppercase tracking-[1.6px] text-[#FF610F]"
      >
        {titulo}
      </h2>

      <ul className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3">
        {itens.map((item, indice) => {
          const destaque = indice === 0;

          return (
            <li
              key={item.rotulo}
              className={cn(
                "flex flex-col rounded-[16px] p-5 lg:p-6",
                destaque ? "bg-[#1F0942]" : "bg-[#F8F5F0]",
              )}
            >
              <span
                aria-hidden={!item.prefixo}
                className={cn(
                  "min-h-[18px] text-[12px] font-semibold uppercase tracking-[1.2px]",
                  destaque ? "text-white/70" : "text-[#5C546E]",
                )}
              >
                {item.prefixo ?? " "}
              </span>
              <span
                className={cn(
                  "mt-1 font-[family-name:var(--font-titulo)] text-[36px] font-extrabold leading-none lg:text-[44px]",
                  destaque ? "text-[#05BFE0]" : "text-[#4F17A8]",
                )}
              >
                {item.valor}
              </span>
              <span
                className={cn(
                  "mt-2 text-[14px] leading-snug",
                  destaque ? "text-white/85" : "text-[#5C546E]",
                )}
              >
                {item.rotulo}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
