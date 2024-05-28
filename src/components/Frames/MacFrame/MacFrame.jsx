import React from "react";
import styles from "./MacFrame.module.css";
import { useSelector } from "react-redux";

const MacFrame = ({ children }) => {
  const frameShadowOpacity = useSelector(
    (state) => state.frame.frameShadowOpacity
  );
  const frameStyle = {
    boxShadow: `9px 2px 25px rgba(0, 0, 0, ${frameShadowOpacity})`,
  };
  return (
    <div className={styles.window} id="mac_frame_window">
      <div className={styles.winhead} id="mac_frame_winhead">
        <div className={styles.button}>
          <div className={styles.close} id="mac_frame_button_close"></div>
          <div className={styles.min} id="mac_frame_button_min"></div>
          <div className={styles.max} id="mac_frame_button_max"></div>
        </div>
      </div>
      <div className={styles.winbody} id="mac_frame_winbody">
        <div
          className={styles.dropShadow}
          style={frameStyle}
          id="mac_frame_dropShadow"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default MacFrame;
