import React from "react";
import styles from "./SideBar.module.css";
import FileUploadButton from "../utils/FileUpload/fileUploadButton";
import FrameBackground from "../utils/FrameBackground/FrameBackground";
import DownloadButton from "../utils/DownloadButton/DownloadButton";
const SideBar = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <FileUploadButton />
        <FrameBackground />
      </div>
      <div className={styles.downloadContainer}>
        <DownloadButton />
      </div>
    </div>
  );
};

export default SideBar;
