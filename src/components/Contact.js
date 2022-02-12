import React, { useEffect, useRef } from "react";
import "../css/contact.css";
const Contact = (props) => {
  const contactRef = useRef();
  const { stateManagement } = props;
  useEffect(() => {
    stateManagement(contactRef, 4);
  }, []);
  return (
    <section ref={contactRef} id="contact">
      Contact
    </section>
  );
};

export default Contact;
