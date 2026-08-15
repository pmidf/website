"use client";

import { useMemo, useState } from "react";

import { CardEvento } from "@/components/eventos/CardEvento";
import { FiltrosAgenda } from "@/components/eventos/FiltrosAgenda";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TituloSecao } from "@/components/ui/TituloSecao";
import {    
  EVENTOS_POR_PAGINA,
  TODAS_CATEGORIAS,
} from "@/content/eventos";
import type { EventoAgenda,   FormatoEvento } from "@/types";

/**
 * Agenda filtrável — a única parte interativa da página, e por isso o único
 * Client Component. As demais seções continuam renderizando no servidor.
 *
 * Filtrar volta a paginação ao início: manter "carregar mais" acumulado entre
 * buscas mostraria uma contagem que não corresponde ao resultado atual.
 */
type AgendaProps = {
  eventos: EventoAgenda[];
};

export function Agenda({ eventos }: AgendaProps) {
  const [busca, setBusca] = useState("");
  const [formato, setFormato] = useState<FormatoEvento | "Todos">("Todos");
  const [categoria, setCategoria] = useState(TODAS_CATEGORIAS);
  const [visiveis, setVisiveis] = useState(EVENTOS_POR_PAGINA);

  const categorias = useMemo(
    () => [
      TODAS_CATEGORIAS,
      ...Array.from(new Set(eventos.map((e) => e.categoria))),
    ],
    [eventos],
  );

  const filtrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();

    return eventos.filter((evento) => {
      const casaBusca =
        termo === "" ||
        evento.titulo.toLowerCase().includes(termo) ||
        evento.descricao.toLowerCase().includes(termo) ||
        evento.categoria.toLowerCase().includes(termo) ||
        evento.local.toLowerCase().includes(termo);

      const casaFormato = formato === "Todos" || evento.formato === formato;
      const casaCategoria =
        categoria === TODAS_CATEGORIAS || evento.categoria === categoria;

      return casaBusca && casaFormato && casaCategoria;
    });
  }, [eventos, busca, formato, categoria]);

  const listaVisivel = filtrados.slice(0, visiveis);
  const temMais = visiveis < filtrados.length;

  return (
    <section id="agenda" className="scroll-mt-24 bg-[#F8F5F0] py-14 lg:py-20">
      <Container gutter="amplo">
        <div className="flex max-w-[760px] flex-col gap-[14px]">
          <Eyebrow>Agenda do capítulo</Eyebrow>
          <TituloSecao className="font-[family-name:var(--font-titulo)] font-extrabold leading-[1.18] text-[#200F3B]">
            Próximos eventos
          </TituloSecao>
          <p className="text-[16px] leading-[1.58] text-[#5C546E] lg:text-[18px]">
            Toda a agenda do PMI-DF em um só lugar, sincronizada com o Sympla. Filtre por formato
            ou categoria e inscreva-se em poucos cliques.
          </p>
        </div>

        <FiltrosAgenda
          busca={busca}
          aoBuscar={(valor) => {
            setBusca(valor);
            setVisiveis(EVENTOS_POR_PAGINA);
          }}
          formato={formato}
          aoTrocarFormato={(valor) => {
            setFormato(valor);
            setVisiveis(EVENTOS_POR_PAGINA);
          }}
          categoria={categoria}
          aoTrocarCategoria={(valor) => {
            setCategoria(valor);
            setVisiveis(EVENTOS_POR_PAGINA);
          }}
          categorias={categorias}
        />

        {listaVisivel.length > 0 ? (
          <div className="mt-8 grid gap-[27px] sm:grid-cols-2 lg:grid-cols-3">
            {listaVisivel.map((evento) => (
              <CardEvento key={evento.id} evento={evento} />
            ))}
          </div>
        ) : (
          <p className="mt-12 text-center text-[16px] text-[#5C546E]">
            Nenhum evento com esses filtros. Limpe a busca ou escolha outro formato.
          </p>
        )}

        <div className="mt-10 flex flex-col items-center gap-4">
          {temMais && (
            <button
              type="button"
              onClick={() => setVisiveis((v) => v + EVENTOS_POR_PAGINA)}
              className="rounded-full bg-[linear-gradient(90deg,rgba(31,9,66,0.6)_0%,rgba(255,97,15,0.6)_50%,rgba(26,199,255,0.6)_100%)] px-[30px] py-[11px] text-[15px] text-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition hover:brightness-110"
            >
              Carregar mais eventos
            </button>
          )}
          <p className="text-center text-[14px] text-[#5C546E]">
            Agenda sincronizada automaticamente com o Sympla. As inscrições e pagamentos são
            concluídos na plataforma.
          </p>
        </div>
      </Container>
    </section>
  );
}
