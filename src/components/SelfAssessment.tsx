import { useState } from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck } from 'lucide-react';
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

function scoreColor(score: number) {
  if (score >= 4) return 'text-correct';
  if (score >= 2) return 'text-warn';
  if (score >= 1) return 'text-coral';
  return 'text-inkSoft';
}

export function SelfAssessment() {
  const [scores, setScores] = useState<Record<string, number>>({});

  return (
    <Card className="p-5 space-y-4">
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-xl bg-accentSoft flex items-center justify-center text-accent shrink-0">
          <ClipboardCheck size={17} />
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
            Autoevaluación
          </p>
          <h3 className="font-display text-lg font-semibold text-ink">Los 4 criterios de Cambridge</h3>
        </div>
      </div>
      <div className="space-y-4">
        {CRITERIA.map((c) => (
          <div key={c.key} className="space-y-1.5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-ink">{c.label}</p>
              <motion.span
                key={scores[c.key] ?? 0}
                initial={{ scale: 1.3 }}
                animate={{ scale: 1 }}
                className={`font-mono text-xs font-bold ${scoreColor(scores[c.key] ?? 0)}`}
              >
                {scores[c.key] ?? 0} / 5
              </motion.span>
            </div>
            <p className="text-xs text-inkSoft">{c.description}</p>
            <input
              type="range"
              min={0}
              max={5}
              step={1}
              value={scores[c.key] ?? 0}
              onChange={(e) => setScores((s) => ({ ...s, [c.key]: Number(e.target.value) }))}
              className="w-full accent-accent h-1.5"
            />
          </div>
        ))}
      </div>
    </Card>
  );
}
