import React, { useEffect } from "react";
import styles from "./CanvasBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import ConfigureFrame from "./Frames/configureFrame/configureFrame";
import { changeCanvasSize } from "../app/store";

const CanvasBar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const canvasContainer = document.getElementById("canvas-container");
    if (canvasContainer) {
      const height = canvasContainer.offsetHeight;
      const width = canvasContainer.offsetWidth;
      dispatch(changeCanvasSize({ height, width }));
    }
  }, [dispatch]);

  const activeFrameType = useSelector((state) => state.frame.activeFrameType);
  const bgColor = useSelector((state) => state.frame.frameBgColor);
  const imageScale = useSelector((state) => state.frame.imageScale);
  const coordinateX = useSelector((state) => state.parameter.frameX);
  const coordinateY = useSelector((state) => state.parameter.frameY);
  const frameScale = useSelector((state) => state.parameter.frameScale);
  const transparentBackground = useSelector(
    (state) => state.frame.transparentBackground
  );
  const isUploadedMedia = useSelector((state) => state.media.uploadedMedia);
  const canvasBgStyle = {
    backgroundColor: transparentBackground ? "transparent" : bgColor,
  };
  const mediaFile = useSelector((state) => state.media.mediaFile);
  const imageCoordinateX = useSelector((state) => state.parameter.imageX);
  const imageCoordinateY = useSelector((state) => state.parameter.imageY);

  const changeStyle = {
    height: `${activeFrameType.height}`,
    width: `${activeFrameType.width}`,
    backgroundColor: "transparent",
    transform: `translate(${coordinateX}px, ${coordinateY}px)`,
    scale: `${frameScale}`,
  };

  return (
    <div
      id="download_container"
      className={
        transparentBackground ? styles.wrapper : styles.transparentWrapper
      }
    >
      <div className={styles.mainContainer}>
        <div
          id="canvas-container"
          className={styles.container}
          style={canvasBgStyle}
        >
          <div
            className={styles.canvas}
            id="transparent_container"
            style={changeStyle}
          >
            <div className={styles.browserFrame} id="frame-container">
              <ConfigureFrame>
                <div className={styles.imageContainer}>
                  {isUploadedMedia && (
                    <img
                      src={mediaFile}
                      alt="Drop File"
                      style={{
                        transform: `scale(${imageScale}) translate(${imageCoordinateX}px, ${imageCoordinateY}px)`,
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        objectFit: "contain",
                      }}
                    />
                  )}
                </div>
              </ConfigureFrame>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanvasBar;
