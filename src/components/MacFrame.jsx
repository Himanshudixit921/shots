import React from "react";
import styles from "./MacFrame.module.css";

const MacFrame = ({ children }) => {
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
      <div className={styles.winbody}>{children}</div>
    </div>
  );
};

export default MacFrame;
