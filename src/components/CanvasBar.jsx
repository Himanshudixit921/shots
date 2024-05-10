import React from "react";
import styles from "./CanvasBar.module.css";
import MacFrame from "./MacFrame";
import { useSelector } from "react-redux";
const CanvasBar = () => {
  const bgColor = useSelector((state) => state.frame.frameBgColor);
  const transparentBackground = useSelector(
    (state) => state.frame.transparentBackground
  );
  const canvasBgStyle = {
    backgroundColor: transparentBackground ? "transparent" : bgColor,
  };
  return (
    <div className={transparentBackground ? styles.wrapper : undefined}>
      <div
        id="canvas-container"
        className={styles.container}
        style={canvasBgStyle}
      >
        <div className={styles.canvas} id="transparent-container">
          <div className={styles.browserFrame} id="frame-container">
            <MacFrame>
              <div id="image-container" className={styles.imageContainer}></div>
            </MacFrame>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanvasBar;
