import React, { useEffect, useState } from 'react';
import './App.css';
import './responsive-nav.css';
import './nav-hover.css';
import './tech-tags-animation.css';
import './project-hover.css';
import './project-size.css';
import './new-projects.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Initialize smooth slideshow after component mounts
    const initSlideshow = () => {
      const hobbyCards = document.querySelectorAll('.hobby-card');
      
      hobbyCards.forEach(card => {
        const slides = card.querySelectorAll('.hobby-slide');
        
        // Ensure smooth transitions by preloading images
        slides.forEach((slide, index) => {
          const img = new Image();
          img.src = slide.src;
          
          // Set initial state
          if (index === 0) {
            slide.style.opacity = '1';
            slide.style.transform = 'scale(1)';
          } else {
            slide.style.opacity = '0';
            slide.style.transform = 'scale(1.02)';
          }
        });
      });
    };

    // Initialize after a short delay to ensure DOM is ready
    setTimeout(initSlideshow, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {/* Loading Screen */}
      <div className={`loading-screen ${!loading ? 'hidden' : ''}`}>
        <div className="loader">
          <div className="loader-text">Loading...</div>
          <div className="loader-bar"></div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="scroll-progress"></div>
      
      {/* Top Navigation */}
      <nav className="top-nav">
        <div className="nav-container">
          <div className="nav-brand">Akuma.co</div>
          <div className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#hobbies" className="nav-link">Hobbies</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#dashboard" className="nav-link">Performance</a>
            <a href="#photography" className="nav-link">Photography</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <div className="hamburger" onClick={() => {
            const navLinks = document.querySelector('.nav-links');
            const hamburger = document.querySelector('.hamburger');
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
          }}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      
      {/* Side Navigation */}
      <div className="side-nav">
        <a href="#home" className="side-nav-link">Home</a>
        <a href="#about" className="side-nav-link">About</a>
        <a href="#hobbies" className="side-nav-link">Hobbies</a>
        <a href="#projects" className="side-nav-link">Projects</a>
        <a href="#dashboard" className="side-nav-link">Performance</a>
        <a href="#photography" className="side-nav-link">Photography</a>
        <a href="#contact" className="side-nav-link">Contact</a>
      </div>

      <section id="home" className="hero">
        <div className="hero-background">
          <video autoPlay muted loop className="hero-video">
            <source src="video/1.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
          <div className="floating-particles">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-name">Bhupender Singh</h1>
          </div>
          <div className="hero-right">
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-background">
          <img src="photo/hobbies/3.jpg" alt="Background" className="about-bg-image" />
          <div className="about-overlay"></div>
        </div>
        <div className="about-container">
          <div className="about-content">
            <div className="about-left">
              <div className="about-badge">About Me</div>
              <h2 className="about-title">Crafting Digital Experiences</h2>
              <p className="about-description">
                Software engineer passionate about building intelligent systems that solve real-world problems. 
                Combining technical expertise with creative vision.
              </p>
            </div>
            <div className="about-right">
              <div className="stats-mini">
                <div className="stat-mini" onClick={() => window.open('https://github.com/DERNakuma', '_blank')} style={{cursor: 'pointer'}}>
                  <span className="stat-number-mini">50+</span>
                  <span className="stat-label-mini">Projects</span>
                </div>
                <div className="stat-mini">
                  <span className="stat-number-mini">3+</span>
                  <span className="stat-label-mini">Years</span>
                </div>
                <div className="stat-mini">
                  <span className="stat-number-mini">Top 10K</span>
                  <span className="stat-label-mini">Asia Rank</span>
                </div>
              </div>
              <div className="skills-preview">
                <div className="skill-tag">Python</div>
                <div className="skill-tag">React</div>
                <div className="skill-tag">AI/ML</div>
                <div className="skill-tag">IoT</div>
                <div className="skill-tag">Computer Vision</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="hobbies-section">
        <div className="container">
          <h2 className="section-title">Hobbies</h2>
          <div className="hobbies-grid">
            <div className="hobby-card gaming-card" onClick={() => window.open('https://tracker.gg/valorant/profile/riot/Akuma%23Dern/overview?platform=pc&playlist=competitive&season=ac12e9b3-47e6-9599-8fa1-0bb473e5efc7', '_blank')}>
              <div className="hobby-slideshow">
                <img src="photo/hobbies/6.jpg" className="hobby-slide" alt="Gaming" loading="lazy" />
                <img src="photo/hobbies/7.jpg" className="hobby-slide" alt="Gaming" loading="lazy" />
                <img src="photo/hobbies/8.jpg" className="hobby-slide" alt="Gaming" loading="lazy" />
                <img src="photo/hobbies/10.jpg" className="hobby-slide" alt="Gaming" loading="lazy" />
                <div className="hobby-overlay">
                  <h3>Gaming</h3>
                  <p>Professional esports player, ranked top 10K in Asia</p>
                </div>
              </div>
            </div>
            <div className="hobby-card cinema-card" onClick={() => window.open('https://share.google/TKPCSg8hJUuq6Ptlw', '_blank')}>
              <div className="hobby-slideshow">
                <img src="photo/hobbies/9.jpg" className="hobby-slide" alt="Cinema" loading="lazy" />
                <img src="photo/hobbies/11.jpg" className="hobby-slide" alt="Cinema" loading="lazy" />
                <img src="photo/hobbies/13.jpg" className="hobby-slide" alt="Cinema" loading="lazy" />
                <img src="photo/hobbies/15.jpg" className="hobby-slide" alt="Cinema" loading="lazy" />
                <img src="photo/hobbies/14.jpg" className="hobby-slide" alt="Cinema" loading="lazy" />
                <div className="hobby-overlay">
                  <h3>Cinema</h3>
                  <p>Film enthusiast exploring diverse storytelling</p>
                </div>
              </div>
            </div>
            <div className="hobby-card">
              <div className="hobby-slideshow">
                <img src="photo/hobbies/21.jpg" className="hobby-slide" alt="Motorsports" loading="lazy" />
                <img src="photo/hobbies/23.jpg" className="hobby-slide" alt="Motorsports" loading="lazy" />
                <img src="photo/hobbies/24.jpg" className="hobby-slide" alt="Motorsports" loading="lazy" />
                <div className="hobby-overlay">
                  <h3>Motorsports</h3>
                  <p>Formula 1, NASCAR, Le Mans, MotoGP fan</p>
                </div>
              </div>
            </div>
            <div className="hobby-card music-card" onClick={() => window.open('https://music.youtube.com/playlist?list=PLFgo1IPJwu8mrWvurwqcbUNpWe-Fhiiur&si=bGhnr47FiJzr-THU', '_blank')}>
              <div className="hobby-slideshow">
                <img src="photo/hobbies/16.jpg" className="hobby-slide" alt="Music" loading="lazy" />
                <img src="photo/hobbies/17.jpg" className="hobby-slide" alt="Music" loading="lazy" />
                <img src="photo/hobbies/18.jpg" className="hobby-slide" alt="Music" loading="lazy" />
                <img src="photo/hobbies/19.jpg" className="hobby-slide" alt="Music" loading="lazy" />
                <img src="photo/hobbies/20.jpg" className="hobby-slide" alt="Music" loading="lazy" />
                <img src="photo/hobbies/22.jpg" className="hobby-slide" alt="Music" loading="lazy" />
                <img src="photo/hobbies/12.jpg" className="hobby-slide" alt="Music" loading="lazy" />
                <div className="hobby-overlay">
                  <h3>Music</h3>
                  <p>Exploring various genres and soundscapes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card" onClick={() => window.open('https://github.com/DERNakuma', '_blank')} style={{cursor: 'pointer'}}>
              <div className="project-image hotel"></div>
              <div className="project-content">
                <h3>Hotel Management System</h3>
                <p>Full-stack application with comprehensive booking, room management, billing, and admin dashboard features.</p>
                <div className="tech-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
              </div>
            </div>
            <div className="project-card" onClick={() => window.open('https://github.com/DERNakuma', '_blank')} style={{cursor: 'pointer'}}>
              <div className="project-image face-recognition"></div>
              <div className="project-content">
                <h3>Face Recognition System</h3>
                <p>AI-powered face recognition system with real-time detection and identification capabilities.</p>
                <div className="tech-tags">
                  <span>Python</span>
                  <span>OpenCV</span>
                  <span>TensorFlow</span>
                </div>
              </div>
            </div>
            <div className="project-card" onClick={() => window.open('https://github.com/DERNakuma/SMS', '_blank')} style={{cursor: 'pointer'}}>
              <div className="project-image student-management"></div>
              <div className="project-content">
                <h3>Student Management System</h3>
                <p>Comprehensive student information system with attendance tracking and grade management.</p>
                <div className="tech-tags">
                  <span>Java</span>
                  <span>MySQL</span>
                  <span>Spring Boot</span>
                </div>
              </div>
            </div>
            <div className="project-card" onClick={() => window.open('https://github.com/DERNakuma', '_blank')} style={{cursor: 'pointer'}}>
              <div className="project-image iot"></div>
              <div className="project-content">
                <h3>IoT Smart Home</h3>
                <p>Internet of Things solution for home automation with sensor integration and mobile control.</p>
                <div className="tech-tags">
                  <span>Arduino</span>
                  <span>Raspberry Pi</span>
                  <span>React Native</span>
                </div>
              </div>
            </div>
            <div className="project-card" onClick={() => window.open('https://github.com/DERNakuma', '_blank')} style={{cursor: 'pointer'}}>
              <div className="project-image payroll"></div>
              <div className="project-content">
                <h3>Employee Payroll App</h3>
                <p>Comprehensive payroll management system with salary calculations, tax deductions, and employee records.</p>
                <div className="tech-tags">
                  <span>Java</span>
                  <span>Spring Boot</span>
                  <span>MySQL</span>
                </div>
              </div>
            </div>
            <div className="project-card" onClick={() => window.open('https://github.com/DERNakuma', '_blank')} style={{cursor: 'pointer'}}>
              <div className="project-image address-book"></div>
              <div className="project-content">
                <h3>Address Book App</h3>
                <p>Digital contact management application with search functionality, categorization, and data export features.</p>
                <div className="tech-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section id="dashboard" className="dashboard-section">
        <div className="container">
          <h2 className="section-title">Performance</h2>
        </div>
        <div className="dashboard-container">
          <div className="dashboard-grid">
                  <div className="dashboard-card progress-card">
                    <div className="card-content">
                      <h3 className="card-title">Skills</h3>
                      <div className="skills-list">
                        <div className="skill-item">
                          <span className="skill-name">Python</span>
                          <div className="skill-bar">
                            <div className="skill-fill" style={{width: '90%'}}></div>
                          </div>
                          <span className="skill-percent">90</span>
                        </div>
                        <div className="skill-item">
                          <span className="skill-name">React</span>
                          <div className="skill-bar">
                            <div className="skill-fill" style={{width: '85%'}}></div>
                          </div>
                          <span className="skill-percent">85</span>
                        </div>
                        <div className="skill-item">
                          <span className="skill-name">Node.js</span>
                          <div className="skill-bar">
                            <div className="skill-fill" style={{width: '80%'}}></div>
                          </div>
                          <span className="skill-percent">80</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="dashboard-card analytics-card">
                    <div className="card-content">
                      <h3 className="card-title">Analytics</h3>
                      <div className="analytics-number">
                        <span className="big-number">15.2K</span>
                        <span className="number-label">Views</span>
                      </div>
                      <div className="analytics-chart">
                        <div className="chart-segments">
                          <div className="segment" style={{flex: '40', background: '#ff6b35'}}></div>
                          <div className="segment" style={{flex: '35', background: '#f7931e'}}></div>
                          <div className="segment" style={{flex: '25', background: '#667eea'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="dashboard-card performance-card">
                    <div className="card-content">
                      <h3 className="card-title">Uptime</h3>
                      <div className="performance-metric">
                        <span className="metric-value">98.5%</span>
                        <span className="metric-label">System Health</span>
                      </div>
                      <div className="performance-graph">
                        <div className="graph-line">
                          <div className="line-point" style={{left: '15%', bottom: '60%'}}></div>
                          <div className="line-point" style={{left: '35%', bottom: '45%'}}></div>
                          <div className="line-point" style={{left: '55%', bottom: '70%'}}></div>
                          <div className="line-point" style={{left: '75%', bottom: '85%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="dashboard-card balance-card">
                    <div className="card-content">
                      <h3 className="card-title">Projects</h3>
                      <div className="balance-display">
                        <div className="balance-gauge">
                          <div className="gauge-fill" style={{width: '78%'}}></div>
                        </div>
                        <div className="gauge-value">78%</div>
                      </div>
                      <div className="balance-info">
                        <div className="balance-item">
                          <span className="balance-value">12</span>
                          <span className="balance-label">Done</span>
                        </div>
                        <div className="balance-item">
                          <span className="balance-value">3</span>
                          <span className="balance-label">Active</span>
                        </div>
                      </div>
                    </div>
                  </div>
          </div>
        </div>
      </section>

      {/* Photography Section */}
      <section id="photography" className="photography-section">
        <div className="container">
          <h2 className="section-title">Photography</h2>
          <p className="photography-subtitle">Visual stories captured through my lens</p>
        </div>
        <div className="photography-masonry">
          {[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(num => (
            <div key={num} className={`photo-card photo-${num}`}>
              <div className="photo-wrapper">
                <img src={`/photo/Gallery/${num}.jpg`} alt={`Gallery ${num}`} />
                <div className="photo-overlay">
                  <div className="photo-info">
                    <span className="photo-number">#{String(num).padStart(3, '0')}</span>
                    <span className="photo-category">{num <= 4 ? 'Portrait' : num <= 8 ? 'Landscape' : num <= 11 ? 'Street' : 'Abstract'}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-background">
          <video className="contact-video" autoPlay muted loop>
            <source src="/video/1.mp4" type="video/mp4" />
          </video>
          <div className="contact-overlay"></div>
        </div>
        <div className="contact-container">
          <div className="contact-left">
            <h2 className="contact-title">Let's Connect</h2>
            <p className="contact-subtitle">Ready to bring your ideas to life</p>
          </div>
          <div className="contact-right">
            <div className="contact-social">
              <div className="social-handle">@bhupender.dev</div>
              <div className="social-platform">Instagram</div>
            </div>
            <div className="contact-tags">
              <div className="contact-tag">Available for Projects</div>
              <div className="contact-tag">Open to Collaborations</div>
              <div className="contact-tag">Remote Work Ready</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">🚀</span>
              <span>Bhupender Singh</span>
            </div>
            <p className="footer-tagline">
              Building the future, one line of code at a time.
            </p>
          </div>
          <div className="footer-links">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <a href="#home" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About</a>
              <a href="#projects" className="footer-link">Projects</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <a href="#" className="footer-link">LinkedIn</a>
              <a href="#" className="footer-link">GitHub</a>
              <a href="#" className="footer-link">Twitter</a>
              <a href="#" className="footer-link">Instagram</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Bhupender Singh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

// Add scroll functionality
if (typeof window !== 'undefined') {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const homeSection = document.getElementById('home');
    const topNav = document.querySelector('.top-nav');
    const sideNav = document.querySelector('.side-nav');
    
    if (homeSection && topNav && sideNav) {
      const homeHeight = homeSection.offsetHeight;
      
      if (scrollY > homeHeight - 100) {
        sideNav.style.opacity = '1';
        sideNav.style.visibility = 'visible';
        topNav.style.transform = 'translateY(-100%)';
      } else {
        sideNav.style.opacity = '0';
        sideNav.style.visibility = 'hidden';
        topNav.style.transform = 'translateY(0)';
      }
    }
  });

  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const sideNavLinks = document.querySelectorAll('.side-nav-link');
    
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    sideNavLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Enhanced hobby slideshow functionality
  window.addEventListener('DOMContentLoaded', () => {
    const hobbyCards = document.querySelectorAll('.hobby-card');
    
    hobbyCards.forEach((card, cardIndex) => {
      const slides = card.querySelectorAll('.hobby-slide');
      let currentSlide = 0;
      
      // Ensure first slide is visible
      if (slides.length > 0) {
        slides[0].style.opacity = '1';
        slides[0].style.transform = 'scale(1)';
      }
      
      // Preload images for smooth transitions
      slides.forEach(slide => {
        const img = new Image();
        img.src = slide.src;
      });
      
      // Add smooth transition on hover
      card.addEventListener('mouseenter', () => {
        slides.forEach(slide => {
          slide.style.animationDuration = '2s';
          slide.style.transform = 'scale(1.05)';
        });
      });
      
      card.addEventListener('mouseleave', () => {
        slides.forEach((slide, index) => {
          // Reset animation durations based on card
          const durations = ['20s', '25s', '15s', '35s'];
          slide.style.animationDuration = durations[cardIndex] || '20s';
          slide.style.transform = 'scale(1)';
        });
      });
    });
  });
}