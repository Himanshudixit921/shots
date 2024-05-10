import React from "react";
import styles from "./setting.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setDownloadFormat, setResolution } from "../../../app/store";
import cn from "classnames";
const Setting = () => {
  const dispatch = useDispatch();
  const format = useSelector((state) => state.downloadFormat.format);
  const resolution = useSelector((state) => state.downloadFormat.resolution);
  const handleDownloadFormatChange = (formatChange) => {
    dispatch(setDownloadFormat(formatChange));
  };
  const handleResolutionChange = (resChange) => {
    dispatch(setResolution(resChange));
  };
  return (
    <div
      className={styles.downloadSetting}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={styles.downloadFormat}>
        <div
          className={styles.png}
          onClick={() => handleDownloadFormatChange("PNG")}
        >
          <div
            className={cn({
              [styles.activeFormat]: format === "PNG",
              [styles.inactiveFormat]: format !== "PNG",
            })}
          >
            PNG
          </div>
        </div>
        <div
          className={cn({
            [styles.activeFormat]: format === "JPEG",
            [styles.inactiveFormat]: format !== "JPEG",
          })}
          onClick={() => handleDownloadFormatChange("JPEG")}
        >
          <div className={styles.text}> JPEG </div>
        </div>
      </div>
      <div className={styles.resolutionContainer}>
        <div
          className={cn({
            [styles.activeRes]: resolution === "1x",
            [styles.inactiveRes]: resolution !== "1x",
          })}
          onClick={() => handleResolutionChange("1x")}
        >
          <div>1x</div>
        </div>
        <div
          className={cn({
            [styles.activeRes]: resolution === "2x",
            [styles.inactiveRes]: resolution !== "2x",
          })}
          onClick={() => handleResolutionChange("2x")}
        >
          <div>2x</div>
        </div>
        <div
          className={cn({
            [styles.activeRes]: resolution === "4x",
            [styles.inactiveRes]: resolution !== "4x",
          })}
          onClick={() => handleResolutionChange("4x")}
        >
          <div>4x</div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
