import { useMemo, useState } from 'react';
import type { MultipleChoiceClozeExercise } from '../../types';
import { splitGapText } from '../../lib/gapText';
import { Button, ScorePill } from '../ui';

const LETTERS = ['A', 'B', 'C', 'D'];

export function MultipleChoiceCloze({
  exercise,
  onComplete,
}: {
  exercise: MultipleChoiceClozeExercise;
  onComplete: (correct: number, total: number) => void;
}) {
  const segments = useMemo(() => splitGapText(exercise.text), [exercise.text]);
  const [selected, setSelected] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);

  const total = exercise.gaps.length;
  const correct = checked
    ? exercise.gaps.filter((g, i) => selected[i] === g.answer).length
    : 0;

  const allAnswered = Object.keys(selected).length === total;

  const handleCheck = () => {
    setChecked(true);
    onComplete(
      exercise.gaps.filter((g, i) => selected[i] === g.answer).length,
      total,
    );
  };

  return (
    <div className="space-y-6">
      <p className="font-serif text-lg leading-8 whitespace-pre-line">
        {segments.map((seg, i) =>
          seg.type === 'text' ? (
            <span key={i}>{seg.value}</span>
          ) : (
            <span key={i} className="inline-flex items-baseline mx-1 align-middle">
              <span className="font-mono text-xs text-pen mr-1">({seg.index + 1})</span>
              <span
                className={`px-2 py-0.5 rounded-lg border text-sm font-medium ${
                  checked
                    ? selected[seg.index] === exercise.gaps[seg.index].answer
                      ? 'bg-correctSoft border-correct text-correct'
                      : 'bg-penSoft/25 border-pen text-pen'
                    : 'bg-white border-ink/20'
                }`}
              >
                {selected[seg.index] !== undefined
                  ? `${LETTERS[selected[seg.index]]}. ${exercise.gaps[seg.index].options[selected[seg.index]]}`
                  : '·····'}
              </span>
            </span>
          ),
        )}
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {exercise.gaps.map((gap, i) => (
          <div key={i} className="space-y-1.5">
            <p className="text-xs font-mono text-inkSoft">Hueco {i + 1}</p>
            <div className="flex flex-wrap gap-1.5">
              {gap.options.map((opt, oi) => {
                const isSelected = selected[i] === oi;
                const isCorrectOpt = checked && oi === gap.answer;
                const isWrongSelected = checked && isSelected && oi !== gap.answer;
                return (
                  <button
                    key={oi}
                    disabled={checked}
                    onClick={() => setSelected((s) => ({ ...s, [i]: oi }))}
                    className={`px-2.5 py-1 text-sm rounded-lg border focus-ring transition-colors ${
                      isCorrectOpt
                        ? 'bg-correctSoft border-correct text-correct'
                        : isWrongSelected
                          ? 'bg-penSoft/25 border-pen text-pen'
                          : isSelected
                            ? 'bg-accent text-white border-accent shadow-sm shadow-accent/30'
                            : 'bg-white border-ink/20 hover:border-ink/50'
                    }`}
                  >
                    {LETTERS[oi]}. {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4 pt-2">
        <Button onClick={handleCheck} disabled={!allAnswered || checked}>
          Corregir
        </Button>
        {checked && <ScorePill correct={correct} total={total} />}
      </div>
    </div>
  );
}
