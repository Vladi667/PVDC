import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ImageBreak: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section 
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '60vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '4rem 0'
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          top: '-20%',
          left: 0,
          right: 0,
          bottom: '-20%',
          y
        }}
      >
        <img 
          src="/pvdc_landscape_break.png" 
          alt="Cameroon landscape" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.4))'
          }}
        />
      </motion.div>
    </section>
  );
};

export default ImageBreak;
