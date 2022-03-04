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
          <Navbar moveRocket={moveRocket} setmove={setMoveRocket} />
          <Homepage
            moveRocket={moveRocket}
            setmove={setMoveRocket}
            stateManagement={stateManagement}
          />
          <About stateManagement={stateManagement} />
          <Skills stateManagement={stateManagement} />
          <Work stateManagement={stateManagement} />
          <Contact stateManagement={stateManagement} />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
