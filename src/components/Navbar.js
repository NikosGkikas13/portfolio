import React, { useEffect, useState } from "react";
import { data } from "../data";
import logo from "../images/logo_text.png";
import "../css/nav.css";
import { useDispatch, useSelector } from "react-redux";
import { linkActions } from "../redux/refSlice";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const linkState = useSelector((state) => state.link.value);
  const moveRocket = useSelector((state) => state.link.value.moveRocket);
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScrollWhell = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    console.log(position);
    if (position > 0 && position < 700) {
      setCurrentIndex(0.5);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollWhell);
  }, []);

  const navlinkHover = {
    backgroundPosition: `0 100%`,
  };

  const [linkHover, setLinkHover] = useState(false);
  const links = [`navLink pointer gradient ${navlinkHover}`];

  const handleScroll = (index) => {
    console.log("Start: current index: " + currentIndex + " index: " + index);
    if (currentIndex < index) {
      setTimeout(() => {
        dispatch(linkActions.setMoveRocket(false));
      }, 500);
      setTimeout(() => {
        linkState.ref[index].current.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      }, 1500);
      setTimeout(() => {
        dispatch(linkActions.setMoveRocket(true));
        console.log(moveRocket);
      }, 3500);
      setCurrentIndex(index);
    }
    if (currentIndex > index) {
      setTimeout(() => {
        linkState.ref[index].current.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      }, 0);
      setCurrentIndex(index);
    }
    console.log("End: current index: " + currentIndex + " index: " + index);
  };
  return (
    <nav>
      <img
        className="pointer"
        src={logo}
        alt=""
        onClick={() =>
          linkState.ref[0].current.scrollIntoView({
            block: "start",
            behavior: "smooth",
          })
        }
      />
      <div className="navLinkContainer">
        {data.nav.map((item, index) => {
          let filteredID = linkState.id.filter((id) => id === index);
          return (
            <span
              className={links}
              onClick={() => handleScroll(filteredID)}
              onMouseEnter={() => setLinkHover(true)}
              onMouseLeave={() => setLinkHover(false)}
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
