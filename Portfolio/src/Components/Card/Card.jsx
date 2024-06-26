import React from 'react'
import './Card.css'
import { themeContext } from "../../../Context.jsx";
import { useContext } from "react";

function Card({emoji, heading, detail}) {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="card" style={{ background: darkMode ? "white" : "" }}>
      <img src={emoji} alt="" />
      <span style={{ color: darkMode ? "black" : "" }}>{heading}</span>
      <span>{detail}</span>
    </div>
  );
}

export default Card
