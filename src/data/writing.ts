import type { WritingPart1Prompt, WritingPart2Prompt } from '../types';

export const writingPart1: WritingPart1Prompt[] = [
  {
    id: 'w1-01',
    part: 1,
    title: 'El trabajo remoto',
    context: 'Your class has just had a discussion about the effects of remote work on society.',
    notes: [
      'the environment',
      'city centres and local businesses',
      'employees\u2019 mental health',
    ],
    opinions: [
      '"Fewer commutes means less pollution, plain and simple."',
      '"Empty offices are killing the shops and cafés that used to serve them."',
      '"Not seeing colleagues in person every day can be genuinely isolating."',
    ],
    instructions:
      'Write an essay discussing two of the points in your notes. You should explain which point you think is more significant, giving reasons to support your opinion.',
  },
  {
    id: 'w1-02',
    part: 1,
    title: 'El turismo masivo',
    context: 'Your class has just had a discussion about the impact of mass tourism on popular destinations.',
    notes: [
      'the local economy',
      'the environment and infrastructure',
      'the authenticity of local culture',
    ],
    opinions: [
      '"Tourism keeps entire local economies afloat; without it, many towns would struggle."',
      '"Some destinations are being loved to death, quite literally, by overcrowding."',
      '"When everything is designed for tourists, a place slowly stops being itself."',
    ],
    instructions:
      'Write an essay discussing two of the points in your notes. You should explain which point you think is more significant, giving reasons to support your opinion.',
  },
  {
    id: 'w1-03',
    part: 1,
    title: 'La inteligencia artificial en la educación',
    context: 'Your class has just had a discussion about the growing use of artificial intelligence tools in education.',
    notes: [
      'students\u2019 independent thinking skills',
      'access to personalised support',
      'teachers\u2019 role in the classroom',
    ],
    opinions: [
      '"If a tool can write the essay for you, are you actually learning anything?"',
      '"Every student finally has access to help whenever they need it, not just during office hours."',
      '"A good teacher does far more than just transmit information."',
    ],
    instructions:
      'Write an essay discussing two of the points in your notes. You should explain which point you think is more significant, giving reasons to support your opinion.',
  },
  {
    id: 'w1-04',
    part: 1,
    title: 'Las redes sociales y la vida pública',
    context: 'Your class has just had a discussion about the influence of social media on public and political life.',
    notes: [
      'access to information and news',
      'the spread of misinformation',
      'public debate and civility',
    ],
    opinions: [
      '"For the first time, ordinary people have a real platform to be heard."',
      '"False information now spreads faster than anyone can correct it."',
      '"Online, people say things to strangers they would never say to their face."',
    ],
    instructions:
      'Write an essay discussing two of the points in your notes. You should explain which point you think is more significant, giving reasons to support your opinion.',
  },
  {
    id: 'w1-05',
    part: 1,
    title: 'La vida en las grandes ciudades',
    context: 'Your class has just had a discussion about whether living in a big city is still worth it.',
    notes: [
      'career and job opportunities',
      'cost of living',
      'sense of community',
    ],
    opinions: [
      '"The best jobs in most industries are still concentrated in major cities."',
      '"Rent alone can swallow half of what people earn."',
      '"It\u2019s strange how lonely you can feel surrounded by millions of people."',
    ],
    instructions:
      'Write an essay discussing two of the points in your notes. You should explain which point you think is more significant, giving reasons to support your opinion.',
  },
];

export const writingPart2: WritingPart2Prompt[] = [
  {
    id: 'w2-01',
    part: 2,
    type: 'email',
    title: 'Correo a un antiguo profesor',
    scenario:
      'You recently attended a conference that reminded you of a subject you studied at university. You decide to write an email to a former professor who taught you that subject, telling them about the conference and asking for advice on how to keep learning about the topic independently.',
    instructions: 'Write your email.',
  },
  {
    id: 'w2-02',
    part: 2,
    type: 'report',
    title: 'Informe sobre el uso de un espacio comunitario',
    scenario:
      'The local council has asked residents to submit reports on how a disused building in the neighbourhood could be turned into a useful community space. Write a report describing the building\u2019s current condition, suggesting possible uses for it, and recommending which option would benefit the community most.',
    instructions: 'Write your report.',
  },
  {
    id: 'w2-03',
    part: 2,
    type: 'review',
    title: 'Reseña de una aplicación',
    scenario:
      'A technology website has asked readers to submit reviews of apps they use regularly. Write a review of an app you find genuinely useful, describing its main features, explaining what you like and dislike about it, and saying whether you would recommend it to others.',
    instructions: 'Write your review.',
  },
  {
    id: 'w2-04',
    part: 2,
    type: 'proposal',
    title: 'Propuesta para mejorar la formación en la empresa',
    scenario:
      'The manager of the company you work for has asked staff to submit proposals for improving professional development opportunities within the company. Write a proposal outlining what currently exists, identifying gaps, and suggesting specific improvements, explaining the benefits they would bring.',
    instructions: 'Write your proposal.',
  },
  {
    id: 'w2-05',
    part: 2,
    type: 'letter',
    title: 'Carta de reclamación',
    scenario:
      'You recently booked a weekend course through an online platform, but the experience was very different from what was advertised. Write a letter to the company explaining what went wrong, how it affected your experience, and what you would like them to do about it.',
    instructions: 'Write your letter.',
  },
  {
    id: 'w2-06',
    part: 2,
    type: 'article',
    title: 'Artículo sobre un hábito que cambió tu rutina',
    scenario:
      "An international online magazine for young professionals has invited readers to submit articles on the theme 'A habit that changed the way I work or live'. Write an article describing the habit, explaining what motivated the change, and reflecting on the effect it has had.",
    instructions: 'Write your article.',
  },
  {
    id: 'w2-07',
    part: 2,
    type: 'review',
    title: 'Reseña de un libro',
    scenario:
      'A book club newsletter has asked members to contribute short reviews of books they have read recently. Write a review of a book you have read, briefly summarising the plot or content, explaining what impressed or disappointed you, and saying who you think would enjoy it.',
    instructions: 'Write your review.',
  },
  {
    id: 'w2-08',
    part: 2,
    type: 'report',
    title: 'Informe sobre teletrabajo en tu equipo',
    scenario:
      "Your company's HR department has asked team leaders to report on how well remote work is functioning within their teams. Write a report describing the current arrangement, identifying any problems that have come up, and recommending changes if necessary.",
    instructions: 'Write your report.',
  },
];

export const TASK_TYPE_LABELS: Record<string, string> = {
  email: 'Email',
  letter: 'Carta',
  report: 'Informe',
  review: 'Reseña',
  proposal: 'Propuesta',
  article: 'Artículo',
};
