import React, { useRef, useEffect } from "react";
import styles from "./Tagbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setTagState } from "../../../app/store";

const Tagbar = () => {
  const dispatch = useDispatch();
  const activetagState = useSelector((state) => state.frame.tagState);
  const tagContainerRef = useRef(null); // Ref for the tagContainer

  const handleTagClick = (value) => {
    dispatch(setTagState(value));
  };

  const getTagClass = (tag) => {
    return `${styles.label} ${activetagState === tag ? styles.active : ""}`;
  };

  useEffect(() => {
    const el = tagContainerRef.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 100000,
          behavior: "smooth",
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, [tagContainerRef]);

  return (
    <div className={styles.container}>
      <div className={styles.tagContainer} ref={tagContainerRef}>
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
        <div
          onClick={() => handleTagClick("Tablets")}
          className={getTagClass("Tablets")}
        >
          Tablets
        </div>
        <div
          onClick={() => handleTagClick("Wearables")}
          className={getTagClass("Wearables")}
        >
          Wearables
        </div>
      </div>
    </div>
  );
};

export default Tagbar;
