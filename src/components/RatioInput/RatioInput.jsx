import React, { useState } from "react";
import styles from "./ratioinput.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setActiveAspect } from "../../app/store";

const RatioInput = () => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [showWidthError, setShowWidthError] = useState(false);
  const [showHeightError, setShowHeightError] = useState(false);
  const dispatch = useDispatch();
  const isValidNumber = (value, min, max) => {
    const num = Number(value);
    return /^\d+$/.test(value) && num >= min && num <= max;
  };

  const isWidthValid = isValidNumber(width, 128, 1920);
  const isHeightValid = isValidNumber(height, 128, 1440);
  const isButtonEnabled = isWidthValid && isHeightValid;

  const handleWidthChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setWidth(value);
    }
  };

  const handleHeightChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setHeight(value);
    }
  };

  const handleSubmit = () => {
    if (!isWidthValid) {
      setShowWidthError(true);
      setTimeout(() => setShowWidthError(false), 2500);
    }
    if (!isHeightValid) {
      setShowHeightError(true);
      setTimeout(() => setShowHeightError(false), 2500);
    }
    if (isButtonEnabled) {
      setWidth("");
      setHeight("");
      let aspectWidth = parseInt(width);
      let aspectHeight = parseInt(height);
      dispatch(setActiveAspect({ width: aspectWidth, height: aspectHeight }));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.label}>Size</div>
        <div className={styles.functionContainer}>
          <div className={styles.inputContainer}>
            <div className={styles.icon}>W</div>
            <div
              className={`${styles.error} ${
                showWidthError ? styles.visible : ""
              }`}
            >
              <div>Min: 128 Max: 1920</div>
            </div>
            <input
              className={styles.input}
              type="text"
              placeholder="1920"
              value={width}
              onChange={handleWidthChange}
              onKeyDown={handleKeyDown}
            ></input>
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.icon}>H</div>
            <div
              className={`${styles.error} ${
                showHeightError ? styles.visible : ""
              }`}
            >
              <div>Min: 128 Max: 1440</div>
            </div>
            <input
              className={styles.input}
              type="text"
              placeholder="1440"
              value={height}
              onChange={handleHeightChange}
              onKeyDown={handleKeyDown}
            ></input>
          </div>
          <div
            className={`${styles.submitButton} ${
              isButtonEnabled ? styles.enabled : styles.disabled
            }`}
            onClick={handleSubmit}
          >
            <MdKeyboardArrowRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default RatioInput;
