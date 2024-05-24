import * as React from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const PrettoSlider = styled(Slider)({
  color: "#FF6B18",
  height: 5,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 20,
    width: 20,
    backgroundColor: "#FF6B18",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&::before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 35,
    height: 35,
    letterSpacing: 1,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#FF6B18",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&::before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
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
      <p style={{ color: "#AAAAAA", transform: "translateX(-12px)" }}>
        {label}
      </p>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={value}
        min={min}
        max={max}
        step={step}
        onChange={handleSliderValue}
      />
    </Box>
  );
}
