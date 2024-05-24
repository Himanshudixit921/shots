import React from "react";
import styles from "./SideBar.module.css";
import FileUploadButton from "../utils/FileUpload/fileUploadButton";
import FrameBackground from "../utils/FrameBackground/FrameBackground";
import DownloadButton from "../utils/DownloadButton/DownloadButton";
import CustomizedSlider from "./Frames/Sliders/Slider";
import { useDispatch } from "react-redux";
import { setImageScale, setFrameShadowOpacity } from "../app/store";
import DropDown from "../utils/DropDown/dropdown";
const SideBar = () => {
  const dispatch = useDispatch();
  const handleScaleChange = (value) => {
    dispatch(setImageScale(value));
  };
  const handleShadowChange = (value) => {
    dispatch(setFrameShadowOpacity(value));
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <FileUploadButton />
        <DropDown />
        <FrameBackground />
      </div>
      <div className={styles.sliderContainer}>
        <CustomizedSlider
          prop={{ label: "Scale", min: 1, max: 5, step: 0.05, value: 1 }}
          onChange={handleScaleChange}
        />
        <CustomizedSlider
          prop={{
            label: "Frame Shadow Opcaity",
            min: 0,
            max: 1,
            step: 0.005,
            value: 0.6,
          }}
          onChange={handleShadowChange}
        />
      </div>
      <div className={styles.downloadContainer}>
        <DownloadButton />
      </div>
    </div>
  );
};

export default SideBar;
