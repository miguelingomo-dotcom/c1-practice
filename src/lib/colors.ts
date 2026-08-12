// Sistema de color "espectro": cada una de las 8 partes del examen tiene un color
// propio, consistente en toda la app (listas, insignias, barras de progreso...).

export interface PartColor {
  text: string;
  bg: string;
  bgSoft: string;
  border: string;
  ring: string;
  dot: string;
  gradient: string;
}

const PALETTE: Record<number, PartColor> = {
  1: {
    text: 'text-[#7C3AED]',
    bg: 'bg-[#7C3AED]',
    bgSoft: 'bg-[#EDE7FE]',
    border: 'border-[#7C3AED]',
    ring: 'ring-[#7C3AED]',
    dot: 'bg-[#7C3AED]',
    gradient: 'from-[#7C3AED] to-[#A78BFA]',
  },
  2: {
    text: 'text-[#4F46E5]',
    bg: 'bg-[#4F46E5]',
    bgSoft: 'bg-[#E0E7FF]',
    border: 'border-[#4F46E5]',
    ring: 'ring-[#4F46E5]',
    dot: 'bg-[#4F46E5]',
    gradient: 'from-[#4F46E5] to-[#818CF8]',
  },
  3: {
    text: 'text-[#2563EB]',
    bg: 'bg-[#2563EB]',
    bgSoft: 'bg-[#DBEAFE]',
    border: 'border-[#2563EB]',
    ring: 'ring-[#2563EB]',
    dot: 'bg-[#2563EB]',
    gradient: 'from-[#2563EB] to-[#60A5FA]',
  },
  4: {
    text: 'text-[#0891B2]',
    bg: 'bg-[#0891B2]',
    bgSoft: 'bg-[#CFFAFE]',
    border: 'border-[#0891B2]',
    ring: 'ring-[#0891B2]',
    dot: 'bg-[#0891B2]',
    gradient: 'from-[#0891B2] to-[#22D3EE]',
  },
  5: {
    text: 'text-[#059669]',
    bg: 'bg-[#059669]',
    bgSoft: 'bg-[#D1FAE5]',
    border: 'border-[#059669]',
    ring: 'ring-[#059669]',
    dot: 'bg-[#059669]',
    gradient: 'from-[#059669] to-[#34D399]',
  },
  6: {
    text: 'text-[#D97706]',
    bg: 'bg-[#D97706]',
    bgSoft: 'bg-[#FEF3C7]',
    border: 'border-[#D97706]',
    ring: 'ring-[#D97706]',
    dot: 'bg-[#D97706]',
    gradient: 'from-[#D97706] to-[#FBBF24]',
  },
  7: {
    text: 'text-[#EA580C]',
    bg: 'bg-[#EA580C]',
    bgSoft: 'bg-[#FFEDD5]',
    border: 'border-[#EA580C]',
    ring: 'ring-[#EA580C]',
    dot: 'bg-[#EA580C]',
    gradient: 'from-[#EA580C] to-[#FB923C]',
  },
  8: {
    text: 'text-[#DB2777]',
    bg: 'bg-[#DB2777]',
    bgSoft: 'bg-[#FCE7F3]',
    border: 'border-[#DB2777]',
    ring: 'ring-[#DB2777]',
    dot: 'bg-[#DB2777]',
    gradient: 'from-[#DB2777] to-[#F472B6]',
  },
};

export const WRITING_COLOR: PartColor = {
  text: 'text-[#C026D3]',
  bg: 'bg-[#C026D3]',
  bgSoft: 'bg-[#FAE8FF]',
  border: 'border-[#C026D3]',
  ring: 'ring-[#C026D3]',
  dot: 'bg-[#C026D3]',
  gradient: 'from-[#C026D3] to-[#E879F9]',
};

export const EXAM_COLOR: PartColor = {
  text: 'text-[#CA8A04]',
  bg: 'bg-[#CA8A04]',
  bgSoft: 'bg-[#FEF9C3]',
  border: 'border-[#CA8A04]',
  ring: 'ring-[#CA8A04]',
  dot: 'bg-[#CA8A04]',
  gradient: 'from-[#CA8A04] to-[#FACC15]',
};

export function getPartColor(part: number): PartColor {
  return PALETTE[part] ?? PALETTE[1];
}
