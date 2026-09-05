import Image from "next/image";

import { cn, iniciais } from "@/lib/utils";

/**
 * Retrato circular das galerias (presidentes e voluntários).
 *
 * Sem `foto`, cai nas iniciais em vez de deixar um buraco na grade: as duas
 * galerias são preenchidas aos poucos, e uma pessoa sem arquivo de imagem
 * precisa ocupar a mesma caixa que as demais para a grade não desalinhar.
 *
 * `tamanho` é o lado em pixels — vale para o `width`/`height` do arquivo e
 * para a caixa renderizada, que é sempre quadrada antes do recorte redondo.
 */
export function Avatar({
  nome,
  foto,
  tamanho = 200,
  className = "",
}: {
  nome: string;
  foto?: string;
  tamanho?: number;
  className?: string;
}) {
  const base = "rounded-full object-cover shadow-[0_4px_4px_rgba(0,0,0,0.25)]";
  const estilo = { width: tamanho, height: tamanho };

  if (foto) {
    return (
      <Image
        src={foto}
        alt={nome}
        width={tamanho}
        height={tamanho}
        style={estilo}
        className={cn(base, className)}
      />
    );
  }

  return (
    <span
      // O nome já aparece na legenda do card, logo o avatar é decorativo aqui
      // — anunciá-lo de novo só duplicaria a leitura no leitor de tela.
      aria-hidden
      style={estilo}
      className={cn(
        base,
        "flex items-center justify-center bg-[linear-gradient(135deg,#4F17A8_0%,#1AC7FF_100%)]",
        "font-extrabold text-white",
        className,
      )}
    >
      <span style={{ fontSize: Math.round(tamanho * 0.32) }}>{iniciais(nome)}</span>
    </span>
  );
}
