import { motion } from 'framer-motion';
import { ArrowLeft, ListChecks, Shuffle } from 'lucide-react';
import type { AnyExercise, Section } from '../types';
import { PART_LABELS } from '../data';
import { Button, Card, PartTag } from './ui';
import { getPartColor } from '../lib/colors';
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
  const color = getPartColor(exercise.part);
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-2">
          <PartTag part={exercise.part} label={PART_LABELS[exercise.part]} color={color} />
          <h2 className="font-display text-2xl font-semibold text-ink">{exercise.title}</h2>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button variant="ghost" onClick={onBack}>
            <ArrowLeft size={15} /> {section === 'use-of-english' ? 'Use of English' : 'Reading'}
          </Button>
          <Button variant="outline" onClick={onBrowseList}>
            <ListChecks size={15} /> Elegir de la lista
          </Button>
          <Button variant="outline" onClick={onNextRandom}>
            <Shuffle size={15} /> Otro aleatorio
          </Button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        <Card className={`p-6 border-t-4 ${color.border}`}>{renderExercise(exercise, onComplete)}</Card>
      </motion.div>
    </div>
  );
}
