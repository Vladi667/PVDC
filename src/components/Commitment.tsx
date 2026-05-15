import React from 'react';
import { motion } from 'framer-motion';

const Commitment: React.FC = () => {
  return (
    <section className="commitment-section">
      <motion.h2 
        className="commitment-quote"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        "La démocratie <span className="text-gradient">verte</span>, <br/> notre choix pour un <span className="text-gradient-red">avenir meilleur</span>."
      </motion.h2>
    </section>
  );
};

export default Commitment;
