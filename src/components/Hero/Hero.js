import React, { useState } from "react";
import "./Hero.css";
import profileImage from "./assets/hero-face.jpg"; // Replace with your image path
import leetcode from "./assets/leetcode.png";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
// import leetcode from "./assets/leetcode.png"

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container">
      <div className="floating-icons">
        <span className="icon idea">🚀</span>
        <span className="icon brain">🧠</span>
        <span className="icon gear">{`</>`}</span>
        <span className="icon chart">📈</span>
        <span className="icon rocket">💡</span>
      </div>
      <header className="navbar">
        <div className="logo">✦ Alapan</div>
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
      <main className="main-section">
        <section className="left-section">
          <h1>
            FULL-STACK
            <br />
            WEB &lt;DEVELOPER/&gt;
          </h1>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="resume-btn">View Resume</button>
          </a>
        </section>
        <section className="right-section">
          <img className="profile-img" src={profileImage} alt="Profile" />
          <div className="right-section-text">
            <h2>I'm Alapan Kar, a Full-Stack Web Developer</h2>
            <p>
              Hi! I'm Alapan Kar, a Full-stack web developer skilled in MERN
              stack. I strive to build web apps that solves any important
              problem.
            </p>
          </div>
        </section>
      </main>

      <div className="links">
        <a href="https://leetcode.com/u/karriku03/" target="_blank">
          <img src={leetcode}></img>
        </a>
        <a href="https://github.com/alapan-03" target="_blank">
          <img src={github}></img>
        </a>
        <a
          href="https://www.linkedin.com/in/alapan-kar-b7075b166/"
          target="_blank"
        >
          <img src={linkedin}></img>
        </a>
      </div>
      {/* <div className="scroll-down">Scroll down ↓</div> */}
    </div>
  );
}

export default Hero;
