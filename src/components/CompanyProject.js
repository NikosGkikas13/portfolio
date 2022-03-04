import React, { useState } from "react";

const CompanyProject = (props) => {
  const { title, url, stacks, img } = props;
  const [backgroundImg, setBackgroundImg] = useState({
    backgroundImage: `url(${img})`,
  });
  const [hover, setHover] = useState(false);
  const handleHover = (ishover, img) => {
    setHover(ishover);
    // setBackgroundImg(img);
  };
  return (
    <div
      className="company-project"
      style={backgroundImg}
      // onMouseEnter={() => handleHover(true)}
      // onMouseLeave={() => handleHover(false)}
    >
      <div className="company-project-text">
        <h3>{title}</h3>
        <div>
          {stacks.map((stack) => {
            return <span className="stack">{stack}</span>;
          })}
        </div>
        <button onClick={() => window.open(url, "blank")}>Visit Website</button>
      </div>
    </div>
  );
};

export default CompanyProject;
