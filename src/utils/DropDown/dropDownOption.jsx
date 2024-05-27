import React from "react";
import styles from "./dropdownoption.module.css";
import { FRAME_TYPE } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { setActiveFrameType } from "../../app/store";
const Card = ({ item }) => {
  const activeFrameType = useSelector((state) => state.frame.activeFrameType);
  const dispatch = useDispatch();
  const handleCardClick = (item) => {
    dispatch(setActiveFrameType(item));
  };
  return (
    <div className={styles.cardContainer}>
      <div
        className={styles.cardinnerContainer}
        style={{
          backgroundColor:
            activeFrameType.label === item.label ? "#1D1D1D" : "",
          borderRadius: activeFrameType.label === item.label ? "12px" : "",
        }}
        onClick={() => handleCardClick(item)}
      >
        <div className={styles.imgContainer}>
          <div style={{ width: "30px", height: "30px" }}>
            <img src="/logo192.png" alt="n/a" />
          </div>
        </div>
        <div className={styles.label}>
          <div>{item.label}</div>
        </div>
      </div>
    </div>
  );
};
const DropDownOption = ({ prop }) => {
  return (
    <div className={`${styles.wrapper} ${prop ? styles.open : styles.closed}`}>
      <div className={styles.container}>
        {Object.keys(FRAME_TYPE).map((key) => {
          return <Card key={key} item={FRAME_TYPE[key]}></Card>;
        })}
      </div>
    </div>
  );
};

export default DropDownOption;
