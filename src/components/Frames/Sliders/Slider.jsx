import * as React from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import styles from "./sliders.module.css";

const PrettoSlider = styled(Slider)({
  height: 2,
  width: "95%",
  color: "white",
  "& .MuiSlider-track": {
    border: "none",
    backgroundColor: "#71A3EF",
  },
  "& .MuiSlider-thumb": {
    height: 15,
    width: 15,
    backgroundColor: "#72A5F3",

    "&::before": {
      display: "none",
    },
  },
});

export default function CustomizedSlider({ prop, onChange }) {
  const { label, max, min, step, value } = prop;
  const handleSliderValue = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };
  return (
    <Box sx={{ width: "100%" }}>
      <p
        style={{
          color: "#FFFFFF",
          fontSize: "14px",
          marginBottom: "4px",
        }}
      >
        {label}
      </p>
      <div className={styles.container}>
        <div className={styles.label}>0%</div>
        <PrettoSlider
          aria-label="pretto slider"
          defaultValue={value}
          min={min}
          max={max}
          step={step}
          onChange={handleSliderValue}
          style={{ marginRight: "2px" }}
        />
        <div className={styles.label}>100%</div>
      </div>
    </Box>
  );
}
