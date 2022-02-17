import React, { useEffect, useRef } from "react";
import "../css/skills.css";
import sun from "../images/sun.png";
import c from "../images/languages/c.png";
import react from "../images/languages/react.png";
import jquery from "../images/languages/jquery.png";
import php from "../images/languages/php.png";
import js from "../images/languages/js.png";
import wordpress from "../images/languages/wordpress.png";
import html5 from "../images/languages/html5.png";
import css3 from "../images/languages/css3.png";
import SkillList from "./SkillList";
const Skills = (props) => {
  const { stateManagement } = props;
  const skillsRef = useRef();
  useEffect(() => {
    stateManagement(skillsRef, 2);
  }, []);
  return (
    <section ref={skillsRef} id="skills">
      <div className="solar-system">
        <div className="lang-icons-container">
          <div>
            <img className="lang-icon react" src={react} alt="" />
            <SkillList
              skills={[
                "Redux / Redux Toolkit",
                "Styled Components",
                "GraphQL / ApolloClient",
                "Axios",
                "Context",
              ]}
            />
          </div>
          <div>
            <img className="lang-icon c" src={c} alt="" />
          </div>
          <div>
            <img className="lang-icon jquery" src={jquery} alt="" />
            <SkillList skills={["Rest API", "Async Fetching", "AJAX"]} />
          </div>
          <div>
            <img className="lang-icon js" src={js} alt="" />
            <SkillList skills={["Rest API", "Async Fetching", "ES6"]} />
          </div>
          <div>
            <img
              className="lang-icon wordpess"
              src={wordpress}
              style={{ visibility: "hidden" }}
              alt=""
            />
          </div>
          <div>
            <img className="lang-icon wordpess" src={wordpress} alt="" />
            <SkillList skills={["Theme Development"]} />
          </div>
          <div>
            <img className="lang-icon php" src={php} alt="" />
            <SkillList
              skills={[
                "Vanilla PHP",
                "Database connection",
                "Laravel familiarity",
              ]}
            />
          </div>
          <div>
            <img className="lang-icon html5" src={html5} alt="" />
          </div>
          <div>
            <img className="lang-icon css3" src={css3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
