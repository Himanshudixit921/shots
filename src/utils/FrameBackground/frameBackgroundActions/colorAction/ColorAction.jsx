import React from "react";
import styles from "./colorAction.module.css";
import { useSelector } from "react-redux";
const ColorAction = () => {
  const bgColor = useSelector((state) => state.frame.frameBgColor);
  const circleColor = {
    backgroundColor: bgColor,
  };
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.text}>{bgColor.toUpperCase()}</div>
        <div className={styles.colorIndicator}>
          <div className={styles.changeIcon} style={circleColor}></div>
        </div>
      </div>
    </div>
  );
};

export default ColorAction;
