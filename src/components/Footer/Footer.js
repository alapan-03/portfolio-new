import "./Footer.css";
import leetcode from "./assets/leetcode.png";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";

export default function Footer(props) {
  return (
    <>
      <footer className="footer">
        {/* Background Orbs */}
        <div className="footer-orb footer-orb-1"></div>
        <div className="footer-orb footer-orb-2"></div>
        <div className="footer-orb footer-orb-3"></div>

        <div className="footer-content">
          {/* Main Footer Grid */}
          <div className="footer-grid">
            {/* Brand Section */}
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="footer-logo-icon">AK</span>
                <span className="footer-logo-text">Alapan Kar</span>
              </div>
              <p className="footer-tagline">
                Full Stack Developer crafting seamless digital experiences
              </p>
              <div className="footer-social">
                <a 
                  href="https://leetcode.com/u/karriku03/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="LeetCode"
                >
                  <img src={leetcode} alt="LeetCode" />
                </a>
                <a 
                  href="https://github.com/alapan-03" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="footer-social-link"
                  aria-label="GitHub"
                >
                  <img src={github} alt="GitHub" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/alapan-kar-b7075b166/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="LinkedIn"
                >
                  <img src={linkedin} alt="LinkedIn" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3 className="footer-section-title">Quick Links</h3>
              <ul className="footer-links-list">
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#project">Projects</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#skills">Skills</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h3 className="footer-section-title">Get In Touch</h3>
              <div className="footer-contact">
                <a href="mailto:kalx.alapankar.1748395@gmail.com" className="footer-contact-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span>kalx.alapankar.1748395@gmail.com</span>
                </a>
                <div className="footer-availability">
                  <div className="availability-dot"></div>
                  <span>Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2025 Alapan Kar. All Rights Reserved
            </p>
            <p className="footer-made-with">
              Made with <span className="footer-heart">❤️</span> and lots of ☕
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
