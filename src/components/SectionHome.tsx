import { motion } from 'framer-motion';
import { ArrowLeft, ListChecks, Shuffle } from 'lucide-react';
import type { Section } from '../types';
import { getExercisesForPart, PART_DESCRIPTIONS, PART_LABELS } from '../data';
import type { ProgressRecord } from '../hooks/useProgress';
import { getPartColor } from '../lib/colors';
import { Button, Card } from './ui';

const PARTS_BY_SECTION: Record<Section, number[]> = {
  'use-of-english': [1, 2, 3, 4],
  reading: [5, 6, 7, 8],
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' as const } },
};

export function SectionHome({
  section,
  progress,
  onPracticeRandom,
  onBrowsePart,
  onBrowseAll,
  onBack,
}: {
  section: Section;
  progress: ProgressRecord;
  onPracticeRandom: (part: number) => void;
  onBrowsePart: (part: number) => void;
  onBrowseAll: () => void;
  onBack: () => void;
}) {
  const parts = PARTS_BY_SECTION[section];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <Button variant="ghost" onClick={onBack} className="!px-2 !py-1 mb-2 -ml-2">
            <ArrowLeft size={15} /> Inicio
          </Button>
          <h1 className="font-display text-3xl font-semibold text-ink">
            {section === 'use-of-english' ? 'Use of English' : 'Reading'}
          </h1>
        </div>
        <Button variant="outline" onClick={onBrowseAll}>
          <ListChecks size={16} /> Ver todos los ejercicios
        </Button>
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="grid sm:grid-cols-2 gap-4">
        {parts.map((part) => {
          const exercises = getExercisesForPart(section, part);
          const done = exercises.filter((ex) => progress.completed.includes(ex.id)).length;
          const pct = exercises.length ? Math.round((done / exercises.length) * 100) : 0;
          const color = getPartColor(part);
          return (
            <motion.div key={part} variants={item}>
              <Card hover className="p-5 flex flex-col justify-between gap-4 h-full">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider ${color.text} ${color.bgSoft} px-2.5 py-1 rounded-full`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${color.dot}`} />
                      Parte {part}
                    </span>
                    <p className="text-xs font-mono text-inkSoft">
                      {done}/{exercises.length}
                    </p>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {PART_LABELS[part].split('· ')[1]}
                  </h3>
                  <p className="text-sm text-inkSoft leading-relaxed">{PART_DESCRIPTIONS[part]}</p>
                  <div className={`h-1.5 rounded-full ${color.bgSoft} overflow-hidden`}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className={`h-full rounded-full bg-gradient-to-r ${color.gradient}`}
                    />
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Button onClick={() => onPracticeRandom(part)} disabled={exercises.length === 0}>
                    <Shuffle size={15} /> Practicar
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => onBrowsePart(part)}
                    disabled={exercises.length === 0}
                  >
                    Ver lista
                  </Button>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
