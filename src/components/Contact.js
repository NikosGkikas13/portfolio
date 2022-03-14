import React, { useEffect, useRef } from "react";
import "../css/contact.css";
import { data } from "../data";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Contact = (props) => {
  const contactRef = useRef();
  const { stateManagement, closeMobileMenu } = props;
  useEffect(() => {
    stateManagement(contactRef, 4);
  }, []);

  const MailButton = ({ mailto, label }) => {
    return (
      <Link
        to="#"
        onClick={(e) => {
          window.location = mailto;
          e.preventDefault();
        }}
      >
        {label}
      </Link>
    );
  };
  return (
    <>
      <section ref={contactRef} id="contact" onClick={closeMobileMenu}>
        <h1>Get in touch</h1>
        <p>Feel free to contact me about anything</p>
        <Router>
          <MailButton
            label="Send me a message"
            mailto="mailto:nikosgkikas47@gmail.com"
          />
        </Router>
      </section>
    </>
  );
};

export default Contact;
