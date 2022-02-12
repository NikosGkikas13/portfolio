import React, { useEffect, useRef } from "react";
import "../css/about.css";
const About = (props) => {
  const { stateManagement } = props;
  const aboutRef = useRef();
  useEffect(() => {
    stateManagement(aboutRef, 1);
  }, []);
  return (
    <section ref={aboutRef} id="about">
      About
    </section>
  );
};

export default About;
