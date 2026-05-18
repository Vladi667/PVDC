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

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button 
            onClick={toggleLanguage}
            style={{
              background: 'none',
              border: '1px solid rgba(0,0,0,0.1)',
              borderRadius: '20px',
              padding: '0.3rem 0.6rem',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '0.8rem',
              color: 'var(--color-primary)'
            }}
          >
            {language.toUpperCase()}
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
