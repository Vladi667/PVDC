import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../context/TranslationContext';

const Hero: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const { t } = useTranslation();

  return (
    <section className="split-section cameroon-section-bg" ref={containerRef}>
      <div className="glass-panel-shell">
        <div className="split-content glass-panel">
          <motion.span 
            className="eyebrow"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring" as const, stiffness: 100, damping: 20, delay: 0.1 }}
          >
            {t('hero.eyebrow')}
          </motion.span>
          
          <motion.h1 
            className="title-massive"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring" as const, stiffness: 100, damping: 20, delay: 0.2 }}
          >
            {t('hero.title.part1')} <br/>
            {t('hero.title.part2')} <span className="text-gradient">{t('hero.title.highlight')}</span>{t('hero.title.part3')}
          </motion.h1>
          
          <motion.p 
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" as const, stiffness: 100, damping: 20, delay: 0.6 }}
          >
            <a href="#join" className="btn-glow">
              {t('hero.btn')}
              <span className="btn-icon">
                <ArrowRight size={20} />
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      <div className="split-image-shell">
        <div className="split-image-container">
          <motion.img 
            src="/photo1.jpg" 
            alt="PVDC Hero" 
            className="split-image"
            style={{ scale }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
