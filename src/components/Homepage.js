import React, { useEffect, useRef, useState } from "react";
import "../css/homepage.css";
import Rocket from "./Rocket";

const Homepage = (props) => {
  const homepageRef = useRef();
  const { moveRocket, setmove, stateManagement } = props;

  useEffect(() => {
    stateManagement(homepageRef, 0);
  }, []);
  return (
    <section ref={homepageRef} id="homepage">
      <h1 className="homepage-title">Nikos Gkikas</h1>
      <h2 className="homepage-subtitle">Front End Web Developer</h2>
      <button onClick={() => setmove(!moveRocket)}>move</button>
      <Rocket moveRocket={moveRocket} />
    </section>
  );
};

export default Homepage;
