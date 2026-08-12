import { motion } from 'framer-motion';
import { Languages, BookOpenText, PenSquare, Trophy, RotateCcw, ArrowRight } from 'lucide-react';
import type { Section } from '../types';
import { getAllExercises } from '../data';
import type { ProgressRecord } from '../hooks/useProgress';
import { Card } from './ui';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' as const } },
};

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
  const sections: {
    id: Section;
    label: string;
    description: string;
    parts: string;
    Icon: typeof Languages;
    accent: string;
    accentSoft: string;
    accentText: string;
  }[] = [
    {
      id: 'use-of-english',
      label: 'Use of English',
      description: 'Léxico, gramática y transformación de frases. Partes 1-4 del examen.',
      parts: 'Multiple-choice cloze · Open cloze · Word formation · Key word transformation',
      Icon: Languages,
      accent: 'from-[#4F46E5] to-[#7C3AED]',
      accentSoft: 'bg-[#EDE7FE]',
      accentText: 'text-[#4F46E5]',
    },
    {
      id: 'reading',
      label: 'Reading',
      description: 'Comprensión lectora sobre textos largos y múltiples textos cortos. Partes 5-8.',
      parts: 'Multiple choice · Cross-text matching · Gapped text · Multiple matching',
      Icon: BookOpenText,
      accent: 'from-[#059669] to-[#0D9488]',
      accentSoft: 'bg-[#D1FAE5]',
      accentText: 'text-[#059669]',
    },
  ];

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
      <motion.div variants={item} className="space-y-3 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent font-semibold">
          C1 Advanced · Reading &amp; Use of English
        </p>
        <h1 className="font-display text-4xl sm:text-5xl leading-tight font-semibold text-ink">
          Practica para el examen,{' '}
          <span className="bg-gradient-to-r from-accent to-fuchsia bg-clip-text text-transparent">
            un ejercicio a la vez
          </span>
          .
        </h1>
        <p className="text-inkSoft text-[15px]">
          Ejercicios al estilo Cambridge C1, elegidos al azar cada vez que entras. Si te toca uno
          que ya conoces, puedes cambiarlo o elegir otro de la lista.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-5">
        {sections.map((s) => {
          const all = getAllExercises(s.id);
          const done = all.filter((ex) => progress.completed.includes(ex.id)).length;
          const pct = all.length ? Math.round((done / all.length) * 100) : 0;
          return (
            <motion.div key={s.id} variants={item}>
              <Card
                hover
                className="p-6 flex flex-col justify-between gap-5 h-full cursor-pointer group"
              >
                <button
                  onClick={() => onSelectSection(s.id)}
                  className="text-left flex flex-col gap-5 focus-ring rounded-xl"
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${s.accent} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}
                    >
                      <s.Icon size={22} strokeWidth={2} />
                    </div>
                    <ArrowRight
                      className="text-inkSoft/40 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300"
                      size={20}
                    />
                  </div>
                  <div className="space-y-2">
                    <h2 className="font-display text-2xl font-semibold text-ink">{s.label}</h2>
                    <p className="text-sm text-inkSoft leading-relaxed">{s.description}</p>
                    <p className={`text-xs font-mono ${s.accentText} opacity-70`}>{s.parts}</p>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono text-inkSoft">
                      <span>
                        {done}/{all.length} completados
                      </span>
                      <span>{pct}%</span>
                    </div>
                    <div className={`h-1.5 rounded-full ${s.accentSoft} overflow-hidden`}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                        className={`h-full rounded-full bg-gradient-to-r ${s.accent}`}
                      />
                    </div>
                  </div>
                </button>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <motion.div variants={item}>
        <Card
          hover
          className="p-6 flex flex-wrap items-center justify-between gap-4 cursor-pointer group"
        >
          <button onClick={onGoWriting} className="flex items-center gap-4 text-left flex-1 min-w-[240px] focus-ring rounded-xl">
            <div className="w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br from-fuchsia to-[#E879F9] flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
              <PenSquare size={22} strokeWidth={2} />
            </div>
            <div className="space-y-1">
              <p className="font-mono text-[11px] uppercase tracking-wider text-fuchsia font-semibold">
                Writing
              </p>
              <h2 className="font-display text-xl font-semibold text-ink">
                Ensayo, email, informe, reseña, propuesta...
              </h2>
              <p className="text-sm text-inkSoft max-w-xl">
                Contador de palabras, cronómetro, autoevaluación y feedback opcional por IA con tu
                propia clave.
              </p>
            </div>
          </button>
          <ArrowRight className="text-inkSoft/40 group-hover:text-fuchsia group-hover:translate-x-1 transition-all duration-300 shrink-0" size={22} />
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card
          hover
          className="p-6 flex flex-wrap items-center justify-between gap-4 cursor-pointer group border-gold/20"
        >
          <button onClick={onStartExam} className="flex items-center gap-4 text-left flex-1 min-w-[240px] focus-ring rounded-xl">
            <div className="w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br from-gold to-[#FACC15] flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
              <Trophy size={22} strokeWidth={2} />
            </div>
            <div className="space-y-1">
              <p className="font-mono text-[11px] uppercase tracking-wider text-gold font-semibold">
                Modo examen
              </p>
              <h2 className="font-display text-xl font-semibold text-ink">
                Simula el examen completo, cronometrado
              </h2>
              <p className="text-sm text-inkSoft">
                Encadena las 8 partes (o solo Use of English / solo Reading) en una sesión, con
                resultado final desglosado por parte.
              </p>
            </div>
          </button>
          <ArrowRight className="text-inkSoft/40 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300 shrink-0" size={22} />
        </Card>
      </motion.div>

      {progress.completed.length > 0 && (
        <motion.button
          variants={item}
          onClick={onResetProgress}
          className="inline-flex items-center gap-1.5 text-xs text-inkSoft hover:text-pen transition-colors focus-ring rounded"
        >
          <RotateCcw size={13} />
          Reiniciar todo el progreso
        </motion.button>
      )}
    </motion.div>
  );
}
