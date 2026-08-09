"use client";

import { FaChevronDown, FaMagnifyingGlass } from "react-icons/fa6";

import { FORMATOS } from "@/content/eventos";
import type { FormatoEvento } from "@/types";

/**
 * Barra de filtros da agenda: busca, chips de formato e select de categoria.
 *
 * Componente controlado — não guarda estado. Quem decide o que fazer com os
 * filtros é a `Agenda`, que também precisa deles para calcular a lista.
 */
export function FiltrosAgenda({
  busca,
  aoBuscar,
  formato,
  aoTrocarFormato,
  categoria,
  aoTrocarCategoria,
  categorias,
}: {
  busca: string;
  aoBuscar: (valor: string) => void;
  formato: FormatoEvento | "Todos";
  aoTrocarFormato: (valor: FormatoEvento | "Todos") => void;
  categoria: string;
  aoTrocarCategoria: (valor: string) => void;
  categorias: string[];
}) {
  return (
    <div className="mt-10 flex flex-col gap-4 rounded-[16px] border border-[#200F3B]/10 bg-white p-4 shadow-[0_2px_10px_rgba(32,15,59,0.06)] lg:flex-row lg:items-center">
      {/* Busca */}
      <div className="flex flex-1 items-center gap-[10px] rounded-[10px] bg-[#F6F5F8] px-4 py-[11px]">
        <FaMagnifyingGlass aria-hidden className="h-[13px] w-[13px] shrink-0 text-[#5C546E]" />
        <input
          type="search"
          value={busca}
          onChange={(e) => aoBuscar(e.target.value)}
          placeholder="Buscar evento por nome ou tema"
          aria-label="Buscar evento por nome ou tema"
          className="w-full bg-transparent text-[15px] text-[#200F3B] outline-none placeholder:text-[#5C546E]"
        />
      </div>

      {/* Chips de formato — rolam na horizontal enquanto não cabem lado a lado */}
      <div
        role="group"
        aria-label="Filtrar por formato"
        className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 lg:mx-0 lg:overflow-visible lg:pb-0"
      >
        {FORMATOS.map((opcao) => {
          const ativo = formato === opcao;
          return (
            <button
              key={opcao}
              type="button"
              aria-pressed={ativo}
              onClick={() => aoTrocarFormato(opcao)}
              className={`shrink-0 rounded-full px-4 py-[9px] text-[14px] transition ${
                ativo
                  ? "bg-[#1F0942] font-medium text-white"
                  : "border border-[#200F3B]/20 bg-white text-[#200F3B] hover:border-[#200F3B]/40"
              }`}
            >
              {opcao}
            </button>
          );
        })}
      </div>

      {/* Select de categoria */}
      <div className="relative shrink-0">
        <select
          value={categoria}
          onChange={(e) => aoTrocarCategoria(e.target.value)}
          aria-label="Filtrar por categoria"
          className="w-full appearance-none rounded-[10px] border border-[#200F3B]/20 bg-white py-[11px] pl-4 pr-10 text-[14px] text-[#200F3B] outline-none lg:w-auto"
        >
          {categorias.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <FaChevronDown
          aria-hidden
          className="pointer-events-none absolute right-[14px] top-1/2 h-[10px] w-[10px] -translate-y-1/2 text-[#200F3B]"
        />
      </div>
    </div>
  );
}
