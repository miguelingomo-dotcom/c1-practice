export function countWords(text: string): number {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
}

export function wordCountColor(count: number): string {
  if (count === 0) return 'text-inkSoft';
  if (count < 180) return 'text-pen';
  if (count < 220) return 'text-[#8A5A17]';
  if (count <= 260) return 'text-correct';
  if (count <= 300) return 'text-[#8A5A17]';
  return 'text-pen';
}
