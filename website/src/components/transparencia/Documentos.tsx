import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { GRUPOS_DOCUMENTOS } from "@/content/transparencia";

export function Documentos() {
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
          Arquivos em PDF abrem em nova aba. Links externos levam a portais oficiais de terceiros.
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

              <div className="overflow-hidden rounded-[18px] bg-white shadow-[0_3px_14px_rgba(32,15,59,0.07)]">
                {grupo.documentos.map((doc, index) => {
                  const isPdf = doc.tipo === "PDF";

                  return (
                    <Link
                      key={`${grupo.titulo}-${doc.titulo}-${index}`}
                      href={doc.href}
                      target={doc.externo || isPdf ? "_blank" : undefined}
                      rel={doc.externo || isPdf ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-5 border-b border-[#E7E0F0] px-6 py-5 transition hover:bg-[#F8F5F0] last:border-0"
                    >
                      <span
                        className={`flex h-9 w-[54px] shrink-0 items-center justify-center rounded-[10px] text-[12px] font-bold text-white ${
                          isPdf ? "bg-[#4F17A8]" : "bg-[#003C4C]"
                        }`}
                      >
                        {doc.tipo}
                      </span>

                      <div className="min-w-0 flex-1">
                        <h4 className="text-[17px] font-semibold text-[#200F3B]">
                          {doc.titulo}
                        </h4>

                        <p className="mt-1 text-[13px] font-medium text-[#6F657A]">
                          {doc.descricao}
                        </p>
                      </div>

                      <span className="shrink-0 text-[13px] font-bold text-[#4F17A8]">
                        {isPdf ? "Baixar" : "Abrir ↗"}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </section>
  );
}