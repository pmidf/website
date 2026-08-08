import {
  BannerCertificacoes,
  Eventos,
  Hero,
  InCompany,
  Iniciativas,
  Mantenedores,
} from "@/components/home";

/**
 * Home do PMI-DF.
 *
 * Só orquestra a ordem das seções — todo conteúdo vem de `src/content/` e todo
 * markup vive em `src/components/home/`. Header e Rodapé são responsabilidade
 * do layout do route group `(site)`.
 */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <Hero />
      <BannerCertificacoes />
      <Iniciativas />
      <Eventos />
      <InCompany />
      <Mantenedores />
    </div>
  );
}
