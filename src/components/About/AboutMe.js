import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <section className="about-section" id="about">
      {/* Background Gradient Orbs */}
      <div className="about-orb about-orb-1"></div>
      <div className="about-orb about-orb-2"></div>
      
      <div className="about-container">
        {/* Section Header */}
        <div className="about-header">
          <div className="section-badge">
            <span className="badge-icon">👨‍💻</span>
            About Me
          </div>
          <h2 className="section-title">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-description">
            Passionate about building digital experiences that make a difference
          </p>
        </div>

        {/* Main Content */}
        <div className="about-content">
          {/* Story Card */}
          <div className="story-card">
            <div className="card-gradient-border"></div>
            <div className="story-icon">✨</div>
            <h3 className="story-title">Full-Stack Developer</h3>
            <div className="story-text">
              <p>
                I specialize in transforming innovative ideas into reality using <span className="highlight-text">modern web technologies</span>. 
                My journey in web development is driven by a passion for creating seamless, user-centric experiences that blend elegant design with powerful functionality.
              </p>
              <p>
                From building responsive interfaces with <span className="tech-highlight">React</span> to architecting scalable backends with 
                <span className="tech-highlight"> Node.js</span>, I thrive on solving complex problems and bringing creative visions to life.
              </p>
              <p className="story-motto">
                <span className="motto-icon">💡</span>
                Curious. Creative. Code-driven.
              </p>
            </div>
            
            {/* Skills Highlights */}
            <div className="skills-highlight">
              <div className="skill-pill">
                <span className="pill-icon">⚡</span>
                MERN Stack
              </div>
              <div className="skill-pill">
                <span className="pill-icon">🎨</span>
                UI/UX Design
              </div>
              <div className="skill-pill">
                <span className="pill-icon">🚀</span>
                Problem Solving
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="education-section">
            <div className="education-header">
              <h3 className="education-main-title">
                <span className="title-icon">🎓</span>
                Education
              </h3>
            </div>
            
            {/* Education Cards */}
            <div className="education-cards">
              {/* B.Tech Card */}
              <div className="education-card">
                <div className="education-card-border"></div>
                <div className="education-icon-wrapper">
                  <div className="education-icon">🎓</div>
                </div>
                <div className="education-content">
                  <div className="education-header-row">
                    <div className="education-title-section">
                      <h4 className="education-degree">B.Tech in Computer Science</h4>
                      <p className="education-institution">
                        University of Engineering and Management, Kolkata
                      </p>
                    </div>
                    <div className="education-meta">
                      <span className="education-duration">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <path d="M12 6v6l4 2"/>
                        </svg>
                        2022 - 2026
                      </span>
                      <span className="education-status">
                        <span className="status-dot"></span>
                        In Progress
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Higher Secondary Card */}
              <div className="education-card">
                <div className="education-card-border"></div>
                <div className="education-icon-wrapper">
                  <div className="education-icon">🏫</div>
                </div>
                <div className="education-content">
                  <div className="education-header-row">
                    <div className="education-title-section">
                      <h4 className="education-degree">Higher Secondary School</h4>
                      <p className="education-institution">
                        Narayana Schools
                      </p>
                    </div>
                    <div className="education-meta">
                      <span className="education-duration">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <path d="M12 6v6l4 2"/>
                        </svg>
                        2020 - 2022
                      </span>
                      <span className="education-status completed">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M20 6L9 17l-5-5"/>
                        </svg>
                        Completed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
