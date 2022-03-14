import React, { useEffect, useRef } from "react";
import "../css/about.css";
import { data } from "../data";
import about_me_photo from "../images/about-me-photo.png";

const About = (props) => {
  const { stateManagement, closeMobileMenu } = props;
  const aboutRef = useRef();
  useEffect(() => {
    stateManagement(aboutRef, 1);
  }, []);
  return (
    <section ref={aboutRef} id="about" onClick={closeMobileMenu}>
      <div className="intro">
        <img className="self-photo" src={about_me_photo} alt="" />
        <div className="about-text-container">
          <h1 className="about-title lightblue">{data.about.title}</h1>
          <p className="about-paragraph lightblue">
            I have a Bachelor degree in Computer Engineering since 2019 and have
            been working as a front end web developer ever since.
          </p>
          <p className="about-paragraph lightblue">
            I find beauty in writting clean,responsive,thorough and
            well-structrured code for websites.
          </p>
          <p className="about-paragraph lightblue">
            My mindset is that everyday is a chance to get better and
            improve/expand my skills.
          </p>
          <p className="about-paragraph lightblue">
            Firm believer that practice makes perfect.
          </p>
          <p className="about-paragraph lightblue">
            <a href="" download>
              Download my CV here
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
