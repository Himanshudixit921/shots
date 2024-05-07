import React, { useState, useRef } from "react";
import MacFrame from "./MacFrame";
import styles from "./Canvas.module.css";
import domtoimage from "dom-to-image";

const CanvasContainer = () => {
  const [image, setImage] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [transparentBackground, setTransparentBackground] = useState(false);
  const canvasContainerRef = useRef(null);
  const imageContainerRef = useRef(null);

  const handleUpload = (e) => {
    e.preventDefault();

    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

    if (file) {
      if (file.type === "image/png" || file.type === "image/jpeg") {
        const reader = new FileReader();
        reader.onload = () => {
          setImage(reader.result);

          if (imageContainerRef.current) {
            imageContainerRef.current.style.width = `100%`;
            imageContainerRef.current.style.height = `100%`;
            imageContainerRef.current.style.backgroundPosition = "center";
            imageContainerRef.current.style.backgroundImage = `url('${reader.result}')`;
          }
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please try JPG or PNG format.");
      }
    }
  };

  const handleBackgroundColorChange = (e) => {
    setBackgroundColor(e.target.value);
  };

  const handleToggleBackground = () => {
    setTransparentBackground(!transparentBackground);
  };

  const handleDownload = () => {
    const canvas = canvasContainerRef.current;
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
    <div className={styles.page}>
      <div className={styles.container}>
        <div ref={canvasContainerRef} className={styles.canvasContainer}>
          <div
            className={styles.canvas}
            style={{
              backgroundColor: transparentBackground
                ? "transparent"
                : backgroundColor,
            }}
          >
            <div className={styles.browserFrame}>
              <MacFrame>
                <div
                  ref={imageContainerRef}
                  className={styles.imageContainer}
                ></div>
              </MacFrame>
            </div>
          </div>
        </div>
        <label htmlFor="fileInput" className={styles.browseLabel}>
          Browse
        </label>
        <input
          type="file"
          id="fileInput"
          accept="image/png, image/jpeg"
          onChange={handleUpload}
          className={styles.fileInput}
        />
      </div>
      <input
        type="color"
        value={backgroundColor}
        onChange={handleBackgroundColorChange}
      />
      <button onClick={handleDownload} disabled={!image}>
        Download
      </button>
      <button onClick={handleToggleBackground}>
        {transparentBackground ? "Disable Transparency" : "Enable Transparency"}
      </button>
    </div>
  );
};

export default CanvasContainer;
