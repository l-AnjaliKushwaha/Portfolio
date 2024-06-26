import React from 'react'
import './About.css'
import csspng from '../../img/css.png';
import JsIcon from '../../img/jsIcon.png';
import htmlpng from '../../img/html.png';
import reactpng from '../../img/react.png';
import nodepng from '../../img/node.png';

function About() {
  return (
    <div className="about">
      {/* left side */}
      <div className="awesome">
        <span>About Me</span>
        <span>MERN Stack Developer</span>
        <span>
          I'm a MERN Stack Developer with a passion for <br /> building
          scalable, efficient, and user-friendly
        </span>
        <button className="button s-button">Hire me</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="a-right">
        <div className="a-mainCircle">
          <div className="a-secCircle">
            <img src={csspng} alt="" />
          </div>
          <div className="a-secCircle">
            <img src={JsIcon} alt="" />
          </div>
          <div className="a-secCircle">
            <img src={reactpng} alt="" />
          </div>
          <div className="a-secCircle">
            <img src={htmlpng} alt="" />
          </div>
          <div className="a-secCircle">
            <img src={nodepng} alt="" />
          </div>
        </div>
        {/* background circles  */}

        <div className="a-backCircle blueCircle"></div>
        <div className="a-backCircle yellowCircle"></div>
      </div>
    </div>
  );
}

export default About
