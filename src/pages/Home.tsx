import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../sections/Hero';
import TwoApps from '../sections/TwoApps';
import Features from '../sections/Features';
import HowItWorks from '../sections/HowItWorks';
import Pricing from '../sections/Pricing';
import Contact from '../sections/Contact';

export default function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('meta.title');
  }, [t]);

  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <TwoApps />
        <Features />
        <HowItWorks />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
