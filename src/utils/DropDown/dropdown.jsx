import React, { useRef, useEffect, useState } from "react";
import styles from "./dropdown.module.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import DropDownOption from "./dropDownOption";
import { useSelector } from "react-redux";

const DropDown = () => {
  const [showOption, setShowOption] = useState(false);
  const dropDownRef = useRef(null);
  const iconRef = useRef(null);
  const activeFrameType = useSelector((state) => state.frame.activeFrameType);
  const handleDropDownClick = () => {
    setShowOption((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target) &&
        iconRef.current &&
        !iconRef.current.contains(event.target)
      ) {
        setShowOption(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <div style={{ width: "30px", height: "30px" }}>
            <img src="/logo192.png" alt="" />
          </div>
        </div>
        <div className={styles.text}>{activeFrameType.label}</div>
        <div
          className={styles.icon}
          onClick={handleDropDownClick}
          ref={iconRef}
        >
          <MdOutlineKeyboardArrowDown />
        </div>
      </div>
      {showOption && (
        <div className={styles.dropdownContainer} ref={dropDownRef}>
          <DropDownOption prop={showOption} />
        </div>
      )}
    </>
  );
};

export default DropDown;
