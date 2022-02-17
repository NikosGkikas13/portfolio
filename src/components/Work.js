import React, { useEffect, useRef } from "react";
import "../css/work.css";
import { data } from "../data";
import Project from "./Project";
const Work = (props) => {
  const { stateManagement } = props;
  const workRef = useRef();
  useEffect(() => {
    stateManagement(workRef, 3);
  }, []);
  console.log(data.work.freelance[0]);
  return (
    <section ref={workRef} id="work">
      <div className="freelance-work">
        <h1>Freelance Work</h1>
        <div className="freelance-projects">
          {data.work.freelance.map((item) => {
            return (
              <Project
                title={item.title}
                url={item.url}
                img={item.img}
                stacks={item.stacks}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
