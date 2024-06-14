import React from "react";
import styles from "./FrameRatio.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setActiveAspect } from "../../app/store";

const FrameRatio = () => {
  const dispatch = useDispatch();
  const aspectHeight = useSelector((state) => state.frame.activeAspect.height);
  const aspectWidth = useSelector((state) => state.frame.activeAspect.width);

  const handleChange = ({ height, width }) => {
    dispatch(setActiveAspect({ height: height, width: width }));
  };

  const gcd = (a, b) => {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };

  const checkAspectRatio = ({ height, width }) => {
    let gcdOfHeightWidth = gcd(aspectWidth, aspectHeight);
    return (
      aspectHeight / gcdOfHeightWidth === height &&
      aspectWidth / gcdOfHeightWidth === width
    );
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.ratioContainer}>
          <div className={styles.ratiodivWrapper}>
            <div
              className={
                checkAspectRatio({ height: 1, width: 1 })
                  ? `${styles.activeAspectStyle}`
                  : `${styles.inActiveAspectStyle}`
              }
              style={{ aspectRatio: "1", height: "40px" }}
              onClick={() => handleChange({ height: 1, width: 1 })}
            >
              1:1
            </div>
          </div>
          <div className={styles.ratiodivWrapper}>
            <div
              className={
                checkAspectRatio({ height: 3, width: 4 })
                  ? `${styles.activeAspectStyle}`
                  : `${styles.inActiveAspectStyle}`
              }
              style={{ aspectRatio: "1.3333", height: "31.5px" }}
              onClick={() => handleChange({ height: 3, width: 4 })}
            >
              4:3
            </div>
          </div>
          <div className={styles.ratiodivWrapper}>
            <div
              className={
                checkAspectRatio({ height: 9, width: 16 })
                  ? `${styles.activeAspectStyle}`
                  : `${styles.inActiveAspectStyle}`
              }
              style={{ aspectRatio: "1.7777", height: "28.8px" }}
              onClick={() => handleChange({ height: 9, width: 16 })}
            >
              16:9
            </div>
          </div>
          <div className={styles.ratiodivWrapper}>
            <div
              className={
                checkAspectRatio({ height: 16, width: 9 })
                  ? `${styles.activeAspectStyle}`
                  : `${styles.inActiveAspectStyle}`
              }
              style={{ aspectRatio: "0.5625", height: "54px" }}
              onClick={() => handleChange({ height: 16, width: 9 })}
            >
              9:16
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameRatio;
