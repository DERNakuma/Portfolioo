import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }, 1000);
  };

  const contactLinks = [
    {
      icon: '📧',
      text: 'bhupender@example.com',
      href: 'mailto:bhupender@example.com'
    },
    {
      icon: '🐙',
      text: 'GitHub',
      href: 'https://github.com/bhupender'
    },
    {
      icon: '💼',
      text: 'LinkedIn',
      href: 'https://linkedin.com/in/bhupender'
    }
  ];

  return (
    <section id="contact" className="section" style={{ background: 'var(--card-bg)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start'
        }}>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{
              fontSize: '42px',
              fontWeight: '300',
              color: 'var(--text-color)',
              marginBottom: '20px',
              lineHeight: 1.2
            }}>
              Let's Build Something Amazing Together
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '18px',
              lineHeight: 1.6,
              marginBottom: '40px'
            }}>
              Ready to bring your ideas to life? Let's connect and discuss how we can create innovative solutions.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              {contactLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    color: 'var(--text-color)',
                    textDecoration: 'none',
                    padding: '15px 0',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'color 0.3s ease'
                  }}
                >
                  <span style={{ fontSize: '20px' }}>{link.icon}</span>
                  <span>{link.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '15px 20px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    color: 'var(--text-color)',
                    fontSize: '16px',
                    fontFamily: 'Inter, sans-serif'
                  }}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '15px 20px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    color: 'var(--text-color)',
                    fontSize: '16px',
                    fontFamily: 'Inter, sans-serif'
                  }}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '15px 20px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    color: 'var(--text-color)',
                    fontSize: '16px',
                    fontFamily: 'Inter, sans-serif',
                    resize: 'vertical'
                  }}
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cta-btn"
                style={{
                  background: submitted ? '#4CAF50' : 'var(--primary-color)'
                }}
              >
                <span className="btn-icon">
                  {submitted ? '✓' : isSubmitting ? '⏳' : '🚀'}
                </span>
                {submitted ? 'Message Sent!' : isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;