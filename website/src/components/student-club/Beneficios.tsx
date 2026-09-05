import { Container } from "@/components/ui/Container";
import { BENEFICIOS_STUDENT } from "@/content/student-club";

export function Beneficios() {
  return (
    <section id="beneficios" className="bg-white py-16 lg:py-24">
      <Container>
        <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#FF610F]">
          Por que participar
        </p>

        <h2 className="mt-4 text-[30px] font-extrabold leading-tight text-[#200F3B] lg:text-[42px]">
          Benefícios do Student Club
        </h2>

        <p className="mt-4 max-w-[760px] text-[16px] leading-relaxed text-[#5C546E]">
          Tudo o que um estudante precisa para sair da faculdade já falando a língua do mercado de
          projetos.
        </p>

        {/* Flex com quebra e centralização, e não `grid-cols-3`: são cinco
            benefícios, e numa grade de três colunas a última linha ficaria com
            dois cards encostados à esquerda e um buraco à direita. Assim ela
            fica centralizada sob as três de cima. As larguras reproduzem as
            colunas — `calc(33.333% - 16px)` com `gap-6` fecha exatamente três
            por linha. */}
        <ul className="mt-10 flex flex-wrap justify-center gap-6">
          {BENEFICIOS_STUDENT.map((item) => (
            <li
              key={item.titulo}
              className="w-full rounded-[14px] bg-[#F8F5F0] px-7 py-8 shadow-[0_2px_10px_rgba(32,15,59,0.06)] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <span aria-hidden className={`block h-1 w-12 rounded-full ${item.cor}`} />
              <h3 className="mt-5 text-[19px] font-bold text-[#200F3B]">{item.titulo}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[#5C546E]">{item.descricao}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}