import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { ArrowUpRight, LayoutDashboard, GraduationCap } from 'lucide-react';
import { staffAppUrl, studentAppUrl } from '../lib/config';

function AppPanel({
  tone,
  icon,
  tagKey,
  titleKey,
  descKey,
  pointsKey,
  ctaKey,
  href,
  reverse
}: {
  tone: 'brand' | 'amber';
  icon: React.ReactNode;
  tagKey: string;
  titleKey: string;
  descKey: string;
  pointsKey: string;
  ctaKey: string;
  href: string;
  reverse?: boolean;
}) {
  const { t } = useTranslation();
  const points = t(pointsKey, { returnObjects: true }) as string[];
  const toneClasses =
    tone === 'brand'
      ? { chip: 'bg-brand-400/15 text-brand-700 border-brand-400/30', dot: 'bg-brand-500', ring: 'hover:border-brand-400/50' }
      : { chip: 'bg-amber-400/15 text-amber-700 border-amber-400/30', dot: 'bg-amber-500', ring: 'hover:border-amber-400/50' };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`sheen group relative overflow-hidden rounded-3xl border border-ink-700 bg-ink-850/60 p-8 transition-colors sm:p-10 ${toneClasses.ring}`}
    >
      <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${toneClasses.chip}`}>
        {icon}
        {t(tagKey)}
      </div>
      <h3 className="mt-5 text-2xl font-bold text-ink-100 sm:text-3xl">{t(titleKey)}</h3>
      <p className="mt-3 max-w-md text-ink-300">{t(descKey)}</p>

      <ul className="mt-7 space-y-3">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-3 text-sm text-ink-200">
            <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${toneClasses.dot}`} />
            {point}
          </li>
        ))}
      </ul>

      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-100 transition-colors group-hover:text-brand-600"
      >
        {t(ctaKey)}
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </motion.div>
  );
}

export default function TwoApps() {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">{t('apps.eyebrow')}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-100 sm:text-4xl">{t('apps.title')}</h2>
          <p className="mt-4 text-ink-300">{t('apps.subtitle')}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <AppPanel
            tone="brand"
            icon={<LayoutDashboard className="h-3.5 w-3.5" />}
            tagKey="apps.staff.tag"
            titleKey="apps.staff.title"
            descKey="apps.staff.desc"
            pointsKey="apps.staff.points"
            ctaKey="apps.staff.cta"
            href={staffAppUrl()}
          />
          <AppPanel
            tone="amber"
            icon={<GraduationCap className="h-3.5 w-3.5" />}
            tagKey="apps.student.tag"
            titleKey="apps.student.title"
            descKey="apps.student.desc"
            pointsKey="apps.student.points"
            ctaKey="apps.student.cta"
            href={studentAppUrl()}
          />
        </div>
      </div>
    </section>
  );
}
