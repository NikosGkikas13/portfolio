import React from "react";
import { data } from "../data";
import logo from "../images/logo_text.png";
import "../css/nav.css";
import { useSelector } from "react-redux";
const Navbar = () => {
  const linkState = useSelector((state) => state.link.value);
  return (
    <nav>
      <img
        className="pointer"
        src={logo}
        alt=""
        onClick={() =>
          linkState.ref[0].current.scrollIntoView({
            block: "center",
            behavior: "smooth",
          })
        }
      />
      <div className="navLinkContainer">
        {data.nav.map((item, index) => {
          let filteredID = linkState.id.filter((id) => id === index);
          return (
            <span
              className="navLink pointer gradient"
              onClick={() =>
                linkState.ref[filteredID].current.scrollIntoView({
                  block: "center",
                  behavior: "smooth",
                })
              }
            >
              {item}
            </span>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
