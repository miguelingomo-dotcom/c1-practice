export interface WritingFeedback {
  raw: string;
}

const SYSTEM_PROMPT = `You are an experienced Cambridge C1 Advanced (CAE) Writing examiner. You assess a piece of writing against the four official assessment criteria: Content, Communicative Achievement, Organisation, and Language. For each criterion, give a band score from 0 to 5 (Cambridge Writing bands) and a short justification. Then give: (1) three to five specific strengths, (2) three to five specific, actionable areas to improve, citing short quotes from the text where relevant, and (3) a corrected version of up to 8 of the most significant language errors, shown as "original → correction". Be honest and specific — do not just give generic praise. Respond in Spanish, except when quoting the candidate's original English text or giving corrected English. Keep the whole response well under 600 words. Do not use markdown headers with #, just short bold-style labels followed by a colon.`;

export async function getWritingFeedback(params: {
  apiKey: string;
  model: string;
  taskDescription: string;
  essayText: string;
}): Promise<WritingFeedback> {
  const { apiKey, model, taskDescription, essayText } = params;

  const userMessage = `TASK GIVEN TO THE CANDIDATE:\n${taskDescription}\n\nCANDIDATE'S WRITING:\n${essayText}`;

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model,
      max_tokens: 1500,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: userMessage }],
    }),
  });

  if (!response.ok) {
    const errText = await response.text().catch(() => '');
    throw new Error(`API error (${response.status}): ${errText || response.statusText}`);
  }

  const data = await response.json();
  const text = (data.content ?? [])
    .filter((block: { type: string }) => block.type === 'text')
    .map((block: { text: string }) => block.text)
    .join('\n');

  return { raw: text || 'No se ha recibido respuesta del modelo.' };
}
