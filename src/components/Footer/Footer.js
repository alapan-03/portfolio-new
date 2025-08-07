import "./Footer.css";
import logo from "./assets/blackdoorLogo2Edited.jpg";
import { Link } from "react-router-dom";
import leetcode from "./assets/leetcode.png";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";

export default function Footer(props) {
  return (
    <>
      <div className="footer">
        <div className="company-details">
          <div className="footer-logo-cont">
            {/* <img className="footer-logo" src={logo} /> */}
            Made with ❤️ by Alapan Kar
          </div>
          <div className="footer-links">
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
        </div>

        <div className="company-policy">
          <p className="company-policy-p1">
            © 2025 Alapan Kar. All Rights Reserved
          </p>
          {/* <p className="">Address: D-78, Sector-x, Bangalore - 2000012</p> */}
          <p className="company-policy-p2">Email: kalx.alapankar.1748395@gmail.com</p>
        </div>
      </div>
    </>
  );
}
