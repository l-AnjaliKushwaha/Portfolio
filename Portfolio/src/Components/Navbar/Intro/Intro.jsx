import React from "react";
import "./Intro.css";

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
      </div>
      <div className="i-right">
            I am right side
      </div>
    </div>
  );
}

export default Intro;
