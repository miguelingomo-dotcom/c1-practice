import type { Section } from '../types';
import { getAllExercises } from '../data';
import type { ProgressRecord } from '../hooks/useProgress';
import { Button, Card } from './ui';

export function Home({
  progress,
  onSelectSection,
  onResetProgress,
  onStartExam,
  onGoWriting,
}: {
  progress: ProgressRecord;
  onSelectSection: (section: Section) => void;
  onResetProgress: () => void;
  onStartExam: () => void;
  onGoWriting: () => void;
}) {
  const sections: { id: Section; label: string; description: string; parts: string }[] = [
    {
      id: 'use-of-english',
      label: 'Use of English',
      description: 'Léxico, gramática y transformación de frases. Partes 1-4 del examen.',
      parts: 'Multiple-choice cloze · Open cloze · Word formation · Key word transformation',
    },
    {
      id: 'reading',
      label: 'Reading',
      description: 'Comprensión lectora sobre textos largos y múltiples textos cortos. Partes 5-8.',
      parts: 'Multiple choice · Cross-text matching · Gapped text · Multiple matching',
    },
  ];

  return (
    <div className="space-y-10">
      <div className="space-y-3 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-pen">
          C1 Advanced · Reading &amp; Use of English
        </p>
        <h1 className="font-serif text-4xl leading-tight">
          Practica para el examen, un ejercicio a la vez.
        </h1>
        <p className="text-inkSoft">
          Ejercicios al estilo Cambridge C1, elegidos al azar cada vez que entras. Si te toca uno que ya
          conoces, puedes cambiarlo o elegir otro de la lista.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {sections.map((s) => {
          const all = getAllExercises(s.id);
          const done = all.filter((ex) => progress.completed.includes(ex.id)).length;
          return (
            <Card key={s.id} className="p-6 flex flex-col justify-between gap-5">
              <div className="space-y-2">
                <h2 className="font-serif text-2xl">{s.label}</h2>
                <p className="text-sm text-inkSoft">{s.description}</p>
                <p className="text-xs font-mono text-inkSoft/70">{s.parts}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-inkSoft">
                  {done}/{all.length} completados
                </span>
                <Button onClick={() => onSelectSection(s.id)}>Empezar →</Button>
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="p-6 flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1.5">
          <p className="font-mono text-xs uppercase tracking-wider text-pen">Nuevo</p>
          <h2 className="font-serif text-xl">Writing</h2>
          <p className="text-sm text-inkSoft max-w-xl">
            Ensayo obligatorio (Parte 1) y tareas a elección — email, informe, reseña,
            propuesta... (Parte 2). Contador de palabras, cronómetro, autoevaluación y feedback
            opcional por IA con tu propia clave.
          </p>
        </div>
        <Button onClick={onGoWriting} variant="outline">
          Ir a Writing →
        </Button>
      </Card>

      <Card className="p-6 flex flex-wrap items-center justify-between gap-4 border-pen/30">
        <div className="space-y-1.5">
          <p className="font-mono text-xs uppercase tracking-wider text-pen">Modo examen</p>
          <h2 className="font-serif text-xl">Simula el examen completo, cronometrado</h2>
          <p className="text-sm text-inkSoft">
            Encadena las 8 partes (o solo Use of English / solo Reading) en una sesión, con
            resultado final desglosado por parte.
          </p>
        </div>
        <Button onClick={onStartExam} variant="outline">
          Ir al modo examen →
        </Button>
      </Card>

      {progress.completed.length > 0 && (
        <button
          onClick={onResetProgress}
          className="text-xs text-inkSoft hover:text-pen underline underline-offset-2 focus-ring"
        >
          Reiniciar todo el progreso
        </button>
      )}
    </div>
  );
}
