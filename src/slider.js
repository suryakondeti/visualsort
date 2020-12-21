import React, { useState } from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
import App from "./App";

const MySlider = () => {
  const [value, setValue] = useState(0);
  return (
    <div style={{ width: 300 }}>
      <RangeSlider
        value={value}
        min={0}
        max={200}
        step={5}
        onChange={(changeEvent) => {
          setValue(changeEvent.target.value);
          console.log(changeEvent.target.value);
          this.sliderUpdate(changeEvent.target.value);
        }}
      />
    </div>
  );
};

export default MySlider;
