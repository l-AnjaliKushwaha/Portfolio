import React from "react";
import "./Intro.css";
import Github from '../../../img/github.png';
import LinkedIn from '../../../img/linkedin.png';
import Instagram from '../../../img/instagram.png';
import Vector1 from '../../../img/Vector1.png';
import Vector2 from "../../../img/Vector2.png";
import girl from "../../../img/girl.png";
import thumbup from '../../../img/thumbup.png';
import Crown from '../../../img/crown.png';
import glassesimoji from "../../../img/glassesimoji.png";

function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hey! I am </span>
          <span>Anjali Kushwaha</span>
          <span>
            a MERN Stack developer. Passionate about creating responsive web
            applications using modern JavaScript technologies.
          </span>
        </div>
        <button className=" button i-button">Hire me</button>
        <div className="i-icons">
          <a href="https://github.com/l-AnjaliKushwaha">
            <img src={Github} alt="Github-Icon" />
          </a>
          <a href="https://www.linkedin.com/in/anjali-kushwaha-515561251/">
            <img src={LinkedIn} alt="LinkedIn-Icon" />
          </a>
          <a href="">
            <img src={Instagram} alt="Instagram-Icon" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={girl} alt="" />
        <div>
          <FloatingDiv/>
        </div>
      </div>
    </div>
  );
}

export default Intro;
