"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";

const TABS = [
  { label: "As certificações", id: "certificacoes" },
  { label: "Como escolher", id: "comparativo" },
  { label: "Parceiros ATP", id: "parceiros-atp" },
  { label: "PDUs", id: "pdus" },
  { label: "Dúvidas", id: "duvidas" },
];

export function TabsNav() {
  const [active, setActive] = useState("certificacoes");

  useEffect(() => {
    const sections = TABS.map((tab) => document.getElementById(tab.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visivel = entries.find((entry) => entry.isIntersecting);
        if (visivel?.target?.id) {
          setActive(visivel.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((section) => section && observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="sticky top-[72px] z-30 border-b border-[#E7E0F0] bg-[#F8F5F0]/95 backdrop-blur lg:top-[95px]">
      <Container>
        <div className="flex gap-6 overflow-x-auto py-4">
          {TABS.map((tab) => {
            const isActive = active === tab.id;

            return (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                className={`whitespace-nowrap border-b-2 pb-2 text-[14px] font-semibold transition ${
                  isActive
                    ? "border-[#6D1CD6] text-[#4F17A8]"
                    : "border-transparent text-[#5C546E] hover:text-[#200F3B]"
                }`}
              >
                {tab.label}
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}