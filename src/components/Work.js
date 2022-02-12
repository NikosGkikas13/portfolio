import React, { useEffect, useRef } from "react";
import "../css/work.css";
const Work = (props) => {
  const { stateManagement } = props;
  const workRef = useRef();
  useEffect(() => {
    stateManagement(workRef, 3);
  }, []);
  return (
    <section ref={workRef} id="work">
      Work
    </section>
  );
};

export default Work;
