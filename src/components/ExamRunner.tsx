import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Timer, LogOut } from 'lucide-react';
import { findExercise, PART_LABELS } from '../data';
import type { ExamConfig, ExamStep } from '../lib/exam';
import { formatSeconds } from '../lib/exam';
import { Button, Card, PartTag } from './ui';
import { getPartColor } from '../lib/colors';
import { renderExercise } from './renderExercise';

export interface ExamResults {
  scores: Record<string, { correct: number; total: number }>;
  steps: ExamStep[];
  elapsedSeconds: number;
}

export function ExamRunner({
  config,
  steps,
  onExerciseComplete,
  onFinish,
  onAbort,
}: {
  config: ExamConfig;
  steps: ExamStep[];
  onExerciseComplete: (id: string, correct: number, total: number) => void;
  onFinish: (results: ExamResults) => void;
  onAbort: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState<Record<string, { correct: number; total: number }>>({});
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const step = steps[currentIndex];
  const exercise = step ? findExercise(step.section, step.exerciseId) : undefined;
  const isLast = currentIndex === steps.length - 1;
  const hasAnswered = step ? Boolean(scores[step.exerciseId]) : false;

  if (!exercise || !step) {
    return (
      <div className="space-y-4">
        <p className="text-inkSoft">No hay suficientes ejercicios guardados para montar este examen todavía.</p>
        <Button variant="outline" onClick={onAbort}>
          ← Volver
        </Button>
      </div>
    );
  }

  const color = getPartColor(exercise.part);

  const handleComplete = (correct: number, total: number) => {
    setScores((s) => ({ ...s, [step.exerciseId]: { correct, total } }));
    onExerciseComplete(step.exerciseId, correct, total);
  };

  const handleNext = () => {
    if (isLast) {
      onFinish({ scores, steps, elapsedSeconds: elapsed });
    } else {
      setCurrentIndex((i) => i + 1);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-wider text-inkSoft">
            {config.label} · parte {currentIndex + 1} de {steps.length}
          </p>
          <PartTag part={exercise.part} label={PART_LABELS[exercise.part]} color={color} />
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 font-mono text-sm font-semibold text-gold border-2 border-gold/25 bg-goldSoft rounded-xl px-3 py-1.5">
            <Timer size={15} /> {formatSeconds(elapsed)}
          </span>
          <Button variant="ghost" onClick={onAbort}>
            <LogOut size={15} /> Abandonar
          </Button>
        </div>
      </div>

      <div className="w-full h-2 bg-ink/8 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${color.gradient}`}
          animate={{
            width: `${((currentIndex + (hasAnswered ? 1 : 0)) / steps.length) * 100}%`,
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={exercise.id}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.25 }}
          className="space-y-6"
        >
          <h2 className="font-display text-2xl font-semibold text-ink">{exercise.title}</h2>
          <Card className={`p-6 border-t-4 ${color.border}`}>{renderExercise(exercise, handleComplete)}</Card>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-end">
        <Button onClick={handleNext} disabled={!hasAnswered}>
          {isLast ? 'Ver resultados →' : 'Siguiente parte →'}
        </Button>
      </div>
    </div>
  );
}
