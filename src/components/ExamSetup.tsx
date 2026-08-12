import { EXAM_CONFIGS, type ExamConfig } from '../lib/exam';
import { Button, Card } from './ui';

export function ExamSetup({
  onStart,
  onBack,
}: {
  onStart: (config: ExamConfig) => void;
  onBack: () => void;
}) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Button variant="ghost" onClick={onBack} className="!px-0 mb-2">
            ← Inicio
          </Button>
          <h1 className="font-serif text-3xl">Modo examen</h1>
        </div>
      </div>

      <p className="text-inkSoft max-w-2xl">
        Encadena varias partes en una sola sesión cronometrada, como en el examen real. Al
        final verás el resultado desglosado por parte. Se elige un ejercicio al azar de
        cada parte (priorizando los que aún no has hecho).
      </p>

      <div className="grid sm:grid-cols-3 gap-4">
        {EXAM_CONFIGS.map((config) => (
          <Card key={config.id} className="p-5 flex flex-col justify-between gap-4">
            <div className="space-y-1.5">
              <p className="font-mono text-xs uppercase tracking-wider text-pen">
                ~{config.minutes} min
              </p>
              <h3 className="font-serif text-lg">{config.label}</h3>
              <p className="text-sm text-inkSoft">{config.description}</p>
            </div>
            <Button onClick={() => onStart(config)}>Empezar →</Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
