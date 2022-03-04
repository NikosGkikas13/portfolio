import React from "react";
import rocket from "../images/rocket.png";
import text_bubble from "../images/text-bubble-removebg-preview.png";
import "../css/rocket.css";

import { useSelector } from "react-redux";
const Rocket = (props) => {
  const moveRocket = useSelector((state) => state.link.value.moveRocket);
  const rocketText = useSelector((state) => state.link.value.text);
  return (
    <>
      <img
        className={`rocket ${moveRocket ? "bounce" : "rotate"} `}
        src={rocket}
        alt=""
      />
      {moveRocket && (
        <img
          className={`rocket text-bubble ${moveRocket ? "bounce" : "rotate"} `}
          src={text_bubble}
          alt=""
        />
      )}
      {moveRocket && rocketText && (
        <p
          className={`rocket rocket-text ${moveRocket ? "bounce" : "rotate"} `}
        >
          {rocketText}
        </p>
      )}
    </>
  );
};

export default Rocket;
