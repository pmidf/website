/**
 * Faixa fina no topo da janela que se preenche conforme a leitura avança, no
 * gradiente-assinatura da marca.
 *
 * Não tem JavaScript: a animação é dirigida pela rolagem da página (classe
 * `.barra-leitura` em `globals.css`). Fica acima do Header (`z-50`) e é
 * `aria-hidden` — é um indicador visual, e a barra de rolagem do navegador
 * continua dizendo a mesma coisa para quem precisa.
 */
export function BarraLeitura() {
  return (
    <div
      aria-hidden
      className="barra-leitura pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] bg-[linear-gradient(90deg,#1F0942_13%,#FF610F_50%,#1AC7FF_89%)]"
    />
  );
}
