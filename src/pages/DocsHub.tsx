import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight, LayoutDashboard, GraduationCap, PlayCircle } from 'lucide-react';
import LanguageSwitcher from '../components/LanguageSwitcher';
import AmbientBackground from '../components/AmbientBackground';

function HubCard({
  to,
  tone,
  icon,
  title,
  desc,
  cta
}: {
  to: string;
  tone: 'brand' | 'amber';
  icon: React.ReactNode;
  title: string;
  desc: string;
  cta: string;
}) {
  const ring = tone === 'brand' ? 'hover:border-brand-400/60' : 'hover:border-amber-400/60';
  const chip = tone === 'brand' ? 'bg-brand-400/15 text-brand-700' : 'bg-amber-400/15 text-amber-700';
  const ctaColor = tone === 'brand' ? 'text-brand-600' : 'text-amber-700';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
    >
      <Link
        to={to}
        className={`sheen group flex h-full flex-col rounded-3xl border border-ink-700 bg-ink-850/60 p-8 transition-colors sm:p-10 ${ring}`}
      >
        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${chip}`}>{icon}</div>
        <h2 className="mt-6 text-2xl font-bold text-ink-100">{title}</h2>
        <p className="mt-3 flex-1 text-ink-300">{desc}</p>
        <span className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${ctaColor}`}>
          {cta}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </Link>
    </motion.div>
  );
}

export default function DocsHub() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('docs.hub.title') + ' — CenterFlow';
  }, [t]);

  return (
    <div className="relative min-h-screen bg-ink-950">
      <AmbientBackground />
      <header className="relative z-10 border-b border-ink-800/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link to="/" className="flex items-center gap-3">
            <img src="/centerflowlogo.svg" alt="CenterFlow" className="h-7 w-auto" />
            <span className="flex items-center gap-1.5 text-sm text-ink-400">
              <ArrowLeft className="h-3.5 w-3.5" />
              {t('docs.backHome')}
            </span>
          </Link>
          <LanguageSwitcher />
        </div>
      </header>

      <div className="relative mx-auto max-w-5xl px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">{t('docs.hub.eyebrow')}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink-100 sm:text-5xl">{t('docs.hub.title')}</h1>
          <p className="mt-4 text-ink-300">{t('docs.hub.subtitle')}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <HubCard
            to="/docs/staff"
            tone="brand"
            icon={<LayoutDashboard className="h-6 w-6" />}
            title={t('docs.hub.staffCard.title')}
            desc={t('docs.hub.staffCard.desc')}
            cta={t('docs.hub.staffCard.cta')}
          />
          <HubCard
            to="/docs/student"
            tone="amber"
            icon={<GraduationCap className="h-6 w-6" />}
            title={t('docs.hub.studentCard.title')}
            desc={t('docs.hub.studentCard.desc')}
            cta={t('docs.hub.studentCard.cta')}
          />
        </div>

        <div className="mx-auto mt-10 flex max-w-xl items-center gap-3 rounded-2xl border border-dashed border-ink-700 bg-ink-850/40 px-5 py-4 text-sm text-ink-400">
          <PlayCircle className="h-5 w-5 shrink-0 text-amber-600" />
          {t('docs.hub.videoNote')}
        </div>
      </div>
    </div>
  );
}
