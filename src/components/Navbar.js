import React, { useEffect, useRef, useState } from "react";
import { data } from "../data";
import logo from "../images/logo_text.png";
import { memo } from "react";
import "../css/nav.css";
import { createDispatchHook, useDispatch, useSelector } from "react-redux";
import { linkActions } from "../redux/refSlice";
import { NavLink } from "react-router-dom";
import mobilemenu from "../images/mobilemenu.png";
const Navbar = (props) => {
  const linkState = useSelector((state) => state.link.value);
  const moveRocket = useSelector((state) => state.link.value.moveRocket);
  const mc = useSelector((state) => state.link.value.menuClass);
  const dispatch = useDispatch();
  const currentIndex = useRef(0);
  const positionREF = useRef();
  const [scrollPosition, setScrollPosition] = useState(0);
  // const indexFocusRef = useRef(0);

  const handleScrollWhell = () => {
    positionREF.current = window.pageYOffset;

    //Scroll animation functionalit
    if (positionREF.current > 0 && positionREF.current < 700) {
      currentIndex.current = 0.5;
    } else if (positionREF.current > 780 && positionREF.current < 1300) {
    } else if (positionREF.current > 1300 && positionREF.current < 2300) {
      currentIndex.current = 2.5;
    } else if (positionREF.current > 2300 && positionREF.current < 4900) {
      currentIndex.current = 3.5;
    } else if (positionREF.current > 4900) {
    }

    //Scroll animation functionality
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollWhell);
  }, []);

  const [linkHover, setLinkHover] = useState(false);
  const links = [`navLink pointer gradient `];
  props.ismobile && dispatch(linkActions.setMoveRocket(false));

  const handleScroll = (index) => {
    console.log(
      "Start: current index: " + currentIndex.current + " index: " + index
    );
    if (currentIndex.current < index) {
      setTimeout(() => {
        dispatch(linkActions.setMoveRocket(false));
      }, props.ismobile == false && 500);
      setTimeout(() => {
        linkState.ref[index].current.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      }, props.ismobile == false && 1500); // on mobile disable timer
      setTimeout(() => {
        props.ismobile == false && dispatch(linkActions.setMoveRocket(true));
        console.log(moveRocket);
      }, 3500);
      currentIndex.current = index;
    }
    if (currentIndex.current > index) {
      setTimeout(() => {
        linkState.ref[index].current.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      }, 0);
      currentIndex.current = index;
    }
    console.log(
      "End: current index: " + currentIndex.current + " index: " + index
    );
  };

  //Render Desktop or Mobile Menu based on window width

  //Render Desktop or Mobile Menu based on window width
  //Desktop menu
  const DesktopMenu = (props) => {
    return (
      <>
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
      </>
    );
  };
  //Desktop menu

  //Mobile menu
  const MobileMenu = () => {
    const submenuClass = useSelector((state) => state.link.value.submenuClass);
    const isShown = useRef();
    const handleSubMenu = () => {
      dispatch(linkActions.setMenuClass());
      dispatch(
        linkActions.setsubmenuClass(
          `submenu ${mc ? "submenu-hide" : "submenu-show"}`
        )
      );
    };

    return (
      <div className="mobile-menu">
        <img src={mobilemenu} alt="" onClick={handleSubMenu} />
        <Submenu isshown={isShown.current} submenuClass={submenuClass} />
      </div>
    );
  };
  //Mobile menu
  //Mobile Sub menu

  const Submenu = React.memo((props) => {
    return (
      <div className={props.submenuClass}>
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
              <span className={links} onClick={() => handleScroll(filteredID)}>
                {item}
              </span>
            );
          })}
        </div>
      </div>
    );
  });
  //Mobile Sub menu
  // Resize Functionality for Desktop or Mobile menu
  return (
    <>
      <nav>{props.ismobile ? <MobileMenu /> : <DesktopMenu />}</nav>
    </>
  );
};

export default Navbar;
