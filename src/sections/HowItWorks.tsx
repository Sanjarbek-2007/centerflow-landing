import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Rocket, UserPlus, Layers, PlayCircle, Banknote, type LucideIcon } from 'lucide-react';

const ICONS: LucideIcon[] = [Rocket, UserPlus, Layers, PlayCircle, Banknote];

interface Step {
  title: string;
  desc: string;
}

export default function HowItWorks() {
  const { t } = useTranslation();
  const steps = t('how.steps', { returnObjects: true }) as Step[];

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">{t('how.eyebrow')}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-100 sm:text-4xl">{t('how.title')}</h2>
          <p className="mt-4 text-ink-300">{t('how.subtitle')}</p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-brand-400/60 via-ink-700 to-transparent" />
          <div className="space-y-10">
            {steps.map((step, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="relative flex items-start gap-5 pl-0"
                >
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-brand-400/40 bg-ink-900 text-brand-600 shadow-glow-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="rounded-2xl border border-ink-800 bg-ink-850/40 px-5 py-4 sm:pt-1">
                    <span className="text-xs font-semibold text-amber-600">0{i + 1}</span>
                    <h3 className="mt-1 text-lg font-semibold text-ink-100">{step.title}</h3>
                    <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-ink-400">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
