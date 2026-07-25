import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Check, Sparkles, ChevronDown } from 'lucide-react';

interface Plan {
  name: string;
  price: string;
  priceUnit: string;
  period: string;
  tagline: string;
  features: string[];
  cta: string;
  badge: string;
}

const PLAN_KEYS = ['freemium', 'pro', 'proplus'] as const;

function PriceCard({ plan, highlighted, comingSoon }: { plan: Plan; highlighted?: boolean; comingSoon?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55 }}
      className={`relative flex flex-col rounded-3xl border p-8 ${
        highlighted
          ? 'border-brand-300/60 bg-gradient-to-b from-brand-500/15 to-ink-850 shadow-glow-brand'
          : 'border-ink-700 bg-ink-850/50'
      } ${comingSoon ? 'opacity-90' : ''}`}
    >
      {plan.badge && (
        <span
          className={`absolute -top-3.5 left-8 rounded-full px-3 py-1 text-[11px] font-semibold ${
            highlighted ? 'bg-brand-300 text-ink-950' : 'bg-ink-700 text-ink-200'
          }`}
        >
          {plan.badge}
        </span>
      )}

      <h3 className="text-lg font-semibold text-ink-100">{plan.name}</h3>
      <p className="mt-1 text-sm text-ink-400">{plan.tagline}</p>

      <div className="mt-6 flex items-end gap-1.5">
        {plan.price ? (
          <>
            <span className="text-4xl font-bold tracking-tight text-ink-100">{plan.price}</span>
            {plan.priceUnit && <span className="pb-1 text-sm font-medium text-ink-400">{plan.priceUnit}</span>}
          </>
        ) : (
          <span className="flex items-center gap-1.5 text-2xl font-bold text-ink-100">
            <Sparkles className="h-5 w-5 text-amber-600" />
            —
          </span>
        )}
      </div>
      <p className="mt-1 text-xs text-ink-500">{plan.period}</p>

      <ul className="mt-7 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-ink-200">
            <Check className={`mt-0.5 h-4 w-4 shrink-0 ${highlighted ? 'text-brand-600' : 'text-brand-500'}`} />
            {f}
          </li>
        ))}
      </ul>

      <button
        disabled={comingSoon}
        className={`mt-8 w-full rounded-full px-5 py-3 text-sm font-semibold transition-transform ${
          comingSoon
            ? 'cursor-not-allowed border border-ink-700 text-ink-400'
            : highlighted
              ? 'bg-brand-300 text-ink-950 hover:scale-[1.02]'
              : 'border border-ink-600 text-ink-100 hover:border-ink-400'
        }`}
        onClick={() => {
          if (comingSoon) return;
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        {plan.cta}
      </button>
    </motion.div>
  );
}

export default function Pricing() {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const faq = t('pricing.faq', { returnObjects: true }) as { q: string; a: string }[];

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">{t('pricing.eyebrow')}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-100 sm:text-4xl">{t('pricing.title')}</h2>
          <p className="mt-4 text-ink-300">{t('pricing.subtitle')}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PLAN_KEYS.map((key) => {
            const plan = t(`pricing.plans.${key}`, { returnObjects: true }) as Plan;
            return (
              <PriceCard
                key={key}
                plan={plan}
                highlighted={key === 'pro'}
                comingSoon={key === 'proplus'}
              />
            );
          })}
        </div>

        <p className="mt-6 text-center text-xs text-ink-500">{t('pricing.billingNote')} · {t('pricing.limitsNote')}</p>

        <div className="mx-auto mt-20 max-w-2xl">
          <h3 className="text-center text-xl font-semibold text-ink-100">{t('pricing.faqTitle')}</h3>
          <div className="mt-6 divide-y divide-ink-800 rounded-2xl border border-ink-800">
            {faq.map((item, i) => (
              <div key={item.q}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-medium text-ink-100">{item.q}</span>
                  <ChevronDown className={`h-4 w-4 shrink-0 text-ink-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && <p className="px-5 pb-4 text-sm leading-relaxed text-ink-400">{item.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
