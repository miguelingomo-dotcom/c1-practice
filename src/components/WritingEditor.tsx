import { useEffect, useState } from 'react';
import type { WritingPrompt } from '../types';
import { TASK_TYPE_LABELS } from '../data/writing';
import { WRITING_COLOR } from '../lib/colors';
import { useWritingDraft } from '../hooks/useWritingDraft';
import { useAiSettings } from '../hooks/useAiSettings';
import { countWords, wordCountColor } from '../lib/wordCount';
import { getWritingFeedback } from '../lib/anthropicClient';
import { formatSeconds } from '../lib/exam';
import { Button, Card, PartTag } from './ui';
import { SelfAssessment } from './SelfAssessment';
import { ApiKeySettings } from './ApiKeySettings';

function buildTaskDescription(prompt: WritingPrompt): string {
  if (prompt.part === 1) {
    return [
      prompt.context,
      '',
      'Notes:',
      ...prompt.notes.map((n) => `- ${n}`),
      '',
      'Opinions expressed in the discussion:',
      ...prompt.opinions.map((o) => `- ${o}`),
      '',
      prompt.instructions,
    ].join('\n');
  }
  return [`Task type: ${TASK_TYPE_LABELS[prompt.type]}`, '', prompt.scenario, '', prompt.instructions].join('\n');
}

export function WritingEditor({ prompt, onBack }: { prompt: WritingPrompt; onBack: () => void }) {
  const { text, setText, clearDraft } = useWritingDraft(prompt.id);
  const ai = useAiSettings();
  const [showSettings, setShowSettings] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(true);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [loadingFeedback, setLoadingFeedback] = useState(false);
  const [feedbackError, setFeedbackError] = useState<string | null>(null);

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(interval);
  }, [running]);

  const wordCount = countWords(text);

  const handleGetFeedback = async () => {
    setLoadingFeedback(true);
    setFeedbackError(null);
    setFeedback(null);
    try {
      const result = await getWritingFeedback({
        apiKey: ai.apiKey,
        model: ai.model,
        taskDescription: buildTaskDescription(prompt),
        essayText: text,
      });
      setFeedback(result.raw);
    } catch (err) {
      setFeedbackError(err instanceof Error ? err.message : 'Error desconocido al pedir feedback.');
    } finally {
      setLoadingFeedback(false);
    }
  };

  return (
    <div className="space-y-6">
      {showSettings && (
        <ApiKeySettings
          apiKey={ai.apiKey}
          model={ai.model}
          onSave={(key, model) => {
            ai.setApiKey(key);
            ai.setModel(model);
          }}
          onClear={ai.clearApiKey}
          onClose={() => setShowSettings(false)}
        />
      )}

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-2">
          <PartTag
            part={prompt.part}
            label={
              prompt.part === 1 ? 'Parte 1 · Ensayo obligatorio' : `Parte 2 · ${TASK_TYPE_LABELS[prompt.type]}`
            }
            color={WRITING_COLOR}
          />
          <h2 className="font-display text-2xl">{prompt.title}</h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setRunning((r) => !r)}
            className="font-mono text-sm text-fuchsia border-2 border-fuchsia/25 bg-fuchsiaSoft rounded-xl px-3 py-1.5 focus-ring transition-colors"
          >
            ⏱ {formatSeconds(elapsed)} {running ? '(pausar)' : '(reanudar)'}
          </button>
          <Button variant="ghost" onClick={onBack}>
            ← Writing
          </Button>
        </div>
      </div>

      <Card className="p-5 space-y-3">
        {prompt.part === 1 ? (
          <>
            <p className="text-sm leading-6">{prompt.context}</p>
            <div className="grid sm:grid-cols-2 gap-4 pt-1">
              <div className="bg-white border border-ink/10 rounded-xl p-3">
                <p className="text-xs font-mono uppercase tracking-wider text-inkSoft mb-1.5">Notes</p>
                <ul className="text-sm space-y-1 list-disc list-inside">
                  {prompt.notes.map((n, i) => (
                    <li key={i}>{n}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-ink/10 rounded-xl p-3">
                <p className="text-xs font-mono uppercase tracking-wider text-inkSoft mb-1.5">
                  Some opinions expressed in the discussion
                </p>
                <ul className="text-sm space-y-1.5 italic">
                  {prompt.opinions.map((o, i) => (
                    <li key={i}>{o}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-sm pt-1">{prompt.instructions}</p>
          </>
        ) : (
          <>
            <p className="text-sm leading-6">{prompt.scenario}</p>
            <p className="text-sm font-medium pt-1">{prompt.instructions}</p>
          </>
        )}
      </Card>

      <div className="space-y-2">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Empieza a escribir aquí..."
          className="w-full min-h-[320px] p-4 rounded-2xl border-2 border-ink/10 bg-white font-serif text-[15px] leading-7 focus-ring resize-y focus:border-fuchsia/40 transition-colors"
        />
        <div className="flex items-center justify-between">
          <span className={`font-mono text-sm ${wordCountColor(wordCount)}`}>
            {wordCount} palabras <span className="text-inkSoft">(objetivo: 220-260)</span>
          </span>
          <button
            onClick={clearDraft}
            className="text-xs text-inkSoft hover:text-pen underline underline-offset-2"
          >
            Borrar borrador
          </button>
        </div>
      </div>

      <SelfAssessment />

      <Card className="p-5 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-fuchsia">Feedback con IA</p>
            <h3 className="font-display text-lg">Corrección automática (opcional)</h3>
          </div>
          <button
            onClick={() => setShowSettings(true)}
            className="text-xs text-inkSoft hover:text-fuchsia underline underline-offset-2"
          >
            {ai.hasKey ? 'Cambiar clave / modelo' : 'Configurar clave de API'}
          </button>
        </div>

        {!ai.hasKey && (
          <p className="text-sm text-inkSoft">
            Necesitas tu propia clave de la API de Anthropic para usar esto. Pulsa "Configurar
            clave de API" arriba — se guarda solo en tu navegador.
          </p>
        )}

        {ai.hasKey && (
          <Button
            onClick={handleGetFeedback}
            disabled={loadingFeedback || wordCount === 0}
            variant="outline"
          >
            {loadingFeedback ? 'Corrigiendo...' : 'Obtener feedback de IA'}
          </Button>
        )}

        {feedbackError && (
          <p className="text-sm text-pen bg-penSoft/30 border border-pen/30 rounded-xl p-3">
            {feedbackError}
          </p>
        )}

        {feedback && (
          <div className="bg-white border border-ink/10 rounded-2xl p-4 text-sm leading-7 whitespace-pre-line">
            {feedback}
          </div>
        )}
      </Card>
    </div>
  );
}
