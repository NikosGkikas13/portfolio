import React, { useEffect, useState } from "react";
import { data } from "../data";
import logo from "../images/logo_text.png";
import "../css/nav.css";
import { createDispatchHook, useDispatch, useSelector } from "react-redux";
import { linkActions } from "../redux/refSlice";
import { NavLink } from "react-router-dom";
import mobilemenu from "../images/mobilemenu.png";
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
    //Scroll animation functionality
    if (position > 0 && position < 700) {
      setCurrentIndex(0.5);
    } else if (position > 980 && position < 1300) {
      setCurrentIndex(1.5);
    } else if (position > 1300 && position < 2300) {
      setCurrentIndex(2.5);
    } else if (position > 2300 && position < 4900) {
      setCurrentIndex(3.5);
    }
    //Scroll animation functionality

    //Rocket message
    if (position > 500 && position <= 1200) {
      dispatch(linkActions.setRocketText("A little about me"));
    } else if (position > 1200 && position <= 2400) {
      dispatch(linkActions.setRocketText("Languages I speak"));
    } else if (position > 2400 && position <= 4800) {
      dispatch(linkActions.setRocketText("Hover over projects"));
    } else if (position > 4800) {
      dispatch(linkActions.setRocketText("Send me a message"));
    } else {
      dispatch(linkActions.setRocketText("Welcome to my page"));
    }
  };
  //Rocket message
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
  //Desktop menu
  const DesktopMenu = () => {
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
  //Desktop menu
  const [showMenu, setShowMenu] = useState(false);
  const [left, setLeft] = useState({ left: "-250px" });
  useEffect(() => {
    setLeft(showMenu ? { left: "0px" } : { left: "-250px" });
  }, [showMenu]);
  console.log(showMenu);
  //Mobile menu
  const MobileMenu = () => {
    return (
      <nav className="mobile-nav" style={left}>
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
  //Mobile menu

  // Resize Functionality for Desktop or Mobile menu
  const [isMobileMenu, setisMobileMenu] = useState(false);
  const checkWindowWidth = () => {
    if (window.innerWidth <= 768) {
      setisMobileMenu(true);
    } else if (window.innerWidth > 768) {
      setisMobileMenu(false);
    }
  };
  useEffect(() => {
    checkWindowWidth();
    window.addEventListener("resize", () => {
      checkWindowWidth();
      console.log(isMobileMenu);
    });
  }, [isMobileMenu]);
  // Resize Functionality for Desktop or Mobile menu
  return isMobileMenu ? (
    <>
      <img src={mobilemenu} alt="" onClick={() => setShowMenu(!showMenu)} />
      <MobileMenu />
    </>
  ) : (
    <DesktopMenu />
  );
};

export default Navbar;
