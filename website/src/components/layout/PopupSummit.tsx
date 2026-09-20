"use client";

import { useEffect, useRef } from "react";

import { Botao } from "@/components/ui/Botao";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { EVENTO_DESTAQUE } from "@/content/eventos";

/**
 * Pop-up de entrada anunciando o PMI-DF Summit — o carro-chefe do capítulo.
 *
 * Usa o elemento nativo `<dialog>` em vez de um `<div>` com `position: fixed`:
 * ele já resolve foco preso dentro do modal, fechar com Esc e a camada
 * `::backdrop`, sem depender de nenhuma biblioteca.
 *
 * Aparece uma vez por navegador: fechar (X, "Agora não", Esc ou clique fora)
 * grava a marca em `localStorage` e a pessoa não vê de novo, em nenhuma
 * página do site, até limpar os dados do site ou até `CHAVE_VISTO` mudar
 * (o que fazemos de propósito ao trocar de campanha, para reabrir o aviso).
 *
 * O conteúdo vem de `EVENTO_DESTAQUE` — a mesma constante que alimenta o
 * banner de destaque em `/eventos` — para que data, local e link de inscrição
 * nunca precisem ser mantidos em dois lugares.
 */
const CHAVE_VISTO = "pmidf:popup-summit-2026";

export function PopupSummit() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    try {
      if (localStorage.getItem(CHAVE_VISTO)) return;
    } catch {
      // Modo privado ou storage bloqueado: melhor mostrar o pop-up de novo do
      // que quebrar o carregamento da página por causa de um anúncio.
    }

    // Pequeno atraso para não competir com o primeiro paint da página.
    const temporizador = setTimeout(() => {
      dialogRef.current?.showModal();
    }, 900);

    return () => clearTimeout(temporizador);
  }, []);

  function fechar() {
    dialogRef.current?.close();

    try {
      localStorage.setItem(CHAVE_VISTO, "1");
    } catch {
      // Sem storage disponível, o pop-up volta a aparecer na próxima
      // visita — aceitável; a alternativa seria não fechar o modal.
    }
  }

  /** Clique fora do cartão (na área do `::backdrop`) também fecha. */
  function aoClicarNoFundo(evento: React.MouseEvent<HTMLDialogElement>) {
    if (evento.target === dialogRef.current) fechar();
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={fechar}
      onClick={aoClicarNoFundo}
      aria-labelledby="popup-summit-titulo"
      className="fixed left-1/2 top-1/2 z-50 m-0 max-h-[calc(100vh-32px)] w-[calc(100%-24px)] max-w-[560px] -translate-x-1/2 -translate-y-1/2 overflow-y-auto overflow-x-hidden rounded-[22px] border-none bg-[linear-gradient(110deg,#210040_0%,#4F17A8_55%,#012F44_100%)] p-0 text-white shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop:bg-[#100522]/75 backdrop:backdrop-blur-sm lg:max-w-[640px]"
    >
      <div className="relative p-8 lg:p-11">
        <button
          type="button"
          onClick={fechar}
          aria-label="Fechar aviso"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-[20px] leading-none text-white transition hover:bg-white/20"
        >
          ×
        </button>

        <Eyebrow className="text-[#05BFE0]">{EVENTO_DESTAQUE.chip}</Eyebrow>

        <h2
          id="popup-summit-titulo"
          className="mt-4 max-w-[440px] font-[family-name:var(--font-titulo,inherit)] text-[28px] font-extrabold leading-[1.18] text-white lg:text-[34px]"
        >
          {EVENTO_DESTAQUE.titulo}
        </h2>

        <p className="mt-3 text-[15px] font-medium text-white/80 lg:text-[16px]">
          {EVENTO_DESTAQUE.meta}
        </p>

        <p className="mt-4 max-w-[460px] text-[15.5px] leading-relaxed text-white/75 lg:text-[16.5px]">
          {EVENTO_DESTAQUE.descricao}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Botao href={EVENTO_DESTAQUE.inscricaoHref} external variante="branco">
            Inscreva-se no Sympla
          </Botao>
          <button
            type="button"
            onClick={fechar}
            className="text-[14.5px] font-medium text-white/70 underline-offset-2 transition hover:text-white hover:underline"
          >
            Agora não
          </button>
        </div>
      </div>
    </dialog>
  );
}
