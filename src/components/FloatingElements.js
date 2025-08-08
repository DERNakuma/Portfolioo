import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  const elements = ['💻', '🎮', '🚀', '⚡', '🔥'];
  
  const positions = [
    { top: '20%', left: '10%' },
    { top: '60%', left: '80%' },
    { top: '30%', left: '70%' },
    { top: '80%', left: '20%' },
    { top: '50%', left: '50%' }
  ];

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 1
    }}>
      {elements.map((element, index) => (
        <motion.div
          key={index}
          style={{
            position: 'absolute',
            fontSize: '30px',
            opacity: 0.1,
            ...positions[index]
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: index * 1,
            ease: 'easeInOut'
          }}
        >
          {element}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;