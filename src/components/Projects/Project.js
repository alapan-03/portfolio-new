import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import data from "./projectData.json";

export default function Project() {
  const [filter, setFilter] = useState("all");

  // Extract unique tech stacks for filters
  const allTechs = [...new Set(data.flatMap(project => project.techStackBadges))];
  
  const filteredData = filter === "all" 
    ? data 
    : data.filter(project => project.techStackBadges.includes(filter));

  return (
    <div className="project-section" id="project">
      <div className="project-header">
        <div className="section-badge">
          <span className="badge-icon">💼</span>
          Portfolio
        </div>
        <h2 className="section-title">
          Solutions I've <span className="gradient-text">Built</span>
        </h2>
        <p className="section-description">
          Below are some of the real-world problems I've tackled through my projects. 
          Each one is designed to solve meaningful challenges and deliver value to users.
        </p>
        
        {/* Filter Buttons */}
        <div className="project-filters">
          <button 
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All Projects
            <span className="filter-count">{data.length}</span>
          </button>
          {allTechs.slice(2, 4).map((tech, idx) => (
            <button 
              key={idx}
              className={`filter-btn ${filter === tech ? "active" : ""}`}
              onClick={() => setFilter(tech)}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>
      
      <div className="project-grid">
        {filteredData?.map((el, i) => (
          <ProjectCard key={i} data={el} index={i} />
        ))}
      </div>
      
      {filteredData.length === 0 && (
        <div className="no-projects">
          <p>No projects found with this filter.</p>
        </div>
      )}
    </div>
  );
}