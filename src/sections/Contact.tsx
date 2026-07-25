import { useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Phone, User, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { submitContactForm } from '../lib/contact';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setStatus('sending');
    try {
      await submitContactForm({ name: name.trim(), phone: phone.trim(), message: message.trim() });
      setStatus('success');
      setName('');
      setPhone('');
      setMessage('');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-ink-700 bg-gradient-to-br from-ink-850 to-ink-900 p-8 sm:p-12"
        >
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-500/20 blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber-500/15 blur-[100px]" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">{t('contact.eyebrow')}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-100 sm:text-4xl">{t('contact.title')}</h2>
            <p className="mt-4 max-w-lg text-ink-300">{t('contact.subtitle')}</p>

            <form onSubmit={handleSubmit} className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5 text-sm">
                <span className="font-medium text-ink-200">{t('contact.form.name')}</span>
                <div className="flex items-center gap-2 rounded-xl border border-ink-600 bg-ink-950/60 px-3.5 py-3 focus-within:border-brand-400">
                  <User className="h-4 w-4 shrink-0 text-ink-500" />
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t('contact.form.namePlaceholder')}
                    className="w-full bg-transparent text-ink-100 outline-none placeholder:text-ink-500"
                  />
                </div>
              </label>

              <label className="flex flex-col gap-1.5 text-sm">
                <span className="font-medium text-ink-200">{t('contact.form.phone')}</span>
                <div className="flex items-center gap-2 rounded-xl border border-ink-600 bg-ink-950/60 px-3.5 py-3 focus-within:border-brand-400">
                  <Phone className="h-4 w-4 shrink-0 text-ink-500" />
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t('contact.form.phonePlaceholder')}
                    className="w-full bg-transparent text-ink-100 outline-none placeholder:text-ink-500"
                  />
                </div>
              </label>

              <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
                <span className="font-medium text-ink-200">{t('contact.form.message')}</span>
                <div className="flex items-start gap-2 rounded-xl border border-ink-600 bg-ink-950/60 px-3.5 py-3 focus-within:border-brand-400">
                  <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-ink-500" />
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t('contact.form.messagePlaceholder')}
                    rows={3}
                    className="w-full resize-none bg-transparent text-ink-100 outline-none placeholder:text-ink-500"
                  />
                </div>
              </label>

              <div className="sm:col-span-2 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-300 px-6 py-3.5 text-sm font-semibold text-ink-950 shadow-glow-brand transition-transform hover:scale-105 disabled:opacity-60 disabled:hover:scale-100"
                >
                  {status === 'sending' ? t('contact.form.sending') : t('contact.form.submit')}
                  {status !== 'sending' && <Send className="h-4 w-4" />}
                </button>
                <p className="text-xs text-ink-500">{t('contact.privacyNote')}</p>
              </div>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="sm:col-span-2 flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  {t('contact.form.success')}
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="sm:col-span-2 flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-700"
                >
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  {t('contact.form.error')}
                </motion.p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
