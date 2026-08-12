import { motion } from 'framer-motion';
import { ArrowLeft, PenSquare } from 'lucide-react';
import { writingPart1, writingPart2, TASK_TYPE_LABELS } from '../data/writing';
import type { WritingPrompt } from '../types';
import { Button, Card } from './ui';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.04 } } };
const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

export function WritingHome({
  onSelect,
  onBack,
}: {
  onSelect: (prompt: WritingPrompt) => void;
  onBack: () => void;
}) {
  return (
    <div className="space-y-8">
      <div>
        <Button variant="ghost" onClick={onBack} className="!px-2 !py-1 mb-2 -ml-2">
          <ArrowLeft size={15} /> Inicio
        </Button>
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-fuchsia to-[#E879F9] flex items-center justify-center text-white shadow-md">
            <PenSquare size={20} />
          </div>
          <h1 className="font-display text-3xl font-semibold text-ink">Writing</h1>
        </div>
        <p className="text-inkSoft mt-2 max-w-2xl">
          Parte 1 es un ensayo obligatorio de 220-260 palabras. En la Parte 2 eliges una tarea
          (email, informe, reseña, propuesta...) también de 220-260 palabras.
        </p>
      </div>

      <div className="space-y-3">
        <p className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-fuchsia bg-fuchsiaSoft px-2.5 py-1 rounded-full">
          Parte 1 · Ensayo obligatorio
        </p>
        <motion.div variants={container} initial="hidden" animate="show" className="grid sm:grid-cols-2 gap-3">
          {writingPart1.map((p) => (
            <motion.button
              key={p.id}
              variants={item}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => onSelect(p)}
              className="text-left focus-ring rounded-2xl"
            >
              <Card className="p-4 hover:border-fuchsia/30 hover:shadow-md transition-all duration-200">
                <p className="text-sm font-semibold text-ink">{p.title}</p>
                <p className="text-xs text-inkSoft mt-1 line-clamp-2">{p.context}</p>
              </Card>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <div className="space-y-3">
        <p className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-fuchsia bg-fuchsiaSoft px-2.5 py-1 rounded-full">
          Parte 2 · Elige una tarea
        </p>
        <motion.div variants={container} initial="hidden" animate="show" className="grid sm:grid-cols-2 gap-3">
          {writingPart2.map((p) => (
            <motion.button
              key={p.id}
              variants={item}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => onSelect(p)}
              className="text-left focus-ring rounded-2xl"
            >
              <Card className="p-4 hover:border-fuchsia/30 hover:shadow-md transition-all duration-200">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-ink">{p.title}</p>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-fuchsia bg-fuchsiaSoft rounded-full px-2 py-0.5 shrink-0">
                    {TASK_TYPE_LABELS[p.type]}
                  </span>
                </div>
                <p className="text-xs text-inkSoft mt-1 line-clamp-2">{p.scenario}</p>
              </Card>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
