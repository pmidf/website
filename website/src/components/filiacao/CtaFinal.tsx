import { Botao } from "@/components/ui/Botao";
import { Container } from "@/components/ui/Container";
import { URL_PMI_GLOBAL } from "@/content/filiacao";

/**
 * Fechamento da página.
 *
 * O protótipo tem uma arte de ondas sobre o roxo (`cta-ondas.svg`), que ainda
 * não foi exportada. Em vez de referenciar um arquivo inexistente e render um
 * 404, a seção usa o fundo sólido — o desenho fica correto, só menos
 * ornamentado. Quando a arte chegar: `<Image fill className="-z-10
 * object-cover" />` dentro deste bloco, que já é `relative isolate`.
 */
export function CtaFinal() {
  return (
    <section className="bg-[#F8F5F0] pb-16 lg:pb-[88px]">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[40px] bg-[#1F0942] px-6 py-12 text-center lg:rounded-[400px] lg:px-24 lg:py-[70px]">
          <h2 className="font-display text-[28px] font-bold text-white md:text-[34px] lg:text-[40px]">
            Pronto para se filiar?
          </h2>

          <p className="mx-auto mt-5 max-w-[685px] text-[18px] leading-snug text-white lg:text-[24px]">
            A <strong className="font-bold">filiação</strong> é feita pelo portal do{" "}
            <strong className="font-bold">PMI </strong>. Selecione o{" "}
            <strong className="font-bold">PMI-DF</strong> como seu capítulo no momento do
            cadastro, é isso que conecta você à nossa comunidade local.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-5">
            <Botao href={URL_PMI_GLOBAL} external variante="branco">
              Filiar-me agora
            </Botao>
            <Botao href="/contato" variante="branco">
              Falar com o PMI-DF
            </Botao>
          </div>
        </div>
      </Container>
    </section>
  );
}
