import React, { useState } from "react";
import "./Skills.css";
import html from "./assets/html.png";
import css from "./assets/css.png";
import mongo from "./assets/mongo.png";
import node from "./assets/node.png";
import git from "./assets/git.png";
import express from "./assets/express.png";
import react from "./assets/react.png";
import js from "./assets/js.png";
import java from "./assets/java.png";

const skillsData = {
  frontend: [
    { icon: html, label: "HTML", level: 90 },
    { icon: css, label: "CSS", level: 85 },
    { icon: js, label: "JavaScript", level: 90 },
    { icon: react, label: "React JS", level: 88 },
  ],
  backend: [
    { icon: node, label: "Node JS", level: 85 },
    { icon: express, label: "Express JS", level: 82 },
    { icon: java, label: "Java", level: 75 },
  ],
  database: [
    { icon: mongo, label: "MongoDB", level: 80 },
  ],
  tools: [
    { icon: git, label: "Git", level: 85 },
  ]
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const categories = [
    { key: "frontend", label: "Frontend", icon: "🎨" },
    { key: "backend", label: "Backend", icon: "⚙️" },
    { key: "database", label: "Database", icon: "🗄️" },
    { key: "tools", label: "Tools", icon: "🛠️" },
  ];

  return (
    <div className="skills-section" id="skills">
      <div className="skills-container">
        {/* Section Header */}
        <div className="skills-header">
          <div className="section-badge">
            <span className="badge-icon">🚀</span>
            Technical Skills
          </div>
          <h2 className="section-title">
            <span style={{color:"white"}}>My</span> <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-description">
            Frameworks, libraries, databases, and runtimes I've mastered — continually expanding my skill set.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="skills-categories">
          {categories.map((category) => (
            <button
              key={category.key}
              className={`category-tab ${activeCategory === category.key ? "active" : ""}`}
              onClick={() => setActiveCategory(category.key)}
            >
              <span className="category-icon">{category.icon}</span>
              <span>{category.label}</span>
              <span className="category-count">{skillsData[category.key].length}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillsData[activeCategory].map((skill, index) => (
            <div
              key={index}
              className={`skill-card ${hoveredSkill === index ? "hovered" : ""}`}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="skill-icon-wrapper">
                <img className="skill-icon-img" src={skill.icon} alt={skill.label} />
                <div className="skill-glow"></div>
              </div>
              
              <div className="skill-info">
                <h3 className="skill-name">{skill.label}</h3>
                
                {/* Progress Bar */}
                <div className="skill-progress-container">
                  <div
                    className="skill-progress-bar"
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="progress-shine"></div>
                  </div>
                </div>
                
                <div className="skill-level-text">{skill.level}% Proficiency</div>
              </div>
              
              {/* Hover Effect Circle */}
              <div className="skill-hover-circle"></div>
            </div>
          ))}
        </div>

        {/* Skills Overview */}
        <div className="skills-overview">
          <div className="overview-card">
            <div className="overview-icon">📚</div>
            <div className="overview-number">8+</div>
            <div className="overview-label">Technologies</div>
          </div>
          <div className="overview-card">
            <div className="overview-icon">💪</div>
            <div className="overview-number">85%</div>
            <div className="overview-label">Avg Proficiency</div>
          </div>
          <div className="overview-card">
            <div className="overview-icon">🎯</div>
            <div className="overview-number">Full-Stack</div>
            <div className="overview-label">Specialization</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
