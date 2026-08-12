import { useState } from 'react';
import { Card } from './ui';

const CRITERIA = [
  {
    key: 'content',
    label: 'Content',
    description: '¿Cubre todos los puntos pedidos y logra el propósito de la tarea?',
  },
  {
    key: 'communicative',
    label: 'Communicative Achievement',
    description: '¿El registro y el estilo son apropiados para el formato y el lector?',
  },
  {
    key: 'organisation',
    label: 'Organisation',
    description: '¿Las ideas están bien conectadas y estructuradas en párrafos claros?',
  },
  {
    key: 'language',
    label: 'Language',
    description: '¿El vocabulario y la gramática son variados, precisos y de nivel C1?',
  },
] as const;

export function SelfAssessment() {
  const [scores, setScores] = useState<Record<string, number>>({});

  return (
    <Card className="p-5 space-y-4">
      <div>
        <p className="font-mono text-xs uppercase tracking-wider text-pen">Autoevaluación</p>
        <h3 className="font-serif text-lg">Los 4 criterios de Cambridge</h3>
      </div>
      <div className="space-y-4">
        {CRITERIA.map((c) => (
          <div key={c.key} className="space-y-1.5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">{c.label}</p>
              <span className="font-mono text-xs text-inkSoft">
                {scores[c.key] ?? 0} / 5
              </span>
            </div>
            <p className="text-xs text-inkSoft">{c.description}</p>
            <input
              type="range"
              min={0}
              max={5}
              step={1}
              value={scores[c.key] ?? 0}
              onChange={(e) =>
                setScores((s) => ({ ...s, [c.key]: Number(e.target.value) }))
              }
              className="w-full accent-pen"
            />
          </div>
        ))}
      </div>
    </Card>
  );
}
