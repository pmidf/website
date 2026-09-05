import { Botao } from "@/components/ui/Botao";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TituloSecao } from "@/components/ui/TituloSecao";
import { CARDS_STUDENT_CLUB } from "@/content/voluntariado";

/** Porta de entrada para universitários — leva ao programa Student Club. */
export function StudentClub() {
  return (
    <section className="bg-[#F8F5F0] py-16 lg:py-[72px]">
      <Container gutter="amplo">
        <div className="flex max-w-[780px] flex-col items-start gap-4">
          <Eyebrow>Para universitários</Eyebrow>
          <TituloSecao className="font-display font-extrabold leading-[1.18] text-[#200F3B]">
            Student Club
          </TituloSecao>
          <p className="text-[20px] font-semibold leading-[1.4] text-[#200F3B] lg:text-[22px]">
            É estudante? Comece pelo Student Club
          </p>
          <p className="text-[16px] leading-[1.58] text-[#5C546E] lg:text-[18px]">
            O Student Club é o programa do PMI-DF para quem está na universidade. Eventos próprios, mentoria
            com profissionais sêniores e o primeiro contato real com gerenciamento de projetos.
            Você participa antes mesmo de estar no mercado.
          </p>
          <Botao href="/student-club" variante="escuro" className="mt-2">
            Conhecer o Student Club
          </Botao>
        </div>

        <ul className="mt-12 grid gap-[27px] md:grid-cols-3">
          {CARDS_STUDENT_CLUB.map((card) => (
            <li
              key={card.titulo}
              className="flex flex-col items-start gap-[18px] rounded-[16px] bg-white p-7 shadow-[0_3px_12px_rgba(32,15,59,0.1)]"
            >
              {/* Quadrado colorido: identifica o card, não carrega informação. */}
              <span aria-hidden className={`h-12 w-12 rounded-[12px] ${card.cor}`} />
              <h3 className="text-[20px] font-semibold leading-[1.32] text-[#200F3B]">
                {card.titulo}
              </h3>
              <p className="text-[15px] leading-[1.58] text-[#5C546E]">{card.descricao}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
