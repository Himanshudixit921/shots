import React from "react";
import styles from "./downloadButton.module.css";
import { MdOutlineFileDownload } from "react-icons/md";
import domtoimage from "dom-to-image";
import { useSelector } from "react-redux";
const DownloadButton = () => {
  const transparentBackground = useSelector(
    (state) => state.transparentBackground
  );
  const handleDownload = () => {
    const canvas = document.getElementById("canvas-container");
    if (canvas) {
      const options = transparentBackground ? { bgcolor: null } : {};
      domtoimage
        .toPng(canvas, options)
        .then(function (dataUrl) {
          const link = document.createElement("a");
          link.download = "canvas.png";
          link.href = dataUrl;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch(function (error) {
          console.error("Error while downloading canvas: ", error);
        });
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.text} onClick={() => handleDownload()}>
        {" "}
        Download{" "}
      </div>
      <div className={styles.icon}>
        <MdOutlineFileDownload />
      </div>
    </div>
  );
};

export default DownloadButton;
