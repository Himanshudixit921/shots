import React from "react";
import styles from "./BackgroundAction.module.css";
import { setBackgroundMedia } from "../../../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineModeEdit } from "react-icons/md";
const BackgroundAction = () => {
  const dispatch = useDispatch();
  const backgroundMedia = useSelector((state) => state.media.backgroundMedia);
  const handleUpload = (e) => {
    e.preventDefault();

    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

    if (file) {
      if (file.type === "image/png" || file.type === "image/jpeg") {
        const reader = new FileReader();
        reader.onload = () => {
          const imageContainer = document.getElementById("canvas-container");

          if (imageContainer) {
            imageContainer.style.backgroundPosition = "center";
            imageContainer.style.backgroundSize = "cover";
            imageContainer.style.backgroundImage = `url('${reader.result}')`;
            imageContainer.style.backgroundRepeat = "no-repeat";
            dispatch(setBackgroundMedia(true));
          }
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please try JPG or PNG format.");
      }
    }
  };
  const handleRemoveMedia = () => {
    const imageContainer = document.getElementById("canvas-container");
    if (imageContainer) {
      imageContainer.style.backgroundImage = "none";
      dispatch(setBackgroundMedia(false));
    }
  };
  return (
    <div>
      {!backgroundMedia && (
        <>
          <label htmlFor="backgroundFileInput">
            <div className={styles.customBtn}>
              <div>Upload Background</div>
            </div>
          </label>
          <input
            id="backgroundFileInput"
            type="file"
            accept="image/png, image/jpeg"
            className={styles.fileInput}
            onChange={handleUpload}
          />
        </>
      )}
      {backgroundMedia && (
        <>
          <div>
            <div className={styles.customChangeBtn}>
              <div className={styles.label} onClick={handleRemoveMedia}>
                Remove Design
              </div>
              <label htmlFor="backgroundFileInput">
                <div className={styles.changeIcon}>
                  <MdOutlineModeEdit />
                </div>
              </label>
            </div>
          </div>
          <input
            type="file"
            id="backgroundFileInput"
            accept="image/png, image/jpeg"
            className={styles.fileInput}
            onChange={handleUpload}
          />
        </>
      )}
    </div>
  );
};

export default BackgroundAction;
