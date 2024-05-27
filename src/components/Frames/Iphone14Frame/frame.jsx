import React from "react";
import styles from "./frame.module.css";
import { useSelector } from "react-redux";
const containerStyle = {
  height: "100%",
  width: "100%",
  backgroundImage: "url(/icons/iphone15.png)",
  backgroundSize: "contain",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
const Frame = ({ children }) => {
  const frameShadowOpacity = useSelector(
    (state) => state.frame.frameShadowOpacity
  );
  const frameStyle = {
    boxShadow: `9px 2px 25px rgba(0, 0, 0, ${frameShadowOpacity})`,
  };
  return (
    <>
      <div className={styles.container}>
        <div style={containerStyle} className={styles.containerStyle}></div>
        <div className={styles.dropShadow} style={frameStyle}>
          <div className={styles.imageparent}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Frame;
