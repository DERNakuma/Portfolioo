import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PerformanceDashboard = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="section" style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <div className="container">
        <motion.h2 
          className="section-title"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ color: '#ffffff', marginBottom: '60px' }}
        >
          Performance Dashboard
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {/* Progress Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              background: 'linear-gradient(135deg, #a8e6cf 0%, #7fcdcd 100%)',
              borderRadius: '20px',
              padding: '30px',
              color: '#000',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{ fontSize: '12px', fontWeight: '600', opacity: 0.7 }}>PROGRESS</span>
              <span style={{ background: '#000', color: '#a8e6cf', padding: '4px 8px', borderRadius: '12px', fontSize: '10px' }}>INCREASED</span>
            </div>
            <div style={{ fontSize: '48px', fontWeight: '700', display: 'flex', alignItems: 'center' }}>
              ↗ 78%
            </div>
          </motion.div>

          {/* Device Type Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              background: '#2a2a2a',
              borderRadius: '20px',
              padding: '30px',
              color: '#fff'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{ fontSize: '12px', fontWeight: '600', opacity: 0.7 }}>DEVICE TYPE</span>
              <div style={{ width: '8px', height: '8px', background: '#a8e6cf', borderRadius: '50%' }}></div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '14px', opacity: 0.7 }}>Desktop</span>
                <span style={{ fontSize: '14px' }}>20%</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '14px', opacity: 0.7 }}>Tablet</span>
                <span style={{ fontSize: '14px' }}>15%</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '14px', opacity: 0.7 }}>Mobile</span>
                <span style={{ fontSize: '14px' }}>65%</span>
              </div>
            </div>
          </motion.div>

          {/* Performance Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              background: '#f5f5f5',
              borderRadius: '20px',
              padding: '30px',
              color: '#000',
              gridColumn: 'span 2'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{ fontSize: '12px', fontWeight: '600', opacity: 0.7 }}>PERFORMANCE</span>
              <span style={{ fontSize: '24px', fontWeight: '700' }}>+58k</span>
            </div>
            <div style={{ fontSize: '12px', opacity: 0.5, marginBottom: '20px' }}>vs last 7 days</div>
            <div style={{
              display: 'flex',
              alignItems: 'end',
              gap: '4px',
              height: '60px'
            }}>
              {[40, 60, 45, 70, 55, 80, 65, 75, 50, 85, 70, 60].map((height, index) => (
                <div
                  key={index}
                  style={{
                    background: 'linear-gradient(to top, #4a90e2, #7bb3f0)',
                    height: `${height}%`,
                    flex: 1,
                    borderRadius: '2px'
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Analytics Line Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              background: '#2a2a2a',
              borderRadius: '20px',
              padding: '30px',
              color: '#fff'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{ fontSize: '12px', fontWeight: '600', opacity: 0.7 }}>ANALYTICS</span>
              <span style={{ fontSize: '24px', fontWeight: '700' }}>4K+</span>
            </div>
            <div style={{ height: '80px', position: 'relative', marginBottom: '10px' }}>
              <svg width="100%" height="100%" viewBox="0 0 200 80">
                <polyline
                  fill="none"
                  stroke="#a8e6cf"
                  strokeWidth="2"
                  points="0,60 40,45 80,50 120,30 160,35 200,25"
                />
              </svg>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', opacity: 0.5 }}>
              <span>Jan-Mar</span>
              <span>Apr-Jun</span>
              <span>Jul-Sep</span>
              <span>Oct-Dec</span>
            </div>
          </motion.div>

          {/* Analytics Bar Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{
              background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
              borderRadius: '20px',
              padding: '30px',
              color: '#fff'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{ fontSize: '12px', fontWeight: '600', opacity: 0.8 }}>ANALYTICS</span>
              <span style={{ background: '#000', color: '#ff6b35', padding: '4px 8px', borderRadius: '12px', fontSize: '10px' }}>This Week</span>
            </div>
            <div style={{ fontSize: '36px', fontWeight: '700', marginBottom: '20px' }}>5K+</div>
            <div style={{
              display: 'flex',
              alignItems: 'end',
              gap: '8px',
              height: '100px'
            }}>
              {[
                { height: 30, color: '#000' },
                { height: 50, color: '#000' },
                { height: 40, color: '#000' },
                { height: 70, color: '#000' },
                { height: 90, color: '#000' },
                { height: 60, color: '#ff8c42' },
                { height: 45, color: '#ff8c42' }
              ].map((bar, index) => (
                <div
                  key={index}
                  style={{
                    background: bar.color,
                    height: `${bar.height}%`,
                    flex: 1,
                    borderRadius: '4px'
                  }}
                />
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', opacity: 0.8, marginTop: '10px' }}>
              <span>Sat</span>
              <span>Sun</span>
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
            </div>
          </motion.div>

          {/* Balance Gauge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{
              background: 'linear-gradient(135deg, #ffd93d 0%, #ff9a3d 100%)',
              borderRadius: '20px',
              padding: '30px',
              color: '#000',
              textAlign: 'center'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{ fontSize: '12px', fontWeight: '600', opacity: 0.7 }}>BALANCE</span>
              <span style={{ background: '#000', color: '#ffd93d', padding: '4px 8px', borderRadius: '12px', fontSize: '10px' }}>Last Month</span>
            </div>
            <div style={{ position: 'relative', margin: '20px 0' }}>
              <svg width="120" height="60" viewBox="0 0 120 60">
                <path
                  d="M 10 50 A 50 50 0 0 1 110 50"
                  fill="none"
                  stroke="#000"
                  strokeWidth="8"
                  opacity="0.2"
                />
                <path
                  d="M 10 50 A 50 50 0 0 1 85 25"
                  fill="none"
                  stroke="#000"
                  strokeWidth="8"
                />
              </svg>
              <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', fontSize: '32px', fontWeight: '700' }}>
                78%
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', opacity: 0.7 }}>
              <span>● Income - 28%</span>
              <span>● Expenses - 72%</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '40px',
            color: '#fff'
          }}
        >
          <span style={{ fontSize: '14px', opacity: 0.7 }}>@tou.visuals</span>
          <span style={{ fontSize: '14px', opacity: 0.7 }}>Swipe →</span>
        </motion.div>
      </div>
    </section>
  );
};

export default PerformanceDashboard;