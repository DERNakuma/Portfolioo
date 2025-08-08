import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'var(--bg-color)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
        flexDirection: 'column'
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          fontSize: '24px',
          marginBottom: '20px',
          color: 'var(--primary-color)'
        }}
      >
        Loading...
      </motion.div>
      
      <motion.div
        style={{
          width: '200px',
          height: '4px',
          background: 'rgba(255, 107, 53, 0.2)',
          borderRadius: '2px',
          overflow: 'hidden'
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
          style={{
            height: '100%',
            background: 'var(--primary-color)'
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;