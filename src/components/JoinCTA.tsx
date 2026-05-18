import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useTranslation } from '../context/TranslationContext';

const JoinCTA: React.FC = () => {
  const whatsappNumber = "+237699908205"; 
  const { t } = useTranslation();
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
          <span className="eyebrow">{t('join.eyebrow')}</span>
          <h2 className="title-massive cta-title">{t('join.title.part1')} <br/>{t('join.title.part2')}</h2>
          
          <p className="subtitle cta-subtitle">
            {t('join.subtitle')}
          </p>
          
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle size={32} />
            {t('join.btn')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinCTA;
