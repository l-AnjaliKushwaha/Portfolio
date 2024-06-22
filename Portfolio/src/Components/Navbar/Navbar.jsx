import React from "react";

function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Anjali Kushwaha</div>
        <span>toggle</span>
      </div>
      <div className="n-right">
        <div className="m-list">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <button className="button">
            Contact us
        </button>
      </div>
    </div>
  );
}

export default Navbar;
