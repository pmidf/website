import Image from "next/image";

import { Botao } from "@/components/ui/Botao";
import { cn } from "@/lib/utils";
import type { CertificacaoPMI } from "@/types";

/**
 * Card de certificação, na anatomia do site do PMI Global.
 *
 * A ordem dos elementos é a deles, e é deliberada: o rótulo "Certificação"
 * classifica a peça, o gem identifica a família da credencial pela forma, a
 * sigla vem antes do nome por extenso (é por ela que a pessoa procura), a
 * exigência de experiência aparece logo abaixo do título porque é o primeiro
 * filtro de quem está escolhendo, e só então vem a descrição.
 *
 * O gem sangra pelo canto superior direito — metade dele fica fora do card,
 * aparado pelo `overflow-hidden`. É o que dá a peça recortada do original em
 * vez de um ícone centrado numa caixa.
 *
 * O gem é o arquivo original do PMI, não uma reconstrução: o gradiente cônico
 * e o granulado das peças deles são difíceis de reproduzir em CSS sem
 * diferença perceptível. O fundo do card, esse sim, usa a paleta do capítulo —
 * o azul-petróleo e o roxo do PMI-DF são vizinhos próximos do teal e do
 * violeta do PMI Global.
 */
export function CartaoCertificacao({ cert }: { cert: CertificacaoPMI }) {
  const claro = cert.grupo === "especializada";

  return (
    <article
      className={cn(
        "flex flex-col rounded-[18px] p-7 shadow-[0_8px_20px_rgba(32,15,59,0.16)] lg:p-8",
        cert.fundo,
        claro ? "text-[#200F3B]" : "text-white",
      )}
    >
      {/* Rótulo e peça dividem a primeira linha, em fluxo normal.
       *
       * Antes a peça era absoluta, sangrando pelo canto superior direito: ela
       * encostava na borda e, como o título tem três linhas nos cards mais
       * longos, o texto passava por cima dela. Numa linha flex a colisão deixa
       * de ser possível — a peça reserva o próprio espaço, o título começa
       * abaixo dela e o respiro é o padding do card, igual dos quatro lados. */}
      <div className="flex items-start justify-between gap-5">
        <span
          className={cn(
            "inline-flex shrink-0 rounded-full border px-3 py-1 text-[11px] font-semibold",
            claro ? "border-[#200F3B]/25" : "border-white/35",
          )}
        >
          Certificação
        </span>

        {/* `w-` fixo com `h-auto` porque as três peças têm proporções
            diferentes — travar as duas medidas achataria o triângulo, que é
            mais baixo que largo. */}
        <Image
          src={cert.gem}
          alt=""
          aria-hidden
          width={cert.gemLargura}
          height={cert.gemAltura}
          sizes="130px"
          className="h-auto w-[96px] shrink-0 md:w-[112px] lg:w-[128px]"
        />
      </div>

      <p className={cn("mt-7 text-[15px] font-bold", cert.sigla_cor)}>{cert.sigla}</p>

      <h3 className="mt-2 text-[24px] font-extrabold leading-tight lg:text-[26px]">
        {cert.titulo}
      </h3>

      <p className={cn("mt-3 text-[13px] font-semibold", claro ? "text-[#5C546E]" : "text-white/75")}>
        {cert.experiencia}
      </p>

      <p className={cn("mt-4 text-[15px] leading-relaxed", claro ? "text-[#5C546E]" : "text-white/85")}>
        {cert.descricao}
      </p>

      <div className="mt-auto pt-7">
        <Botao href={cert.href} external variante={claro ? "escuro" : "branco"}>
          Saiba mais
        </Botao>
      </div>
    </article>
  );
}
