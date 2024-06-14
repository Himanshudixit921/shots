import React, { useState, useEffect, useRef } from "react";
import styles from "./FrameBackground.module.css";
import cn from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { setActiveFrameBgColor, setBackgroundColor } from "../../app/store";
import { FRAME_BACKGROUND_ITEMS } from "../constants";
import ColorAction from "./frameBackgroundActions/colorAction/ColorAction";
import BackgroundAction from "./frameBackgroundActions/BackgroundAction/BackgroundAction";
import TransparentAction from "./frameBackgroundActions/transparenrAction/TransparentAction";
import ColorPicker from "./ColorPicker";

const FrameBackground = () => {
  const activeFrameBg = useSelector((state) => state.frame.activeFrameBg);

  const dispatch = useDispatch();
  const [colorPickerVisible, setColorPickerVisible] = useState(false);
  const colorPickerRef = useRef(null);

  const handleBackgroundColorChange = (color) => {
    dispatch(setBackgroundColor(color));
  };

  const handleFrameBgChange = (currentFrameBg) => {
    dispatch(setActiveFrameBgColor(currentFrameBg));
    setColorPickerVisible(currentFrameBg === FRAME_BACKGROUND_ITEMS.COLOR);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        colorPickerRef.current &&
        !colorPickerRef.current.contains(event.target)
      ) {
        setColorPickerVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.label}> Background</span>

      <div className={styles.colorContainer} id="colorContainer">
        <div className={styles.button}>
          <div
            className={cn(styles.color, {
              [styles.active]: activeFrameBg === FRAME_BACKGROUND_ITEMS.COLOR,
            })}
            onClick={() => handleFrameBgChange(FRAME_BACKGROUND_ITEMS.COLOR)}
          >
            <span className={`${styles.text} text-center`}>Color</span>
          </div>
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
            <div className="flex flex-row justify-center "></div>
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

      {activeFrameBg === FRAME_BACKGROUND_ITEMS.COLOR && (
        <>
          <ColorAction />
          {colorPickerVisible && (
            <ColorPicker
              ref={colorPickerRef}
              onChange={handleBackgroundColorChange}
            />
          )}
        </>
      )}
      {activeFrameBg === FRAME_BACKGROUND_ITEMS.BACKGROUND && (
        <BackgroundAction />
      )}
      {activeFrameBg === FRAME_BACKGROUND_ITEMS.TRANSPARENT && (
        <TransparentAction />
      )}
    </div>
  );
};

export default FrameBackground;
