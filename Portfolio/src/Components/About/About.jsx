import React from "react";
import "./About.css";
import csspng from "../../img/css.png";
import JsIcon from "../../img/jsIcon.png";
import htmlpng from "../../img/html.png";
import reactpng from "../../img/react.png";
import nodepng from "../../img/node.png";
import { themeContext } from "../../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function About() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="about" id="About">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>About Me</span>
        <span>MERN Stack Developer</span>
        <span style={{ color: darkMode ? "white" : "" }}>
          I’m a 2024 B.Tech graduate in Computer Science from Sagar
          <br />
          Institute of Research and Technology, with a CGPA of 8.67. <br /> I
          specialize in the MERN stack (MongoDB, Express, React, Node)
          <br /> and have a solid grasp of HTML, CSS, and JavaScript. I also
          have <br /> experience with Tailwind CSS, Bootstrap, GSAP, and Framer
          Motion <br /> for creating cool animations. I love building responsive
          and visually <br /> appealing web apps and am always eager to learn
          and take
          <br />
          on new challenges in web development.
        </span>

        <Link to="Contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="a-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="a-mainCircle"
        >
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
        </motion.div>
        {/* background circles  */}

        <div className="a-backCircle blueCircle"></div>
        <div className="a-backCircle yellowCircle"></div>
      </div>
    </div>
  );
}

export default About;
