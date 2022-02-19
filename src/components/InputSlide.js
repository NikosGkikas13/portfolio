import React, { useEffect, useState } from "react";

const InputSlide = (props) => {
  const { value, onchange } = props;
  const [valueLimit, setValueLimit] = useState(true);
  const changeInput = (e) => {
    onchange(e.target.value);
  };

  useEffect(() => {
    value < 99 ? setValueLimit(true) : setValueLimit(false);
    console.log(`useffect valuelimit is ${valueLimit}`);
    const interval = setInterval(() => {
      {
        valueLimit && onchange(value + 1);
      }
      console.log("value is " + value);
    }, 35);

    return () => clearInterval(interval);
  }, [value]);
  return (
    <div className="intro-input">
      <input type="range" value={value} onChange={changeInput} />
      <h2>{value}%</h2>
    </div>
  );
};

export default InputSlide;
