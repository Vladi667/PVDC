import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const TargetAudience: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  const audience = [
    "Les jeunes",
    "Les femmes",
    "Les travailleurs",
    "Les entrepreneurs",
    "Les agriculteurs",
    "Les étudiants",
    "La diaspora",
    "Tous les bâtisseurs de l'avenir"
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
            Le Parti de Tous
          </motion.span>
          
          <motion.h2 className="title-large" variants={itemVariants}>
            Chaque citoyen <br/>a un rôle à jouer.
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
