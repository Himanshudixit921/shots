import React, { useEffect } from "react";
import styles from "./CanvasBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import ConfigureFrame from "./Frames/configureFrame/configureFrame";
import { changeCanvasSize, changeTransparentWrapperSize } from "../app/store";

const CanvasBar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const canvasContainer = document.getElementById("canvas-container");
    const wrapperContainer = document.getElementById("transparent_container");
    if (canvasContainer) {
      const height = canvasContainer.offsetHeight;
      const width = canvasContainer.offsetWidth;
      dispatch(changeCanvasSize({ height, width }));
    }
    if (wrapperContainer) {
      const height = wrapperContainer.offsetHeight;
      const width = wrapperContainer.offsetWidth;
      dispatch(changeTransparentWrapperSize({ height, width }));
    }
  }, [dispatch]);

  const activeFrameType = useSelector((state) => state.frame.activeFrameType);
  const bgColor = useSelector((state) => state.frame.frameBgColor);
  const imageScale = useSelector((state) => state.frame.imageScale);
  const coordinateX = useSelector((state) => state.parameter.frameX);
  const coordinateY = useSelector((state) => state.parameter.frameY);
  const frameScale = useSelector((state) => state.parameter.frameScale);
  const containerWidth = useSelector((state) => state.parameter.CanvasWidth);
  const activeAspectHeight = useSelector(
    (state) => state.frame.activeAspect.height
  );
  const activeAspectWidth = useSelector(
    (state) => state.frame.activeAspect.width
  );

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
  const ratio = activeAspectWidth / activeAspectHeight;
  const width = containerWidth * ratio;
  const finalWidth = (36 * width) / containerWidth;
  const scalingChild = Math.min(1.5, width / containerWidth);
  const changeStyleRatio =
    parseFloat(activeFrameType.width) / parseFloat(activeFrameType.height);
  let changeStyle = {
    width: `${(parseInt(activeFrameType.width) / 100) * containerWidth}px`,
    aspectRatio: `${changeStyleRatio}`,
    backgroundColor: "transparent",
    transform: `translate(${coordinateX}px, ${coordinateY}px)`,
    scale: `${scalingChild * frameScale}`,
  };
  let ratioStyle = {
    width: `${finalWidth}%`,
    aspectRatio: ratio,
  };

  return (
    <div
      id="download_container"
      className={
        transparentBackground ? styles.wrapper : styles.transparentWrapper
      }
      style={ratioStyle}
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
