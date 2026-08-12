import { findExercise, PART_LABELS } from '../data';
import type { ExamConfig } from '../lib/exam';
import { formatSeconds } from '../lib/exam';
import type { ExamResults } from './ExamRunner';
import { Button, Card, ScorePill } from './ui';

export function ExamResultView({
  config,
  results,
  onRetry,
  onHome,
}: {
  config: ExamConfig;
  results: ExamResults;
  onRetry: () => void;
  onHome: () => void;
}) {
  const totalCorrect = Object.values(results.scores).reduce((sum, s) => sum + s.correct, 0);
  const totalQuestions = Object.values(results.scores).reduce((sum, s) => sum + s.total, 0);
  const percentage = totalQuestions === 0 ? 0 : Math.round((totalCorrect / totalQuestions) * 100);

  return (
    <div className="space-y-6">
      <div>
        <p className="font-mono text-xs uppercase tracking-wider text-inkSoft">{config.label}</p>
        <h1 className="font-serif text-3xl">Resultado del examen</h1>
      </div>

      <Card className="p-6 flex flex-wrap items-center justify-between gap-6">
        <div>
          <p className="text-xs font-mono text-inkSoft uppercase tracking-wider">Puntuación total</p>
          <p className="font-serif text-4xl">
            {totalCorrect}/{totalQuestions}{' '}
            <span className="text-lg text-inkSoft font-sans">({percentage}%)</span>
          </p>
        </div>
        <div>
          <p className="text-xs font-mono text-inkSoft uppercase tracking-wider">Tiempo empleado</p>
          <p className="font-serif text-4xl">{formatSeconds(results.elapsedSeconds)}</p>
        </div>
      </Card>

      <div className="space-y-2">
        {results.steps.map((step) => {
          const exercise = findExercise(step.section, step.exerciseId);
          const score = results.scores[step.exerciseId];
          if (!exercise || !score) return null;
          return (
            <Card key={step.exerciseId} className="p-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-mono text-pen uppercase tracking-wider">
                  {PART_LABELS[step.part]}
                </p>
                <p className="text-sm font-medium">{exercise.title}</p>
              </div>
              <ScorePill correct={score.correct} total={score.total} />
            </Card>
          );
        })}
      </div>

      <div className="flex gap-3">
        <Button onClick={onRetry}>Hacer otro examen</Button>
        <Button variant="outline" onClick={onHome}>
          Volver al inicio
        </Button>
      </div>
    </div>
  );
}
