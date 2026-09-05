import { Botao } from "@/components/ui/Botao";

type ParceiroBannerProps = {
  badge: string;
  nome: string;
  descricao: string;
  detalhe?: string;
  logoText?: string;
  logoSrc?: string;
  logoAlt?: string;
  ctaPrincipal: {
    label: string;
    href: string;
  };
  ctaSecundario?: {
    label: string;
    href: string;
  };
  observacao?: string;
  observacaoCta?: {
    label: string;
    href: string;
  };
};

export function ParceiroBanner({
  badge,
  nome,
  descricao,
  detalhe,
  logoText,
  logoSrc,
  logoAlt,
  ctaPrincipal,
  ctaSecundario,
  observacao,
  observacaoCta,
}: ParceiroBannerProps) {
  return (
    <div className="space-y-6">
      <div className="rounded-[28px] bg-[linear-gradient(135deg,#2A0057_0%,#4B19B7_55%,#5D1EFF_100%)] px-8 py-8 text-white shadow-[0_18px_40px_rgba(42,0,87,0.18)] md:px-10 md:py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex shrink-0 items-center justify-center">
            <div className="flex h-[110px] w-[140px] items-center justify-center rounded-[18px] bg-white/95 shadow-inner">
              {logoSrc ? (
                <img
                  src={logoSrc}
                  alt={logoAlt || nome}
                  className="max-h-[72px] max-w-[110px] object-contain"
                />
              ) : (
                <span className="text-[28px] font-black tracking-wide text-[#2A0057]">
                  {logoText || nome.slice(0, 2).toUpperCase()}
                </span>
              )}
            </div>
          </div>

          <div className="flex-1">
            <span className="inline-flex rounded-full bg-[#23C8F7] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#14003A]">
              {badge}
            </span>

            <h3 className="mt-5 text-[36px] font-black leading-none md:text-[44px]">
              {nome}
            </h3>

            <p className="mt-4 max-w-[840px] text-[17px] leading-relaxed text-white/95 md:text-[18px]">
              {descricao}
            </p>

            {detalhe ? (
              <p className="mt-3 max-w-[840px] text-[14px] leading-relaxed text-white/75 md:text-[15px]">
                {detalhe}
              </p>
            ) : null}

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {/* Variantes do `Botao`, e não pílulas montadas aqui: é a
                  padronização que a branch fix/cores-e-textos trouxe, aplicada
                  à estrutura nova destes banners. */}
              <Botao
                href={ctaPrincipal.href}
                external={ctaPrincipal.href.startsWith("http")}
                variante="texto-roxo"
              >
                {ctaPrincipal.label}
              </Botao>

              {ctaSecundario ? (
                <Botao
                  href={ctaSecundario.href}
                  external={ctaSecundario.href.startsWith("http")}
                  variante="contorno-claro"
                >
                  {ctaSecundario.label}
                </Botao>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {(observacao || observacaoCta) && (
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="border-l-[4px] border-[#FF6B1A] pl-4 text-[16px] leading-relaxed text-[#5F5873]">
            {observacao}
          </div>

          {observacaoCta ? (
            <Botao
              href={observacaoCta.href}
              external={observacaoCta.href.startsWith("http")}
              variante="texto-terracota"
              className="shrink-0"
            >
              {observacaoCta.label}
            </Botao>
          ) : null}
        </div>
      )}
    </div>
  );
}