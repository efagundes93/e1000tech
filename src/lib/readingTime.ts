const WORDS_PER_MINUTE = 200;

/**
 * Estima o tempo de leitura a partir do corpo bruto (markdown/mdx) de um post.
 * Simples de propósito: sem dependência de plugin remark, roda em qualquer
 * lugar onde o texto do post esteja disponível (build ou runtime).
 */
export function estimateReadingTime(rawBody: string): number {
  const words = rawBody
    .replace(/```[\s\S]*?```/g, " ") // ignora blocos de código
    .trim()
    .split(/\s+/).length;

  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}
