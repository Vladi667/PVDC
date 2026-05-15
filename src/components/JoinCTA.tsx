import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const JoinCTA: React.FC = () => {
  const whatsappNumber = "+237699908205"; 
  const message = "Bonjour! Je souhaite rejoindre le mouvement PVDC et contribuer à l'avenir du Cameroun.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="cta-massive" id="join">
      <div className="glass-panel-shell" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div 
          className="glass-panel cta-inner"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <span className="eyebrow">Rejoignez le Mouvement</span>
          <h2 className="title-massive cta-title">Ensemble, <br/>construisons l'avenir.</h2>
          
          <p className="subtitle cta-subtitle">
            Notre beau pays le Cameroun a besoin d'idées nouvelles, d'énergie nouvelle et d'une vision tournée vers l'avenir.
          </p>
          
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle size={32} />
            Nous contacter
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinCTA;
