import { Botao } from '@/components/ui/Botao';
import { Container } from '@/components/ui/Container';
import { TituloSecao } from '@/components/ui/TituloSecao';
import { BENEFICIOS, URL_VEP } from '@/content/voluntariado';

/** O que o voluntário leva. Seis cards coloridos ao lado da chamada. */
export function Beneficios() {
  return (
    <section className='bg-[#F8F5F0] py-16 lg:py-[90px]'>
      <Container
        gutter='amplo'
        className='flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12'
      >
        <div className='lg:w-[320px] lg:shrink-0 lg:pt-8'>
          <TituloSecao className='font-display font-extrabold leading-[1.18] text-[#200F3B]'>
            Benefícios
          </TituloSecao>
          <Botao href={URL_VEP} external variante='escuro' className='mt-6'>
            Saiba mais
          </Botao>
        </div>

        <ul className='grid flex-1 gap-6 sm:grid-cols-2'>
          {BENEFICIOS.map((item) => (
            <li
              key={item.titulo}
              className={`flex flex-col justify-center rounded-[20px] p-6 text-center text-[#F8F8F8] ${item.cor}`}
            >
              <p className='text-[19px] font-bold leading-snug lg:text-[24px]'>
                {item.titulo}.
              </p>
              <p className='mt-1 text-[17px] leading-snug lg:text-[24px]'>
                {item.descricao}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
