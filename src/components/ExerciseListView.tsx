import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Sparkles } from 'lucide-react';
import type { Section } from '../types';
import { getAllMeta, PART_LABELS } from '../data';
import type { ProgressRecord } from '../hooks/useProgress';
import { getPartColor } from '../lib/colors';
import { Button, Card } from './ui';

const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.03 } },
};
const listItem = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.22 } },
};

export function ExerciseListView({
  section,
  part,
  progress,
  onSelect,
  onBack,
}: {
  section: Section;
  part?: number;
  progress: ProgressRecord;
  onSelect: (id: string) => void;
  onBack: () => void;
}) {
  const all = getAllMeta(section).filter((m) => (part ? m.part === part : true));
  const grouped = all.reduce<Record<number, typeof all>>((acc, m) => {
    (acc[m.part] ??= []).push(m);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="font-display text-2xl font-semibold text-ink">
          {part
            ? PART_LABELS[part]
            : section === 'use-of-english'
              ? 'Todos los ejercicios · Use of English'
              : 'Todos los ejercicios · Reading'}
        </h2>
        <Button variant="ghost" onClick={onBack}>
          <ArrowLeft size={15} /> Volver
        </Button>
      </div>

      {Object.entries(grouped).map(([partKey, exercises]) => {
        const color = getPartColor(Number(partKey));
        return (
          <div key={partKey} className="space-y-2.5">
            {!part && (
              <p
                className={`inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider ${color.text}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${color.dot}`} />
                {PART_LABELS[Number(partKey)]}
              </p>
            )}
            <motion.div
              variants={listContainer}
              initial="hidden"
              animate="show"
              className="grid sm:grid-cols-2 gap-2.5"
            >
              {exercises?.map((ex) => {
                const done = progress.completed.includes(ex.id);
                const score = progress.scores[ex.id];
                return (
                  <motion.button
                    key={ex.id}
                    variants={listItem}
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => onSelect(ex.id)}
                    className="text-left focus-ring rounded-2xl"
                  >
                    <Card className="p-3.5 flex items-center justify-between gap-3 hover:border-accent/25 hover:shadow-md transition-all duration-200">
                      <span className="text-sm font-medium text-ink">{ex.title}</span>
                      {done ? (
                        <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-correct shrink-0 bg-correctSoft px-2 py-1 rounded-full">
                          <CheckCircle2 size={13} />
                          {score ? `${score.correct}/${score.total}` : 'hecho'}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-mono text-inkSoft shrink-0 bg-ink/5 px-2 py-1 rounded-full">
                          <Sparkles size={12} />
                          nuevo
                        </span>
                      )}
                    </Card>
                  </motion.button>
                );
              })}
            </motion.div>
          </div>
        );
      })}

      {all.length === 0 && <p className="text-sm text-inkSoft">No hay ejercicios todavía en esta sección.</p>}
    </div>
  );
}
