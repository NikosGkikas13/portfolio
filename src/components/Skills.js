import React, { useEffect, useRef } from "react";
import "../css/skills.css";

const Skills = (props) => {
  const { stateManagement } = props;
  const skillsRef = useRef();
  useEffect(() => {
    stateManagement(skillsRef, 2);
  }, []);
  return (
    <section ref={skillsRef} id="skills">
      Skills
    </section>
  );
};

export default Skills;
