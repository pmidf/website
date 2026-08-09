/**
 * Barrel das seções de Eventos — mantém `page.tsx` com um import só.
 * `CardEvento` e `FiltrosAgenda` não são reexportados: são detalhe interno
 * da `Agenda`.
 */
export { Hero } from "@/components/eventos/Hero";
export { EventoDestaque } from "@/components/eventos/EventoDestaque";
export { Agenda } from "@/components/eventos/Agenda";
export { ComoSeInscrever } from "@/components/eventos/ComoSeInscrever";
export { FacaParte } from "@/components/eventos/FacaParte";
