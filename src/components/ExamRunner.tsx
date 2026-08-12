import { useEffect, useState } from 'react';
import { findExercise, PART_LABELS } from '../data';
import type { ExamConfig, ExamStep } from '../lib/exam';
import { formatSeconds } from '../lib/exam';
import { Button, Card, PartTag } from './ui';
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
          <PartTag part={exercise.part} label={PART_LABELS[exercise.part]} />
        </div>
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm text-pen border border-pen/30 rounded-sm px-3 py-1.5">
            ⏱ {formatSeconds(elapsed)}
          </span>
          <Button variant="ghost" onClick={onAbort}>
            Abandonar
          </Button>
        </div>
      </div>

      <div className="w-full h-1.5 bg-ink/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-pen transition-all"
          style={{ width: `${((currentIndex + (hasAnswered ? 1 : 0)) / steps.length) * 100}%` }}
        />
      </div>

      <h2 className="font-serif text-2xl">{exercise.title}</h2>

      <Card className="p-6">{renderExercise(exercise, handleComplete)}</Card>

      <div className="flex justify-end">
        <Button onClick={handleNext} disabled={!hasAnswered}>
          {isLast ? 'Ver resultados →' : 'Siguiente parte →'}
        </Button>
      </div>
    </div>
  );
}
