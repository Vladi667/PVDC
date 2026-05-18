import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from '../context/TranslationContext';

const Vision: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const { t } = useTranslation();

  const points = [
    t('vision.point1'),
    t('vision.point2'),
    t('vision.point3'),
    t('vision.point4'),
    t('vision.point5')
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
    visible: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } }
  };

  return (
    <section className="split-section reverse cameroon-section-bg" ref={containerRef}>
      <div className="split-image-shell">
        <div className="split-image-container">
          <motion.img 
            src="/photo2.jpg" 
            alt="Notre Vision" 
            className="split-image"
            style={{ scale, objectFit: 'contain', backgroundColor: 'rgba(0,0,0,0.03)' }}
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
            {t('vision.eyebrow')}
          </motion.span>
          
          <motion.h2 className="title-large" variants={itemVariants}>
            {t('vision.title.part1')}<span className="text-gradient">{t('vision.title.highlight')}</span><br/>{t('vision.title.part2')}
          </motion.h2>
          
          <motion.p className="subtitle" variants={itemVariants}>
            {t('vision.subtitle')}
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
