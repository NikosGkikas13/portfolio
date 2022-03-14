import Navbar from "./components/Navbar";
import "./css/app.css";
import Homepage from "./components/Homepage";
import { useEffect, useRef, useState } from "react";
import rocket from "./images/rocket.png";
import Rocket from "./components/Rocket";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { useDispatch, useSelector } from "react-redux";
import { linkActions } from "./redux/refSlice";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import intro from "./images/intro.gif";
import InputSlide from "./components/InputSlide";
import spaceVideo from "./images/space_video.mp4";
import Footer from "./components/Footer";
function App() {
  const [moveRocket, setMoveRocket] = useState(false);
  const dispatch = useDispatch();
  const linkState = useSelector((state) => state.link.value);

  //Resize Functionality
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
    });
  });
  //Resize Functionality
  const mc = useSelector((state) => state.link.value.menuClass);
  const closeMobileMenu = () =>
    setTimeout(() => {
      dispatch(linkActions.mobileMenuFalse());
      mc &&
        dispatch(
          linkActions.setsubmenuClass(
            `submenu ${mc ? "submenu-hide" : "submenu-show"}`
          )
        );
    }, 100);
  const stateManagement = (value, id) => {
    dispatch(linkActions.addRef(value));
    dispatch(linkActions.addId(id));
  };
  const [showIntro, setShowIntro] = useState(false);
  const [inputValue, setInputValue] = useState(0);
  setTimeout(() => {
    setShowIntro(false);
  }, 4500); //4500sec

  return (
    <div className="App">
      {showIntro ? (
        <div className="intro-container">
          <img className="intro-gif" src={intro} alt="" />
          <InputSlide value={inputValue} onchange={setInputValue} />
        </div>
      ) : (
        <div className="container" onScroll={() => console.log("hi")}>
          <video loop autoPlay muted id="video">
            <source src={spaceVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Navbar
            moveRocket={moveRocket}
            setmove={setMoveRocket}
            ismobile={isMobileMenu}
          />
          <Homepage
            moveRocket={moveRocket}
            setmove={setMoveRocket}
            stateManagement={stateManagement}
            ismobile={isMobileMenu}
            closeMobileMenu={closeMobileMenu}
          />
          <About
            stateManagement={stateManagement}
            closeMobileMenu={closeMobileMenu}
          />
          <Skills
            stateManagement={stateManagement}
            closeMobileMenu={closeMobileMenu}
          />
          <Work
            stateManagement={stateManagement}
            closeMobileMenu={closeMobileMenu}
          />
          <Contact
            stateManagement={stateManagement}
            closeMobileMenu={closeMobileMenu}
          />
          <Footer closeMobileMenu={closeMobileMenu} />
        </div>
      )}
    </div>
  );
}

export default App;
