import { useState } from 'react';
import type { MultipleMatchingExercise } from '../../types';
import { Button, ScorePill } from '../ui';

export function MultipleMatching({
  exercise,
  onComplete,
}: {
  exercise: MultipleMatchingExercise;
  onComplete: (correct: number, total: number) => void;
}) {
  const [selected, setSelected] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  const total = exercise.questions.length;
  const isCorrect = (i: number) => selected[i] === exercise.questions[i].answerLabel;
  const correctCount = exercise.questions.filter((_, i) => isCorrect(i)).length;
  const allAnswered = Object.keys(selected).length === total;

  const handleCheck = () => {
    setChecked(true);
    onComplete(exercise.questions.filter((_, i) => isCorrect(i)).length, total);
  };

  return (
    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
      <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2 border-r border-ink/10">
        <p className="text-sm text-inkSoft italic">{exercise.intro}</p>
        {exercise.texts.map((t) => (
          <div key={t.label} className="bg-white border border-ink/10 rounded-lg p-4">
            <div className="w-7 h-7 flex items-center justify-center rounded-full bg-ink text-paper font-mono text-sm mb-2">
              {t.label}
            </div>
            <p className="font-serif text-[15px] leading-7">{t.text}</p>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        {exercise.questions.map((q, i) => (
          <div key={i} className="flex flex-wrap items-center gap-3 border-b border-ink/10 pb-3">
            <p className="text-sm flex-1 min-w-[220px]">
              <span className="font-mono text-pen mr-1">{i + 1}.</span>
              {q.question}
            </p>
            <div className="flex gap-1.5">
              {exercise.texts.map((t) => {
                const isSelected = selected[i] === t.label;
                const isCorrectOpt = checked && t.label === q.answerLabel;
                const isWrongSelected = checked && isSelected && t.label !== q.answerLabel;
                return (
                  <button
                    key={t.label}
                    disabled={checked}
                    onClick={() => setSelected((s) => ({ ...s, [i]: t.label }))}
                    className={`w-9 h-9 rounded-lg border font-mono text-sm focus-ring transition-colors ${
                      isCorrectOpt
                        ? 'bg-correctSoft border-correct text-correct'
                        : isWrongSelected
                          ? 'bg-penSoft/25 border-pen text-pen'
                          : isSelected
                            ? 'bg-accent text-white border-accent shadow-sm shadow-accent/30'
                            : 'bg-white border-ink/20 hover:border-ink/50'
                    }`}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        <div className="flex items-center gap-4 pt-2">
          <Button onClick={handleCheck} disabled={!allAnswered || checked}>
            Corregir
          </Button>
          {checked && <ScorePill correct={correctCount} total={total} />}
        </div>
      </div>
    </div>
  );
}
