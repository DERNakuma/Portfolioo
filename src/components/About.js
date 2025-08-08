import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const hobbies = [
    {
      icon: '🎮',
      title: 'Professional Gaming',
      description: 'Played professionally in esports tournaments, ranked in the top 10,000 in Asia'
    },
    {
      icon: '🎵',
      title: 'Music & Cinema',
      description: 'Music lover and cinephile, always exploring new sounds and stories'
    },
    {
      icon: '🏎️',
      title: 'Motorsports Fan',
      description: 'Formula 1, NASCAR, Le Mans, MotoGP - passionate about speed and precision'
    }
  ];

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="section" style={{ background: 'var(--card-bg)' }}>
      <div className="container">
        <motion.h2 
          className="section-title"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Building Intelligent<br/>
          Systems & Innovative<br/>
          Solutions That<br/>
          Make a Difference
        </motion.h2>

        <motion.p 
          className="section-description"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I'm Bhupender Singh, a software engineer passionate about building smart systems 
          and exploring the intersection of technology and entertainment. Curious, creative, 
          and driven by innovation, I specialize in full-stack development, AI/ML, IoT, and computer vision.
        </motion.p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          margin: '60px 0'
        }}>
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              style={{
                textAlign: 'center',
                padding: '30px 20px',
                background: 'var(--card-bg)',
                borderRadius: '15px',
                border: '1px solid var(--border-color)'
              }}
            >
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>
                {hobby.icon}
              </div>
              <h4 style={{ 
                fontSize: '20px', 
                color: 'var(--text-color)', 
                marginBottom: '10px' 
              }}>
                {hobby.title}
              </h4>
              <p style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '14px', 
                lineHeight: 1.5 
              }}>
                {hobby.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          style={{ textAlign: 'center' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button 
            className="cta-btn secondary"
            onClick={scrollToProjects}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="btn-icon">💻</span>
            See my projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;