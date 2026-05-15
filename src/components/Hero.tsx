import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

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
            Le Parti de l'Avenir
          </motion.span>
          
          <motion.h1 
            className="title-massive"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring" as const, stiffness: 100, damping: 20, delay: 0.2 }}
          >
            Un Cameroun plus juste, <br/>
            plus <span className="text-gradient">fort</span>, plus propre.
          </motion.h1>
          
          <motion.p 
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Le <strong>Parti Vert pour la Démocratie au Cameroun (PVDC)</strong> porte une ambition claire : construire un pays moderne et prospère, où le développement économique respecte les populations et les territoires.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" as const, stiffness: 100, damping: 20, delay: 0.6 }}
          >
            <a href="#join" className="btn-glow">
              Rejoindre le mouvement
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
