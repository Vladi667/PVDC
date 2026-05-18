import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from '../context/TranslationContext';

const TargetAudience: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const { t } = useTranslation();

  const audience = [
    t('audience.1'),
    t('audience.2'),
    t('audience.3'),
    t('audience.4'),
    t('audience.5'),
    t('audience.6'),
    t('audience.7'),
    t('audience.8')
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } }
  };

  return (
    <section className="split-section reverse cameroon-section-bg" ref={containerRef}>
      <div className="split-image-shell">
        <div className="split-image-container">
          <motion.img 
            src="/photo4.jpg" 
            alt="Le Parti de Tous" 
            className="split-image"
            style={{ scale }}
          />
        </div>
      </div>

      <div className="glass-panel-shell">
        <motion.div 
          className="split-content glass-panel"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.span className="eyebrow" variants={itemVariants}>
            {t('audience.eyebrow')}
          </motion.span>
          
          <motion.h2 className="title-large" variants={itemVariants}>
            {t('audience.title.part1')} <br/>{t('audience.title.part2')}
          </motion.h2>

          <ul className="audience-grid">
            {audience.map((item, idx) => (
              <motion.li 
                key={idx}
                className="audience-item"
                variants={itemVariants}
              >
                <CheckCircle2 size={18} className="audience-icon" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudience;
