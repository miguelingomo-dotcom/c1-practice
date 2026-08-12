import type { Section } from '../types';
import { getAllMeta } from '../data';
import { pickRandom } from './random';

export interface ExamStep {
  section: Section;
  part: number;
  exerciseId: string;
}

export interface ExamConfig {
  id: string;
  label: string;
  description: string;
  parts: number[];
  minutes: number;
}

export const EXAM_CONFIGS: ExamConfig[] = [
  {
    id: 'full',
    label: 'Examen completo',
    description: 'Las 8 partes de Reading & Use of English, como en el examen real.',
    parts: [1, 2, 3, 4, 5, 6, 7, 8],
    minutes: 75,
  },
  {
    id: 'use-of-english',
    label: 'Solo Use of English',
    description: 'Partes 1 a 4: léxico, gramática, formación de palabras y transformaciones.',
    parts: [1, 2, 3, 4],
    minutes: 35,
  },
  {
    id: 'reading',
    label: 'Solo Reading',
    description: 'Partes 5 a 8: comprensión lectora.',
    parts: [5, 6, 7, 8],
    minutes: 40,
  },
];

export function sectionForPart(part: number): Section {
  return part <= 4 ? 'use-of-english' : 'reading';
}

export function buildExamSequence(
  parts: number[],
  isCompleted: (id: string) => boolean,
): ExamStep[] {
  const steps: ExamStep[] = [];
  for (const part of parts) {
    const section = sectionForPart(part);
    const pool = getAllMeta(section).filter((m) => m.part === part);
    const picked = pickRandom(pool, isCompleted);
    if (picked) steps.push({ section, part, exerciseId: picked.id });
  }
  return steps;
}

export function formatSeconds(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, '0');
  const s = Math.floor(totalSeconds % 60)
    .toString()
    .padStart(2, '0');
  return `${m}:${s}`;
}
