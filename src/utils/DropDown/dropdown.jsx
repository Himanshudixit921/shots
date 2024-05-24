import React from "react";
import styles from "./dropdown.module.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const DropDown = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div style={{ width: "30px", height: "30px" }}>
          <img src="/logo192.png" alt="" />
        </div>
      </div>
      <div className={styles.text}>Download</div>
      <div className={styles.icon}>
        <MdOutlineKeyboardArrowDown />
      </div>
    </div>
  );
};

export default DropDown;
