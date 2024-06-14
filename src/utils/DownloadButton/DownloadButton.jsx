import React, { useState, useEffect, useRef } from "react";
import styles from "./downloadButton.module.css";
import { MdOutlineFileDownload } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Setting from "./DownloadButtonSettings/Setting";
import { handleDownload } from "../../ComplexLogic/handleDownloadLogic";
import { setOnBlur, setShowSetting } from "../../app/store";

const DownloadButton = () => {
  const dispatch = useDispatch();
  const transparentBackground = useSelector(
    (state) => state.frame.transparentBackground
  );
  const size = useSelector((state) => state.downloadFormat.resolution);
  const format = useSelector((state) => state.downloadFormat.format);
  const showSetting = useSelector((state) => state.media.showSetting);
  const containerWidth = useSelector((state) => state.parameter.CanvasWidth);
  const settingRef = useRef(null);
  const [isSettingClicked, setIsSettingClicked] = useState(false);
  const frameScale = useSelector((state) => state.parameter.frameScale);
  const activeAspectRatio = useSelector((state) => state.frame.activeAspect);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        settingRef.current &&
        !settingRef.current.contains(event.target) &&
        !isSettingClicked
      ) {
        dispatch(setShowSetting(false));
        dispatch(setOnBlur());
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch, isSettingClicked]);

  const handleSettingToggle = () => {
    dispatch(setShowSetting());
    setIsSettingClicked(true);

    setTimeout(() => {
      setIsSettingClicked(false);
    }, 0);
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonWrapper}>
        <div className={styles.button}>
          <div
            className={styles.text}
            onClick={() =>
              handleDownload(
                size,
                format,
                transparentBackground,
                containerWidth,
                frameScale,
                activeAspectRatio
              )
            }
          >
            Download
          </div>
        </div>
      </div>
      <div className={styles.iconWrapper}>
        <div
          className={styles.icon}
          onClick={handleSettingToggle}
          ref={settingRef}
        >
          <MdOutlineFileDownload />
          {showSetting && <Setting />}
        </div>
      </div>
    </div>
  );
};

export default DownloadButton;
