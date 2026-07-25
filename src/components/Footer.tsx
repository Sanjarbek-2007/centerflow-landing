import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { staffAppUrl, studentAppUrl } from '../lib/config';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-ink-800 bg-ink-950">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <img src="/centerflowlogo.svg" alt="CenterFlow" className="h-8 w-auto" />
              <span className="text-lg font-semibold text-ink-100">CenterFlow</span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-400">{t('footer.tagline')}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-ink-100">{t('footer.product')}</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-400">
              <li><a href="/#features" className="hover:text-brand-600">{t('nav.features')}</a></li>
              <li><a href="/#pricing" className="hover:text-brand-600">{t('nav.pricing')}</a></li>
              <li><a href={staffAppUrl()} target="_blank" rel="noreferrer" className="hover:text-brand-600">{t('footer.staffApp')}</a></li>
              <li><a href={studentAppUrl()} target="_blank" rel="noreferrer" className="hover:text-brand-600">{t('footer.studentApp')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-ink-100">{t('footer.resources')}</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-400">
              <li><Link to="/docs/staff" className="hover:text-brand-600">{t('footer.docsStaff')}</Link></li>
              <li><Link to="/docs/student" className="hover:text-brand-600">{t('footer.docsStudent')}</Link></li>
              <li><a href="/#contact" className="hover:text-brand-600">{t('nav.contact')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-ink-100">{t('footer.company')}</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-400">
              <li>{t('footer.domainsNote')}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-ink-800 pt-6 sm:flex-row">
          <p className="text-xs text-ink-500">© {year} CenterFlow. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
