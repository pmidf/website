import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FICHA } from "@/content/eleicoes";

/** O que compõe o perfil que vai à plataforma de votação. */
export function Ficha() {
  return (
    <section id="ficha" className="bg-[#F8F5F0] py-16 lg:py-20">
      <Container>
        <Eyebrow>{FICHA.eyebrow}</Eyebrow>

        <h2 className="mt-3 text-[30px] font-extrabold leading-tight text-[#200F3B] lg:text-[42px]">
          {FICHA.titulo}
        </h2>

        <p className="mt-4 max-w-[820px] text-[16px] leading-relaxed text-[#5C546E] lg:text-[18px]">
          {FICHA.descricao}
        </p>

        <dl className="mt-8 max-w-[820px] rounded-[16px] bg-white p-7 shadow-[0_2px_10px_rgba(32,15,59,0.08)] lg:p-8">
          {FICHA.campos.map((campo, indice) => (
            <div
              key={campo.titulo}
              className={indice > 0 ? "mt-6 border-t border-[#200F3B]/10 pt-6" : ""}
            >
              {/* `<dl>` e não uma lista comum: cada item é um par rótulo/valor,
                  e é isso que o leitor de tela anuncia. */}
              <dt className="text-[17px] font-bold text-[#200F3B]">{campo.titulo}</dt>
              <dd className="mt-2 text-[15px] leading-relaxed text-[#5C546E]">
                {campo.descricao}
              </dd>
            </div>
          ))}
        </dl>

        <figure className="mt-8 max-w-[820px] rounded-[0_12px_12px_0] border-l-4 border-[#FF610F] bg-white px-6 py-5">
          <figcaption className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#992905]">
            {FICHA.exemploRotulo}
          </figcaption>
          <blockquote className="mt-3 text-[15px] italic leading-relaxed text-[#5C546E]">
            {FICHA.exemplo}
          </blockquote>
        </figure>
      </Container>
    </section>
  );
}
