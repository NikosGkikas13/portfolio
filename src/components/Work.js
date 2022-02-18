import React, { useEffect, useRef } from "react";
import "../css/work.css";
import { data } from "../data";
import CompanyProject from "./CompanyProject";
import FreelanceProject from "./FreelanceProject";
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
              <FreelanceProject
                title={item.title}
                url={item.url}
                img={item.img}
                stacks={item.stacks}
                intro={item.intro}
                contains={item.contains}
                direction={item.flex_directon}
              />
            );
          })}
        </div>
      </div>
      <div className="company-work">
        <h1>Company Work</h1>
        <div className="company-projects-container">
          {data.work.company.map((item) => {
            return (
              <CompanyProject
                title={item.title}
                url={item.url}
                stacks={item.stacks}
                img={item.img}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
