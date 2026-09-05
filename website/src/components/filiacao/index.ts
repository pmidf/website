/**
 * Barrel das seções de Filiação — mantém `page.tsx` com um import só.
 * `FotoSecao` e `FaixaSecao` não são reexportados: são blocos internos,
 * usados pelas seções e não pela página.
 */
export { Hero } from "@/components/filiacao/Hero";
export { PorQueSeFiliar } from "@/components/filiacao/PorQueSeFiliar";
export { BeneficiosGlobal } from "@/components/filiacao/BeneficiosGlobal";
export { BeneficiosLocais } from "@/components/filiacao/BeneficiosLocais";
export { PraQuemE } from "@/components/filiacao/PraQuemE";
export { Investimento } from "@/components/filiacao/Investimento";
export { PerguntasFrequentes } from "@/components/filiacao/PerguntasFrequentes";
export { CtaFinal } from "@/components/filiacao/CtaFinal";
