import React, { useState, useEffect } from "react";
import "./Hero.css";
import profileImage from "./assets/hero-face.jpg";
import leetcode from "./assets/leetcode.png";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  const words = ["FULL-STACK", "CREATIVE", "INNOVATIVE", "PASSIONATE"];

  useEffect(() => {
    let timeout;
    const currentWord = words[currentWordIndex];
    
    if (displayText.length < currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setDisplayText("");
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }, 2000);
    }
    
    return () => clearTimeout(timeout);
  }, [displayText, currentWordIndex]);

  return (
    <div className="container">
      {/* Gradient Orbs Background */}
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>
      
      {/* Floating Particles */}
      <div className="floating-icons">
        <span className="icon idea">🚀</span>
        <span className="icon brain">🧠</span>
        <span className="icon gear">{`</>`}</span>
        <span className="icon chart">📈</span>
        <span className="icon rocket">💡</span>
        <span className="icon code">⚡</span>
        <span className="icon star">✨</span>
      </div>

      {/* Navigation Bar */}
      <header className="navbar">
        <div className="logo">
          <span className="logo-icon">✦</span>
          <span className="logo-text">Alapan Kar</span>
        </div>
        <nav>
          <ul className={`nav-links ${menuOpen ? "show-nav" : ""}`}>
            <a href="#about">
              <li onClick={() => setMenuOpen(false)}>About</li>
            </a>
            <a href="#project">
              <li onClick={() => setMenuOpen(false)}>Projects</li>
            </a>
            <a href="#experience">
              <li onClick={() => setMenuOpen(false)}>Experience</li>
            </a>
            <a href="#skills">
              <li onClick={() => setMenuOpen(false)}>Skills</li>
            </a>
          </ul>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((s) => !s)}
            aria-label="Toggle navigation"
          >
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </button>
        </nav>
      </header>

      {/* Main Hero Section */}
      <main className="main-section" id="hero">
        <section className="left-section">
          <div className="status-badge">
            <span className="status-dot"></span>
            Available for work
          </div>
          
          <h1 className="hero-title">
            <span className="title-line-1">{displayText}</span>
            <span className="typing-cursor">|</span>
            <br />
            <span className="title-line-2">WEB &lt;DEVELOPER/&gt;</span>
          </h1>
          
          <p className="hero-subtitle">
            Crafting elegant solutions to complex problems with modern web technologies
          </p>
          
          <div className="cta-buttons">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="resume-btn primary-btn">
                <span>View Resume</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </a>
            <a href="#project">
              <button className="secondary-btn">
                <span>View Projects</span>
              </button>
            </a>
          </div>
          
          {/* Stats Section */}
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Months Exp</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Dedication</div>
            </div>
          </div>
        </section>

        <section className="right-section">
          <div className="profile-container">
            <div className="profile-border-glow"></div>
            <img className="profile-img" src={profileImage} alt="Alapan Kar" />
            <div className="tech-badge badge-1">React</div>
            <div className="tech-badge badge-2">Node.js</div>
            <div className="tech-badge badge-3">MongoDB</div>
            <div className="tech-badge badge-4">Express</div>
          </div>
          
          <div className="info-card">
            <div className="info-card-header">
              <h2>Alapan Kar</h2>
              <div className="verified-badge">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
              </div>
            </div>
            <p className="info-card-role">Full-Stack Web Developer</p>
            <p className="info-card-description">
              Specialized in MERN stack development with a passion for creating 
              scalable, user-centric web applications that solve real-world problems.
            </p>
            
            <div className="skills-preview">
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">+5 more</span>
            </div>
          </div>
        </section>
      </main>

      {/* Social Links */}
      <div className="social-links">
        <a href="https://leetcode.com/u/karriku03/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LeetCode">
          <img src={leetcode} alt="LeetCode" />
          <span className="social-tooltip">LeetCode</span>
        </a>
        <a href="https://github.com/alapan-03" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
          <img src={github} alt="GitHub" />
          <span className="social-tooltip">GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/alapan-kar-b7075b166/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
          <img src={linkedin} alt="LinkedIn" />
          <span className="social-tooltip">LinkedIn</span>
        </a>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="scroll-indicator">
        <div className="scroll-text">Scroll to explore</div>
        <div className="scroll-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </div> */}
    </div>
  );
}

export default Hero;
