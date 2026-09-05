/**
 * Mapa de rotas do site — o que a trilha de navegação (breadcrumb) e o
 * sitemap leem.
 *
 * ## Por que existe
 *
 * O critério WCAG 2.4.8 (Location) pede que a pessoa saiba onde está dentro
 * do site. A trilha só consegue mostrar isso se a hierarquia estiver escrita
 * em algum lugar — e o roteador do Next não a conhece: `/voluntariado` e
 * `/quem-somos` são irmãos no sistema de arquivos, mas não na leitura de quem
 * navega.
 *
 * A regra que seguimos: **a URL espelha a trilha**. Uma página que aparece
 * como "Início › Quem somos › Presidentes" mora em `/quem-somos/presidentes`.
 * Foi por isso que as duas galerias nasceram aninhadas — e é a checagem a
 * fazer antes de criar qualquer rota nova.
 *
 * Um `pai` que não existe como página seria uma trilha mentirosa (um degrau
 * clicável que leva a 404), então todo `pai` aqui aponta para uma rota real.
 * Os agrupamentos que só existem no menu ("Sobre", "Eventos e Programas") não
 * viram degrau justamente por não terem página.
 */

export type Rota = {
  href: string;
  /** Rótulo curto, usado na trilha — nem sempre igual ao `<h1>` da página. */
  label: string;
  /** Rota mãe. Ausente = filha direta da home. */
  pai?: string;
  /** Página no ar mas fora do índice (ver `/maximize`). */
  foraDoAr?: boolean;
};

export const INICIO: Rota = { href: "/", label: "Início" };

export const ROTAS: Rota[] = [
  { href: "/quem-somos", label: "Quem somos" },
  { href: "/quem-somos/presidentes", label: "Presidentes", pai: "/quem-somos" },
  { href: "/quem-somos/voluntarios", label: "Nossos voluntários", pai: "/quem-somos" },
  { href: "/filiacao", label: "Filiação" },
  { href: "/voluntariado", label: "Voluntariado" },
  { href: "/student-club", label: "Student Club" },
  { href: "/transparencia", label: "Transparência" },
  { href: "/eventos", label: "Eventos e Programas" },
  { href: "/mentoring", label: "Mentoring" },
  { href: "/certificacoes", label: "Certificação" },
  { href: "/incompany", label: "InCompany" },
  { href: "/contato", label: "Contato" },
  { href: "/aviso-de-privacidade", label: "Aviso de privacidade" },
  // Sem link no menu e com `robots: noindex` até o lançamento do programa.
  { href: "/maximize", label: "Maximize", foraDoAr: true },
];

/**
 * Normaliza o caminho para casar com os `href` acima.
 *
 * `trailingSlash: true` no `next.config.ts` faz o `usePathname()` devolver
 * "/quem-somos/" — sem esta poda, nenhuma rota seria encontrada. A home é a
 * exceção: lá a barra é o caminho inteiro.
 */
function normalizar(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

/**
 * Caminho da home até a página atual, já na ordem de leitura.
 *
 * Devolve `[INICIO]` para a home e uma lista vazia para qualquer rota
 * desconhecida (404, por exemplo) — quem chama decide não renderizar nada nos
 * dois casos.
 */
export function trilha(pathname: string): Rota[] {
  const alvo = normalizar(pathname);

  if (alvo === INICIO.href) return [INICIO];

  const atual = ROTAS.find((rota) => rota.href === alvo);
  if (!atual) return [];

  const caminho: Rota[] = [atual];

  // Sobe pelos pais. O teto de iterações protege contra um ciclo acidental
  // (`pai` apontando para uma descendente), que travaria a renderização.
  let pai = atual.pai;
  for (let nivel = 0; pai && nivel < ROTAS.length; nivel += 1) {
    const rotaPai = ROTAS.find((rota) => rota.href === pai);
    if (!rotaPai) break;
    caminho.unshift(rotaPai);
    pai = rotaPai.pai;
  }

  return [INICIO, ...caminho];
}
