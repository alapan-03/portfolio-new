import React, { useState } from "react";
import "./Work.css";

const experiences = [
  {
    role: "Backend Developer",
    company: "HireVeda",
    location: "Remote",
    type: "Internship",
    period: "Jan 2025 - Feb 2025",
    duration: "2 months",
    achievements: [
      {
        text: "LinkedIn data scraping for 500+ job applicants using JavaScript, boosting recruitment data collection efficiency by 60% and saving 40+ recruiter hours monthly.",
        impact: "60% efficiency boost"
      },
      {
        text: "Streamlined HireVeda's candidate evaluation process by extracting actionable insights, improving applicant shortlisting accuracy and accelerating hiring decisions.",
        impact: "Improved accuracy"
      }
    ],
    skills: ["JavaScript", "Data Scraping", "LinkedIn API", "Node.js"],
    color: "#667eea"
  },
  {
    role: "Full-Stack Developer",
    company: "Alpha Rig PVT LTD",
    location: "Remote",
    type: "Internship",
    period: "Nov 2023 - Jan 2024",
    duration: "3 months",
    achievements: [
      {
        text: "Developed a web app which makes wanderer navigate tour packages easily.",
        impact: "Better UX"
      },
      {
        text: "Integrated stripe as payment gateway",
        impact: "Secure payments"
      },
      {
        text: "Developed an UI which is intuitive, clean and easy to use.",
        impact: "Enhanced UI"
      }
    ],
    skills: ["React", "Node.js", "Stripe", "Express", "MongoDB"],
    color: "#f5576c"
  }
];

const Work = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  
  return (
    <div className="work-section" id="experience">
      <div className="work-container">
        {/* Section Header */}
        <div className="work-header">
          <div className="section-badge">
            <span className="badge-icon"></span>
            Experience
          </div>
          <h2 className="section-title">
            <span style={{color:"white"}}>Work</span> <span className="gradient-text">History</span>
          </h2>
          <p className="section-description">
            A timeline of my professional journey and the impact I've created along the way.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`experience-card ${expandedIndex === index ? 'expanded' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Card Gradient Border */}
              <div className="card-gradient-border" style={{ 
                background: `linear-gradient(135deg, ${exp.color}40 0%, ${exp.color}20 100%)` 
              }}></div>

              {/* Company Logo Placeholder */}
              <div className="company-logo" style={{ background: `linear-gradient(135deg, ${exp.color} 0%, ${exp.color}dd 100%)` }}>
                {exp.company.charAt(0)}
              </div>

              {/* Card Content */}
              <div className="experience-content">
                {/* Header */}
                <div className="experience-header">
                  <div>
                    <h3 className="experience-role">{exp.role}</h3>
                    <div className="experience-company">
                      <span className="company-name">{exp.company}</span>
                      <span className="separator"></span>
                      <span className="location">{exp.location}</span>
                    </div>
                  </div>
                  <div className="experience-badges">
                    <span className="type-badge" style={{ background: `${exp.color}15`, color: exp.color }}>
                      {exp.type}
                    </span>
                    <span className="duration-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                      {exp.duration}
                    </span>
                  </div>
                </div>

                <div className="experience-period">{exp.period}</div>

                {/* Achievements */}
                <div className="achievements-list">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="achievement">
                      <div className="achievement-bullet" style={{ background: exp.color }}></div>
                      <div className="achievement-text">
                        <p>{achievement.text}</p>
                        <span className="impact-tag" style={{ background: `${exp.color}10`, color: exp.color }}>
                          ⚡ {achievement.impact}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Skills Used */}
                <div className="skills-used">
                  <div className="skills-label">Technologies:</div>
                  <div className="skills-tags">
                    {exp.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag" style={{ 
                        borderColor: exp.color,
                        color: exp.color 
                      }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="card-decoration" style={{ background: exp.color }}></div>
            </div>
          ))}
        </div>

        {/* Resume Download CTA */}
        <div className="resume-cta">
          <div className="resume-card">
            <div className="resume-icon"></div>
            <div className="resume-content">
              <h3>Want to know more?</h3>
              <p>Download my complete resume for detailed information about my experience and skills.</p>
            </div>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">
              <span>Download Resume</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
