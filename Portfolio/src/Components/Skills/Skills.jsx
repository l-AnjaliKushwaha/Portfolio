import React from 'react'
import './Skills.css'
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card.jsx';
import Resume from '../Skills/Anjali kushwaha-Resume.pdf';
import { themeContext } from '../../../Context.jsx';
import { useContext } from 'react';
import { motion } from 'framer-motion';


function Skills() {
  const transition = {duration: 1, type: 'spring'}
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;
  return (
    <div className="skills">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>skills</span>
        <span style={{ color: darkMode ? "white" : "" }}>
          HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, <br />{" "}
          Tailwind CSS, GSAP, Framer Motion.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <motion.div
          whileInView={{ left: "14rem" }}
          initial={{ left: "25rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Front-End Development"}
            detail={
              "HTML & CSS, JavaScript, React.js, Redux Toolkit, Tailwind CSS Bootstrap "
            }
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          style={{ top: "12rem", left: "-4rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Back-End Development"}
            detail={"Node.js, Express.js, MongoDB RESTful API Development"}
          />
        </motion.div>
        {/* 3rd card */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          style={{ top: "19rem", left: "12rem" }}
        >
          <Card
            emoji={Humble}
            heading={"Additional Skills"}
            detail={
              "Animation Libraries: GSAP, Framer Motion, State Management: Redux Toolkit, Version Control: Git"
            }
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}

export default Skills
