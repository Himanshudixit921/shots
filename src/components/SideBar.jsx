import React from "react";
import styles from "./SideBar.module.css";
import FileUploadButton from "../utils/FileUpload/fileUploadButton";
// import FrameBackground from "../utils/FrameBackground/FrameBackground";
import DownloadButton from "../utils/DownloadButton/DownloadButton";
import CustomizedSlider from "./Frames/Sliders/Slider";
import { useDispatch } from "react-redux";
//eslint-disable-next-line
import { setImageScale, setFrameShadowOpacity } from "../app/store";
import DropDown from "../utils/DropDown/dropdown";
import FrameFunctions from "./FrameFucntions/FrameFunctions";
import ImageFunctions from "./FrameFucntions/ImageFunctions";
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
        {/* <FrameBackground /> */}
      </div>
      <div className={styles.designContainer}>
        <div className={styles.label}> Design</div>
        <FileUploadButton />
        <ImageFunctions />
      </div>
      {/* <div className={styles.sliderContainer}>
        <CustomizedSlider
          prop={{ label: "Scale", min: 1, max: 5, step: 0.05, value: 1 }}
          onChange={handleScaleChange}
        />
        <FileUploadButton />
      </div> */}
      <div className={styles.downloadContainer}>
        <DownloadButton />
      </div>
    </div>
  );
};

export default SideBar;
