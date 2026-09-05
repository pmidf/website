import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { assets } from "@/content/assets";
import { REDES } from "@/content/navegacao";
import { site } from "@/content/site";

/** Rodapé institucional: logo, contato, redes sociais e aviso de privacidade. */
export function Rodape() {
  return (
    <footer className="border-t-[11px] border-[#371075] bg-[#F5F5F5]">
      <Container className="grid gap-8 py-10 md:grid-cols-3 md:items-start lg:py-12">
        <Image
          src={assets.marca.logo}
          alt="PMI Distrito Federal"
          width={193}
          height={75}
          className="h-[52px] w-auto lg:h-[61px]"
        />

        {/* E-mail, telefone e endereço vêm de `content/site.ts` — a mesma
            fonte que alimenta a página de contato e o link de WhatsApp. */}
        <address className="not-italic text-[16px] text-black">
          <p>
            <strong>E-mail:</strong>{" "}
            <a href={`mailto:${site.contact.email}`} className="hover:underline">
              {site.contact.email}
            </a>
          </p>
          <p className="mt-3">
            <strong>Telefone:</strong>{" "}
            <a href={site.contact.telefone.link} className="hover:underline">
              {site.contact.telefone.exibicao}
            </a>
          </p>
          <p className="mt-3">
            <strong>Endereço fiscal:</strong>
            <br />
            {site.contact.address}
          </p>
        </address>

        <div className="md:justify-self-end md:text-right">
          <ul className="flex gap-4 md:justify-end">
            {REDES.map((rede) => (
              <li key={rede.nome}>
                <a
                  href={rede.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={rede.nome}
                  className="block text-[#200F3B] transition hover:text-[#FF610F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#371075]"
                >
                  {/* O nome acessível vem do aria-label do link; o glifo é
                      decorativo e herda a cor via currentColor. */}
                  <rede.Icone aria-hidden className="h-6 w-6" />
                </a>
              </li>
            ))}
          </ul>
          <Link
            href="/aviso-de-privacidade"
            className="mt-4 inline-block text-[16px] text-black hover:underline"
          >
            Aviso de privacidade
          </Link>
        </div>
      </Container>

      <p className="pb-8 text-center text-[16px] text-black">
        © PMI DF | Project Management Institute
      </p>
    </footer>
  );
}
