import React from "react";
import styles from "./transparentAction.module.css";
import { MdOutlineInfo } from "react-icons/md";
const TransparentAction = () => {
  return (
    <div>
      <div className={styles.customBtn}>
        <div className={styles.icon}>
          <MdOutlineInfo />
        </div>
        <div className={styles.text}>
          <div>Save as PNG for preserving transparency</div>
        </div>
      </div>
    </div>
  );
};

export default TransparentAction;
