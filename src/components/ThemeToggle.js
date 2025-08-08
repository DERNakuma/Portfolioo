import React from 'react';
import { motion } from 'framer-motion';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{
        position: 'fixed',
        bottom: '90px',
        right: '30px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: 'var(--primary-color)',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        fontSize: '20px',
        zIndex: 1000,
        boxShadow: '0 4px 12px rgba(255, 107, 53, 0.3)'
      }}
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </motion.button>
  );
};

export default ThemeToggle;