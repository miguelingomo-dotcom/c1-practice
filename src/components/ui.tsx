import type { ButtonHTMLAttributes, ReactNode } from 'react';

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`bg-[#F7F4EC] border border-ink/10 rounded-sm shadow-[0_1px_0_rgba(30,42,56,0.06)] ${className}`}
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
    'inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-sm transition-colors focus-ring disabled:opacity-40 disabled:cursor-not-allowed';
  const variants: Record<Variant, string> = {
    primary: 'bg-ink text-paper hover:bg-inkSoft',
    outline: 'border border-ink/30 text-ink hover:border-ink hover:bg-ink/5',
    ghost: 'text-ink hover:bg-ink/5',
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export function PartTag({ part, label }: { part: number; label: string }) {
  return (
    <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-inkSoft font-mono">
      <span className="w-6 h-6 flex items-center justify-center rounded-full border border-pen text-pen font-semibold">
        {part}
      </span>
      <span>{label}</span>
    </div>
  );
}

export function ScorePill({ correct, total }: { correct: number; total: number }) {
  const ratio = total === 0 ? 0 : correct / total;
  const color = ratio >= 0.8 ? 'bg-correctSoft text-correct' : ratio >= 0.5 ? 'bg-[#F3E6D0] text-[#8A5A17]' : 'bg-[#F4DEDF] text-pen';
  return (
    <span className={`px-3 py-1 rounded-full text-sm font-semibold font-mono ${color}`}>
      {correct} / {total}
    </span>
  );
}

export function Divider() {
  return <div className="h-px bg-ink/10 w-full" />;
}
