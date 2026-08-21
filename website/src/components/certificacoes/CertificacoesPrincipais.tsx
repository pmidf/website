import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CERTIFICACOES } from "@/content/certificacoes";

export function CertificacoesPrincipais() {
  return (
    <section id="certificacoes" className="bg-[#F8F5F0] py-16 lg:py-20">
      <Container>
        <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#FF610F]">
          As principais credenciais
        </p>

        <h2 className="mt-4 text-[30px] font-extrabold leading-tight text-[#200F3B] lg:text-[42px]">
          Qual certificação é para você
        </h2>

        <p className="mt-4 max-w-[760px] text-[16px] leading-relaxed text-[#5C546E]">
          A emissão, o exame e o pagamento são feitos pelo PMI Global. O PMI-DF ajuda
          você a se preparar e a conseguir desconto com nossos parceiros autorizados.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {CERTIFICACOES.map((item) => (
            <article
              key={item.sigla}
              className={`rounded-[18px] p-7 text-white shadow-[0_8px_20px_rgba(32,15,59,0.16)] ${item.cor}`}
            >
              <span className="inline-flex rounded-full border border-white/35 px-3 py-1 text-[11px] font-semibold">
                Certificação
              </span>

              <div className={`mt-5 flex h-16 w-16 items-center justify-center rounded-[14px] ${item.iconeBg}`}>
                <span className="text-[22px] font-bold text-white">▲</span>
              </div>

              <p className="mt-5 text-[20px] font-bold">{item.sigla}</p>
              <h3 className="mt-2 text-[28px] font-extrabold leading-tight">{item.titulo}</h3>
              <p className="mt-2 text-[13px] font-semibold text-white/80">{item.subtitulo}</p>

              <p className="mt-5 text-[15px] leading-relaxed text-white/85">{item.descricao}</p>

              <Link
                href="https://www.pmi.org/certifications"
                target="_blank"
                className="mt-6 inline-flex rounded-full bg-white/80 px-5 py-2 text-[13px] font-semibold text-[#200F3B] transition hover:bg-white"
              >
                Saiba mais no PMI Global →
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}