import { Botao } from '@/components/ui/Botao';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { PARCEIROS_CERTIFICACAO } from '@/content/parceiros-certificacao';

/**
 * Parceiros de treinamento do capítulo.
 *
 * Eram três banners largos em roxo saturado, um por parceiro, cada um com dois
 * botões e um rótulo próprio. Somados, competiam com o hero e faziam a seção
 * gritar mais alto que as certificações, que são o assunto da página.
 *
 * Agora são três cards claros de mesmo peso numa grade — os três são ATPs, e
 * tratá-los igual é o que a informação pede. Um CTA por card, para o site do
 * parceiro; o cupom, que é do capítulo e não de um parceiro específico, virou
 * um botão único no fim.
 */
export function ParceirosATP() {
  return (
    <section id='parceiros-atp' className='bg-[#F8F5F0] py-16 lg:py-20'>
      <Container>
        <Eyebrow>Onde se preparar</Eyebrow>

        <h2 className='mt-3 text-[30px] font-extrabold leading-tight text-[#200F3B] lg:text-[42px]'>
          Parceiros ATP do PMI-DF
        </h2>

        <p className='mt-4 max-w-[760px] text-[16px] leading-relaxed text-[#5C546E] lg:text-[18px]'>
          Os três são Authorized Training Partners do PMI, autorizados a emitir
          as horas de contato exigidas na inscrição do exame. Filiados e
          participantes do capítulo têm cupom de desconto nos cursos.
        </p>

        <ul className='mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {PARCEIROS_CERTIFICACAO.map((parceiro) => (
            <li
              key={parceiro.nome}
              className='flex flex-col rounded-[18px] border border-[#200F3B]/10 bg-white p-7 shadow-[0_2px_10px_rgba(32,15,59,0.06)]'
            >
              {/* Placa com as iniciais: nenhum dos três enviou arquivo de logo,
                  e uma caixa vazia seria pior que uma marca provisória. */}
              <span
                aria-hidden
                className='flex h-14 w-14 items-center justify-center rounded-[14px] bg-[#F8F5F0] text-[20px] font-extrabold text-[#4F17A8]'
              >
                {parceiro.logoText}
              </span>

              <h3 className='mt-5 text-[20px] font-bold leading-tight text-[#200F3B]'>
                {parceiro.nome}
              </h3>

              <p className='mt-3 text-[15px] leading-relaxed text-[#5C546E]'>
                {parceiro.descricao}
              </p>

              {/* `mt-auto` alinha os três botões na base, mesmo com descrições
                  de alturas diferentes. */}
              <div className='mt-auto pt-6'>
                <Botao href={parceiro.href} external variante='contorno-escuro'>
                  Visitar site
                </Botao>
              </div>
            </li>
          ))}
        </ul>

        <div className='mt-10 flex flex-col gap-5 rounded-[18px] border-l-4 border-[#FF610F] bg-white px-6 py-6 lg:flex-row lg:items-center lg:justify-between'>
          <p className='max-w-[640px] text-[15px] leading-relaxed text-[#5C546E]'>
            Para usar o desconto, peça o cupom ao capítulo antes de fechar a
            matrícula.
          </p>

          <Botao
            href='/contato?assunto=cupom-atp'
            variante='escuro'
            className='shrink-0'
          >
            Solicitar cupom de desconto
          </Botao>
        </div>
      </Container>
    </section>
  );
}
