import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Priorities: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  const priorities = [
    { num: "01", title: "Emploi et jeunesse", desc: "Soutien à l'innovation et l'entrepreneuriat.", accent: "var(--color-primary)" },
    { num: "02", title: "Autonomie alimentaire", desc: "Moderniser l'agriculture locale.", accent: "var(--color-primary)" },
    { num: "03", title: "Gouvernance", desc: "Gestion publique transparente et efficace.", accent: "var(--color-secondary)" },
    { num: "04", title: "Santé & Cadre de vie", desc: "Accès à l'eau potable et à l'énergie.", accent: "var(--color-primary)" },
    { num: "05", title: "Développement local", desc: "Valorisation des communes et régions.", accent: "var(--color-primary)" },
    { num: "06", title: "Ressources nationales", desc: "Préservation des richesses naturelles.", accent: "var(--color-secondary)" }
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
      transition: { type: "spring", stiffness: 80, damping: 18 } 
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
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
            Nos Priorités
          </motion.span>
          
          <motion.h2 className="title-large" variants={headingVariants}>
            Six axes d'action <br/>majeurs.
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
