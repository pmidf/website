import { Container } from "@/components/ui/Container";
import { GRUPOS_DOCUMENTOS, type DocumentoTransparencia } from "@/content/transparencia";

/**
 * Lista de documentos da Transparência.
 *
 * Cada linha é um `<a>` comum, e não o `<Link>` do Next: todo destino aqui é
 * arquivo ou site de terceiros, nunca uma rota do app. Com `<Link>`, um PDF
 * no próprio domínio seria tratado como página — o Next tentaria fazer
 * prefetch de `/wp-content/…pdf?_rsc=` só por ele aparecer na tela.
 *
 * Documento sem `href` vira um `<div>` esmaecido com "Em atualização", no
 * mesmo padrão dos documentos de Eleições: um `<a>` sem destino continuaria
 * recebendo foco e seria anunciado como link para um lugar que não existe.
 */
export function Documentos() {
  const algumPendente = GRUPOS_DOCUMENTOS.some((grupo) =>
    grupo.documentos.some((doc) => !doc.href),
  );

  return (
    <section className="bg-[#F8F5F0] py-16 lg:py-24">
      <Container>
        <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#FF610F]">
          Arquivos e documentos
        </p>

        <h2 className="mt-4 text-[32px] font-extrabold leading-tight text-[#200F3B] lg:text-[44px]">
          Consulte os documentos do capítulo
        </h2>

        <p className="mt-4 max-w-[760px] text-[16px] leading-relaxed text-[#5C546E] lg:text-[18px]">
          Os documentos abrem em nova aba. Links externos levam a portais oficiais de terceiros.
          {algumPendente &&
            " Itens marcados como “em atualização” estão sendo republicados e voltam em breve."}
        </p>

        <div className="mt-12 flex flex-col gap-12">
          {GRUPOS_DOCUMENTOS.map((grupo) => (
            <section key={grupo.titulo}>
              <div className="mb-5 flex items-end gap-3">
                <h3 className="text-[22px] font-bold text-[#200F3B]">{grupo.titulo}</h3>
                <span className="text-[13px] font-semibold text-[#6F657A]">
                  {grupo.documentos.length} documentos
                </span>
              </div>

              <ul className="overflow-hidden rounded-[18px] bg-white shadow-[0_3px_14px_rgba(32,15,59,0.07)]">
                {grupo.documentos.map((doc, index) => (
                  <li
                    key={`${grupo.titulo}-${doc.titulo}-${index}`}
                    className="border-b border-[#E7E0F0] last:border-0"
                  >
                    <LinhaDocumento doc={doc} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Container>
    </section>
  );
}

function LinhaDocumento({ doc }: { doc: DocumentoTransparencia }) {
  const isPdf = doc.tipo === "PDF";
  const linha = "flex items-center gap-5 px-6 py-5";

  // "Baixar" só para arquivo servido pelo próprio site; Drive e portais abrem
  // uma página do terceiro, então a promessa certa é "Abrir".
  const acao = !doc.href ? "Em atualização" : doc.externo ? "Abrir ↗" : "Baixar";

  const conteudo = (
    <>
      <span
        className={`flex h-9 w-[54px] shrink-0 items-center justify-center rounded-[10px] text-[12px] font-bold text-white ${
          isPdf ? "bg-[#4F17A8]" : "bg-[#003C4C]"
        }`}
      >
        {doc.tipo}
      </span>

      <div className="min-w-0 flex-1">
        <h4 className="text-[17px] font-semibold text-[#200F3B]">{doc.titulo}</h4>
        <p className="mt-1 text-[13px] font-medium text-[#6F657A]">{doc.descricao}</p>
      </div>

      <span
        className={`shrink-0 text-[13px] font-bold ${doc.href ? "text-[#4F17A8]" : "text-[#6F657A]"}`}
      >
        {acao}
      </span>
    </>
  );

  if (!doc.href) {
    return <div className={`${linha} opacity-60`}>{conteudo}</div>;
  }

  return (
    <a
      href={doc.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${linha} transition hover:bg-[#F8F5F0] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#4F17A8]`}
    >
      {conteudo}
    </a>
  );
}
