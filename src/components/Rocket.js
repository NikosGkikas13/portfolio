import React from "react";
import rocket from "../images/rocket.png";
import "../css/rocket.css";
const Rocket = (props) => {
  const { moveRocket } = props;

  return (
    <img
      className={`rocket ${moveRocket ? "bounce" : "rotate"} `}
      src={rocket}
      alt=""
    />
  );
};

export default Rocket;
