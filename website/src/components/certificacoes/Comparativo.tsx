import { Container } from "@/components/ui/Container";
import { COMPARATIVO } from "@/content/certificacoes";

export function Comparativo() {
  return (
    <section id="comparativo" className="bg-white py-16 lg:py-20">
      <Container>
        <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#FF610F]">
          Comparativo
        </p>

        <h2 className="mt-4 text-[30px] font-extrabold leading-tight text-[#200F3B] lg:text-[42px]">
          Como escolher a sua
        </h2>

        <div className="mt-10 overflow-hidden rounded-[16px] border border-[#E5DDF0] bg-white shadow-[0_2px_12px_rgba(32,15,59,0.06)]">
          <table className="w-full border-collapse text-left">
            <thead className="bg-[#210040] text-white">
              <tr>
                <th className="px-6 py-4 text-[14px] font-semibold">Credencial</th>
                <th className="px-6 py-4 text-[14px] font-semibold">Experiência exigida</th>
                <th className="px-6 py-4 text-[14px] font-semibold">Indicado para</th>
                <th className="px-6 py-4 text-[14px] font-semibold">Formato do exame</th>
              </tr>
            </thead>
            <tbody>
              {COMPARATIVO.map((row, index) => (
                <tr key={row[0]} className={index % 2 === 0 ? "bg-[#FCFBFE]" : "bg-white"}>
                  {row.map((cell, i) => (
                    <td key={i} className="border-t border-[#EEE7F7] px-6 py-4 text-[14px] text-[#5C546E]">
                      {i === 0 ? <span className="font-bold text-[#4F17A8]">{cell}</span> : cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}