import type { AnyExercise, Section } from '../types';
import { PART_LABELS } from '../data';
import { Button, Card, PartTag } from './ui';
import { renderExercise } from './renderExercise';

export function ExercisePlayer({
  exercise,
  section,
  onComplete,
  onNextRandom,
  onBrowseList,
  onBack,
}: {
  exercise: AnyExercise;
  section: Section;
  onComplete: (correct: number, total: number) => void;
  onNextRandom: () => void;
  onBrowseList: () => void;
  onBack: () => void;
}) {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-2">
          <PartTag part={exercise.part} label={PART_LABELS[exercise.part]} />
          <h2 className="font-serif text-2xl">{exercise.title}</h2>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" onClick={onBack}>
            ← {section === 'use-of-english' ? 'Use of English' : 'Reading'}
          </Button>
          <Button variant="outline" onClick={onBrowseList}>
            Elegir de la lista
          </Button>
          <Button variant="outline" onClick={onNextRandom}>
            Otro aleatorio ↻
          </Button>
        </div>
      </div>

      <Card className="p-6">{renderExercise(exercise, onComplete)}</Card>
    </div>
  );
}
