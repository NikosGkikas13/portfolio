import React, { useState } from "react";
import "../css/work.css";

const Project = (props) => {
  const { title, url, img, stacks } = props;
  const [hover, setHover] = useState(false);
  const [backgroundImg, setBackgroundImg] = useState({
    backgroundImage: `url(${img})`,
  });
  const isHover = () => {
    setHover(true);
    // setBackgroundImg({
    //   backgroundImage: ` linear-gradient(black, black),url(${img})`,
    // });
  };
  const isNotHover = () => {
    setHover(false);
    // setBackgroundImg({
    //   backgroundImage: `url(${img})`,
    // });
  };
  return (
    <div
      className="project"
      style={backgroundImg}
      onClick={() => window.open(url, "blank")}
      onMouseEnter={isHover}
      onMouseLeave={isNotHover}
    >
      {/* <img src={img} /> */}
      {hover && (
        <div className="stacks">
          {stacks.map((stack) => {
            return <span className="stack">{stack}</span>;
          })}
        </div>
      )}
    </div>
  );
};

export default Project;
