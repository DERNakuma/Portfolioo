import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image hotel"></div>
            <div className="project-content">
              <h3>Hotel Management System</h3>
              <p>Full-stack application with comprehensive booking, room management, billing, and admin dashboard features.</p>
              <div className="tech-tags">
                <span>Full-Stack</span>
                <span>Backend</span>
                <span>Frontend</span>
                <span>Database</span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image face-recognition"></div>
            <div className="project-content">
              <h3>Face Recognition Attendance</h3>
              <p>Computer vision system that automates attendance tracking using advanced ML models and OpenCV.</p>
              <div className="tech-tags">
                <span>OpenCV</span>
                <span>Python</span>
                <span>ML Models</span>
                <span>Computer Vision</span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image student-management"></div>
            <div className="project-content">
              <h3>Student Management System</h3>
              <p>Comprehensive system with automated attendance, report generation, and AI chatbot assistant named Pipo.</p>
              <div className="tech-tags">
                <span>Web Stack</span>
                <span>AI Integration</span>
                <span>Chatbot</span>
                <span>Automation</span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image iot"></div>
            <div className="project-content">
              <h3>IoT Projects Collection</h3>
              <p>Multiple embedded systems projects using Arduino and ESP32, including smart sensors and automation systems.</p>
              <div className="tech-tags">
                <span>Arduino</span>
                <span>ESP32</span>
                <span>IoT</span>
                <span>Embedded Systems</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;