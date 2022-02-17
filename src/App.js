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
function App() {
  const [moveRocket, setMoveRocket] = useState(false);
  const dispatch = useDispatch();
  const linkState = useSelector((state) => state.link.value);
  console.log(linkState);
  const stateManagement = (value, id) => {
    dispatch(linkActions.addRef(value));
    dispatch(linkActions.addId(id));
  };

  console.log(linkState);
  return (
    <div className="App">
      <div className="container" onScroll={() => console.log("hi")}>
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
      </div>
    </div>
  );
}

export default App;
