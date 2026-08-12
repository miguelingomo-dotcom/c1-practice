import { useState } from 'react';
import type { KeyWordTransformationExercise } from '../../types';
import { normalize } from '../../lib/gapText';
import { Button, ScorePill } from '../ui';

export function KeyWordTransformation({
  exercise,
  onComplete,
}: {
  exercise: KeyWordTransformationExercise;
  onComplete: (correct: number, total: number) => void;
}) {
  const [values, setValues] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  const total = exercise.items.length;

  const isCorrect = (i: number) =>
    exercise.items[i].answers.some((a) => normalize(a) === normalize(values[i] ?? ''));

  const correctCount = exercise.items.filter((_, i) => isCorrect(i)).length;
  const allFilled = Object.keys(values).length === total && Object.values(values).every((v) => v.trim());

  const handleCheck = () => {
    setChecked(true);
    onComplete(exercise.items.filter((_, i) => isCorrect(i)).length, total);
  };

  return (
    <div className="space-y-6">
      {exercise.items.map((item, i) => (
        <div key={i} className="space-y-2 pb-4 border-b border-ink/10 last:border-0">
          <p className="text-sm text-inkSoft font-mono">
            ({i + 1}) <span className="text-ink">{item.prompt}</span>
          </p>
          <p className="text-xs uppercase tracking-wider text-pen font-mono">
            palabra clave: <strong>{item.keyword}</strong>
          </p>
          <p className="font-serif text-base leading-7 flex flex-wrap items-baseline gap-1.5">
            <span>{item.gapStart}</span>
            <input
              type="text"
              disabled={checked}
              value={values[i] ?? ''}
              onChange={(e) => setValues((v) => ({ ...v, [i]: e.target.value }))}
              className={`min-w-[220px] flex-1 px-2 py-1 rounded-sm border text-sm bg-white focus-ring ${
                checked
                  ? isCorrect(i)
                    ? 'bg-correctSoft border-correct text-correct'
                    : 'bg-[#F4DEDF] border-pen text-pen'
                  : 'border-ink/20'
              }`}
            />
            <span>{item.gapEnd}</span>
          </p>
          {checked && !isCorrect(i) && (
            <p className="text-xs text-correct font-mono">Respuesta válida: {item.answers[0]}</p>
          )}
        </div>
      ))}

      <div className="flex items-center gap-4 pt-2">
        <Button onClick={handleCheck} disabled={!allFilled || checked}>
          Corregir
        </Button>
        {checked && <ScorePill correct={correctCount} total={total} />}
      </div>
    </div>
  );
}
