import { multipleChoiceCloze, openCloze, wordFormation, keyWordTransformation } from './useOfEnglish';
import { readingMultipleChoice, crossText, gappedText, multipleMatching } from './reading';
import type { AnyExercise, ExerciseMeta, Section } from '../types';

export const PART_LABELS: Record<number, string> = {
  1: 'Parte 1 · Multiple-choice cloze',
  2: 'Parte 2 · Open cloze',
  3: 'Parte 3 · Word formation',
  4: 'Parte 4 · Key word transformation',
  5: 'Parte 5 · Reading multiple choice',
  6: 'Parte 6 · Cross-text multiple matching',
  7: 'Parte 7 · Gapped text',
  8: 'Parte 8 · Multiple matching',
};

export const PART_DESCRIPTIONS: Record<number, string> = {
  1: 'Elige la opción léxica correcta para cada uno de los 8 huecos del texto.',
  2: 'Completa cada uno de los 8 huecos con UNA sola palabra (gramática).',
  3: 'Forma la palabra correcta a partir de la raíz dada para cada uno de los 8 huecos.',
  4: 'Completa la segunda frase para que signifique lo mismo que la primera, usando la palabra clave.',
  5: 'Lee el texto y elige la opción correcta (A, B, C o D) para cada pregunta.',
  6: 'Lee cuatro textos cortos y relaciona cada pregunta con el texto correspondiente.',
  7: 'Vuelve a colocar los párrafos que se han extraído del texto en el lugar correcto.',
  8: 'Lee varios textos cortos y relaciona cada pregunta con el texto correspondiente.',
};

export const useOfEnglishBank: Record<number, AnyExercise[]> = {
  1: multipleChoiceCloze,
  2: openCloze,
  3: wordFormation,
  4: keyWordTransformation,
};

export const readingBank: Record<number, AnyExercise[]> = {
  5: readingMultipleChoice,
  6: crossText,
  7: gappedText,
  8: multipleMatching,
};

export function getBankForSection(section: Section): Record<number, AnyExercise[]> {
  return section === 'use-of-english' ? useOfEnglishBank : readingBank;
}

export function getAllExercises(section: Section): AnyExercise[] {
  const bank = getBankForSection(section);
  return Object.values(bank).flat();
}

export function getExercisesForPart(section: Section, part: number): AnyExercise[] {
  return getBankForSection(section)[part] ?? [];
}

export function findExercise(section: Section, id: string): AnyExercise | undefined {
  return getAllExercises(section).find((ex) => ex.id === id);
}

export function toMeta(ex: AnyExercise, section: Section): ExerciseMeta {
  return { id: ex.id, section, part: ex.part, title: ex.title };
}

export function getAllMeta(section: Section): ExerciseMeta[] {
  return getAllExercises(section).map((ex) => toMeta(ex, section));
}
