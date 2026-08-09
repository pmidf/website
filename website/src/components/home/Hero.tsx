import Image from "next/image";

import { Botao } from "@/components/ui/Botao";
import { Container } from "@/components/ui/Container";
import { assets } from "@/content/assets";

/**
 * Dobra inicial: foto de Brasília + wordmark e chamada institucional.
 *
 * `isolate` cria um contexto de empilhamento próprio, para que o `-z-10` do
 * fundo não escape da seção e passe por baixo do resto da página.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#1F0942]">
      {/* Fundo */}
      <Image
        src={assets.home.heroFundo}
        alt=""
        fill
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        className="-z-10 object-cover"
      />

      <Container className="grid items-center gap-10 pb-24 pt-10 lg:grid-cols-[471px_1fr] lg:gap-12 lg:pb-32 lg:pt-0">
        {/* Foto Brasília */}
        <div className="mx-auto w-full max-w-[300px] lg:mx-0 lg:max-w-none lg:self-start">
          <div className="relative aspect-[471/450] w-full overflow-hidden rounded-b-[200px] lg:rounded-b-[400px]">
            <Image
              src={assets.home.heroBrasilia}
              alt="Vista aérea de Brasília ao entardecer"
              fill
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 1024px) 300px, 471px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Texto */}
        <div className="text-center lg:text-left">
          {/* O lockup entregue é azul-escuro e sumiria neste fundo. Até chegar
              a versão branca, o título é texto de verdade — o que aliás é
              melhor para busca e leitor de tela do que uma imagem. Trocar por
              <Image> quando `marca/logo-pmidf-branco.webp` existir. */}
          <h1 className="text-[32px] font-bold leading-tight text-white md:text-[40px] lg:text-[48px]">
            PMI Distrito Federal
          </h1>
          <p className="mx-auto mt-6 max-w-[556px] text-[16px] leading-relaxed text-white md:text-[18px] lg:mx-0 lg:text-[20px]">
            O Capítulo oficial do Project Management Institute no DF. Conectamos profissionais,
            empresas e instituições às melhores práticas globais de gerenciamento de projetos.
          </p>
          <Botao href="/sobre" className="mt-7">
            Saiba mais
          </Botao>
        </div>
      </Container>
    </section>
  );
}
