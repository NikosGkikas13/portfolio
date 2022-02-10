import React, { useState } from "react";
import "../css/homepage.css";
import rocket from "../images/rocket.png";

const Homepage = () => {
  const [x, setX] = useState();
  const [y, setY] = useState();
  const getMouseCoordinates = (e) => {
    setX(e.pageX);
    setY(e.pageY);
    console.log(`x:${x} + y:${y}`);
  };
  const rocketStyle = {
    position: "relative",
    right: "0px",
  };
  return (
    <section id="homepage" onMouseMove={getMouseCoordinates}>
      <h1 className="homepage-title">Nikos Gkikas</h1>
      <h2 className="homepage-subtitle">Front End Web Developer</h2>
      <img src={rocket} style={rocketStyle} alt="" />
    </section>
  );
};

export default Homepage;
