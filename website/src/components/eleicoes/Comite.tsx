import { Avatar } from "@/components/ui/Avatar";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { COMITE, COMITE_TEXTO, EMAIL_COMITE } from "@/content/eleicoes";

/**
 * Quem conduz o processo.
 *
 * Reusa o `Avatar` das galerias: nenhum membro tem foto publicada, e ele já
 * resolve o caso caindo nas iniciais. Se um dia as fotos entrarem, é só
 * preencher `foto` no conteúdo.
 */
export function Comite() {
  return (
    <section id="comite" className="bg-[#F8F5F0] py-16 lg:py-20">
      <Container>
        <Eyebrow>{COMITE_TEXTO.eyebrow}</Eyebrow>

        <h2 className="mt-3 text-[30px] font-extrabold leading-tight text-[#200F3B] lg:text-[42px]">
          {COMITE_TEXTO.titulo}
        </h2>

        <p className="mt-4 max-w-[820px] text-[16px] leading-relaxed text-[#5C546E] lg:text-[18px]">
          {COMITE_TEXTO.descricao} Fale com o Comitê pelo e-mail{" "}
          <a
            href={`mailto:${EMAIL_COMITE}`}
            className="font-semibold text-[#4F17A8] underline-offset-2 hover:underline"
          >
            {EMAIL_COMITE}
          </a>
          .
        </p>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COMITE.map((membro) => (
            <li
              key={membro.nome}
              className={`flex flex-col items-center rounded-[16px] bg-white p-7 text-center shadow-[0_2px_10px_rgba(32,15,59,0.08)] ${
                membro.preside ? "border-t-4 border-[#FF610F]" : ""
              }`}
            >
              <Avatar nome={membro.nome} tamanho={64} />
              <p className="mt-4 text-[18px] font-bold text-[#200F3B]">{membro.nome}</p>
              <p className="mt-1 text-[14px] leading-snug text-[#5C546E]">{membro.papel}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
