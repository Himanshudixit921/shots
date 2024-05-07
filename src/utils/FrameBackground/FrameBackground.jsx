import React from "react";
import styles from "./FrameBackground.module.css";
import cn from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { setActiveFrameBgColor, setBackgroundColor } from "../../app/store";
import { FRAME_BACKGROUND_ITEMS } from "../constants";
const FrameBackground = () => {
  const bgColor = useSelector((state) => state.frameBgColor);
  const activeFrameBg = useSelector((state) => state.activeFrameBg);
  const bgStyle = {
    backgroundColor: bgColor,
  };
  const dispatch = useDispatch();
  const handleBackgroundColorChange = (e) => {
    dispatch(setBackgroundColor(e.target.value));
  };
  const handleFrameBgChange = (currentFrameBg) => {
    dispatch(setActiveFrameBgColor(currentFrameBg));
  };
  return (
    <>
      <div className={styles.container}>
        <span className={styles.text}> Frame Background</span>
        <div className={styles.colorContainer}>
          <div
            className={cn(styles.transparent, {
              [styles.active]:
                activeFrameBg === FRAME_BACKGROUND_ITEMS.TRANSPARENT,
            })}
            onClick={() =>
              handleFrameBgChange(FRAME_BACKGROUND_ITEMS.TRANSPARENT)
            }
          >
            <div className="flex flex-row justify-center overflow-hidden">
              <img
                className={styles.image}
                src="icons/Group2.png"
                alt="not found"
              />
            </div>
            <span className={`${styles.text} text-center`}>Transparent</span>
          </div>
          <label for="colorinput">
            <div
              className={cn(styles.color, {
                [styles.active]: activeFrameBg === FRAME_BACKGROUND_ITEMS.COLOR,
              })}
              onClick={() => handleFrameBgChange(FRAME_BACKGROUND_ITEMS.COLOR)}
            >
              <div className="flex flex-row justify-center">
                <div className={styles.bgimage} style={bgStyle}></div>
              </div>
              <span className={`${styles.text} text-center`}>Color</span>
              <input
                type="color"
                value={bgColor}
                onChange={handleBackgroundColorChange}
                id="colorinput"
              />
            </div>
          </label>
          <div
            className={cn(styles.background, {
              [styles.active]:
                activeFrameBg === FRAME_BACKGROUND_ITEMS.BACKGROUND,
            })}
            onClick={() =>
              handleFrameBgChange(FRAME_BACKGROUND_ITEMS.BACKGROUND)
            }
          >
            <div className="flex flex-row justify-center">
              <img
                className={styles.image}
                src="icons/bgimage.png"
                alt="not found"
              />
            </div>
            <span className={`${styles.text} text-center`}>Background</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameBackground;
