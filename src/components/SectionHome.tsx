import type { Section } from '../types';
import { getExercisesForPart, PART_DESCRIPTIONS, PART_LABELS } from '../data';
import type { ProgressRecord } from '../hooks/useProgress';
import { Button, Card } from './ui';

const PARTS_BY_SECTION: Record<Section, number[]> = {
  'use-of-english': [1, 2, 3, 4],
  reading: [5, 6, 7, 8],
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
      <div className="flex items-center justify-between">
        <div>
          <Button variant="ghost" onClick={onBack} className="!px-0 mb-2">
            ← Inicio
          </Button>
          <h1 className="font-serif text-3xl">
            {section === 'use-of-english' ? 'Use of English' : 'Reading'}
          </h1>
        </div>
        <Button variant="outline" onClick={onBrowseAll}>
          Ver todos los ejercicios
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {parts.map((part) => {
          const exercises = getExercisesForPart(section, part);
          const done = exercises.filter((ex) => progress.completed.includes(ex.id)).length;
          return (
            <Card key={part} className="p-5 flex flex-col justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-xs uppercase tracking-wider text-pen">
                    Parte {part}
                  </p>
                  <p className="text-xs font-mono text-inkSoft">
                    {done}/{exercises.length} hechos
                  </p>
                </div>
                <h3 className="font-serif text-lg">{PART_LABELS[part].split('· ')[1]}</h3>
                <p className="text-sm text-inkSoft">{PART_DESCRIPTIONS[part]}</p>
              </div>
              <div className="flex gap-2">
                <Button onClick={() => onPracticeRandom(part)} disabled={exercises.length === 0}>
                  Practicar (aleatorio)
                </Button>
                <Button variant="outline" onClick={() => onBrowsePart(part)} disabled={exercises.length === 0}>
                  Ver lista
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
