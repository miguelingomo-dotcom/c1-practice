import { motion } from 'framer-motion';
import { PartyPopper, RotateCw, Home as HomeIcon } from 'lucide-react';
import { findExercise, PART_LABELS } from '../data';
import type { ExamConfig } from '../lib/exam';
import { formatSeconds } from '../lib/exam';
import type { ExamResults } from './ExamRunner';
import { getPartColor } from '../lib/colors';
import { Button, Card, ScorePill } from './ui';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } } };
const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

export function ExamResultView({
  config,
  results,
  onRetry,
  onHome,
}: {
  config: ExamConfig;
  results: ExamResults;
  onRetry: () => void;
  onHome: () => void;
}) {
  const totalCorrect = Object.values(results.scores).reduce((sum, s) => sum + s.correct, 0);
  const totalQuestions = Object.values(results.scores).reduce((sum, s) => sum + s.total, 0);
  const percentage = totalQuestions === 0 ? 0 : Math.round((totalCorrect / totalQuestions) * 100);
  const celebratory = percentage >= 70;

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      <motion.div variants={item} className="flex items-center gap-3">
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 14, delay: 0.1 }}
          className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md bg-gradient-to-br ${
            celebratory ? 'from-gold to-[#FACC15]' : 'from-accent to-accentDark'
          }`}
        >
          <PartyPopper size={22} />
        </motion.div>
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-inkSoft">{config.label}</p>
          <h1 className="font-display text-3xl font-semibold text-ink">Resultado del examen</h1>
        </div>
      </motion.div>

      <motion.div variants={item}>
        <Card className="p-6 flex flex-wrap items-center justify-between gap-6 bg-gradient-to-br from-white to-accentSoft/40">
          <div>
            <p className="text-xs font-mono text-inkSoft uppercase tracking-wider">Puntuación total</p>
            <p className="font-display text-4xl font-semibold text-ink">
              {totalCorrect}/{totalQuestions}{' '}
              <span className="text-lg text-accent font-sans font-bold">({percentage}%)</span>
            </p>
          </div>
          <div>
            <p className="text-xs font-mono text-inkSoft uppercase tracking-wider">Tiempo empleado</p>
            <p className="font-display text-4xl font-semibold text-ink">{formatSeconds(results.elapsedSeconds)}</p>
          </div>
        </Card>
      </motion.div>

      <div className="space-y-2">
        {results.steps.map((step) => {
          const exercise = findExercise(step.section, step.exerciseId);
          const score = results.scores[step.exerciseId];
          if (!exercise || !score) return null;
          const color = getPartColor(step.part);
          return (
            <motion.div key={step.exerciseId} variants={item}>
              <Card className={`p-4 flex items-center justify-between gap-4 border-l-4 ${color.border}`}>
                <div>
                  <p className={`text-xs font-mono font-bold uppercase tracking-wider ${color.text}`}>
                    {PART_LABELS[step.part]}
                  </p>
                  <p className="text-sm font-medium text-ink">{exercise.title}</p>
                </div>
                <ScorePill correct={score.correct} total={score.total} />
              </Card>
            </motion.div>
          );
        })}
      </div>

      <motion.div variants={item} className="flex gap-3">
        <Button onClick={onRetry}>
          <RotateCw size={15} /> Hacer otro examen
        </Button>
        <Button variant="outline" onClick={onHome}>
          <HomeIcon size={15} /> Volver al inicio
        </Button>
      </motion.div>
    </motion.div>
  );
}
