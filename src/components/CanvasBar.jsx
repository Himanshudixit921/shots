import React from "react";
import styles from "./CanvasBar.module.css";
import { useSelector } from "react-redux";
import ConfigureFrame from "./Frames/configureFrame/configureFrame";
const CanvasBar = () => {
  const activeFrameType = useSelector((state) => state.frame.activeFrameType);
  const bgColor = useSelector((state) => state.frame.frameBgColor);
  const imageScale = useSelector((state) => state.frame.imageScale);
  const transparentBackground = useSelector(
    (state) => state.frame.transparentBackground
  );
  const canvasBgStyle = {
    backgroundColor: transparentBackground ? "transparent" : bgColor,
  };
  const mediaFile = useSelector((state) => state.media.mediaFile);
  const imageContainerStyle = {
    scale: `${imageScale}`,
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundImage: `url('${mediaFile}')`,
  };
  const changeStyle = {
    height: `${activeFrameType.height}`,
    width: `${activeFrameType.width}`,
    backgroundColor: "transparent",
  };
  return (
    <div className={transparentBackground ? styles.wrapper : undefined}>
      <div className={styles.mainContainer}>
        <div
          id="canvas-container"
          className={styles.container}
          style={canvasBgStyle}
        >
          <div
            className={styles.canvas}
            id="transparent-container"
            style={changeStyle}
          >
            <div className={styles.browserFrame} id="frame-container">
              <ConfigureFrame>
                <div
                  id="image-container"
                  className={styles.imageContainer}
                  style={imageContainerStyle}
                ></div>
              </ConfigureFrame>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanvasBar;
