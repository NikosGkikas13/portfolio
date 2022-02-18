import React, { useState } from "react";

const CompanyProject = (props) => {
  const { title, url, stacks, img } = props;
  const [backgroundImg, setBackgroundImg] = useState({
    backgroundImage: `url(${img})`,
  });
  const [hover, setHover] = useState(false);
  return (
    <div
      className="company-project"
      style={backgroundImg}
      onClick={() => window.open(url, "blank")}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover && (
        <div className="company-project-text">
          <h3>{title}</h3>
          <div>
            {stacks.map((stack) => {
              return <span className="stack">{stack}</span>;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyProject;
