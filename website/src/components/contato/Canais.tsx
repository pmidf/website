import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Formulario } from "@/components/contato/Formulario";
import { CANAIS, FORMULARIO } from "@/content/contato";
import { REDES } from "@/content/navegacao";

/**
 * Corpo da página: formulário à esquerda, canais diretos e redes à direita.
 *
 * Os canais existem porque nem todo mundo quer preencher formulário — e
 * porque o e-mail é o caminho que o capítulo de fato monitora.
 */
export function Canais({ assuntoInicial }: { assuntoInicial: string }) {
  return (
    <section className="bg-[#F8F5F0] py-16 lg:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:gap-14">
          <div className="rounded-[24px] bg-white p-6 shadow-[0_2px_10px_rgba(32,15,59,0.08)] lg:rounded-[32px] lg:p-10">
            <h2 className="text-[24px] font-extrabold leading-tight text-[#200F3B] lg:text-[30px]">
              {FORMULARIO.titulo}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#5C546E] lg:text-[16px]">
              {FORMULARIO.descricao}
            </p>

            <div className="mt-8">
              <Formulario assuntoInicial={assuntoInicial} />
            </div>
          </div>

          <aside className="flex flex-col gap-5">
            {CANAIS.map((canal) => {
              const corpo = (
                <>
                  <h3 className="text-[16px] font-bold text-[#200F3B]">{canal.titulo}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#5C546E]">
                    {canal.descricao}
                  </p>
                </>
              );

              const caixa =
                "block rounded-[20px] bg-white p-6 shadow-[0_2px_10px_rgba(32,15,59,0.08)]";

              if (!canal.href) {
                return (
                  <div key={canal.titulo} className={caixa}>
                    {corpo}
                  </div>
                );
              }

              // `mailto:` e destinos externos (WhatsApp) não são rotas do app —
              // só os links internos passam pelo <Link>, que prefetcha e navega
              // no cliente.
              if (canal.externo || canal.href.startsWith("mailto:")) {
                return (
                  <a
                    key={canal.titulo}
                    href={canal.href}
                    {...(canal.externo
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={`${caixa} transition hover:shadow-[0_8px_20px_rgba(32,15,59,0.14)]`}
                  >
                    {corpo}
                  </a>
                );
              }

              return (
                <Link
                  key={canal.titulo}
                  href={canal.href}
                  className={`${caixa} transition hover:shadow-[0_8px_20px_rgba(32,15,59,0.14)]`}
                >
                  {corpo}
                </Link>
              );
            })}

            <div className="rounded-[20px] bg-white p-6 shadow-[0_2px_10px_rgba(32,15,59,0.08)]">
              <h3 className="text-[16px] font-bold text-[#200F3B]">Redes sociais</h3>
              <ul className="mt-4 flex gap-4">
                {REDES.map((rede) => (
                  <li key={rede.nome}>
                    <a
                      href={rede.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={rede.nome}
                      className="block text-[#200F3B] transition hover:text-[#FF610F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#371075]"
                    >
                      <rede.Icone aria-hidden className="h-6 w-6" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
