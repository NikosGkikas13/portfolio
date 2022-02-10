import React from "react";
import { data } from "../data";
import logo from "../images/logo_text.png";
import "../css/nav.css";
const Navbar = () => {
  return (
    <nav>
      <img className="pointer" src={logo} alt="" />
      <div className="navLinkContainer">
        {data.nav.map((item) => {
          return <span className="navLink pointer gradient">{item}</span>;
        })}
      </div>
    </nav>
  );
};

export default Navbar;
