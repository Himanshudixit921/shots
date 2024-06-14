import styles from "./MacFrame.module.css";
import { useSelector } from "react-redux";

const MacFrame = ({ children }) => {
  const frameShadowOpacity = useSelector(
    (state) => state.frame.frameShadowOpacity
  );

  const frameStyle = {
    boxShadow: `9px 2px 25px rgba(0, 0, 0, ${frameShadowOpacity})`,
  };

  return (
    <div className={styles.window} id="mac_frame_window">
      <div className={styles.winhead} id="mac_frame_winhead">
        <div className={styles.button} id="mac_frame_buttons">
          <div className={styles.close}></div>
          <div className={styles.min}></div>
          <div className={styles.max}></div>
        </div>
      </div>
      <div className={styles.winbody} id="mac_frame_winbody">
        <div
          className={styles.dropShadow}
          style={frameStyle}
          id="mac_frame_dropShadow"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default MacFrame;
