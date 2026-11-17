import { FaEnvelope, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

/**
 * Botões de compartilhar, todos como links simples — sem script de terceiros
 * nem JavaScript nosso. Cada rede recebe a URL canônica da matéria.
 */
export function Compartilhar({ url, titulo }: { url: string; titulo: string }) {
  const redes = [
    {
      rotulo: "Compartilhar no LinkedIn (abre em nova aba)",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      Icone: FaLinkedinIn,
      novaAba: true,
    },
    {
      rotulo: "Compartilhar no WhatsApp (abre em nova aba)",
      href: `https://wa.me/?text=${encodeURIComponent(`${titulo} ${url}`)}`,
      Icone: FaWhatsapp,
      novaAba: true,
    },
    {
      rotulo: "Compartilhar por e-mail",
      href: `mailto:?subject=${encodeURIComponent(titulo)}&body=${encodeURIComponent(url)}`,
      Icone: FaEnvelope,
      novaAba: false,
    },
  ];

  return (
    <div className="flex items-center gap-4">
      <p className="text-[14px] font-semibold text-[#200F3B]">Compartilhe</p>
      <ul className="flex gap-2">
        {redes.map(({ rotulo, href, Icone, novaAba }) => (
          <li key={rotulo}>
            <a
              href={href}
              aria-label={rotulo}
              {...(novaAba ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F8F5F0] text-[#4F17A8] transition hover:bg-[#1F0942] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F17A8]"
            >
              <Icone aria-hidden className="h-[18px] w-[18px]" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
