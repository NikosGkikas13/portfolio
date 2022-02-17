import React from "react";
import asteroid from "../images/asteroid.png";
import "../css/skills.css";

const SkillList = (props) => {
  const { skills } = props;
  return (
    <ul className="skills-list">
      {skills.map((skill) => {
        return (
          <li>
            <img className="asteroid" src={asteroid} alt="" />
            <p>{skill}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default SkillList;
