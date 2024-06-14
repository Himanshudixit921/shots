import React from "react";
import { SketchPicker } from "react-color";
import styles from "./FrameBackground.module.css";

const ColorPicker = React.forwardRef(({ onChange }, ref) => {
  const handleChange = (color) => {
    onChange(color.hex);
  };

  return (
    <div ref={ref} className={styles.colorPicker}>
      <SketchPicker
        color="#ffffff"
        onChange={handleChange}
        disableAlpha={true}
        className={styles.sketchPicker}
      />
    </div>
  );
});

export default ColorPicker;
