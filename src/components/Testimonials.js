import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      text: "Bhupender's technical expertise and gaming insights brought a unique perspective to our project. Outstanding work!",
      author: "Alex Chen",
      role: "Tech Lead, GameDev Studio"
    },
    {
      text: "Incredible attention to detail and innovative solutions. The IoT project exceeded all expectations.",
      author: "Sarah Johnson",
      role: "Product Manager, TechCorp"
    },
    {
      text: "Professional, creative, and delivers on time. The face recognition system works flawlessly.",
      author: "Mike Rodriguez",
      role: "CTO, EduTech Solutions"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="section" style={{ background: 'var(--card-bg)' }}>
      <div className="container">
        <motion.h2 
          className="section-title"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          What People Say
        </motion.h2>

        <div style={{
          position: 'relative',
          maxWidth: '800px',
          margin: '60px auto 40px'
        }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              style={{
                textAlign: 'center',
                padding: '40px',
                background: 'var(--card-bg)',
                borderRadius: '20px',
                border: '1px solid var(--border-color)'
              }}
            >
              <p style={{
                fontSize: '20px',
                fontStyle: 'italic',
                marginBottom: '30px',
                color: 'var(--text-secondary)',
                lineHeight: 1.6
              }}>
                "{testimonials[currentSlide].text}"
              </p>
              <div>
                <strong style={{
                  color: 'var(--text-color)',
                  display: 'block',
                  marginBottom: '5px'
                }}>
                  {testimonials[currentSlide].author}
                </strong>
                <span style={{
                  color: 'var(--primary-color)',
                  fontSize: '14px'
                }}>
                  {testimonials[currentSlide].role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px'
        }}>
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: index === currentSlide 
                  ? 'var(--primary-color)' 
                  : 'rgba(255, 107, 53, 0.3)',
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.3s ease'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;