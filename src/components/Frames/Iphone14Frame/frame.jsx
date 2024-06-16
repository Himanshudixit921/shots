import React from "react";
import styles from "./frame.module.css";
import { useSelector } from "react-redux";
const Frame = ({ children }) => {
  const activeFrameType = useSelector((state) => state.frame.activeFrameType);
  const containerStyle = {
    height: "100%",
    width: "100%",
    backgroundImage: `${activeFrameType.img}`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const frameShadowOpacity = useSelector(
    (state) => state.frame.frameShadowOpacity
  );
  const frameStyle = {
    boxShadow: `14px 2px 25px rgba(0, 0, 0, ${frameShadowOpacity})`,
  };
  return (
    <>
      <div className={styles.container}>
        <div style={containerStyle} className={styles.containerStyle}></div>
        <div
          className={styles.dropShadow}
          style={{ ...frameStyle, ...activeFrameType.drop_shadow }}
          id="iphone14_dropShadow"
        >
          <div className={styles.imageparent}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Frame;
