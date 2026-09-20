import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";

import { Botao } from "@/components/ui/Botao";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TituloSecao } from "@/components/ui/TituloSecao";
import { EVENTO_DESTAQUE } from "@/content/eventos";

/**
 * Página do 5º DGPIS 2026.
 *
 * Landing page dedicada de uma edição específica de evento — o mesmo padrão
 * de `(site)/maximize`, mas aninhada em `/eventos` porque o DGPIS é uma
 * edição anual do capítulo, não um programa contínuo. A trilha (`content/rotas.ts`)
 * é o que a coloca "no submenu de Eventos": aparece como
 * Início › Eventos e Programas › 5º DGPIS 2026, e a URL espelha isso.
 *
 * A inscrição em si acontece no Sympla — aqui é só a página de conteúdo rico
 * que a Sympla não tem espaço para mostrar (rodas de conversa, programação,
 * como apoiar). Ver a nota em `content/eventos.ts` sobre por que a agenda não
 * cria mais um link interno por evento: este arquivo é publicado de propósito,
 * não um placeholder — o link para ele deve ser sempre válido.
 */
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-titulo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-corpo",
  display: "swap",
});

const SYMPLA_HREF =
  "https://www.sympla.com.br/evento/5-dgpis-dia-de-gestao-de-projetos-de-impacto-social/3586270";

export const metadata: Metadata = {
  title: "5º DGPIS 2026 — Caminhos para o Impacto",
  description:
    "5º Dia de Gestão de Projetos de Impacto Social (DGPIS), promovido pelo PMI-DF. 18 de dezembro de 2026, em Brasília/DF. Evento presencial e gratuito, com inscrição prévia.",
  alternates: { canonical: "/eventos/dgpis-2026" },
};

const ESTATISTICAS = [
  { numero: "2", legenda: "Palestras" },
  { numero: "4", legenda: "Rodas de conversa", cor: "text-[#FF610F]" },
  { numero: "8", legenda: "Organizações convidadas" },
  { numero: "100", legenda: "Participantes", cor: "text-[#FF610F]" },
];

const PUBLICO = [
  { icone: "👥", texto: "Lideranças e equipes de OSCs, ONGs e institutos" },
  {
    icone: "📋",
    texto: "Profissionais de gerenciamento de projetos e voluntários do PMI-DF",
  },
  { icone: "🏛️", texto: "Agentes públicos e gestores de políticas sociais" },
  { icone: "💰", texto: "Profissionais de ESG e investimento social privado" },
  { icone: "🎓", texto: "Estudantes e jovens lideranças" },
];

const PROGRAMACAO = [
  { hora: "08h00", texto: "Credenciamento e café da manhã" },
  { hora: "09h00", texto: "Abertura institucional" },
  { hora: "09h15", texto: "Palestra de abertura", destaque: true },
  { hora: "10h00", texto: "Roda 1 — Gente que faz acontecer" },
  { hora: "11h00", texto: "Roda 2 — Acesso à tecnologia" },
  { hora: "12h00", texto: "Almoço e networking dirigido" },
  { hora: "13h30", texto: "Roda 3 — Mostrar o que se faz" },
  { hora: "14h30", texto: "Roda 4 — Educação, cultura e geração de renda" },
  { hora: "15h20", texto: "Palestra de encerramento", destaque: true },
  { hora: "15h50", texto: "Encerramento institucional" },
  { hora: "16h00", texto: "Café da tarde e networking" },
];

const RODAS = [
  {
    numero: "Roda 1",
    titulo: "Gente que faz acontecer",
    descricao:
      "Papéis claros, rotatividade de equipe e voluntariado, transferência de conhecimento e prevenção de sobrecarga.",
  },
  {
    numero: "Roda 2",
    titulo: "Acesso à tecnologia",
    descricao:
      "Tecnologia e inteligência artificial acessíveis para orçamento curto: o que usar, o que evitar e como começar.",
  },
  {
    numero: "Roda 3",
    titulo: "Mostrar o que se faz",
    descricao:
      "Indicadores, evidência de impacto e prestação de contas a financiadores, editais e conselho.",
  },
  {
    numero: "Roda 4",
    titulo: "Educação, cultura e geração de renda",
    descricao:
      "Projetos que mudam trajetórias: desenho, continuidade e mensuração de resultados de longo prazo.",
  },
];

const INGRESSOS = [
  {
    tag: "Recomendado",
    titulo: "Profissional / Voluntário 3º Setor",
    preco: "Grátis",
    ctaVariante: "escuro" as const,
    destaque: true,
  },
  {
    tag: "Comunidade",
    titulo: "Comunidade Geral",
    preco: "R$ 119,90",
    parcela: "em até 12x de R$ 12,40",
    ctaVariante: "contorno-escuro" as const,
    destaque: false,
  },
];

const APOIO = [
  {
    titulo: "Patrocínio",
    descricao: "A partir de R$ 5.500, com contrapartidas de marca no evento e na comunicação.",
  },
  {
    titulo: "Parceria por permuta",
    descricao:
      "A empresa custeia diretamente um item de despesa do evento, como alimentação, material gráfico ou os kits dos participantes.",
  },
];

export default function Dgpis2026Page() {
  return (
    <div
      className={`${archivo.variable} ${inter.variable} min-h-screen bg-[#F8F5F0] font-[family-name:var(--font-corpo)]`}
    >
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1F0942] pb-24 pt-14 text-center lg:pb-32 lg:pt-16">
        {/* Bolinhas decorativas, no mesmo espírito do protótipo original: uma
            forma grande roxa e uma laranja ancoradas nos cantos, e um ponto
            ciano solto no meio — todas atrás do conteúdo e fora do fluxo de
            leitura. */}
        <span
          aria-hidden
          className="pointer-events-none absolute -top-28 -right-28 h-72 w-72 rounded-full bg-[#5B2B82] opacity-90 lg:-top-36 lg:-right-40 lg:h-[420px] lg:w-[420px]"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -right-24 h-72 w-72 rounded-full bg-[#FF610F] lg:-bottom-56 lg:-right-32 lg:h-[420px] lg:w-[420px]"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute right-[20%] top-[62%] hidden h-[90px] w-[90px] rounded-full bg-[#05BFE0] md:block"
        />

        <Container gutter="amplo" className="relative z-10 flex flex-col items-center">
          <Eyebrow className="text-[#05BFE0]">
            Dia de Gestão de Projetos de Impacto Social · 5ª edição
          </Eyebrow>

          <h1 className="mt-5 max-w-[860px] font-[family-name:var(--font-titulo)] text-[36px] font-extrabold leading-[1.08] text-white md:text-[48px] lg:text-[58px]">
            Caminhos para o Impacto
          </h1>

          <p className="mt-5 max-w-[640px] text-[17px] leading-relaxed text-white/75 lg:text-[20px]">
            Como organizações sociais transformam causa em projeto e projeto em resultado.
          </p>

          <p className="mt-9 text-[17px] font-semibold text-white lg:text-[19px]">
            18 de dezembro de 2026 · 08h às 16h30 · Brasília/DF
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Botao href={SYMPLA_HREF} external variante="branco">
              Quero me inscrever
            </Botao>
            <Botao href="#programacao" variante="contorno-claro">
              Ver programação
            </Botao>
          </div>
        </Container>
      </section>

      {/* Sobre */}
      <section className="relative z-10 -mt-12 rounded-t-[32px] bg-[#F8F5F0] pt-14 pb-16 lg:-mt-16 lg:rounded-t-[50px] lg:pt-20 lg:pb-20">
        <Container gutter="amplo">
          <Eyebrow>Sobre o evento</Eyebrow>
          <TituloSecao className="mt-4 font-[family-name:var(--font-titulo)] font-extrabold leading-[1.18] text-[#200F3B]">
            Método de gestão para quem já faz a diferença
          </TituloSecao>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div className="flex flex-col gap-5">
              <p className="text-[16px] leading-relaxed text-[#5C546E] lg:text-[18px]">
                Organizações sociais executam projetos todos os dias, quase sempre sem usar esse
                vocabulário. Fazem isso sob prazos apertados, equipes reduzidas e financiamento
                incerto. O que costuma faltar não é causa nem dedicação: é{" "}
                <strong className="text-[#200F3B]">método de gestão e evidência de resultado</strong>.
              </p>
              <p className="text-[16px] leading-relaxed text-[#5C546E] lg:text-[18px]">
                O Dia de Gestão de Projetos de Impacto Social existe para reduzir essa distância.
                Na quinta edição, o formato central é a{" "}
                <strong className="text-[#200F3B]">roda de conversa</strong>: duas organizações
                sociais dividem a mesa com uma moderação e trocam prática, não teoria — o que
                funcionou, o que não funcionou e o que fariam diferente.
              </p>
              <p className="text-[16px] leading-relaxed text-[#5C546E] lg:text-[18px]">
                Evento <strong className="text-[#200F3B]">presencial e gratuito</strong>, com
                inscrição prévia. Vagas limitadas.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {ESTATISTICAS.map((item) => (
                <div
                  key={item.legenda}
                  className="rounded-[14px] border border-[#200F3B]/10 bg-white px-5 py-6 text-center shadow-[0_2px_10px_rgba(32,15,59,0.06)]"
                >
                  <p
                    className={`font-[family-name:var(--font-titulo)] text-[34px] font-extrabold ${item.cor ?? "text-[#200F3B]"}`}
                  >
                    {item.numero}
                  </p>
                  <p className="mt-1 text-[13px] text-[#5C546E]">{item.legenda}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Para quem é */}
      <section className="bg-white py-16 lg:py-20">
        <Container gutter="amplo">
          <Eyebrow>Para quem é</Eyebrow>
          <TituloSecao className="mt-4 font-[family-name:var(--font-titulo)] font-extrabold leading-[1.18] text-[#200F3B]">
            Um dia pensado para quem transforma causa em resultado
          </TituloSecao>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {PUBLICO.map((item) => (
              <div
                key={item.texto}
                className="rounded-[14px] bg-[#F8F5F0] px-5 py-7 text-center shadow-[0_2px_10px_rgba(32,15,59,0.06)]"
              >
                <span
                  aria-hidden
                  className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#1F0942] text-[19px]"
                >
                  {item.icone}
                </span>
                <p className="mt-4 text-[14px] font-semibold leading-[1.4] text-[#200F3B]">
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Programação */}
      <section id="programacao" className="scroll-mt-24 bg-[#F8F5F0] py-16 lg:py-20">
        <Container gutter="amplo">
          <Eyebrow>Programação</Eyebrow>
          <TituloSecao className="mt-4 font-[family-name:var(--font-titulo)] font-extrabold leading-[1.18] text-[#200F3B]">
            18 de dezembro de 2026 · sexta-feira
          </TituloSecao>
          <p className="mt-4 max-w-[680px] text-[16px] leading-relaxed text-[#5C546E] lg:text-[18px]">
            Café da manhã, almoço e café da tarde estão incluídos para todos os participantes.
          </p>

          <div className="mt-10 max-w-[720px]">
            {PROGRAMACAO.map((item, indice) => (
              <div key={item.hora} className="grid grid-cols-[88px_24px_1fr] gap-1">
                <p
                  className={`py-3 text-[14px] font-bold ${
                    item.destaque ? "text-[#200F3B]" : "text-[#4F17A8]"
                  }`}
                >
                  {item.hora}
                </p>

                <div className="relative flex justify-center">
                  {indice !== PROGRAMACAO.length - 1 && (
                    <span className="absolute top-[22px] h-[calc(100%+4px)] w-[2px] bg-[#200F3B]/10" />
                  )}
                  <span
                    className={`relative z-10 mt-[18px] block h-3 w-3 shrink-0 rounded-full ${
                      item.destaque ? "bg-[#FF610F]" : "bg-[#05BFE0]"
                    }`}
                  />
                </div>

                <p
                  className={`py-3 text-[15px] leading-[1.4] ${
                    item.destaque ? "font-bold text-[#200F3B]" : "text-[#5C546E]"
                  }`}
                >
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Rodas de conversa */}
      <section id="rodas" className="scroll-mt-24 bg-white py-16 lg:py-20">
        <Container gutter="amplo">
          <Eyebrow>As quatro rodas de conversa</Eyebrow>
          <TituloSecao className="mt-4 font-[family-name:var(--font-titulo)] font-extrabold leading-[1.18] text-[#200F3B]">
            Prática compartilhada, não teoria
          </TituloSecao>
          <p className="mt-4 max-w-[720px] text-[16px] leading-relaxed text-[#5C546E] lg:text-[18px]">
            Cada roda tem 50 minutos, com uma moderação e duas organizações sociais convidadas, e
            reserva tempo para perguntas da plateia.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {RODAS.map((roda) => (
              <article
                key={roda.numero}
                className="rounded-[16px] border border-[#200F3B]/10 bg-[#F8F5F0] p-7 shadow-[0_2px_10px_rgba(32,15,59,0.06)]"
              >
                <Eyebrow className="text-[#FF610F]">{roda.numero}</Eyebrow>
                <h3 className="mt-3 text-[21px] font-semibold leading-[1.3] text-[#200F3B]">
                  {roda.titulo}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-[#5C546E]">
                  {roda.descricao}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Ingressos */}
      <section id="ingressos" className="scroll-mt-24 bg-[#F8F5F0] py-16 lg:py-20">
        <Container gutter="amplo">
          <Eyebrow>Ingressos</Eyebrow>
          <TituloSecao className="mt-4 font-[family-name:var(--font-titulo)] font-extrabold leading-[1.18] text-[#200F3B]">
            Inscrições até 18/12/2026
          </TituloSecao>
          <p className="mt-4 max-w-[680px] text-[16px] leading-relaxed text-[#5C546E] lg:text-[18px]">
            100 vagas. Café da manhã, almoço e café da tarde inclusos.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {INGRESSOS.map((ingresso) => (
              <article
                key={ingresso.titulo}
                className={`flex flex-col rounded-[16px] bg-white p-8 shadow-[0_3px_12px_rgba(32,15,59,0.1)] ${
                  ingresso.destaque ? "border-2 border-[#FF610F]" : "border border-[#200F3B]/10"
                }`}
              >
                <span className="self-start rounded-full bg-[#F8F5F0] px-3 py-[6px] text-[11px] font-bold uppercase tracking-[0.06em] text-[#200F3B]">
                  {ingresso.tag}
                </span>
                <h3 className="mt-4 text-[19px] font-semibold text-[#200F3B]">
                  {ingresso.titulo}
                </h3>
                <p className="mt-4 font-[family-name:var(--font-titulo)] text-[32px] font-extrabold text-[#200F3B]">
                  {ingresso.preco}
                </p>
                {ingresso.parcela && (
                  <p className="mt-1 text-[13px] text-[#5C546E]">{ingresso.parcela}</p>
                )}
                <p className="mt-3 text-[13px] text-[#5C546E]">Inscrições até 18/12/2026</p>
                <Botao
                  href={SYMPLA_HREF}
                  external
                  variante={ingresso.ctaVariante}
                  className="mt-6 self-start"
                >
                  Inscrever-se
                </Botao>
              </article>
            ))}
          </div>

          <p className="mt-8 max-w-[760px] text-[13.5px] leading-relaxed text-[#5C546E]">
            Inscrições realizadas pela plataforma Sympla. Cancelamentos são aceitos em até 7 dias
            após a compra, desde que solicitados até 48 horas antes do evento.
          </p>
        </Container>
      </section>

      {/* Apoie */}
      <section id="apoie" className="scroll-mt-24 bg-white py-16 lg:py-20">
        <Container gutter="amplo">
          <Eyebrow>Apoie esta edição</Eyebrow>
          <TituloSecao className="mt-4 font-[family-name:var(--font-titulo)] font-extrabold leading-[1.18] text-[#200F3B]">
            Sua empresa pode apoiar o DGPIS
          </TituloSecao>
          <p className="mt-4 max-w-[720px] text-[16px] leading-relaxed text-[#5C546E] lg:text-[18px]">
            O evento é gratuito para quem participa. É o apoio das empresas que sustenta essa
            gratuidade e garante que organizações sem orçamento de capacitação estejam na sala.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {APOIO.map((item) => (
              <article
                key={item.titulo}
                className="rounded-[16px] bg-[#F8F5F0] p-7 shadow-[0_2px_10px_rgba(32,15,59,0.06)]"
              >
                <h3 className="text-[17px] font-semibold text-[#200F3B]">{item.titulo}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-[#5C546E]">
                  {item.descricao}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-6 rounded-[16px] bg-[#1F0942] px-8 py-7">
            <div>
              <h3 className="text-[18px] font-semibold text-white">
                Fale sobre apoio com Matheus Rocha
              </h3>
              <p className="mt-1 text-[14.5px] text-white/70">Presidente do PMI Distrito Federal</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:matheus.rocha@pmidf.org"
                className="rounded-full bg-white/10 px-5 py-[10px] text-[14px] font-medium text-white transition hover:bg-white/20"
              >
                matheus.rocha@pmidf.org
              </a>
              <a
                href="tel:+5561993514145"
                className="rounded-full bg-white/10 px-5 py-[10px] text-[14px] font-medium text-white transition hover:bg-white/20"
              >
                (61) 99351-4145
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Local */}
      <section className="bg-[#F8F5F0] py-16 lg:py-20">
        <Container gutter="amplo">
          <Eyebrow>Local</Eyebrow>
          <TituloSecao className="mt-4 mb-8 font-[family-name:var(--font-titulo)] font-extrabold leading-[1.18] text-[#200F3B]">
            Brasília, DF
          </TituloSecao>

          <div className="flex flex-col items-start gap-5 rounded-[16px] bg-white p-8 shadow-[0_3px_12px_rgba(32,15,59,0.1)] sm:flex-row sm:items-center">
            <span
              aria-hidden
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#F8F5F0] text-[24px]"
            >
              📍
            </span>
            <div>
              <h3 className="text-[18px] font-semibold text-[#200F3B]">Local a definir</h3>
              <p className="mt-1 text-[14.5px] leading-relaxed text-[#5C546E]">
                O endereço completo será divulgado em breve nas comunicações oficiais do PMI-DF e
                na página do evento no Sympla.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Cross-promo Summit — reaproveita o gradiente já usado no banner do
          Summit na home, para o mesmo evento sempre ler com a mesma cor. */}
      <section className="bg-white py-16 lg:py-20">
        <Container gutter="amplo">
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-[20px] bg-[linear-gradient(110deg,#210040_0%,#4F17A8_55%,#012F44_100%)] p-8 lg:p-10">
            <div className="max-w-[560px]">
              <Eyebrow className="text-[#05BFE0]">{EVENTO_DESTAQUE.chip}</Eyebrow>
              <h3 className="mt-2 text-[20px] font-bold text-white lg:text-[22px]">
                {EVENTO_DESTAQUE.titulo}
              </h3>
              <p className="mt-1 text-[14px] font-medium text-white/80">
                {EVENTO_DESTAQUE.meta}
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-white/75">
                {EVENTO_DESTAQUE.descricao}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Botao href={EVENTO_DESTAQUE.inscricaoHref} external variante="branco">
                Inscreva-se no Sympla
              </Botao>
              <Botao href="/eventos" variante="contorno-claro">
                Ver agenda completa
              </Botao>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA final */}
      <section className="bg-[#1F0942] py-16 text-center lg:py-20">
        <Container gutter="amplo">
          <h2 className="font-[family-name:var(--font-titulo)] text-[28px] font-extrabold leading-[1.18] text-white lg:text-[38px]">
            Garanta sua vaga no 5º DGPIS
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[16px] text-white/75">
            18 de dezembro de 2026 · Brasília/DF · Presencial e gratuito
          </p>
          <Botao href={SYMPLA_HREF} external variante="branco" className="mt-8">
            Quero me inscrever
          </Botao>
        </Container>
      </section>
    </div>
  );
}
