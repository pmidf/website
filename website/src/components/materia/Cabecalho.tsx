import { Figura } from "@/components/materia/Figura";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { formatarData } from "@/content/noticias";
import type { NoticiaInterna } from "@/types";

/**
 * Abertura da matéria: hero escuro com título e linha fina, e a foto
 * principal subindo sobre ele.
 *
 * A foto "cavalga" a divisa entre o roxo e o branco — a mesma ideia da aba
 * arredondada das outras páginas, só que com a imagem fazendo o papel da
 * aba. O `pb` do hero é sempre 32px maior que a margem negativa da foto, em
 * todos os breakpoints, para ela nunca encostar na linha de meta.
 *
 * Alinhado à esquerda, ao contrário dos heros de convite: é texto para ler,
 * e a margem esquerda do título coincide com a da foto logo abaixo.
 */
export function Cabecalho({
  noticia,
  minutos,
}: {
  noticia: NoticiaInterna;
  minutos: number;
}) {
  const { materia } = noticia;

  return (
    <header>
      <div className="relative overflow-hidden bg-[#1F0942] pb-28 pt-12 md:pb-36 lg:pb-52 lg:pt-16">
        <span
          aria-hidden
          className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[#5B2B82] opacity-80 lg:-right-36 lg:-top-40 lg:h-[420px] lg:w-[420px]"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-[#FF610F] opacity-70 lg:-bottom-32 lg:left-[-6%] lg:h-[320px] lg:w-[320px]"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute right-[14%] top-[58%] hidden h-[70px] w-[70px] rounded-full bg-[#05BFE0] md:block"
        />

        <Container gutter="amplo" className="relative z-10">
          <div className="mx-auto max-w-[1040px]">
            <Eyebrow className="text-[#05BFE0]">{materia.chapeu}</Eyebrow>

            <h1 className="mt-5 max-w-[900px] text-balance font-[family-name:var(--font-titulo)] text-[30px] font-extrabold leading-[1.08] text-white md:text-[44px] lg:text-[52px]">
              {noticia.titulo}
            </h1>

            <p className="mt-5 max-w-[760px] text-[18px] leading-relaxed text-white/75 lg:text-[22px]">
              {materia.linhaFina}
            </p>

            <p className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 text-[14px] text-white/70">
              <span>
                Por <span className="font-semibold text-white">{materia.autoria}</span>
              </span>
              <span aria-hidden>·</span>
              <span>{materia.local}</span>
              <span aria-hidden>·</span>
              <time dateTime={noticia.data}>{formatarData(noticia.data)}</time>
              <span aria-hidden>·</span>
              <span>{minutos} min de leitura</span>
            </p>
          </div>
        </Container>
      </div>

      <Container gutter="amplo" className="relative z-10 -mt-20 md:-mt-28 lg:-mt-44">
        <Figura
          foto={materia.capa}
          sizes="(max-width: 1100px) 100vw, 1040px"
          preload
          className="mx-auto max-w-[1040px]"
          moldura="rounded-[16px] shadow-[0_24px_60px_rgba(32,15,59,0.28)] lg:rounded-[24px]"
        />
      </Container>
    </header>
  );
}
