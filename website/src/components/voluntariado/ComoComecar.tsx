import { Botao } from "@/components/ui/Botao";
import { Container } from "@/components/ui/Container";
import { TituloSecao } from "@/components/ui/TituloSecao";
import { PASSOS, URL_VEP } from "@/content/voluntariado";

/**
 * Os dois passos até a candidatura.
 *
 * É uma `<ol>`: a ordem é a informação. O número visível vem do índice, então
 * inserir um passo no meio não exige renumerar o conteúdo à mão.
 */
export function ComoComecar() {
  return (
    <section className="bg-[#023041] py-16 lg:py-[88px]">
      <Container gutter="amplo">
        <div className="mx-auto max-w-[871px]">
          <div className="rounded-[20px] bg-[#F8F5F0] px-6 py-4 text-center shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <TituloSecao className="font-display font-extrabold leading-[1.18] text-[#023041]">
              Como começar
            </TituloSecao>
          </div>

          <div className="mt-6 rounded-[20px] bg-[#F8F5F0] px-6 py-8 text-center shadow-[0_4px_4px_rgba(0,0,0,0.25)] lg:px-12">
            <ol className="space-y-5">
              {PASSOS.map((passo, indice) => (
                <li key={passo.titulo} className="text-[18px] text-[#023041] lg:text-[24px]">
                  <p>
                    {indice + 1}. <strong className="font-bold">{passo.titulo}</strong>
                  </p>
                  <p className="leading-snug">{passo.descricao}</p>
                </li>
              ))}
            </ol>

            <Botao href={URL_VEP} external variante="teal" className="mt-8">
              Ver vagas abertas
            </Botao>
          </div>

          <p className="mx-auto mt-8 max-w-[526px] text-center text-[17px] leading-snug text-[#F8F5F0] lg:text-[20px]">
            <strong className="font-bold">Importante:</strong>
            <br />
            Para algumas vagas é necessário estar filiado ao PMI-DF.
          </p>
        </div>
      </Container>
    </section>
  );
}
