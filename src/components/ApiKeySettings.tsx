import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { KeyRound, ShieldCheck, Trash2 } from 'lucide-react';
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
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-ink/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 340, damping: 26 }}
          onClick={(e) => e.stopPropagation()}
        >
          <Card className="max-w-lg w-full p-6 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-fuchsiaSoft flex items-center justify-center text-fuchsia shrink-0">
                <KeyRound size={18} />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">Feedback con IA (opcional)</h3>
                <p className="text-sm text-inkSoft mt-1 flex items-start gap-1.5">
                  <ShieldCheck size={14} className="text-correct shrink-0 mt-0.5" />
                  <span>
                    Para recibir corrección automática necesitas tu propia clave de la API de
                    Anthropic. La clave se guarda <strong>solo en este navegador</strong>{' '}
                    (localStorage) y las peticiones van directamente desde tu navegador a la API
                    de Anthropic — nunca pasan por ningún servidor intermedio.
                  </span>
                </p>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-inkSoft uppercase tracking-wider font-semibold">
                Clave de API (sk-ant-...)
              </label>
              <input
                type="password"
                value={localKey}
                onChange={(e) => setLocalKey(e.target.value)}
                placeholder="sk-ant-api03-..."
                className="w-full px-3.5 py-2.5 rounded-xl border-2 border-ink/10 bg-white text-sm focus-ring font-mono focus:border-fuchsia/40 transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-inkSoft uppercase tracking-wider font-semibold">
                Modelo
              </label>
              <input
                type="text"
                value={localModel}
                onChange={(e) => setLocalModel(e.target.value)}
                placeholder="claude-sonnet-4-5"
                className="w-full px-3.5 py-2.5 rounded-xl border-2 border-ink/10 bg-white text-sm focus-ring font-mono focus:border-fuchsia/40 transition-colors"
              />
              <p className="text-xs text-inkSoft">
                Cambia esto si el nombre del modelo cambia en el futuro — consulta docs.claude.com
                si tienes dudas.
              </p>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => {
                  onClear();
                  setLocalKey('');
                }}
                className="inline-flex items-center gap-1.5 text-xs text-pen hover:underline"
              >
                <Trash2 size={13} />
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
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
