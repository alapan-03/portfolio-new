import React from "react";
import "./Work.css"; // Make sure to import the CSS

const Work = () => {
  return (
    <div className="work-history-container-outer" id="experience">
      <div className="work-history-container">
        <h2 className="wh-title">Work History</h2>
        <p className="wh-summary">
          Below you will find a summary of my past employment experience.
          <br />
          Additionally, if you require, you can{" "}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="wh-link">
            download my resume{" "}
            <span role="img" aria-label="download">
              📄
            </span>
          </a>
          .
        </p>

        <div className="wh-job">
          <div className="wh-dot" />
          <div className="wh-content">
            <div className="wh-role">Backend Developer</div>
            <div className="wh-meta">
              <span className="wh-company">HireVeda</span>
              <span className="wh-separator">•</span>
              {/* <span role="img" aria-label="uk-flag" className="wh-flag">🇬🇧</span> */}
              <span className="wh-country">Remote</span>
              <span className="wh-separator">•</span>
              <span className="wh-type">Internship</span>
            </div>
            <div className="wh-period">Jan 2025 - Feb 2025</div>
            <ul className="wh-list">
              <li>
                LinkedIn data scraping for 500+ job applicants using JavaScript,
                boosting recruitment data collection efficiency by 60% and
                saving 40+ recruiter hours monthly.
              </li>
              <li>
                Streamlined HireVeda’s candidate evaluation process by
                extracting actionable insights, improving applicant shortlisting
                accuracy and accelerating hiring decisions.
              </li>
            </ul>
          </div>
        </div>

        <div className="wh-job">
          <div className="wh-dot wh-dot-secondary" />
          <div className="wh-content">
            <div className="wh-role">Full-Stack Developer</div>
            <div className="wh-meta">
              <span className="wh-company">Alpha Rig PVT LTD</span>
              <span className="wh-separator">•</span>
              {/* <span role="img" aria-label="us-flag" className="wh-flag">🇺🇸</span> */}
              <span className="wh-country">Remote</span>
              <span className="wh-separator">•</span>
              <span className="wh-type">Internship</span>
            </div>
            <div className="wh-period">Nov 2023 - Jan 2024</div>
            <ul className="wh-list">
              <li>
                Developed a web app which makes wanderer navigate tour packages easily.
              </li>
              <li>Integrated stripe as payment gateway</li>
              <li>
                Developed an UI which is intuitive, clean and easy to use.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
