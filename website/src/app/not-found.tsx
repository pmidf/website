import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <Container className="flex flex-1 flex-col items-center justify-center py-32 text-center">
      <p className="font-narrow text-xs font-bold tracking-widest uppercase text-secondary">
        Erro 404
      </p>
      <h1 className="mt-4 text-4xl font-bold">Página não encontrada</h1>
      <p className="mt-4 max-w-md text-muted">
        O endereço acessado não existe ou foi movido.
      </p>
      <Button href="/" className="mt-8">
        Voltar para a home
      </Button>
    </Container>
  );
}
