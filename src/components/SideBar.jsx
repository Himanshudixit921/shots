import React from "react";
import styles from "./SideBar.module.css";
import FileUploadButton from "../utils/FileUpload/fileUploadButton";
import FrameBackground from "../utils/FrameBackground/FrameBackground";
import DownloadButton from "../utils/DownloadButton/DownloadButton";
import CustomizedSlider from "./Frames/Sliders/Slider";
import { useDispatch } from "react-redux";
//eslint-disable-next-line
import { setImageScale, setFrameShadowOpacity } from "../app/store";
import DropDown from "../utils/DropDown/dropdown";
import FrameFunctions from "./FrameFucntions/FrameFunctions";
import ImageFunctions from "./FrameFucntions/ImageFunctions";
import FrameRatio from "./FrameSize/FrameRatio";
import RatioInput from "./RatioInput/RatioInput";
const SideBar = () => {
  const dispatch = useDispatch();

  const handleShadowChange = (value) => {
    dispatch(setFrameShadowOpacity(value));
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <DropDown />
        <FrameFunctions />
        <CustomizedSlider
          prop={{
            label: "Shadow",
            min: 0,
            max: 1,
            step: 0.005,
            value: 0.6,
          }}
          onChange={handleShadowChange}
        />
      </div>
      <div className={styles.designContainer}>
        <div className={styles.label}> Design</div>
        <FileUploadButton />
        <ImageFunctions />
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.label}> Frame</div>
        <FrameRatio />
        <RatioInput />
        <FrameBackground />
      </div>
      <div className={styles.downloadContainer}>
        <DownloadButton />
      </div>
    </div>
  );
};

export default SideBar;
