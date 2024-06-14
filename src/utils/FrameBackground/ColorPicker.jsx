import React from "react";
import { SketchPicker } from "react-color";
import styles from "./FrameBackground.module.css";
const ColorPicker = ({ onChange }) => {
  const handleChange = (color) => {
    onChange(color.hex);
  };
  return (
    <div className={styles.colorPicker}>
      <SketchPicker
        color="#ffffff"
        onChange={handleChange}
        disableAlpha={true}
        className={styles.sketchPicker}
      />
    </div>
  );
};

export default ColorPicker;
