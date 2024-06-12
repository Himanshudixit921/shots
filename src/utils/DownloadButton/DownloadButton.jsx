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
  const frameShadowOpacity = useSelector(
    (state) => state.frame.frameShadowOpacity
  );
  const containerWidth = useSelector((state) => state.parameter.CanvasWidth);
  const containerHeight = useSelector((state) => state.parameter.CanvasHeight);
  const activeFrameType = useSelector((state) => state.frame.activeFrameType);
  const settingRef = useRef(null);
  const [isSettingClicked, setIsSettingClicked] = useState(false);
  const CoordinateX = useSelector((state) => state.parameter.frameX);
  const CoordinateY = useSelector((state) => state.parameter.frameY);
  const imageX = useSelector((state) => state.parameter.imageX);
  const imageY = useSelector((state) => state.parameter.imageY);
  const frameScale = useSelector((state) => state.parameter.frameScale);
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
      <div
        className={styles.text}
        onClick={() =>
          handleDownload(
            size,
            format,
            transparentBackground,
            frameShadowOpacity,
            activeFrameType,
            containerWidth,
            containerHeight,
            CoordinateX,
            CoordinateY,
            imageX,
            imageY,
            frameScale
          )
        }
      >
        Download
      </div>
      <div
        className={styles.icon}
        onClick={handleSettingToggle}
        ref={settingRef}
      >
        <MdOutlineFileDownload />
        {showSetting && <Setting />}
      </div>
    </div>
  );
};

export default DownloadButton;
