import React, { useEffect, useRef } from "react";
import "../css/skills.css";
import SkillList from "./SkillList";
import { data } from "../data";
const Skills = (props) => {
  const { stateManagement, closeMobileMenu } = props;
  const skillsRef = useRef();
  useEffect(() => {
    stateManagement(skillsRef, 2);
  }, []);
  return (
    <section ref={skillsRef} id="skills" onClick={closeMobileMenu}>
      <div className="lang-icons-container">
        {data.skills.map((item) => {
          return (
            <div className="lang-div">
              <img src={item.img} alt="" />
              <SkillList skills={item.skills} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
