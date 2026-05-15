import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

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

        <a href="#join" className="nav-cta">
          Rejoindre
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
