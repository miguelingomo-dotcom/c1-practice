export type TextSegment = { type: 'text'; value: string } | { type: 'gap'; index: number };

/**
 * Convierte un texto con marcadores {{0}}, {{1}}, ... en una lista de segmentos
 * alternando texto plano y huecos, para poder renderizar inputs/selects en su sitio.
 */
export function splitGapText(text: string): TextSegment[] {
  const regex = /\{\{(\d+)\}\}/g;
  const segments: TextSegment[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ type: 'text', value: text.slice(lastIndex, match.index) });
    }
    segments.push({ type: 'gap', index: Number(match[1]) });
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    segments.push({ type: 'text', value: text.slice(lastIndex) });
  }
  return segments;
}

export function normalize(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, ' ');
}
