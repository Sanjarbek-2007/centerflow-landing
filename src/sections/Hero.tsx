import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, CheckCircle2, Flame, MessageCircle, Users, CalendarCheck } from 'lucide-react';
import AmbientBackground from '../components/AmbientBackground';

function StaffMockCard() {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="sheen w-72 rounded-2xl border border-ink-700 bg-ink-850/90 p-4 shadow-2xl shadow-black/40 backdrop-blur"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-400/20 text-brand-700">
            <Users className="h-4 w-4" />
          </div>
          <span className="text-xs font-semibold text-ink-200">IELTS Intermediate</span>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Live
        </span>
      </div>
      <div className="mt-4 space-y-2">
        {[
          { name: 'Dilnoza A.', status: 'Present' },
          { name: 'Sardor Q.', status: 'Present' },
          { name: 'Malika R.', status: 'Late' }
        ].map((s) => (
          <div key={s.name} className="flex items-center justify-between rounded-lg bg-ink-800/70 px-3 py-2">
            <span className="text-xs text-ink-200">{s.name}</span>
            <span
              className={`text-[10px] font-medium ${
                s.status === 'Present' ? 'text-emerald-700' : 'text-amber-700'
              }`}
            >
              {s.status}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-lg border border-dashed border-ink-600 px-3 py-2 text-[11px] text-ink-400">
        <CalendarCheck className="h-3.5 w-3.5 text-brand-600" />
        Next lesson materializes automatically
      </div>
    </motion.div>
  );
}

function StudentMockCard() {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, 14, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
      className="sheen w-64 rounded-2xl border border-ink-700 bg-ink-850/90 p-4 shadow-2xl shadow-black/40 backdrop-blur"
    >
      <div className="flex items-center gap-2.5">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-ink-950">
          <Flame className="h-4.5 w-4.5" />
        </div>
        <div>
          <p className="text-xs font-semibold text-ink-100">Sardor Q.</p>
          <p className="text-[10px] text-ink-400">Level 7 · 1,240 XP</p>
        </div>
      </div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-ink-700">
        <motion.div
          initial={{ width: '20%' }}
          animate={{ width: '78%' }}
          transition={{ duration: 2, ease: 'easeOut', delay: 0.6 }}
          className="h-full rounded-full bg-gradient-to-r from-brand-600 to-brand-300"
        />
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-lg bg-ink-800/70 px-3 py-2">
        <CheckCircle2 className="h-3.5 w-3.5 text-brand-600" />
        <span className="text-[11px] text-ink-200">Homework submitted — Unit 4</span>
      </div>
      <div className="mt-2 flex items-center gap-2 rounded-lg bg-ink-800/70 px-3 py-2">
        <MessageCircle className="h-3.5 w-3.5 text-amber-600" />
        <span className="text-[11px] text-ink-200">New message from tutor</span>
      </div>
    </motion.div>
  );
}

function ConnectorSvg() {
  return (
    <svg
      viewBox="0 0 400 200"
      className="pointer-events-none absolute inset-0 hidden h-full w-full sm:block"
      preserveAspectRatio="none"
    >
      <path
        d="M 60 60 C 160 20, 240 180, 340 140"
        fill="none"
        stroke="url(#flowGradient)"
        strokeWidth="2"
        className="flow-path"
      />
      <defs>
        <linearGradient id="flowGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5dcdbc" />
          <stop offset="100%" stopColor="#ed923b" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="4" fill="#5dcdbc" className="pulse-dot" />
      <circle cx="340" cy="140" r="4" fill="#ed923b" className="pulse-dot" />
    </svg>
  );
}

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
      <AmbientBackground />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-400/10 px-3.5 py-1.5 text-xs font-medium text-brand-700"
          >
            <Sparkles className="h-3.5 w-3.5" />
            {t('hero.eyebrow')}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-5 text-4xl font-bold tracking-tight text-ink-100 sm:text-5xl lg:text-6xl"
          >
            {t('hero.titleLine1')}
            <br />
            <span className="bg-gradient-to-r from-brand-700 via-brand-600 to-amber-600 bg-clip-text text-transparent">
              {t('hero.titleLine2')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/docs"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-300 px-6 py-3.5 text-sm font-semibold text-ink-950 shadow-glow-brand transition-transform hover:scale-105"
            >
              {t('hero.ctaPrimary')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full border border-ink-600 bg-ink-800/60 px-6 py-3.5 text-sm font-semibold text-ink-100 transition-colors hover:border-ink-400"
            >
              {t('hero.ctaSecondary')}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-ink-800 pt-8"
          >
            {[
              [t('hero.stat1Value'), t('hero.stat1Label')],
              [t('hero.stat2Value'), t('hero.stat2Label')],
              [t('hero.stat3Value'), t('hero.stat3Label')]
            ].map(([value, label]) => (
              <div key={label}>
                <p className="text-xl font-bold text-ink-100 sm:text-2xl">{value}</p>
                <p className="mt-1 text-xs leading-snug text-ink-400">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto h-[420px] w-full max-w-md"
        >
          <ConnectorSvg />
          <div className="absolute left-0 top-4">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-brand-700">{t('hero.badgeStaff')}</p>
            <StaffMockCard />
          </div>
          <div className="absolute bottom-2 right-0">
            <p className="mb-2 text-right text-[11px] font-semibold uppercase tracking-wider text-amber-700">{t('hero.badgeStudent')}</p>
            <StudentMockCard />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
