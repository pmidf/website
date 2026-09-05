import { Avatar } from "@/components/ui/Avatar";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TituloSecao } from "@/components/ui/TituloSecao";
import { GRUPOS, INTRO, VOLUNTARIOS } from "@/content/voluntarios";
import type { Voluntario } from "@/types";

/**
 * Galeria agrupada pelo recorte do organograma (diretorias, conselhos e
 * comitês).
 *
 * O agrupamento é derivado da lista, não escrito duas vezes: `GRUPOS` só diz
 * em que ordem as seções aparecem. Um grupo sem ninguém some da página em vez
 * de renderizar um título solto — é o que mantém a página correta enquanto a
 * lista é preenchida aos poucos.
 */
function porGrupo(nome: string): Voluntario[] {
  return VOLUNTARIOS.filter((voluntario) => voluntario.diretoria === nome);
}

function Card({ voluntario }: { voluntario: Voluntario }) {
  const conteudo = (
    <>
      <Avatar nome={voluntario.nome} foto={voluntario.foto} tamanho={160} />
      <p className="text-center">
        <span className="block text-[18px] font-bold leading-tight text-[#200F3B]">
          {voluntario.nome}
        </span>
        <span className="mt-1 block text-[15px] leading-tight text-[#5C546E]">
          {voluntario.papel}
        </span>
      </p>
    </>
  );

  const caixa =
    "flex flex-col items-center gap-4 rounded-[20px] bg-white px-5 py-7 shadow-[0_2px_10px_rgba(32,15,59,0.08)]";

  if (voluntario.linkedin) {
    return (
      <li>
        <a
          href={voluntario.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={`${caixa} h-full transition hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(32,15,59,0.14)]`}
        >
          {conteudo}
        </a>
      </li>
    );
  }

  return <li className={`${caixa} h-full`}>{conteudo}</li>;
}

export function Galeria() {
  const grupos = GRUPOS.map((nome) => ({ nome, pessoas: porGrupo(nome) })).filter(
    (grupo) => grupo.pessoas.length > 0,
  );

  return (
    <section className="bg-[#F8F5F0] py-16 lg:py-20">
      <Container>
        <Eyebrow>{INTRO.eyebrow}</Eyebrow>
        <TituloSecao className="mt-3 font-extrabold leading-tight text-[#200F3B]">
          {INTRO.titulo}
        </TituloSecao>
        <p className="mt-4 max-w-[760px] text-[16px] leading-relaxed text-[#5C546E] lg:text-[18px]">
          {INTRO.descricao}
        </p>

        {grupos.map((grupo) => (
          <div key={grupo.nome} className="mt-12 lg:mt-16">
            <h3 className="text-[20px] font-bold text-[#200F3B] lg:text-[24px]">
              {grupo.nome}
            </h3>
            <span
              aria-hidden
              className="mt-3 block h-[3px] w-16 rounded-full bg-[linear-gradient(90deg,#FF610F,#1AC7FF)]"
            />

            <ul className="mt-7 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
              {grupo.pessoas.map((voluntario) => (
                <Card key={`${grupo.nome}-${voluntario.nome}`} voluntario={voluntario} />
              ))}
            </ul>
          </div>
        ))}
      </Container>
    </section>
  );
}
