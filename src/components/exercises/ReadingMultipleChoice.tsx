import { useState } from 'react';
import type { ReadingMultipleChoiceExercise } from '../../types';
import { Button, ScorePill } from '../ui';

const LETTERS = ['A', 'B', 'C', 'D'];

export function ReadingMultipleChoice({
  exercise,
  onComplete,
}: {
  exercise: ReadingMultipleChoiceExercise;
  onComplete: (correct: number, total: number) => void;
}) {
  const [selected, setSelected] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);

  const total = exercise.questions.length;
  const isCorrect = (i: number) => selected[i] === exercise.questions[i].answer;
  const correctCount = exercise.questions.filter((_, i) => isCorrect(i)).length;
  const allAnswered = Object.keys(selected).length === total;

  const handleCheck = () => {
    setChecked(true);
    onComplete(exercise.questions.filter((_, i) => isCorrect(i)).length, total);
  };

  return (
    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
      <div className="font-serif text-[15px] leading-8 whitespace-pre-line max-h-[70vh] overflow-y-auto pr-2 border-r border-ink/10">
        {exercise.text}
      </div>

      <div className="space-y-6">
        {exercise.questions.map((q, i) => (
          <div key={i} className="space-y-2">
            <p className="text-sm font-medium">
              <span className="font-mono text-pen mr-1">{i + 1}.</span>
              {q.question}
            </p>
            <div className="flex flex-col gap-1.5">
              {q.options.map((opt, oi) => {
                const isSelected = selected[i] === oi;
                const isCorrectOpt = checked && oi === q.answer;
                const isWrongSelected = checked && isSelected && oi !== q.answer;
                return (
                  <button
                    key={oi}
                    disabled={checked}
                    onClick={() => setSelected((s) => ({ ...s, [i]: oi }))}
                    className={`text-left px-3 py-1.5 text-sm rounded-lg border focus-ring transition-colors ${
                      isCorrectOpt
                        ? 'bg-correctSoft border-correct text-correct'
                        : isWrongSelected
                          ? 'bg-penSoft/25 border-pen text-pen'
                          : isSelected
                            ? 'bg-accent text-white border-accent shadow-sm shadow-accent/30'
                            : 'bg-white border-ink/20 hover:border-ink/50'
                    }`}
                  >
                    <span className="font-mono mr-1">{LETTERS[oi]}.</span> {opt}
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
