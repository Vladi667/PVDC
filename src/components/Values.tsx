import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Scale, Users, MessageCircle, Flag, Briefcase, Hammer, Heart } from 'lucide-react';
import { useTranslation } from '../context/TranslationContext';

const Values: React.FC = () => {
  const { t } = useTranslation();

  const values = [
    { label: t('values.1'), icon: Shield },
    { label: t('values.2'), icon: Scale },
    { label: t('values.3'), icon: Users },
    { label: t('values.4'), icon: MessageCircle },
    { label: t('values.5'), icon: Flag },
    { label: t('values.6'), icon: Briefcase },
    { label: t('values.7'), icon: Hammer },
    { label: t('values.8'), icon: Heart },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: 0.25 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { type: "spring" as const, stiffness: 90, damping: 16 } 
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } }
  };

  return (
    <section className="values-section-v2">
      <div className="values-section-v2-inner">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.span className="eyebrow eyebrow-dark" variants={headingVariants}>
            {t('values.eyebrow')}
          </motion.span>
          
          <motion.h2 className="title-large values-title-v2" variants={headingVariants}>
            {t('values.title.part1')} <span className="values-accent">{t('values.title.highlight')}</span>
          </motion.h2>

          <div className="values-grid-v2">
            {values.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <motion.div 
                  key={idx}
                  className="value-tile tactile-active"
                  variants={itemVariants}
                  whileHover={{ y: -6, scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <div className="value-tile-icon-ring">
                    <IconComp size={22} strokeWidth={1.5} />
                  </div>
                  <span className="value-tile-label">{val.label}</span>
                  <div className="value-tile-shine" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Values;
