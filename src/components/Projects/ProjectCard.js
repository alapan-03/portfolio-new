import React from "react";
import "./Project.css";

const tags = [
  "ReactJS",
  "React–Router",
  "axios",
  "Zustand",
  "UseEffect hook",
  "UseNavigate hook",
];


const colours = ["#b5d0ff34", "#f3dab137", "#dededee0"]

export default function ProjectCard({ data, colourIdx }) {

  // const randomIndex = Math.floor(Math.random() * colours.length);
  const backgroundColor = colours[colourIdx];
  return (
    <div className="card-container" style={{backgroundColor: backgroundColor}}>
      <div className="tags">
        {data.techStackBadges.map((tag, idx) => (
          <span className="tag" key={idx}>
            {tag}
          </span>
        ))}
      </div>
      <h2 className="card-title">{data.projectName}</h2>
      {/* <img>{data.icon}</img> */}
      <div className="card-desc">
        <ul>
          {data.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>
      {data.links.demo && (
        <a href={data.links.demo} className="view-project-btn" target="_blank" rel="noopener noreferrer">
          🌐 View Demo <span className="arrow">&#8594;</span>
        </a>
      )}
      {/* Add other buttons as needed */}
    </div>
  );
}
