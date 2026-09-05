import type { Metadata } from "next";
import Link from "next/link";
import { Archivo, Inter } from "next/font/google";

import { Container } from "@/components/ui/Container";
import { Botao } from "@/components/ui/Botao";

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

/**
 * Página fora do ar até o lançamento do programa.
 *
 * O arquivo continua aqui de propósito: o link no Header e a entrada no
 * `sitemap.ts` estão comentados, e o `robots` abaixo tira a rota do índice.
 * A URL segue respondendo para revisão interna — para reativar, descomente as
 * duas referências e remova o bloco `robots`.
 */
export const metadata: Metadata = {
  title: "Programa Maximize",
  description:
    "Programa de aceleração de carreira para profissionais de projetos do PMI-DF.",
  alternates: { canonical: "/maximize" },
  robots: { index: false, follow: false },
};

const paraQuem = [
  "Já atua com projetos há pelo menos 3 anos.",
  "Busca uma transição para liderança ou consultoria.",
  "Quer estruturar sua marca profissional.",
  "Precisa de rede qualificada e mentoria dedicada.",
  "Está pronto para se comprometer com um ciclo intensivo.",
];

const etapas = [
  {
    titulo: "Diagnóstico inicial",
    descricao: "Mapeamento de objetivos, gaps e plano individual.",
  },
  {
    titulo: "Mentoria dedicada",
    descricao: "Sessões regulares com mentores sêniores do capítulo.",
  },
  {
    titulo: "Encontros temáticos",
    descricao: "Workshops sobre carreira, negociação, posicionamento e liderança.",
  },
  {
    titulo: "Comunidade fechada",
    descricao: "Grupo restrito de participantes para troca contínua.",
  },
  {
    titulo: "Entrega final",
    descricao: "Apresentação de projeto ou plano de carreira ao final do ciclo.",
  },
];

const diferenciais = [
  {
    titulo: "Curadoria de participantes",
    descricao: "Grupo pequeno, perfil alinhado.",
    cor: "bg-[#1AC7FF]",
  },
  {
    titulo: "Mentores ativos no mercado",
    descricao: "Profissionais em posições sênior e executiva.",
    cor: "bg-[#FF610F]",
  },
  {
    titulo: "Foco em resultado",
    descricao: "Cada ciclo tem meta e entrega.",
    cor: "bg-[#B465FF]",
  },
  {
    titulo: "Conexão com o ecossistema PMI-DF",
    descricao: "Acesso a eventos, empresas parceiras e rede.",
    cor: "bg-[#1AC7FF]",
  },
];

const participacao = [
  {
    label: "Pré-requisito",
    texto: "Ser filiado ao PMI-DF.",
    cor: "text-[#4F17A8]",
  },
  {
    label: "Processo",
    texto: "Inscrição, entrevista, aprovação.",
    cor: "text-[#1AC7FF]",
  },
  {
    label: "Investimento",
    texto: "Definido a cada ciclo, comunicado na abertura das inscrições.",
    cor: "text-[#FF610F]",
  },
];

const depoimentos = [
  {
    chip: "Desenvolvedora Front-end",
    citacao:
      "Participar da comunidade mudou completamente a forma como eu aprendo tecnologia. Além do conhecimento técnico, encontrei pessoas que realmente incentivam meu crescimento profissional e pessoal.",
    nome: "Ana Luiza Martins",
    legenda: "Membro há 2 anos",
    avatar: "bg-[#D4B7F5]",
  },
  {
    chip: "Voluntário de Projetos",
    citacao:
      "Comecei como voluntário buscando experiência prática e hoje já participei de projetos que fortaleceram meu portfólio e minha confiança. O ambiente é colaborativo e acolhedor desde o primeiro contato.",
    nome: "Lucas Costa",
    legenda: "1 ano de atuação",
    avatar: "bg-[#BCEFF6]",
  },
  {
    chip: "UX/UI Designer",
    citacao:
      "A comunidade me ajudou a transformar ideias em projetos reais. Cada evento, workshop e troca com outras pessoas trouxe novas perspectivas para minha carreira na área de tecnologia.",
    nome: "Camila Ferreira",
    legenda: "Participante ativa desde 2023",
    avatar: "bg-[#FFD3C1]",
  },
];

export default function MaximizePage() {
  return (
    <main
      className={`${archivo.variable} ${inter.variable} min-h-screen bg-[#F8F5F0] font-[family-name:var(--font-corpo)] text-[#200F3B]`}
    >
      <section className="bg-[#210040] px-4 py-12 text-center text-white lg:py-14">
        <Container>
          <h1 className="font-[family-name:var(--font-titulo)] text-[34px] font-extrabold leading-tight lg:text-[44px]">
            Programa Maximize
          </h1>

          <p className="mx-auto mt-4 max-w-[780px] text-[16px] leading-relaxed text-white/85 lg:text-[20px]">
            Aceleração de carreira para profissionais de projetos que querem chegar ao próximo
            nível. Mentoria estruturada, conteúdo aplicado e comunidade de alto desempenho.
          </p>

          <Botao href="#participar" variante="branco" className="mt-7">
            Conhecer o programa
          </Botao>
        </Container>
      </section>

      <section  className="relative z-[2] -mt-[41px] min-h-[450px] rounded-t-[40px] bg-[#F8F5F0] pt-[80px] pb-[90px]">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_380px]">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#FF610F]">
                O que é
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-titulo)] text-[32px] font-extrabold leading-tight lg:text-[42px]">
                Aceleração com método
              </h2>

              <p className="mt-5 max-w-[620px] text-[16px] leading-relaxed text-[#5C546E] lg:text-[18px]">
                O Maximize é um programa do PMI-DF para profissionais que querem sair do
                operacional e assumir posições de maior impacto. Ciclos definidos, entregas
                claras, resultados mensuráveis.
              </p>
            </div>

            <div className="rounded-[16px] bg-[linear-gradient(180deg,#2A0A5C_0%,#4F17A8_100%)] px-8 py-10 text-white shadow-[0_8px_22px_rgba(32,15,59,0.22)]">
              <p className="font-[family-name:var(--font-titulo)] text-[28px] font-extrabold leading-tight">
                Não é curso.
                <br />
                É trajetória guiada.
              </p>
            </div>
          </div>

          <div className="mt-24">
            <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#FF610F]">
              Para quem é
            </p>

            <h2 className="mt-4 font-[family-name:var(--font-titulo)] text-[30px] font-extrabold leading-tight lg:text-[38px]">
              O Maximize serve para você se
            </h2>

            <div className="mt-8 flex flex-col gap-4">
              {paraQuem.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-[10px] bg-white px-5 py-4 shadow-[0_2px_10px_rgba(32,15,59,0.06)]"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1AC7FF] text-[12px] font-bold text-white">
                    ✓
                  </span>
                  <p className="text-[15px] text-[#5C546E]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24">
            <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#FF610F]">
              Como funciona
            </p>

            <h2 className="mt-4 font-[family-name:var(--font-titulo)] text-[30px] font-extrabold leading-tight lg:text-[38px]">
              Estrutura do programa
            </h2>

            <div className="mt-10 flex flex-col gap-4">
              {etapas.map((etapa, index) => (
                <div key={etapa.titulo} className="grid grid-cols-[54px_1fr] gap-5">
                  <div className="relative flex justify-center">
                    {index !== etapas.length - 1 && (
                      <span className="absolute top-9 h-[calc(100%+16px)] w-[2px] bg-[#D8C9EF]" />
                    )}

                    <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#5B14B8] text-[15px] font-bold text-white">
                      {index + 1}
                    </span>
                  </div>

                  <div className="rounded-[10px] bg-white px-6 py-5 shadow-[0_2px_10px_rgba(32,15,59,0.06)]">
                    <h3 className="text-[17px] font-bold text-[#200F3B]">{etapa.titulo}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-[#6F657A]">
                      {etapa.descricao}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#210040] py-16 text-white lg:py-24">
        <Container>
          <div className="text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#1AC7FF]">
              Diferenciais
            </p>

            <h2 className="mt-4 font-[family-name:var(--font-titulo)] text-[30px] font-extrabold leading-tight lg:text-[38px]">
              O que torna o Maximize diferente
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {diferenciais.map((item) => (
              <article
                key={item.titulo}
                className="rounded-[14px] bg-white/10 px-7 py-7 shadow-[0_2px_12px_rgba(0,0,0,0.12)]"
              >
                <span className={`block h-1 w-12 rounded-full ${item.cor}`} />
                <h3 className="mt-5 text-[18px] font-bold">{item.titulo}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/75">{item.descricao}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="participar" className="bg-[#F8F5F0] py-16 lg:py-24">
        <Container>
          <div className="text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#FF610F]">
              Inscrições
            </p>

            <h2 className="mt-4 font-[family-name:var(--font-titulo)] text-[30px] font-extrabold leading-tight lg:text-[38px]">
              Como participar
            </h2>

            <p className="mx-auto mt-4 max-w-[720px] text-[15px] leading-relaxed text-[#6F657A] lg:text-[17px]">
              O Maximize abre inscrições em ciclos definidos. As vagas são limitadas e passam por
              seleção.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {participacao.map((item) => (
              <article
                key={item.label}
                className="rounded-[12px] bg-white px-6 py-6 shadow-[0_2px_12px_rgba(32,15,59,0.08)]"
              >
                <p className={`text-[11px] font-bold uppercase tracking-[0.18em] ${item.cor}`}>
                  {item.label}
                </p>
                <p className="mt-3 text-[16px] font-semibold leading-relaxed text-[#200F3B]">
                  {item.texto}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/contato?assunto=maximize"
              className="inline-flex rounded-full bg-[#210040] px-8 py-3 text-[14px] font-medium text-white transition hover:bg-[#4F17A8]"
            >
              Inscrever-me no próximo ciclo
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-[#F8F5F0] pb-20 lg:pb-28">
        <Container>
          <div className="text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#FF610F]">
              Depoimentos
            </p>

            <h2 className="mt-4 font-[family-name:var(--font-titulo)] text-[30px] font-extrabold leading-tight lg:text-[38px]">
              Quem passou pelo programa
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {depoimentos.map((item) => (
              <article
                key={item.nome}
                className="flex min-h-[260px] flex-col rounded-[12px] bg-white px-7 py-7 shadow-[0_2px_14px_rgba(32,15,59,0.08)]"
              >
                <span className="self-start rounded-full bg-[#F8F5F0] px-4 py-2 text-[11px] font-semibold text-[#4F17A8]">
                  {item.chip}
                </span>

                <p className="mt-6 flex-1 text-[15px] leading-relaxed text-[#5C546E]">
                  “{item.citacao}”
                </p>

                <div className="mt-7 flex items-center gap-4">
                  <span className={`h-12 w-12 rounded-full ${item.avatar}`} />
                  <div>
                    <p className="font-bold text-[#200F3B]">{item.nome}</p>
                    <p className="text-[13px] text-[#6F657A]">{item.legenda}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}