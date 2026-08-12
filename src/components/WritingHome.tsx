import { writingPart1, writingPart2, TASK_TYPE_LABELS } from '../data/writing';
import type { WritingPrompt } from '../types';
import { Button, Card } from './ui';

export function WritingHome({
  onSelect,
  onBack,
}: {
  onSelect: (prompt: WritingPrompt) => void;
  onBack: () => void;
}) {
  return (
    <div className="space-y-8">
      <div>
        <Button variant="ghost" onClick={onBack} className="!px-0 mb-2">
          ← Inicio
        </Button>
        <h1 className="font-serif text-3xl">Writing</h1>
        <p className="text-inkSoft mt-1 max-w-2xl">
          Parte 1 es un ensayo obligatorio de 220-260 palabras. En la Parte 2 eliges una tarea
          (email, informe, reseña, propuesta...) también de 220-260 palabras.
        </p>
      </div>

      <div className="space-y-3">
        <p className="font-mono text-xs uppercase tracking-wider text-pen">Parte 1 · Ensayo obligatorio</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {writingPart1.map((p) => (
            <button key={p.id} onClick={() => onSelect(p)} className="text-left focus-ring">
              <Card className="p-4 hover:border-ink/30 transition-colors">
                <p className="text-sm font-medium">{p.title}</p>
                <p className="text-xs text-inkSoft mt-1 line-clamp-2">{p.context}</p>
              </Card>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <p className="font-mono text-xs uppercase tracking-wider text-pen">Parte 2 · Elige una tarea</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {writingPart2.map((p) => (
            <button key={p.id} onClick={() => onSelect(p)} className="text-left focus-ring">
              <Card className="p-4 hover:border-ink/30 transition-colors">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-medium">{p.title}</p>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-pen border border-pen/30 rounded-full px-2 py-0.5 shrink-0">
                    {TASK_TYPE_LABELS[p.type]}
                  </span>
                </div>
                <p className="text-xs text-inkSoft mt-1 line-clamp-2">{p.scenario}</p>
              </Card>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
