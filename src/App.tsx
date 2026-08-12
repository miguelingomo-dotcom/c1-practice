import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Section, WritingPrompt } from './types';
import { findExercise, getAllMeta } from './data';
import { useProgress } from './hooks/useProgress';
import { pickRandom } from './lib/random';
import { buildExamSequence, type ExamConfig, type ExamStep } from './lib/exam';
import { AmbientBackground } from './components/AmbientBackground';
import { Home } from './components/Home';
import { SectionHome } from './components/SectionHome';
import { ExerciseListView } from './components/ExerciseListView';
import { ExercisePlayer } from './components/ExercisePlayer';
import { ExamSetup } from './components/ExamSetup';
import { ExamRunner, type ExamResults } from './components/ExamRunner';
import { ExamResultView } from './components/ExamResultView';
import { WritingHome } from './components/WritingHome';
import { WritingEditor } from './components/WritingEditor';

type View =
  | { screen: 'home' }
  | { screen: 'section'; section: Section }
  | { screen: 'list'; section: Section; part?: number }
  | { screen: 'exercise'; section: Section; exerciseId: string }
  | { screen: 'exam-setup' }
  | { screen: 'exam-run'; config: ExamConfig; steps: ExamStep[] }
  | { screen: 'exam-result'; config: ExamConfig; results: ExamResults }
  | { screen: 'writing-home' }
  | { screen: 'writing-editor'; prompt: WritingPrompt };

function viewKey(view: View): string {
  switch (view.screen) {
    case 'section':
      return `section-${view.section}`;
    case 'list':
      return `list-${view.section}-${view.part ?? 'all'}`;
    case 'exercise':
      return `exercise-${view.exerciseId}`;
    case 'exam-run':
      return `exam-run-${view.steps.map((s) => s.exerciseId).join('-')}`;
    case 'exam-result':
      return 'exam-result';
    case 'writing-editor':
      return `writing-editor-${view.prompt.id}`;
    default:
      return view.screen;
  }
}

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
};

export default function App() {
  const [view, setView] = useState<View>({ screen: 'home' });
  const { progress, markCompleted, isCompleted, resetProgress } = useProgress();

  const goHome = () => setView({ screen: 'home' });
  const goSection = (section: Section) => setView({ screen: 'section', section });
  const goList = (section: Section, part?: number) => setView({ screen: 'list', section, part });

  const practiceRandom = (section: Section, part?: number, excludeId?: string) => {
    const pool = getAllMeta(section).filter((m) => (part ? m.part === part : true));
    const picked = pickRandom(pool, isCompleted, excludeId);
    if (picked) setView({ screen: 'exercise', section, exerciseId: picked.id });
  };

  const startExam = (config: ExamConfig) => {
    const steps = buildExamSequence(config.parts, isCompleted);
    setView({ screen: 'exam-run', config, steps });
  };

  return (
    <div className="min-h-screen bg-paper relative">
      <AmbientBackground />
      <div className="max-w-5xl mx-auto px-5 py-10 sm:py-14 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={viewKey(view)}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {view.screen === 'home' && (
              <Home
                progress={progress}
                onSelectSection={goSection}
                onResetProgress={resetProgress}
                onStartExam={() => setView({ screen: 'exam-setup' })}
                onGoWriting={() => setView({ screen: 'writing-home' })}
              />
            )}

            {view.screen === 'section' && (
              <SectionHome
                section={view.section}
                progress={progress}
                onPracticeRandom={(part) => practiceRandom(view.section, part)}
                onBrowsePart={(part) => goList(view.section, part)}
                onBrowseAll={() => goList(view.section)}
                onBack={goHome}
              />
            )}

            {view.screen === 'list' && (
              <ExerciseListView
                section={view.section}
                part={view.part}
                progress={progress}
                onSelect={(id) => setView({ screen: 'exercise', section: view.section, exerciseId: id })}
                onBack={() => goSection(view.section)}
              />
            )}

            {view.screen === 'exercise' &&
              (() => {
                const exercise = findExercise(view.section, view.exerciseId);
                if (!exercise) return <p>Ejercicio no encontrado.</p>;
                return (
                  <ExercisePlayer
                    exercise={exercise}
                    section={view.section}
                    onComplete={(correct, total) => markCompleted(exercise.id, correct, total)}
                    onNextRandom={() => practiceRandom(view.section, exercise.part, exercise.id)}
                    onBrowseList={() => goList(view.section, exercise.part)}
                    onBack={() => goSection(view.section)}
                  />
                );
              })()}

            {view.screen === 'exam-setup' && <ExamSetup onStart={startExam} onBack={goHome} />}

            {view.screen === 'exam-run' && (
              <ExamRunner
                config={view.config}
                steps={view.steps}
                onExerciseComplete={markCompleted}
                onFinish={(results) => setView({ screen: 'exam-result', config: view.config, results })}
                onAbort={() => setView({ screen: 'exam-setup' })}
              />
            )}

            {view.screen === 'exam-result' && (
              <ExamResultView
                config={view.config}
                results={view.results}
                onRetry={() => startExam(view.config)}
                onHome={goHome}
              />
            )}

            {view.screen === 'writing-home' && (
              <WritingHome
                onSelect={(prompt) => setView({ screen: 'writing-editor', prompt })}
                onBack={goHome}
              />
            )}

            {view.screen === 'writing-editor' && (
              <WritingEditor prompt={view.prompt} onBack={() => setView({ screen: 'writing-home' })} />
            )}
          </motion.div>
        </AnimatePresence>

        <footer className="mt-16 pt-6 border-t border-ink/10 text-xs text-inkSoft font-mono text-center">
          C1 Practice · práctica no oficial al estilo Cambridge C1 Advanced
        </footer>
      </div>
    </div>
  );
}
