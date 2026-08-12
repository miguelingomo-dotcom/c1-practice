// Tipos de datos para las 8 partes del papel "Reading & Use of English" (C1 Advanced)

export type Section = 'use-of-english' | 'reading';

// ---------- USE OF ENGLISH ----------

// Parte 1: Multiple-choice cloze (léxico) — 8 huecos, 4 opciones cada uno
export interface MultipleChoiceClozeExercise {
  id: string;
  part: 1;
  title: string;
  text: string; // usa {{0}}, {{1}}... como marcadores de hueco
  gaps: {
    options: [string, string, string, string];
    answer: 0 | 1 | 2 | 3;
  }[];
}

// Parte 2: Open cloze (gramática) — 8 huecos, respuesta abierta (una palabra)
export interface OpenClozeExercise {
  id: string;
  part: 2;
  title: string;
  text: string; // usa {{0}}, {{1}}... como marcadores de hueco
  gaps: {
    answers: string[]; // puede haber más de una respuesta válida
  }[];
}

// Parte 3: Word formation — 8 huecos, se da la raíz de la palabra
export interface WordFormationExercise {
  id: string;
  part: 3;
  title: string;
  text: string; // usa {{0}}, {{1}}... como marcadores de hueco
  gaps: {
    root: string; // palabra raíz mostrada en mayúsculas al margen
    answers: string[];
  }[];
}

// Parte 4: Key word transformation — 6 frases
export interface KeyWordTransformationExercise {
  id: string;
  part: 4;
  title: string;
  items: {
    prompt: string; // frase original
    keyword: string;
    gapStart: string; // texto antes del hueco
    gapEnd: string; // texto después del hueco
    answers: string[]; // formas aceptadas (normalizadas)
  }[];
}

export type UseOfEnglishExercise =
  | MultipleChoiceClozeExercise
  | OpenClozeExercise
  | WordFormationExercise
  | KeyWordTransformationExercise;

// ---------- READING ----------

// Parte 5: Multiple choice sobre un texto largo — 6 preguntas, 4 opciones
export interface ReadingMultipleChoiceExercise {
  id: string;
  part: 5;
  title: string;
  source?: string;
  text: string;
  questions: {
    question: string;
    options: [string, string, string, string];
    answer: 0 | 1 | 2 | 3;
  }[];
}

// Parte 6: Cross-text multiple matching — 4 textos cortos, preguntas comparativas
export interface CrossTextExercise {
  id: string;
  part: 6;
  title: string;
  intro: string;
  texts: { label: string; author?: string; text: string }[]; // normalmente 4, etiquetados A-D
  questions: {
    question: string;
    answerLabel: string; // la letra del texto correcto
  }[];
}

// Parte 7: Gapped text — se han quitado párrafos del texto
export interface GappedTextExercise {
  id: string;
  part: 7;
  title: string;
  textWithGaps: string; // usa {{0}}, {{1}}... para marcar los huecos
  paragraphs: { label: string; text: string }[]; // A-G, una de más (distractor)
  answers: string[]; // letra correcta para cada hueco en orden
}

// Parte 8: Multiple matching — varios textos cortos, preguntas que buscan a qué texto se refieren
export interface MultipleMatchingExercise {
  id: string;
  part: 8;
  title: string;
  intro: string;
  texts: { label: string; text: string }[];
  questions: {
    question: string;
    answerLabel: string;
  }[];
}

export type ReadingExercise =
  | ReadingMultipleChoiceExercise
  | CrossTextExercise
  | GappedTextExercise
  | MultipleMatchingExercise;

export type AnyExercise = UseOfEnglishExercise | ReadingExercise;

export interface ExerciseMeta {
  id: string;
  section: Section;
  part: number;
  title: string;
}

// ---------- WRITING ----------

// Parte 1: ensayo obligatorio, a partir de notas y opiniones citadas
export interface WritingPart1Prompt {
  id: string;
  part: 1;
  title: string;
  context: string; // frase introductoria ("Your class has just had a discussion about...")
  notes: string[]; // puntos a partir de los cuales se pide desarrollar el ensayo
  opinions: string[]; // opiniones citadas de la "discusión" que se puede usar
  instructions: string; // p.ej. "Write an essay discussing two of the points..."
}

// Parte 2: elegir una de varias tareas (email/carta, informe, reseña, propuesta...)
export type WritingTaskType = 'email' | 'report' | 'review' | 'proposal' | 'letter' | 'article';

export interface WritingPart2Prompt {
  id: string;
  part: 2;
  type: WritingTaskType;
  title: string;
  scenario: string;
  instructions: string;
}

export type WritingPrompt = WritingPart1Prompt | WritingPart2Prompt;

