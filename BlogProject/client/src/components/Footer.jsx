import React from "react";
import logo from "../images/logo.webp";
const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="logo" />
      <span>
        made with love and <b>React.js</b>
      </span>
    </div>
  );
};

export default Footer;
