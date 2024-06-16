import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { MdClear, MdSearch } from "react-icons/md";

const SearchBar = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    onInputChange(value); 
  };

  const clearInput = () => {
    setInputValue("");
    onInputChange(""); // Notify parent component of the input change
    // inputRef.current.focus();
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.inputwrapper}>
        <input
          className={styles.input}
          type="text"
          name="input"
          placeholder="Type Something"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <label htmlFor="input">
        <div
          className={styles.icon}
          onClick={inputValue ? clearInput : () => {}}
          style={{ cursor: "pointer" }}
        >
          {inputValue ? <MdClear /> : <MdSearch />}
        </div>
      </label>
    </div>
  );
};

export default SearchBar;
