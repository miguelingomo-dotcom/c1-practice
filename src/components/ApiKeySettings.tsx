import { useState } from 'react';
import { Button, Card } from './ui';

export function ApiKeySettings({
  apiKey,
  model,
  onSave,
  onClear,
  onClose,
}: {
  apiKey: string;
  model: string;
  onSave: (apiKey: string, model: string) => void;
  onClear: () => void;
  onClose: () => void;
}) {
  const [localKey, setLocalKey] = useState(apiKey);
  const [localModel, setLocalModel] = useState(model);

  return (
    <div className="fixed inset-0 bg-ink/40 flex items-center justify-center p-4 z-50">
      <Card className="max-w-lg w-full p-6 space-y-4">
        <div>
          <h3 className="font-serif text-xl">Feedback con IA (opcional)</h3>
          <p className="text-sm text-inkSoft mt-1">
            Para recibir corrección automática necesitas tu propia clave de la API de Anthropic.
            La clave se guarda <strong>solo en este navegador</strong> (localStorage) y las
            peticiones van directamente desde tu navegador a la API de Anthropic — nunca pasan
            por ningún servidor intermedio.
          </p>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-mono text-inkSoft uppercase tracking-wider">
            Clave de API (sk-ant-...)
          </label>
          <input
            type="password"
            value={localKey}
            onChange={(e) => setLocalKey(e.target.value)}
            placeholder="sk-ant-api03-..."
            className="w-full px-3 py-2 rounded-sm border border-ink/20 bg-white text-sm focus-ring font-mono"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-mono text-inkSoft uppercase tracking-wider">Modelo</label>
          <input
            type="text"
            value={localModel}
            onChange={(e) => setLocalModel(e.target.value)}
            placeholder="claude-sonnet-4-5"
            className="w-full px-3 py-2 rounded-sm border border-ink/20 bg-white text-sm focus-ring font-mono"
          />
          <p className="text-xs text-inkSoft">
            Cambia esto si el nombre del modelo cambia en el futuro — consulta docs.claude.com si
            tienes dudas.
          </p>
        </div>

        <div className="flex items-center justify-between pt-2">
          <button
            onClick={() => {
              onClear();
              setLocalKey('');
            }}
            className="text-xs text-pen hover:underline"
          >
            Borrar clave guardada
          </button>
          <div className="flex gap-2">
            <Button variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
            <Button
              onClick={() => {
                onSave(localKey.trim(), localModel.trim() || 'claude-sonnet-4-5');
                onClose();
              }}
              disabled={!localKey.trim()}
            >
              Guardar
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
