import React, { useState } from "react";
import styles from "./dropdownoption.module.css";
import { FRAME_TYPE } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { setActiveFrameType } from "../../app/store";
import SearchBar from "./SearchBar/SearchBar";
import Tagbar from "./TagBar/Tagbar";

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
            activeFrameType.label === item.label ? "#4A4A4F" : "",
          borderRadius: activeFrameType.label === item.label ? "12px" : "",
        }}
        onClick={() => handleCardClick(item)}
      >
        <div style={{ display: "grid", placeContent: "center" }}>
          <div className={styles.imgContainer}>
            <div className={styles.imageCard}>
              <img src="/icons/maxbook3.png" alt="n/a" />
            </div>
          </div>
        </div>
        <div className={styles.label}>
          <div style={{ padding: "4px 4px" }}>{item.label}</div>
          <div style={{ color: "#8D8D8D", fontSize: "12px" }}>{item.ratio}</div>
        </div>
      </div>
    </div>
  );
};

const DropDownOption = React.forwardRef(({ prop }, ref) => {
  const [searchInput, setSearchInput] = useState("");
  const tagState = useSelector((state) => state.frame.tagState);

  const handleSearchChange = (value) => {
    setSearchInput(value);
  };

  const filteredItems = Object.values(FRAME_TYPE).filter(
    (item) =>
      (searchInput === "" ||
        item.label.toLowerCase().includes(searchInput.toLowerCase())) &&
      (tagState === "All" || item.tags.includes(tagState))
  );

  return (
    <div
      ref={ref}
      className={`${styles.wrapper} ${prop ? styles.open : styles.closed}`}
    >
      <SearchBar onInputChange={handleSearchChange} />
      <div className={styles.outerContainer}>
        <Tagbar />
        <div className={styles.container}>
          {filteredItems.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
});

export default DropDownOption;
