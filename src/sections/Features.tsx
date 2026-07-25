import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import {
  ClipboardCheck,
  PenSquare,
  CalendarClock,
  Users,
  ShieldCheck,
  Wallet,
  MessageCircle,
  FolderOpen,
  BadgeCheck,
  CalendarPlus,
  Trophy,
  ShieldAlert,
  type LucideIcon
} from 'lucide-react';

const ICONS: LucideIcon[] = [
  ClipboardCheck,
  PenSquare,
  CalendarClock,
  Users,
  ShieldCheck,
  Wallet,
  MessageCircle,
  FolderOpen,
  BadgeCheck,
  CalendarPlus,
  Trophy,
  ShieldAlert
];

interface FeatureItem {
  title: string;
  desc: string;
}

export default function Features() {
  const { t } = useTranslation();
  const items = t('features.items', { returnObjects: true }) as FeatureItem[];

  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">{t('features.eyebrow')}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-100 sm:text-4xl">{t('features.title')}</h2>
          <p className="mt-4 text-ink-300">{t('features.subtitle')}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="sheen group rounded-2xl border border-ink-700 bg-ink-850/50 p-6 transition-colors hover:border-brand-400/40 hover:bg-ink-850"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400/20 to-amber-400/10 text-brand-700 transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink-100">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
