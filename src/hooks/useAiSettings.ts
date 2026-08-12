import { useEffect, useState } from 'react';

const STORAGE_KEY = 'c1-practice-ai-settings-v1';

interface AiSettings {
  apiKey: string;
  model: string;
}

const DEFAULT_MODEL = 'claude-sonnet-4-5';

function loadSettings(): AiSettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { apiKey: '', model: DEFAULT_MODEL };
    const parsed = JSON.parse(raw);
    return {
      apiKey: typeof parsed.apiKey === 'string' ? parsed.apiKey : '',
      model: typeof parsed.model === 'string' && parsed.model ? parsed.model : DEFAULT_MODEL,
    };
  } catch {
    return { apiKey: '', model: DEFAULT_MODEL };
  }
}

export function useAiSettings() {
  const [settings, setSettings] = useState<AiSettings>(() => loadSettings());

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      // ignorar si localStorage no está disponible
    }
  }, [settings]);

  const setApiKey = (apiKey: string) => setSettings((s) => ({ ...s, apiKey }));
  const setModel = (model: string) => setSettings((s) => ({ ...s, model }));
  const clearApiKey = () => setSettings((s) => ({ ...s, apiKey: '' }));

  return { ...settings, setApiKey, setModel, clearApiKey, hasKey: settings.apiKey.trim().length > 0 };
}
