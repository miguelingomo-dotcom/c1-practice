import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'c1-practice-progress-v1';

export interface ProgressRecord {
  completed: string[]; // ids de ejercicios ya hechos al menos una vez
  scores: Record<string, { correct: number; total: number; lastAttempt: string }>;
}

function loadProgress(): ProgressRecord {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { completed: [], scores: {} };
    const parsed = JSON.parse(raw);
    return {
      completed: Array.isArray(parsed.completed) ? parsed.completed : [],
      scores: typeof parsed.scores === 'object' && parsed.scores ? parsed.scores : {},
    };
  } catch {
    return { completed: [], scores: {} };
  }
}

function saveProgress(progress: ProgressRecord) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // localStorage no disponible (modo privado, etc.) — se ignora silenciosamente
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressRecord>(() => loadProgress());

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const markCompleted = useCallback((id: string, correct: number, total: number) => {
    setProgress((prev) => {
      const completed = prev.completed.includes(id) ? prev.completed : [...prev.completed, id];
      return {
        completed,
        scores: {
          ...prev.scores,
          [id]: { correct, total, lastAttempt: new Date().toISOString() },
        },
      };
    });
  }, []);

  const isCompleted = useCallback((id: string) => progress.completed.includes(id), [progress]);

  const resetProgress = useCallback(() => {
    setProgress({ completed: [], scores: {} });
  }, []);

  const resetExercise = useCallback((id: string) => {
    setProgress((prev) => ({
      completed: prev.completed.filter((c) => c !== id),
      scores: Object.fromEntries(Object.entries(prev.scores).filter(([key]) => key !== id)),
    }));
  }, []);

  return { progress, markCompleted, isCompleted, resetProgress, resetExercise };
}
