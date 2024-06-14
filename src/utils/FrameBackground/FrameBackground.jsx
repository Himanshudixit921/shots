import React from "react";
import styles from "./FrameBackground.module.css";
import cn from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { setActiveFrameBgColor, setBackgroundColor } from "../../app/store";
import { FRAME_BACKGROUND_ITEMS } from "../constants";
import ColorAction from "./frameBackgroundActions/colorAction/ColorAction";
import BackgroundAction from "./frameBackgroundActions/BackgroundAction/BackgroundAction";
import TransparentAction from "./frameBackgroundActions/transparenrAction/TransparentAction";
const FrameBackground = () => {
  const bgColor = useSelector((state) => state.frame.frameBgColor);
  const activeFrameBg = useSelector((state) => state.frame.activeFrameBg);

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
        <span className={styles.label}> Background</span>

        <div className={styles.colorContainer}>
          <div className={styles.button}>
            <label for="colorinput">
              <div
                className={cn(styles.color, {
                  [styles.active]:
                    activeFrameBg === FRAME_BACKGROUND_ITEMS.COLOR,
                })}
                onClick={() =>
                  handleFrameBgChange(FRAME_BACKGROUND_ITEMS.COLOR)
                }
              >
                <span className={`${styles.text} text-center`}>Color</span>
                <input
                  type="color"
                  value={bgColor}
                  onChange={handleBackgroundColorChange}
                  id="colorinput"
                />
              </div>
            </label>
          </div>
          <div className={styles.button}>
            <div
              className={cn(styles.transparent, {
                [styles.active]:
                  activeFrameBg === FRAME_BACKGROUND_ITEMS.TRANSPARENT,
              })}
              onClick={() =>
                handleFrameBgChange(FRAME_BACKGROUND_ITEMS.TRANSPARENT)
              }
            >
              <div className="flex flex-row justify-center overflow-hidden"></div>
              <span className={`${styles.text} text-center`}>Transparent</span>
            </div>
          </div>
          <div className={styles.button}>
            <div
              className={cn(styles.background, {
                [styles.active]:
                  activeFrameBg === FRAME_BACKGROUND_ITEMS.BACKGROUND,
              })}
              onClick={() =>
                handleFrameBgChange(FRAME_BACKGROUND_ITEMS.BACKGROUND)
              }
            >
              <span className={`${styles.text} text-center`}>Image</span>
            </div>
          </div>
        </div>
        {activeFrameBg === FRAME_BACKGROUND_ITEMS.COLOR && <ColorAction />}
        {activeFrameBg === FRAME_BACKGROUND_ITEMS.BACKGROUND && (
          <BackgroundAction />
        )}
        {activeFrameBg === FRAME_BACKGROUND_ITEMS.TRANSPARENT && (
          <TransparentAction />
        )}
      </div>
    </>
  );
};

export default FrameBackground;
