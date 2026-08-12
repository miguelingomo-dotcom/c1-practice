import { useMemo, useState } from 'react';
import type { GappedTextExercise } from '../../types';
import { splitGapText } from '../../lib/gapText';
import { Button, ScorePill } from '../ui';

export function GappedText({
  exercise,
  onComplete,
}: {
  exercise: GappedTextExercise;
  onComplete: (correct: number, total: number) => void;
}) {
  const segments = useMemo(() => splitGapText(exercise.textWithGaps), [exercise.textWithGaps]);
  const [selected, setSelected] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  const total = exercise.answers.length;
  const isCorrect = (i: number) => selected[i] === exercise.answers[i];
  const correctCount = exercise.answers.filter((_, i) => isCorrect(i)).length;
  const allAnswered = Object.keys(selected).length === total;

  const usedLabels = new Set(Object.values(selected));

  const handleCheck = () => {
    setChecked(true);
    onComplete(exercise.answers.filter((_, i) => isCorrect(i)).length, total);
  };

  return (
    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
      <div className="font-serif text-[15px] leading-8 whitespace-pre-line max-h-[70vh] overflow-y-auto pr-2 border-r border-ink/10">
        {segments.map((seg, i) =>
          seg.type === 'text' ? (
            <span key={i}>{seg.value}</span>
          ) : (
            <span
              key={i}
              className={`inline-flex items-center justify-center w-8 h-8 mx-1 rounded-full border font-mono text-sm align-middle ${
                checked
                  ? isCorrect(seg.index)
                    ? 'bg-correctSoft border-correct text-correct'
                    : 'bg-[#F4DEDF] border-pen text-pen'
                  : selected[seg.index]
                    ? 'bg-ink text-paper border-ink'
                    : 'bg-white border-ink/30 text-inkSoft'
              }`}
            >
              {selected[seg.index] ?? seg.index + 1}
            </span>
          ),
        )}
      </div>

      <div className="space-y-4">
        <p className="text-xs uppercase tracking-wider text-inkSoft font-mono">
          Párrafos (uno sobra)
        </p>
        <div className="space-y-2">
          {exercise.paragraphs.map((p) => {
            const isUsed = usedLabels.has(p.label) && !checked;
            return (
              <div
                key={p.label}
                className={`bg-white border rounded-sm p-3 text-sm leading-6 ${isUsed ? 'border-ink/10 opacity-40' : 'border-ink/10'}`}
              >
                <span className="font-mono text-pen font-semibold mr-2">{p.label}</span>
                {p.text}
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-3 gap-2">
          {exercise.answers.map((_, i) => (
            <div key={i} className="space-y-1">
              <label className="text-xs font-mono text-inkSoft">Hueco {i + 1}</label>
              <select
                disabled={checked}
                value={selected[i] ?? ''}
                onChange={(e) => setSelected((s) => ({ ...s, [i]: e.target.value }))}
                className="w-full px-2 py-1.5 rounded-sm border border-ink/20 bg-white text-sm focus-ring"
              >
                <option value="" disabled>
                  —
                </option>
                {exercise.paragraphs.map((p) => (
                  <option key={p.label} value={p.label}>
                    {p.label}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

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
