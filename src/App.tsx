import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Priorities from './components/Priorities';
import Values from './components/Values';
import TargetAudience from './components/TargetAudience';
import Commitment from './components/Commitment';
import JoinCTA from './components/JoinCTA';
import ImageBreak from './components/ImageBreak';
import OpeningAnimation from './components/OpeningAnimation';
import LegalModal from './components/LegalModal';
import { useTranslation } from './context/TranslationContext';
import './App.css';
import './CustomFilters.css';

function App() {
  const { t } = useTranslation();
  const [modalType, setModalType] = useState<'legal' | 'privacy' | null>(null);

  return (
    <>
      <div className="payment-watermark" aria-hidden="true">
        <div className="payment-watermark-track">
          {Array.from({ length: 80 }).map((_, i) => (
            <span key={i} className="payment-watermark-text">TO BE PAID</span>
          ))}
        </div>
      </div>

      <OpeningAnimation />
      <div className="bg-orbs-container">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      
      <Navbar />
      <div className="app-container">
        <main style={{ paddingTop: '6rem' }}>
          <Hero />
          <Vision />
          <ImageBreak />
          <Priorities />
          <Values />
          <TargetAudience />
          <Commitment />
          <JoinCTA />
        </main>
        
        <footer className="site-footer">
          <div className="footer-inner">
            <div className="footer-brand">
              <img src="/logo.png" alt="PVDC Logo" className="footer-logo" />
              <p className="footer-tagline">{t('footer.tagline')}</p>
            </div>
            <div className="footer-links">
              <a href="#join" className="footer-link">{t('footer.contact')}</a>
              <span className="footer-divider">·</span>
              <a 
                href="#" 
                className="footer-link" 
                onClick={(e) => { e.preventDefault(); setModalType('legal'); }}
              >
                {t('footer.legal')}
              </a>
              <span className="footer-divider">·</span>
              <a 
                href="#" 
                className="footer-link" 
                onClick={(e) => { e.preventDefault(); setModalType('privacy'); }}
              >
                {t('footer.privacy')}
              </a>
            </div>
            <p className="footer-copyright">&copy; {new Date().getFullYear()} PVDC. {t('footer.rights')}</p>
          </div>
        </footer>
      </div>

      <LegalModal 
        isOpen={modalType !== null} 
        onClose={() => setModalType(null)} 
        type={modalType} 
      />
    </>
  );
}

export default App;
