import type { ExerciseMeta } from '../types';

/**
 * Elige un ejercicio al azar de la lista dada.
 * Prioriza los que aún no se han completado; si todos están completados,
 * elige entre todos (para permitir repetir).
 */
export function pickRandom(
  pool: ExerciseMeta[],
  isCompleted: (id: string) => boolean,
  excludeId?: string,
): ExerciseMeta | null {
  if (pool.length === 0) return null;

  const notCompleted = pool.filter((ex) => !isCompleted(ex.id));
  let candidates = notCompleted.length > 0 ? notCompleted : pool;

  // Si hay más de una opción, evita repetir el mismo ejercicio que se acaba de mostrar
  if (excludeId && candidates.length > 1) {
    const withoutCurrent = candidates.filter((ex) => ex.id !== excludeId);
    if (withoutCurrent.length > 0) candidates = withoutCurrent;
  }

  const index = Math.floor(Math.random() * candidates.length);
  return candidates[index];
}
