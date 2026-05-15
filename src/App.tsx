import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Priorities from './components/Priorities';
import Values from './components/Values';
import TargetAudience from './components/TargetAudience';
import Commitment from './components/Commitment';
import JoinCTA from './components/JoinCTA';
import './App.css';
import './CustomFilters.css';

function App() {
  return (
    <>
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
              <p className="footer-tagline">Parti Vert pour la Démocratie au Cameroun</p>
            </div>
            <div className="footer-links">
              <a href="#join" className="footer-link">Nous Contacter</a>
              <span className="footer-divider">·</span>
              <a href="#" className="footer-link">Mentions Légales</a>
              <span className="footer-divider">·</span>
              <a href="#" className="footer-link">Politique de Confidentialité</a>
            </div>
            <p className="footer-copyright">&copy; {new Date().getFullYear()} PVDC. Tous droits réservés.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
