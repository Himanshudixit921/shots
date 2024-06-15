import React from "react";
import styles from "./Tagbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setTagState } from "../../../app/store";

const Tagbar = () => {
  const dispatch = useDispatch();
  const activetagState = useSelector((state) => state.frame.tagState);

  const handleTagClick = (value) => {
    dispatch(setTagState(value));
  };

  const getTagClass = (tag) => {
    return `${styles.label} ${activetagState === tag ? styles.active : ""}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.tagContainer}>
        <div
          onClick={() => handleTagClick("All")}
          className={getTagClass("All")}
        >
          All
        </div>
        <div
          onClick={() => handleTagClick("Phones")}
          className={getTagClass("Phones")}
        >
          Phones
        </div>
        <div
          onClick={() => handleTagClick("Laptop")}
          className={getTagClass("Laptop")}
        >
          Laptop
        </div>
        <div
          onClick={() => handleTagClick("Desktops")}
          className={getTagClass("Desktops")}
        >
          Desktops
        </div>
      </div>
    </div>
  );
};

export default Tagbar;
