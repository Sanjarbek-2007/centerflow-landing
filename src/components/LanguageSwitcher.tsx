import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { SUPPORTED_LANGS, type SupportedLang } from '../i18n';

const LABELS: Record<SupportedLang, string> = {
  uz: "O'zbekcha",
  ru: 'Русский',
  en: 'English'
};

const SHORT: Record<SupportedLang, string> = {
  uz: 'UZ',
  ru: 'RU',
  en: 'EN'
};

export default function LanguageSwitcher({ dark = true }: { dark?: boolean }) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = (i18n.language?.slice(0, 2) as SupportedLang) || 'uz';

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
          dark
            ? 'border-ink-600 bg-ink-800/60 text-ink-100 hover:border-brand-400 hover:text-brand-600'
            : 'border-ink-200 bg-white text-ink-700 hover:border-brand-400'
        }`}
        aria-label="Change language"
      >
        <Globe className="h-4 w-4" />
        {SHORT[current]}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-xl border border-ink-700 bg-ink-850 shadow-2xl shadow-black/40">
          {SUPPORTED_LANGS.map((lng) => (
            <button
              key={lng}
              onClick={() => {
                i18n.changeLanguage(lng);
                setOpen(false);
              }}
              className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm text-ink-100 hover:bg-ink-800"
            >
              {LABELS[lng]}
              {current === lng && <Check className="h-4 w-4 text-brand-600" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
