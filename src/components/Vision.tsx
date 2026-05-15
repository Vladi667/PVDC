import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Vision: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  const points = [
    "Uni",
    "Souverain",
    "Démocratique",
    "Économiquement ambitieux",
    "Socialement équilibré"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <section className="split-section reverse cameroon-section-bg" ref={containerRef}>
      <div className="split-image-shell">
        <div className="split-image-container">
          <motion.img 
            src="/photo2.jpg" 
            alt="Notre Vision" 
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
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.span className="eyebrow" variants={itemVariants}>
            Notre Vision
          </motion.span>
          
          <motion.h2 className="title-large" variants={itemVariants}>
            Une <span className="text-gradient">dynamique</span> <br/>de terrain.
          </motion.h2>
          
          <motion.p className="subtitle" variants={itemVariants}>
            Sous l'impulsion de sa présidente, <strong>Michèle Bilong Fogoum</strong>, le PVDC est proche des populations et tourné vers les grands défis du Cameroun moderne.
          </motion.p>

          <ul className="vision-list">
            {points.map((point, index) => (
              <motion.li 
                key={index}
                className="vision-list-item"
                variants={itemVariants}
              >
                <span className="vision-dot"></span>
                {point}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
