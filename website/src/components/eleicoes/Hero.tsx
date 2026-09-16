import { Botao } from "@/components/ui/Botao";
import { Container } from "@/components/ui/Container";
import { HERO } from "@/content/eleicoes";

/**
 * Dobra inicial, na mesma forma das demais páginas: título centralizado na
 * escala 30/36/40 e CTAs pelo `Botao` do design system.
 *
 * Fundo no roxo sólido `#1F0942`, e não no gradiente da marca. Das duas
 * famílias de hero que o site usa, a sóbria é a que cabe aqui: é o mesmo fundo
 * de Filiação e do Aviso de Privacidade, as outras duas páginas de assunto
 * institucional. O gradiente pertence às páginas de convite — Contato, as
 * galerias, InCompany. Eleição é processo formal, e o fundo diz isso antes de
 * qualquer palavra.
 *
 * O selo do biênio fica acima do título porque qualifica a eleição — não é um
 * segundo título. Mesmo tratamento do "14º Ciclo" na página de Mentoring.
 */
export function Hero() {
  return (
    <section className="bg-[#1F0942] py-14 text-center lg:py-20">
      <Container>
        <p className="inline-flex items-center rounded-full border border-white/40 bg-white/15 px-4 py-1.5 text-[13px] font-semibold uppercase tracking-[1.2px] text-white">
          {HERO.ciclo}
        </p>

        <h1 className="mt-4 text-[30px] font-extrabold leading-tight text-[#F8F8F8] md:text-[36px] lg:text-[40px]">
          {HERO.titulo}
        </h1>

        <p className="mx-auto mt-4 max-w-[767px] text-[18px] leading-relaxed text-[#F8F8F8] lg:text-[24px]">
          {HERO.descricao}
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-4">
          {/* Leva aos documentos, não ao passo a passo: quem decide se
              candidatar precisa do edital e do modelo de ficha antes de
              qualquer coisa. */}
          <Botao href="#documentos" variante="branco">
            Quero me candidatar
          </Botao>
          <Botao href="#cronograma" variante="contorno-claro">
            Ver cronograma
          </Botao>
        </div>
      </Container>
    </section>
  );
}
