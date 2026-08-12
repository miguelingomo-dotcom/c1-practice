import { useMemo, useState } from 'react';
import type { WordFormationExercise } from '../../types';
import { normalize, splitGapText } from '../../lib/gapText';
import { Button, ScorePill } from '../ui';

export function WordFormation({
  exercise,
  onComplete,
}: {
  exercise: WordFormationExercise;
  onComplete: (correct: number, total: number) => void;
}) {
  const segments = useMemo(() => splitGapText(exercise.text), [exercise.text]);
  const [values, setValues] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  const total = exercise.gaps.length;

  const isCorrect = (i: number) =>
    exercise.gaps[i].answers.some((a) => normalize(a) === normalize(values[i] ?? ''));

  const correctCount = exercise.gaps.filter((_, i) => isCorrect(i)).length;
  const allFilled = Object.keys(values).length === total && Object.values(values).every((v) => v.trim());

  const handleCheck = () => {
    setChecked(true);
    onComplete(exercise.gaps.filter((_, i) => isCorrect(i)).length, total);
  };

  return (
    <div className="space-y-6">
      <p className="font-serif text-lg leading-8 whitespace-pre-line">
        {segments.map((seg, i) =>
          seg.type === 'text' ? (
            <span key={i}>{seg.value}</span>
          ) : (
            <span key={i} className="inline-flex items-baseline mx-1 align-middle">
              <input
                type="text"
                disabled={checked}
                value={values[seg.index] ?? ''}
                onChange={(e) => setValues((v) => ({ ...v, [seg.index]: e.target.value }))}
                className={`w-28 text-center px-1.5 py-0.5 rounded-sm border text-sm font-medium bg-white focus-ring ${
                  checked
                    ? isCorrect(seg.index)
                      ? 'bg-correctSoft border-correct text-correct'
                      : 'bg-[#F4DEDF] border-pen text-pen'
                    : 'border-ink/20'
                }`}
              />
              {checked && !isCorrect(seg.index) && (
                <span className="text-xs text-correct ml-1 font-mono">
                  ({exercise.gaps[seg.index].answers[0]})
                </span>
              )}
            </span>
          ),
        )}
      </p>

      <div className="grid sm:grid-cols-4 gap-3">
        {exercise.gaps.map((gap, i) => (
          <div key={i} className="text-xs font-mono text-inkSoft">
            ({i + 1}) <span className="text-pen font-semibold">{gap.root}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4 pt-2">
        <Button onClick={handleCheck} disabled={!allFilled || checked}>
          Corregir
        </Button>
        {checked && <ScorePill correct={correctCount} total={total} />}
      </div>
    </div>
  );
}
