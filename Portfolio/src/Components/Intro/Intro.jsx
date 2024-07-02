import React from "react";
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from "../../img/Vector2.png";
import girl from "../../img/girl.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv.jsx";
import "./Intro.css";
import { themeContext } from "../../../Context.jsx";
import { useContext } from "react";
import { motion } from "framer-motion";

function Intro() {

  const transition = { duration: 2, type: "spring" };

   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;
  
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hey! I am </span>
          <span>Anjali Kushwaha</span>
          <span>
            A MERN Stack developer. Passionate about creating responsive web
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
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
          className="emoji"
        />
        <motion.div
          initial={{ top: "-4%", left: "83%" }}
          whileInView={{ left: "75%" }}
          transition={transition}
          style={{ top: "-6%", left: "80%" }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          initial={{ top: "20rem", left: "3rem" }}
          whileInView={{ left: "-3rem" }}
          transition={transition}
          style={{ top: "19rem", left: "-2rem" }}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </motion.div>
        {/* blur divs */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Intro;
