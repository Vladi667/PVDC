import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from '../context/TranslationContext';

const Priorities: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const { t } = useTranslation();

  const priorities = [
    { num: "01", title: t('priorities.1.title'), desc: t('priorities.1.desc'), accent: "var(--color-primary)" },
    { num: "02", title: t('priorities.2.title'), desc: t('priorities.2.desc'), accent: "var(--color-primary)" },
    { num: "03", title: t('priorities.3.title'), desc: t('priorities.3.desc'), accent: "var(--color-secondary)" },
    { num: "04", title: t('priorities.4.title'), desc: t('priorities.4.desc'), accent: "var(--color-primary)" },
    { num: "05", title: t('priorities.5.title'), desc: t('priorities.5.desc'), accent: "var(--color-primary)" },
    { num: "06", title: t('priorities.6.title'), desc: t('priorities.6.desc'), accent: "var(--color-secondary)" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring" as const, stiffness: 80, damping: 18 } 
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } }
  };

  return (
    <section className="split-section priorities-section-v2" ref={containerRef}>
      <div className="glass-panel-shell priorities-panel-shell">
        <motion.div 
          className="split-content glass-panel priorities-glass"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.span className="eyebrow" variants={headingVariants}>
            {t('priorities.eyebrow')}
          </motion.span>
          
          <motion.h2 className="title-large" variants={headingVariants}>
            {t('priorities.title.part1')} <br/>{t('priorities.title.part2')}
          </motion.h2>

          <div className="priorities-grid-v2">
            {priorities.map((item, idx) => (
              <motion.div 
                key={idx}
                className="priority-card-v2 tactile-active"
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                variants={itemVariants}
                style={{ '--card-accent': item.accent } as React.CSSProperties}
              >
                <div className="priority-card-v2-inner">
                  <span className="priority-num-v2">{item.num}</span>
                  <div className="priority-text-block">
                    <h3 className="priority-title-v2">{item.title}</h3>
                    <p className="priority-desc-v2">{item.desc}</p>
                  </div>
                </div>
                <div className="priority-card-glow" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="split-image-shell">
        <div className="split-image-container">
          <motion.img 
            src="/photo3.jpg" 
            alt="Nos Priorités" 
            className="split-image"
            style={{ scale, objectPosition: 'top center' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Priorities;
