import React from "react";
import styles from "./CanvasBar.module.css";
import MacFrame from "../components/Frames/MacFrame/MacFrame";
import { useSelector } from "react-redux";

const CanvasBar = () => {
  const frameShadowOpacity = useSelector(
    (state) => state.frame.frameShadowOpacity
  );
  const bgColor = useSelector((state) => state.frame.frameBgColor);
  const imageScale = useSelector((state) => state.frame.imageScale);
  const transparentBackground = useSelector(
    (state) => state.frame.transparentBackground
  );
  const canvasBgStyle = {
    backgroundColor: transparentBackground ? "transparent" : bgColor,
  };
  const imageContainerStyle = {
    scale: `${imageScale}`,
  };
  const frameStyle = {
    boxShadow: `10px 10px 20px rgba(0, 0, 0, ${frameShadowOpacity})`,
  };
  console.log(imageScale);
  return (
    <div className={transparentBackground ? styles.wrapper : undefined}>
      <div className={styles.mainContainer}>
        <div
          id="canvas-container"
          className={styles.container}
          style={canvasBgStyle}
        >
          <div className={styles.canvas} id="transparent-container">
            <div
              className={styles.browserFrame}
              id="frame-container"
              style={frameStyle}
            >
              <MacFrame>
                <div
                  id="image-container"
                  className={styles.imageContainer}
                  style={imageContainerStyle}
                ></div>
              </MacFrame>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanvasBar;
