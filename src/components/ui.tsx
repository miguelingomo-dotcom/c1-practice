import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';

export function Card({
  children,
  className = '',
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`bg-white/80 backdrop-blur-sm border border-ink/[0.06] rounded-2xl shadow-soft transition-all duration-300 ${
        hover ? 'hover:shadow-lift hover:-translate-y-1 hover:border-accent/20' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}

type Variant = 'primary' | 'ghost' | 'outline';

export function Button({
  children,
  variant = 'primary',
  className = '',
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  const base =
    'inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 focus-ring disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.97]';
  const variants: Record<Variant, string> = {
    primary:
      'bg-gradient-to-br from-accent to-accentDark text-white shadow-md shadow-accent/25 hover:shadow-lg hover:shadow-accent/35 hover:brightness-110',
    outline:
      'border-2 border-accent/25 text-accentDark bg-white hover:border-accent/50 hover:bg-accentSoft',
    ghost: 'text-inkSoft hover:bg-ink/5 hover:text-ink',
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export function PartTag({
  part,
  label,
  color,
}: {
  part: number;
  label: string;
  color: { text: string; bgSoft: string; border: string };
}) {
  return (
    <div className="flex items-center gap-2 text-xs font-semibold font-mono">
      <span
        className={`w-6 h-6 flex items-center justify-center rounded-full border-2 ${color.border} ${color.text} ${color.bgSoft}`}
      >
        {part}
      </span>
      <span className="text-inkSoft uppercase tracking-wider">{label}</span>
    </div>
  );
}

export function ScorePill({ correct, total }: { correct: number; total: number }) {
  const ratio = total === 0 ? 0 : correct / total;
  const color =
    ratio >= 0.8
      ? 'bg-correctSoft text-correct'
      : ratio >= 0.5
        ? 'bg-warnSoft text-warn'
        : 'bg-penSoft/60 text-pen';
  return (
    <motion.span
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 18 }}
      className={`px-3.5 py-1.5 rounded-full text-sm font-bold font-mono ${color}`}
    >
      {correct} / {total}
    </motion.span>
  );
}

export function Divider() {
  return <div className="h-px bg-ink/10 w-full" />;
}
