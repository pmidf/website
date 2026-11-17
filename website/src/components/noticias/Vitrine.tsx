import { Destaque } from "@/components/noticias/Destaque";
import { Recentes } from "@/components/noticias/Recentes";
import { Container } from "@/components/ui/Container";
import { NOTICIAS_TEXTO } from "@/content/noticias";
import { REDES } from "@/content/navegacao";
import type { Noticia } from "@/types";

/**
 * A "aba" creme que sobe sobre o hero: destaque + grade das mais recentes.
 *
 * As duas ficam na mesma seção de propósito — são a mesma leitura (o que saiu
 * agora), e separá-las criaria uma troca de fundo no meio dela.
 */
export function Vitrine({
  destaque,
  recentes,
}: {
  destaque?: Noticia;
  recentes: Noticia[];
}) {
  return (
    <section className="relative z-10 -mt-12 rounded-t-[32px] bg-[#F8F5F0] pb-16 pt-14 lg:-mt-16 lg:rounded-t-[50px] lg:pb-20 lg:pt-20">
      <Container gutter="amplo">
        {destaque ? (
          <>
            <Destaque noticia={destaque} />
            {recentes.length > 0 && <Recentes noticias={recentes} />}
          </>
        ) : (
          <SemNoticias />
        )}
      </Container>
    </section>
  );
}

/**
 * Lista vazia.
 *
 * Deliberadamente não cai em conteúdo de exemplo — mesma regra da agenda de
 * Eventos. Aponta para as redes, que é onde o capítulo publica no dia a dia.
 * O WhatsApp fica de fora: é canal de atendimento, não de notícia.
 */
function SemNoticias() {
  const { vazio } = NOTICIAS_TEXTO;
  const redes = REDES.filter((rede) => rede.nome !== "WhatsApp");

  return (
    <div className="mx-auto max-w-[720px] rounded-[16px] border border-[#200F3B]/10 bg-white p-8 text-center shadow-[0_2px_10px_rgba(32,15,59,0.06)] lg:p-12">
      <h2 className="font-[family-name:var(--font-titulo)] text-[24px] font-extrabold leading-tight text-[#200F3B] lg:text-[28px]">
        {vazio.titulo}
      </h2>
      <p className="mt-3 text-[16px] leading-relaxed text-[#5C546E]">{vazio.descricao}</p>

      <ul className="mt-7 flex justify-center gap-3">
        {redes.map((rede) => (
          <li key={rede.nome}>
            <a
              href={rede.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${rede.nome} do PMI-DF (abre em nova aba)`}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F8F5F0] text-[#4F17A8] transition hover:bg-[#1F0942] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F17A8]"
            >
              <rede.Icone aria-hidden className="h-5 w-5" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
