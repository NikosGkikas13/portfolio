import React, { useEffect, useRef, useState } from "react";
import "../css/homepage.css";
import Rocket from "./Rocket";
import astronaut from "../images/astronaut.png";

const Homepage = (props) => {
  const homepageRef = useRef();
  const { moveRocket, setmove, stateManagement, ismobile, closeMobileMenu } =
    props;

  const preloadedSpinner = useRef();

  useEffect(() => {
    preloadedSpinner.current = new Image();
    preloadedSpinner.current =
      "/static/media/astronaut.b1a1ee798468896cc431.png";
  }, []);

  const rocketRotate = () => {
    setTimeout(() => {
      setmove(!moveRocket);
    }, 1500);
  };

  useEffect(() => {
    stateManagement(homepageRef, 0);
  }, []);
  return (
    <section
      ref={homepageRef}
      id="homepage"
      onClick={closeMobileMenu}
      style={{ backgroundImage: `url(${preloadedSpinner.current})` }}
    >
      <h1 className="homepage-title lightblue">Nikos Gkikas</h1>
      <h2 className="homepage-subtitle lightblue">Front End Web Developer</h2>
      {ismobile == false && <Rocket moveRocket={moveRocket} />}
    </section>
  );
};

export default Homepage;
