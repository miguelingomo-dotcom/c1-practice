import type { AnyExercise } from '../types';
import { MultipleChoiceCloze } from './exercises/MultipleChoiceCloze';
import { OpenCloze } from './exercises/OpenCloze';
import { WordFormation } from './exercises/WordFormation';
import { KeyWordTransformation } from './exercises/KeyWordTransformation';
import { ReadingMultipleChoice } from './exercises/ReadingMultipleChoice';
import { CrossText } from './exercises/CrossText';
import { GappedText } from './exercises/GappedText';
import { MultipleMatching } from './exercises/MultipleMatching';

export function renderExercise(
  exercise: AnyExercise,
  onComplete: (correct: number, total: number) => void,
) {
  switch (exercise.part) {
    case 1:
      return <MultipleChoiceCloze exercise={exercise} onComplete={onComplete} />;
    case 2:
      return <OpenCloze exercise={exercise} onComplete={onComplete} />;
    case 3:
      return <WordFormation exercise={exercise} onComplete={onComplete} />;
    case 4:
      return <KeyWordTransformation exercise={exercise} onComplete={onComplete} />;
    case 5:
      return <ReadingMultipleChoice exercise={exercise} onComplete={onComplete} />;
    case 6:
      return <CrossText exercise={exercise} onComplete={onComplete} />;
    case 7:
      return <GappedText exercise={exercise} onComplete={onComplete} />;
    case 8:
      return <MultipleMatching exercise={exercise} onComplete={onComplete} />;
    default:
      return null;
  }
}
