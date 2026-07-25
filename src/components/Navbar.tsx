import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const NAV_LINKS = [
  { key: 'features', href: '/#features' },
  { key: 'howItWorks', href: '/#how-it-works' },
  { key: 'pricing', href: '/#pricing' },
  { key: 'docs', href: '/docs' },
  { key: 'contact', href: '/#contact' }
];

export default function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-ink-800 bg-ink-950/85 backdrop-blur-xl' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
          <img src="/centerflowlogo.svg" alt="CenterFlow" className="h-8 w-auto" />
          <span className="text-lg font-semibold tracking-tight text-ink-100">CenterFlow</span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm font-medium text-ink-300 transition-colors hover:text-ink-100"
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Link
            to="/docs"
            className="group inline-flex items-center gap-1.5 rounded-full bg-brand-300 px-4 py-2 text-sm font-semibold text-ink-950 shadow-glow-brand transition-transform hover:scale-105"
          >
            {t('nav.start')}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          className="flex items-center gap-2 lg:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <LanguageSwitcher />
          {mobileOpen ? <X className="h-6 w-6 text-ink-100" /> : <Menu className="h-6 w-6 text-ink-100" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-ink-800 bg-ink-950/98 px-5 pb-6 pt-2 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink-200 hover:bg-ink-800"
              >
                {t(`nav.${link.key}`)}
              </a>
            ))}
          </div>
          <Link
            to="/docs"
            onClick={() => setMobileOpen(false)}
            className="mt-4 flex items-center justify-center gap-1.5 rounded-full bg-brand-300 px-4 py-3 text-sm font-semibold text-ink-950"
          >
            {t('nav.start')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </header>
  );
}
