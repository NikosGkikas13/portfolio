import React, { useState } from "react";
import "../css/work.css";
import { data } from "../data";

const FreelanceProject = (props) => {
  const { title, url, img, stacks, intro, contains, direction } = props;
  const [hover, setHover] = useState(false);
  const [backgroundImg, setBackgroundImg] = useState({
    backgroundImage: `url(${img})`,
  });
  const projectClassList = `project-container ${
    direction % 2 != 0 ? "flex-reverse" : ""
  }`;
  const projectTextClassList = `project-text ${
    direction % 2 != 0 ? "reverse" : ""
  }`;
  return (
    <div className={projectClassList}>
      <div
        className="project"
        style={backgroundImg}
        onClick={() => window.open(url, "blank")}
      >
        {hover && (
          <div className="stacks">
            {stacks.map((stack) => {
              return <span className="stack">{stack}</span>;
            })}
          </div>
        )}
      </div>
      <div className={projectTextClassList}>
        <h2>{intro}</h2>
        <h3>{contains}</h3>
        <div className="stacks">
          {stacks.map((stack) => {
            return <span className="stack">{stack}</span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default FreelanceProject;
