import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    { number: 50, label: 'Projects Completed', suffix: '+' },
    { number: 3, label: 'Years Experience', suffix: '+' },
    { number: 10000, label: 'Asia Gaming Rank', suffix: '' },
    { number: 100, label: 'Client Satisfaction', suffix: '%' }
  ];

  const AnimatedNumber = ({ target, suffix, inView }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
      if (inView) {
        let start = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setCurrent(target);
            clearInterval(timer);
          } else {
            setCurrent(Math.floor(start));
          }
        }, 20);

        return () => clearInterval(timer);
      }
    }, [target, inView]);

    return <span>{current}{suffix}</span>;
  };

  return (
    <section className="section" style={{ background: 'var(--card-bg)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          textAlign: 'center'
        }} ref={ref}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div style={{
                fontSize: '48px',
                fontWeight: '700',
                color: 'var(--primary-color)',
                marginBottom: '10px'
              }}>
                <AnimatedNumber 
                  target={stat.number} 
                  suffix={stat.suffix}
                  inView={inView}
                />
              </motion.div>
              <div style={{
                color: 'var(--text-secondary)',
                fontSize: '16px'
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;