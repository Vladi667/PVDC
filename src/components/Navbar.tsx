import React, { useEffect, useState } from 'react';
import { useTranslation } from '../context/TranslationContext';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="floating-nav-wrapper">
      <nav
        className="floating-nav"
        data-scrolled={scrolled}
      >
        <a href="#" className="nav-logo-link">
          <img
            src="/logo.png"
            alt="PVDC Logo"
            className="nav-logo"
          />
        </a>

        <div className="nav-actions">
          <button 
            onClick={toggleLanguage}
            className="lang-toggle-btn tactile-active"
            aria-label="Toggle language"
          >
            <span className={`lang-text ${language === 'fr' ? 'active' : ''}`}>FR</span>
            <div className="lang-divider"></div>
            <span className={`lang-text ${language === 'en' ? 'active' : ''}`}>EN</span>
          </button>
          
          <a href="#join" className="nav-cta">
            {t('nav.join')}
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
