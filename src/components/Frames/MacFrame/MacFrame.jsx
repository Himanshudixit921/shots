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
    <div className={styles.window}>
      <div className={styles.winhead}>
        <div className={styles.button}>
          <div className={styles.close}></div>
          <div className={styles.min}></div>
          <div className={styles.max}></div>
        </div>
        <div className={styles.title}>Mac</div>
      </div>
      <div className={styles.winbody}>
        <div className={styles.dropShadow} style={frameStyle}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MacFrame;
