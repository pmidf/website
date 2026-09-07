/**
 * Validação de e-mail compartilhada pelo formulário e pela Server Action.
 *
 * Fica num módulo só porque as duas pontas precisam concordar: se o cliente
 * aceitar o que o servidor recusa, a pessoa preenche tudo e leva um erro
 * genérico no envio; se o servidor aceitar o que o cliente recusa, a regra do
 * cliente vira enfeite.
 *
 * ## O que esta validação é, e o que não é
 *
 * É uma checagem de **forma**: o endereço parece um endereço? A gramática
 * completa do RFC 5322 aceita coisas que nenhum provedor real emite (aspas,
 * comentários entre parênteses, IP literal entre colchetes) e a expressão que
 * a cobre é célebre por ser ilegível. Pior: nada disso responde à única
 * pergunta que importa — se a caixa existe. Isso só se prova entregando.
 *
 * Então o conjunto de caracteres é deliberadamente conservador. Ele também
 * recusa aspas, colchetes angulares e vírgulas, que são o material de injeção
 * de cabeçalho de e-mail — a mesma razão pela qual o `replyTo` é montado como
 * objeto e não como string.
 */

const FORMATO = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;

export function emailValido(email: string): boolean {
  const limpo = email.trim();

  // Duas guardas que a expressão sozinha não cobre bem: ponto no começo ou no
  // fim da parte local, e pontos seguidos — inválidos em qualquer provedor.
  if (limpo.length > 254) return false;
  if (/\.\./.test(limpo)) return false;
  if (/^\.|\.@|@\./.test(limpo)) return false;

  return FORMATO.test(limpo);
}

/**
 * Domínios digitados com frequência no Brasil. Servem de alvo para a correção
 * de erro de digitação — não são uma lista de permissão: qualquer domínio
 * válido passa.
 */
const DOMINIOS_COMUNS = [
  "gmail.com",
  "hotmail.com",
  "outlook.com",
  "outlook.com.br",
  "yahoo.com",
  "yahoo.com.br",
  "icloud.com",
  "live.com",
  "bol.com.br",
  "uol.com.br",
  "terra.com.br",
  "globo.com",
  "me.com",
  "proton.me",
  "protonmail.com",
  "pmi.org",
  "pmidf.org",
];

/**
 * Distância de edição de Damerau, com corte no teto.
 *
 * Damerau e não Levenshtein simples porque ele conta a **troca de letras
 * vizinhas como um erro só**, e essa é justamente a batida mais comum ao
 * digitar: `gmial.com` por `gmail.com`. No Levenshtein puro isso custa 2 e
 * escaparia do teto, deixando passar exatamente o caso que mais importa.
 */
function distancia(a: string, b: string, teto: number): number {
  if (Math.abs(a.length - b.length) > teto) return teto + 1;

  let doisAtras: number[] = [];
  let anterior = Array.from({ length: b.length + 1 }, (_, i) => i);

  for (let i = 1; i <= a.length; i += 1) {
    const atual = [i];

    for (let j = 1; j <= b.length; j += 1) {
      const custo = a[i - 1] === b[j - 1] ? 0 : 1;

      atual[j] = Math.min(
        anterior[j] + 1, // remoção
        atual[j - 1] + 1, // inserção
        anterior[j - 1] + custo, // substituição
      );

      // Transposição: as duas últimas letras estão invertidas.
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        atual[j] = Math.min(atual[j], doisAtras[j - 2] + 1);
      }
    }

    // Linha inteira acima do teto: não há como o resultado final descer.
    if (Math.min(...atual) > teto) return teto + 1;

    doisAtras = anterior;
    anterior = atual;
  }

  return anterior[b.length];
}

/**
 * Sugere a correção de um domínio provavelmente digitado errado
 * (`gmial.com` → `gmail.com`), ou `null` quando não há palpite seguro.
 *
 * O teto de distância cresce com o tamanho do domínio: em `bol.com.br` duas
 * trocas já mudam o provedor, enquanto em `protonmail.com` duas são
 * plausivelmente erro de digitação. Um domínio idêntico a um da lista nunca
 * gera sugestão, e um que não se parece com nenhum também não — a sugestão
 * precisa ser mais provável que o que a pessoa escreveu, senão atrapalha.
 */
export function sugerirEmail(email: string): string | null {
  const limpo = email.trim().toLowerCase();
  const arroba = limpo.lastIndexOf("@");

  if (arroba < 1) return null;

  const local = limpo.slice(0, arroba);
  const dominio = limpo.slice(arroba + 1);

  if (!dominio || DOMINIOS_COMUNS.includes(dominio)) return null;

  for (const candidato of DOMINIOS_COMUNS) {
    const teto = candidato.length > 10 ? 2 : 1;

    if (distancia(dominio, candidato, teto) <= teto) {
      return `${local}@${candidato}`;
    }
  }

  return null;
}
