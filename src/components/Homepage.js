import React, { useEffect, useRef, useState } from "react";
import "../css/homepage.css";
import Rocket from "./Rocket";

const Homepage = (props) => {
  const homepageRef = useRef();
  const { moveRocket, setmove, stateManagement } = props;

  const rocketRotate = () => {
    setTimeout(() => {
      setmove(!moveRocket);
    }, 1500);
  };

  useEffect(() => {
    stateManagement(homepageRef, 0);
  }, []);
  return (
    <section ref={homepageRef} id="homepage">
      <h1 className="homepage-title lightblue">Nikos Gkikas</h1>
      <h2 className="homepage-subtitle lightblue">Front End Web Developer</h2>
      <Rocket moveRocket={moveRocket} />
    </section>
  );
};

export default Homepage;
