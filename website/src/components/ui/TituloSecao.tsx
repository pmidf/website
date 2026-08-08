/**
 * `<h2>` padrão das seções da home, sobre fundo claro.
 *
 * Seções com fundo escuro (banner de certificações, InCompany) escrevem o
 * próprio `<h2>` porque mudam a cor do texto — a escala tipográfica
 * (28 / 34 / 40px) é mantida idêntica lá.
 */
export function TituloSecao({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[28px] font-bold leading-tight text-[#200F3B] md:text-[34px] lg:text-[40px]">
      {children}
    </h2>
  );
}
