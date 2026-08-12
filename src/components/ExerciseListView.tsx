import type { Section } from '../types';
import { getAllMeta, PART_LABELS } from '../data';
import type { ProgressRecord } from '../hooks/useProgress';
import { Button, Card } from './ui';

export function ExerciseListView({
  section,
  part,
  progress,
  onSelect,
  onBack,
}: {
  section: Section;
  part?: number;
  progress: ProgressRecord;
  onSelect: (id: string) => void;
  onBack: () => void;
}) {
  const all = getAllMeta(section).filter((m) => (part ? m.part === part : true));
  const grouped = all.reduce<Record<number, typeof all>>((acc, m) => {
    (acc[m.part] ??= []).push(m);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-2xl">
          {part ? PART_LABELS[part] : section === 'use-of-english' ? 'Todos los ejercicios · Use of English' : 'Todos los ejercicios · Reading'}
        </h2>
        <Button variant="ghost" onClick={onBack}>
          ← Volver
        </Button>
      </div>

      {Object.entries(grouped).map(([partKey, exercises]) => (
        <div key={partKey} className="space-y-2">
          {!part && (
            <p className="text-xs uppercase tracking-wider text-inkSoft font-mono">
              {PART_LABELS[Number(partKey)]}
            </p>
          )}
          <div className="grid sm:grid-cols-2 gap-2">
            {exercises?.map((ex) => {
              const done = progress.completed.includes(ex.id);
              const score = progress.scores[ex.id];
              return (
                <button
                  key={ex.id}
                  onClick={() => onSelect(ex.id)}
                  className="text-left focus-ring"
                >
                  <Card className="p-3.5 flex items-center justify-between gap-3 hover:border-ink/30 transition-colors">
                    <span className="text-sm font-medium">{ex.title}</span>
                    {done ? (
                      <span className="text-xs font-mono text-correct shrink-0">
                        ✓ {score ? `${score.correct}/${score.total}` : 'hecho'}
                      </span>
                    ) : (
                      <span className="text-xs font-mono text-inkSoft shrink-0">nuevo</span>
                    )}
                  </Card>
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {all.length === 0 && (
        <p className="text-sm text-inkSoft">No hay ejercicios todavía en esta sección.</p>
      )}
    </div>
  );
}
