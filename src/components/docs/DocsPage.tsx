import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight, ListChecks } from 'lucide-react';
import LanguageSwitcher from '../LanguageSwitcher';
import MediaPlaceholder from './MediaPlaceholder';
import { mediaPath } from '../../lib/media';

interface DocSection {
  id: string;
  title: string;
  summary: string;
  steps: string[];
  deepLink: string;
  deepLinkLabel: string;
  video: boolean;
}

export default function DocsPage({
  ns,
  accent,
  appUrl
}: {
  ns: 'staff' | 'student';
  accent: 'brand' | 'amber';
  appUrl: (path?: string) => string;
}) {
  const { t } = useTranslation();
  const sections = t(`docs.${ns}.sections`, { returnObjects: true }) as DocSection[];
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? '');

  useEffect(() => {
    document.title = t(`docs.${ns}.title`) + ' — CenterFlow';
  }, [t, ns]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  const toneText = accent === 'brand' ? 'text-brand-600' : 'text-amber-700';
  const toneBorder = accent === 'brand' ? 'border-brand-400/40' : 'border-amber-400/40';
  const toneBorderSolid = accent === 'brand' ? 'border-brand-400' : 'border-amber-400';
  const toneBg = accent === 'brand' ? 'bg-brand-400/10' : 'bg-amber-400/10';
  const toneDot = accent === 'brand' ? 'bg-brand-500' : 'bg-amber-500';
  const toneCta = accent === 'brand' ? 'bg-brand-300 text-ink-950' : 'bg-amber-300 text-ink-950';

  return (
    <div className="min-h-screen bg-ink-950">
      <header className="sticky top-0 z-40 border-b border-ink-800 bg-ink-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <img src="/centerflowlogo.svg" alt="CenterFlow" className="h-7 w-auto" />
              <span className="hidden text-base font-semibold text-ink-100 sm:inline">CenterFlow</span>
            </Link>
            <Link
              to="/docs"
              className="hidden items-center gap-1 text-sm text-ink-400 hover:text-ink-100 sm:flex"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              {t('docs.backHub')}
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={appUrl()}
              target="_blank"
              rel="noreferrer"
              className={`hidden items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold sm:inline-flex ${toneCta}`}
            >
              {t(ns === 'staff' ? 'nav.openApp' : 'nav.openStudentApp')}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium ${toneBorder} ${toneBg} ${toneText}`}>
          {t(`docs.${ns}.eyebrow`)}
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink-100 sm:text-4xl">{t(`docs.${ns}.title`)}</h1>
        <p className="mt-3 max-w-2xl text-ink-300">{t(`docs.${ns}.subtitle`)}</p>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink-500">
                <ListChecks className="h-3.5 w-3.5" />
                {t('docs.common.tableOfContents')}
              </p>
              <nav className="mt-4 space-y-1 border-l border-ink-800">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className={`block -ml-px border-l-2 py-1.5 pl-4 text-sm transition-colors ${
                      activeId === s.id
                        ? `${toneBorderSolid} ${toneText} font-medium`
                        : 'border-transparent text-ink-400 hover:text-ink-100'
                    }`}
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="space-y-16">
            {sections.map((section, i) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
                className="scroll-mt-24"
              >
                <div className="flex items-center gap-3">
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${toneBg} ${toneText}`}>
                    {i + 1}
                  </span>
                  <h2 className="text-xl font-semibold text-ink-100 sm:text-2xl">{section.title}</h2>
                </div>
                <p className="mt-3 text-ink-300">{section.summary}</p>

                <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
                  <ol className="space-y-3">
                    {section.steps.map((step, idx) => (
                      <li key={idx} className="flex gap-3 rounded-xl border border-ink-800 bg-ink-850/40 px-4 py-3 text-sm text-ink-200">
                        <span className={`mt-0.5 h-1.5 w-1.5 shrink-0 translate-y-1 rounded-full ${toneDot}`} />
                        {step}
                      </li>
                    ))}
                  </ol>

                  <div className="space-y-4">
                    <MediaPlaceholder
                      kind="image"
                      label={`${t('docs.common.screenshotLabel')}: ${section.title}`}
                      src={mediaPath(ns, section.id, 'screenshot')}
                    />
                    {section.video && (
                      <MediaPlaceholder
                        kind="video"
                        label={`${t('docs.common.videoLabel')}: ${section.title}`}
                        src={mediaPath(ns, section.id, 'video')}
                      />
                    )}
                    {section.deepLink !== undefined && (
                      <a
                        href={appUrl(section.deepLink)}
                        target="_blank"
                        rel="noreferrer"
                        className={`flex items-center justify-between gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${toneBorder} ${toneText} hover:bg-ink-800/60`}
                      >
                        {section.deepLinkLabel}
                        <ArrowUpRight className="h-4 w-4 shrink-0" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
