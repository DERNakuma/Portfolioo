import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'C++', 'Java']
    },
    {
      title: 'Frameworks & Tools',
      skills: ['React', 'Node.js', 'Flask', 'Arduino', 'ESP32']
    },
    {
      title: 'Areas of Expertise',
      skills: ['Full-Stack Development', 'AI/ML', 'IoT', 'Computer Vision']
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '80px',
          alignItems: 'start'
        }}>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{
              fontSize: '36px',
              fontWeight: '300',
              marginBottom: '20px',
              color: 'var(--text-color)'
            }}>
              Technical Expertise
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '18px',
              lineHeight: 1.6
            }}>
              Passionate about leveraging cutting-edge technologies to build 
              intelligent systems that solve real-world problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '40px'
            }}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <h4 style={{
                  fontSize: '20px',
                  color: 'var(--primary-color)',
                  marginBottom: '15px'
                }}>
                  {category.title}
                </h4>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '10px'
                }}>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      whileHover={{ 
                        scale: 1.05,
                        background: 'rgba(255, 107, 53, 0.1)',
                        borderColor: 'var(--primary-color)',
                        color: 'var(--primary-color)'
                      }}
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        color: 'var(--text-color)',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        fontSize: '14px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;