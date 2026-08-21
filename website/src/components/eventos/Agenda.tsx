"use client";

import { useCallback, useMemo, useRef, useState } from "react";

import { CardEvento } from "@/components/eventos/CardEvento";
import { FiltrosAgenda } from "@/components/eventos/FiltrosAgenda";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TituloSecao } from "@/components/ui/TituloSecao";
import { EVENTOS_POR_PAGINA, TODAS_CATEGORIAS } from "@/content/eventos";
import type { PaginaEventos } from "@/lib/sympla";
import type { EventoAgenda, FormatoEvento } from "@/types";

/**
 * Agenda filtrável — a única parte interativa da página, e por isso o único
 * Client Component.
 *
 * ## Como a paginação funciona
 *
 * O servidor renderiza os primeiros `EVENTOS_POR_PAGINA` eventos; o resto vem
 * sob demanda de `/api/eventos`, que lê do cache e não da Sympla.
 *
 * Filtrar tem uma sutileza: buscar dentro do que já foi carregado esconderia
 * eventos que existem mas ainda não vieram — a busca acharia menos do que
 * deveria, sem nenhum sinal para o usuário. Então a primeira interação com
 * qualquer filtro puxa o restante da agenda de uma vez (`garantirAgendaCompleta`)
 * e, a partir daí, filtrar é instantâneo e correto. Como a agenda de um capítulo
 * é pequena, isso custa uma requisição — cacheada no CDN — uma única vez.
 */
type AgendaProps = {
  /** Primeira página, renderizada no servidor. */
  eventosIniciais: EventoAgenda[];
  /** Tamanho da agenda inteira, para saber quando parar de pedir mais. */
  total: number;
  status: PaginaEventos["status"];
};

/** Uma página maior que a da UI: puxar "o resto" não precisa ir de 6 em 6. */
const LOTE_COMPLETO = 100;

export function Agenda({ eventosIniciais, total, status }: AgendaProps) {
  const [eventos, setEventos] = useState(eventosIniciais);
  const [visiveis, setVisiveis] = useState(EVENTOS_POR_PAGINA);
  const [carregando, setCarregando] = useState(false);
  const [erroCarregamento, setErroCarregamento] = useState(false);

  const [busca, setBusca] = useState("");
  const [formato, setFormato] = useState<FormatoEvento | "Todos">("Todos");
  const [categoria, setCategoria] = useState(TODAS_CATEGORIAS);

  /**
   * Guarda a busca em andamento para que dois gatilhos simultâneos (digitar
   * enquanto o "Carregar mais" está no ar) compartilhem a mesma requisição em
   * vez de disparar duas.
   */
  const requisicaoEmVoo = useRef<Promise<EventoAgenda[]> | null>(null);

  const carregarLote = useCallback(
    async (offset: number, limit: number) => {
      if (requisicaoEmVoo.current) return requisicaoEmVoo.current;

      setCarregando(true);
      setErroCarregamento(false);

      const promessa = (async () => {
        try {
          // A barra final não é estilo: `trailingSlash: true` no next.config
          // faz `/api/eventos` responder 308, e cada "Ver mais" pagaria um
          // redirect antes de chegar ao cache do CDN.
          const resposta = await fetch(
            `/api/eventos/?offset=${offset}&limit=${limit}`,
          );

          if (!resposta.ok) throw new Error(`HTTP ${resposta.status}`);

          const pagina = (await resposta.json()) as PaginaEventos;

          // Concatenar por offset é seguro porque a ordem no servidor é
          // estável (start_date asc) dentro de uma janela de revalidação.
          setEventos((atuais) => [...atuais, ...pagina.eventos]);

          return pagina.eventos;
        } catch {
          setErroCarregamento(true);

          return [];
        } finally {
          setCarregando(false);
          requisicaoEmVoo.current = null;
        }
      })();

      requisicaoEmVoo.current = promessa;

      return promessa;
    },
    [],
  );

  /** Puxa tudo o que falta, para que os filtros enxerguem a agenda inteira. */
  const garantirAgendaCompleta = useCallback(() => {
    if (eventos.length >= total || carregando) return;

    void carregarLote(eventos.length, LOTE_COMPLETO);
  }, [carregarLote, carregando, eventos.length, total]);

  /** Todo filtro reseta a paginação: manter o contador antigo mostraria uma
   *  contagem que não corresponde ao resultado atual. */
  const aoFiltrar = useCallback(
    <T,>(setter: (valor: T) => void) =>
      (valor: T) => {
        setter(valor);
        setVisiveis(EVENTOS_POR_PAGINA);
        garantirAgendaCompleta();
      },
    [garantirAgendaCompleta],
  );

  const categorias = useMemo(
    () => [
      TODAS_CATEGORIAS,
      ...Array.from(new Set(eventos.map((e) => e.categoria))).sort((a, b) =>
        a.localeCompare(b, "pt-BR"),
      ),
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

  /** Há mais para revelar do que já está carregado, ou mais para buscar. */
  const temMais = visiveis < filtrados.length || eventos.length < total;

  const filtroAtivo =
    busca.trim() !== "" || formato !== "Todos" || categoria !== TODAS_CATEGORIAS;

  async function carregarMais() {
    // Enquanto houver evento já carregado e escondido, revelar não custa rede.
    if (visiveis < filtrados.length) {
      setVisiveis((v) => v + EVENTOS_POR_PAGINA);
      return;
    }

    const novos = await carregarLote(eventos.length, EVENTOS_POR_PAGINA);

    if (novos.length > 0) setVisiveis((v) => v + novos.length);
  }

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

        {status === "indisponivel" ? (
          <AgendaIndisponivel />
        ) : (
          <>
            <FiltrosAgenda
              busca={busca}
              aoBuscar={aoFiltrar(setBusca)}
              formato={formato}
              aoTrocarFormato={aoFiltrar(setFormato)}
              categoria={categoria}
              aoTrocarCategoria={aoFiltrar(setCategoria)}
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
                {carregando
                  ? "Carregando eventos…"
                  : filtroAtivo
                    ? "Nenhum evento com esses filtros. Limpe a busca ou escolha outro formato."
                    : "Nenhum evento na agenda no momento. Volte em breve."}
              </p>
            )}

            <div className="mt-10 flex flex-col items-center gap-4">
              {temMais && (
                <button
                  type="button"
                  onClick={carregarMais}
                  disabled={carregando}
                  aria-busy={carregando}
                  className="rounded-full bg-[linear-gradient(90deg,rgba(31,9,66,0.6)_0%,rgba(255,97,15,0.6)_50%,rgba(26,199,255,0.6)_100%)] px-[30px] py-[11px] text-[15px] text-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {carregando ? "Carregando…" : "Ver mais eventos"}
                </button>
              )}

              {erroCarregamento && (
                <p role="alert" className="text-center text-[14px] text-[#992905]">
                  Não foi possível carregar mais eventos agora. Tente novamente.
                </p>
              )}

              {/* Aria-live: o número muda por ação do usuário, e quem usa leitor
                  de tela não tem como perceber cards novos aparecendo. */}
              <p aria-live="polite" className="text-center text-[14px] text-[#5C546E]">
                Mostrando {listaVisivel.length} de {filtroAtivo ? filtrados.length : total}{" "}
                {(filtroAtivo ? filtrados.length : total) === 1 ? "evento" : "eventos"}. Agenda
                sincronizada automaticamente com o Sympla — inscrições e pagamentos são concluídos
                na plataforma.
              </p>
            </div>
          </>
        )}
      </Container>
    </section>
  );
}

/**
 * Estado exibido quando a Sympla não respondeu.
 *
 * Deliberadamente não cai em conteúdo de exemplo: um evento fictício numa
 * agenda institucional é pior do que agenda nenhuma.
 */
function AgendaIndisponivel() {
  return (
    <div className="mt-10 rounded-[16px] border border-[#200F3B]/10 bg-white p-8 text-center shadow-[0_2px_10px_rgba(32,15,59,0.06)]">
      <p className="text-[16px] text-[#200F3B]">
        Não foi possível carregar a agenda agora.
      </p>
      <p className="mt-2 text-[15px] text-[#5C546E]">
        Você pode ver todos os eventos do capítulo direto na nossa página do Sympla.
      </p>
      <a
        href="https://www.sympla.com.br/produtor/pmidf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center justify-center rounded-full bg-[#1F0942] px-[26px] py-[11px] text-[15px] font-medium text-white transition hover:bg-[#2A0A5C]"
      >
        Ver eventos no Sympla
      </a>
    </div>
  );
}
