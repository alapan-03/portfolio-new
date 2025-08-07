import React from "react";
import "./Skills.css";
import html from "./assets/html.png"
import css from "./assets/css.png"
import mongo from "./assets/mongo.png"
import node from "./assets/node.png"
import git from "./assets/git.png"
import express from "./assets/express.png"
import react from "./assets/react.png"
import js from "./assets/js.png"
import java from "./assets/java.png"

const skills = [
  // Row 1
  [

    { icon: html, label: "HTML" },
    { icon: css, label: "CSS" },
    { icon: js, label: "Javascript" },
    { icon: java, label: "Java" },
    { icon: react, label: "React JS" },
    { icon: node, label: "Node JS" },
    { icon: mongo, label: "MongoDB" },
    { icon: express, label: "Express JS" },
    { icon: git, label: "Git" },
  ]
];

const Skills = () => (
  <div className="skills-container" id="skills">
    <h2>Skills</h2>
    <p className="skills-desc">
      Here are the frameworks, libraries, services and runtimes I have experience with. This is not a complete list! I'm constantly gaining new skills, and hence it can be a little bit outdated.
    </p>
    <div className="skills-list">
      {skills.map((row, i) => (
        <div className="skills-row" key={i}>
          {row.map((skill, j) => (
            <div className="skill-item" key={j}>
              <span className="skill-icon"><img className="skill-icon" src={skill.icon}></img></span>
              <span className="label">{skill.label}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
