import { Botao } from "@/components/ui/Botao";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col justify-center bg-[#F8F5F0]">
      <Container className="flex flex-col items-center py-32 text-center">
        <p className="text-[14px] font-bold tracking-widest uppercase text-[#FF610F]">
          Erro 404
        </p>
        <h1 className="mt-4 text-[28px] font-bold leading-tight text-[#200F3B] md:text-[34px] lg:text-[40px]">
          Página não encontrada
        </h1>
        <p className="mt-4 max-w-md text-[18px] leading-relaxed text-[#200F3B]">
          O endereço acessado não existe ou foi movido.
        </p>
        <Botao href="/" className="mt-8" variante="texto-gradiente">
          Voltar para a home
        </Botao>
      </Container>
    </div>
  );
}
