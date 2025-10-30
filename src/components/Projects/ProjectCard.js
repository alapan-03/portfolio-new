import React, { useState } from "react";
import "./Project.css";

const gradients = [
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
];

export default function ProjectCard({ data, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const gradient = gradients[index % gradients.length];

  return (
    <div 
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Border on Hover */}
      <div className="project-card-border" style={{ background: gradient }}></div>
      
      {/* Card Header with Number */}
      <div className="project-card-header">
        <div className="project-number" style={{ background: gradient }}>
          {String(index + 1).padStart(2, '0')}
        </div>
        <div className="project-tags">
          {data.techStackBadges.slice(0, 3).map((tag, idx) => (
            <span className="project-tag" key={idx}>
              {tag}
            </span>
          ))}
          {data.techStackBadges.length > 3 && (
            <span className="project-tag-more">+{data.techStackBadges.length - 3}</span>
          )}
        </div>
      </div>

      {/* Project Title */}
      <h3 className="project-card-title">{data.projectName}</h3>

      {/* Features List */}
      <div className="project-features">
        <ul>
          {data.features.map((feature, idx) => (
            <li key={idx}>
              <span className="feature-icon">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="project-actions">
        {data.links.demo && (
          <a 
            href={data.links.demo} 
            className="project-btn primary" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ background: gradient }}
          >
            <span>View Demo</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        )}
        {data.links.github && (
          <a 
            href={data.links.github} 
            className="project-btn secondary" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>Code</span>
          </a>
        )}
      </div>

      {/* Hover Effect Overlay */}
      <div className={`project-hover-overlay ${isHovered ? 'active' : ''}`}></div>
    </div>
  );
}
