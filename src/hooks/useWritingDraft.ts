import { useEffect, useState } from 'react';

const STORAGE_KEY = 'c1-practice-writing-drafts-v1';

interface DraftsRecord {
  [promptId: string]: { text: string; updatedAt: string };
}

function loadDrafts(): DraftsRecord {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveDrafts(drafts: DraftsRecord) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(drafts));
  } catch {
    // localStorage no disponible — se ignora
  }
}

export function useWritingDraft(promptId: string) {
  const [drafts, setDrafts] = useState<DraftsRecord>(() => loadDrafts());
  const [text, setText] = useState<string>(() => loadDrafts()[promptId]?.text ?? '');

  // Si cambia el prompt, cargar su borrador correspondiente
  useEffect(() => {
    setText(drafts[promptId]?.text ?? '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [promptId]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDrafts((prev) => {
        const next = { ...prev, [promptId]: { text, updatedAt: new Date().toISOString() } };
        saveDrafts(next);
        return next;
      });
    }, 400);
    return () => clearTimeout(timeout);
  }, [text, promptId]);

  const clearDraft = () => {
    setText('');
    setDrafts((prev) => {
      const next = { ...prev };
      delete next[promptId];
      saveDrafts(next);
      return next;
    });
  };

  return { text, setText, clearDraft };
}
