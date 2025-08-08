import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer style={{
      padding: '60px 0',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px'
          }}
        >
          <div className="logo">
            <span className="logo-icon">🎮</span>
            <span>Bhupender</span>
          </div>
          <p style={{ color: 'var(--text-secondary)' }}>
            &copy; 2024 Bhupender Singh. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;