import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Trophy } from 'lucide-react';
import { EXAM_CONFIGS, type ExamConfig } from '../lib/exam';
import { Button, Card } from './ui';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' as const } },
};

export function ExamSetup({
  onStart,
  onBack,
}: {
  onStart: (config: ExamConfig) => void;
  onBack: () => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <Button variant="ghost" onClick={onBack} className="!px-2 !py-1 mb-2 -ml-2">
          <ArrowLeft size={15} /> Inicio
        </Button>
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-gold to-[#FACC15] flex items-center justify-center text-white shadow-md">
            <Trophy size={20} />
          </div>
          <h1 className="font-display text-3xl font-semibold text-ink">Modo examen</h1>
        </div>
      </div>

      <p className="text-inkSoft max-w-2xl">
        Encadena varias partes en una sola sesión cronometrada, como en el examen real. Al final
        verás el resultado desglosado por parte. Se elige un ejercicio al azar de cada parte
        (priorizando los que aún no has hecho).
      </p>

      <motion.div variants={container} initial="hidden" animate="show" className="grid sm:grid-cols-3 gap-4">
        {EXAM_CONFIGS.map((config) => (
          <motion.div key={config.id} variants={item}>
            <Card hover className="p-5 flex flex-col justify-between gap-4 h-full">
              <div className="space-y-1.5">
                <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-gold bg-goldSoft px-2.5 py-1 rounded-full">
                  <Clock size={12} /> ~{config.minutes} min
                </span>
                <h3 className="font-display text-lg font-semibold text-ink pt-1">{config.label}</h3>
                <p className="text-sm text-inkSoft leading-relaxed">{config.description}</p>
              </div>
              <Button onClick={() => onStart(config)}>Empezar →</Button>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
