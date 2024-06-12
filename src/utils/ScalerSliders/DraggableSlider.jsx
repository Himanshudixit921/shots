import React, { useState, useRef, useEffect, useCallback } from "react";
import styles from "./DraggableSlider.module.css"; // Adjust the path as needed

const DraggableSlider = ({ prop, onChange, children }) => {
  const minDistanceToStart = 5;
  const shiftKeyMultiple = 10;
  const { minValue, maxValue, initalValue } = prop;
  const [dragState, setDragState] = useState(0);
  const [currentValue, setCurrentValue] = useState(initalValue);
  const [cursorStyle, setCursorStyle] = useState("ew-resize");
  const [isFocused, setIsFocused] = useState(false);
  const initialPosition = useRef({ x: 0, y: 0 });
  const initialValue = useRef(initalValue);
  const initialShiftKey = useRef(0);

  const clampValue = useCallback(
    (value) => {
      if (value < minValue) return minValue;
      if (value > maxValue) return maxValue;
      return value;
    },
    [minValue, maxValue]
  );

  const handleMouseDown = (e) => {
    initialPosition.current = { x: e.pageX, y: e.pageY };
    initialValue.current = currentValue;

    if (e.shiftKey) {
      initialShiftKey.current = 1;
    }

    setDragState(1);
    setCursorStyle("ew-resize");
    document.body.classList.add(styles.grabbing);
    document.body.classList.add(styles.noSelect);
  };

  const handleMouseMove = useCallback(
    (e) => {
      if (
        dragState === 1 &&
        Math.abs(initialPosition.current.x - e.pageX) > minDistanceToStart
      ) {
        setDragState(2);
      }
      if (dragState === 2) {
        e.preventDefault();
        const newValue =
          initialValue.current +
          (e.pageX - initialPosition.current.x) *
            (initialShiftKey.current ? shiftKeyMultiple : 1);
        setCurrentValue(clampValue(newValue));
        if (onChange) {
          onChange(clampValue(newValue));
        }
      }
    },
    [dragState, minDistanceToStart, clampValue, shiftKeyMultiple, onChange]
  );

  const handleMouseUp = useCallback(() => {
    reset();
  }, []);

  const reset = () => {
    initialPosition.current = { x: 0, y: 0 };
    initialValue.current = 0;
    initialShiftKey.current = 0;
    setDragState(0);
    setCursorStyle("ew-resize");
    document.body.classList.remove(styles.grabbing);
    document.body.classList.remove(styles.noSelect);
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    if (newValue === "" || newValue === "-" || /^-?\d*\.?\d*$/.test(newValue)) {
      if (newValue === "") {
        setCurrentValue("");
      } else if (newValue === "-") {
        setCurrentValue("-");
      } else {
        const parsedValue = parseFloat(newValue);
        if (!isNaN(parsedValue)) {
          setCurrentValue(clampValue(parsedValue));
        } else {
          setCurrentValue(newValue);
        }
      }

      if (onChange) {
        onChange(newValue);
      }
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (currentValue === "" || currentValue === "-") {
      setCurrentValue(Math.max(0, minValue));
      if (onChange) {
        onChange(Math.max(0, minValue));
      }
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <div
      className={`${styles.container} ${
        isFocused || dragState > 0 ? styles.active : ""
      }`}
    >
      <div
        className={styles.draggableSlider}
        onMouseDown={handleMouseDown}
        style={{ cursor: cursorStyle }}
      >
        <span style={{ color: "#8F8F8F" }}>{children}</span>
      </div>
      <input
        type="text"
        name="inputfield"
        className={styles.input}
        id="inputfield"
        value={currentValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
    </div>
  );
};

export default DraggableSlider;
