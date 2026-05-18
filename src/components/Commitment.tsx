import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../context/TranslationContext';

const Commitment: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="commitment-section">
      <motion.h2 
        className="commitment-quote"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        "{t('commitment.part1')}<span className="text-gradient">{t('commitment.highlight1')}</span>{t('commitment.part2')}<span className="text-gradient-red">{t('commitment.highlight2')}</span>{t('commitment.part3')}"
      </motion.h2>
    </section>
  );
};

export default Commitment;
