import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <section className="about-me-section" id="about">
      <h1 className="section-title">ABOUT ME</h1>
      <div className="content-container">
        <div className="description">
          <p>
            <span className="highlight">Fullstack Web Developer 🚀</span>
            <br />
            <span>
              I specialize in transforming ideas into reality with
              <strong> modern web technologies</strong>.
              My passion is blending elegant UI with robust backend solutions to create seamless user experiences.
            </span>
          </p>
          <p>
            With expertise in <span className="stack">React.js</span>, <span className="stack">Node.js</span>,
            and efficient database design, I enjoy building everything from small landing pages to rich, interactive web apps.
          </p>
          <p>
            <span className="motto">Curious. Creative. Code-driven.</span>
            Always eager to learn new things and deliver quality work that matters.
          </p>
        </div>

        <div className="vertical-line"></div>

        <div className="education">
          <h2 className="education-title">Education</h2>
          <div className="education-item">
            <h3>B.Tech in Computer Science 🎓</h3>
            <div style={{display: "flex", justifyContent:"space-between", gap:"4rem"}}>
                <p>University of Engineering<br></br>and Management, Kolkata</p>
                <p>2022 - 2026</p>
            </div>
            {/* <p><strong>Skills:</strong> Data Structures, Algorithms, Web Development</p> */}
          </div>
          <div className="education-item">
            <h3>Higher Secondary School 🏫</h3>
            <div style={{display: "flex", justifyContent:"space-between"}}>
                <p>Narayana Schools</p>
                <p>2020 - 2022</p>
            </div>
            {/* <p><strong>Subjects:</strong> Science, Mathematics, Computer Science</p> */}
          </div>
          
        </div>
      </div>
    </section>
  );
}
