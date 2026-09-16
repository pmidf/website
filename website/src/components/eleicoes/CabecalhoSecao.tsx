import { Eyebrow } from "@/components/ui/Eyebrow";

/**
 * Cabeçalho das seções da página de Eleições.
 *
 * Existe para garantir o mesmo ritmo nas nove seções. Escritos um a um, os
 * espaçamentos e as larguras máximas iam divergindo — `mt-3` numa, `mt-5` em
 * outra, `max-w-[760px]` aqui e `[820px]` ali —, e a página lia como se cada
 * bloco tivesse sido alinhado por olho diferente.
 *
 * A largura de 820px não é arbitrária: a ~18px, dá cerca de 80 caracteres por
 * linha, que é o limite acima do qual o olho perde a próxima linha ao voltar.
 *
 * Só desta página de propósito. Promovê-lo a `components/ui/` faria sentido no
 * dia em que as outras páginas adotarem o mesmo cabeçalho — enquanto elas
 * tiverem variações próprias, um primitivo compartilhado usado por uma página
 * só daria a impressão errada de padrão estabelecido.
 */
export function CabecalhoSecao({
  eyebrow,
  titulo,
  descricao,
}: {
  eyebrow: string;
  titulo: string;
  descricao?: string;
}) {
  return (
    <header className="max-w-[820px]">
      <Eyebrow>{eyebrow}</Eyebrow>

      <h2 className="mt-3 text-[30px] font-extrabold leading-tight text-[#200F3B] lg:text-[42px]">
        {titulo}
      </h2>

      {descricao && (
        <p className="mt-4 text-[16px] leading-relaxed text-[#5C546E] lg:text-[18px]">
          {descricao}
        </p>
      )}
    </header>
  );
}
