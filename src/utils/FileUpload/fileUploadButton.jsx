import React from "react";
import { MdOutlineUploadFile, MdOutlineModeEdit } from "react-icons/md";
import styles from "./fileUploadButton.module.css";
import { setMediaFile, setUploadedMedia } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
const FileUploadButton = () => {
  const uploadedMedia = useSelector((state) => state.media.uploadedMedia);
  const dispatch = useDispatch();
  const handleUpload = (e) => {
    e.preventDefault();

    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

    if (file) {
      if (file.type === "image/png" || file.type === "image/jpeg") {
        const reader = new FileReader();
        reader.onload = () => {
          dispatch(setMediaFile(reader.result));
          const imageContainer = document.getElementById("image_container");
          if (imageContainer) {
            imageContainer.style.width = `100%`;
            imageContainer.style.height = `100%`;
            imageContainer.style.backgroundPosition = "center";
            dispatch(setUploadedMedia(true));
          }
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please try JPG or PNG format.");
      }
    }
  };
  const handleRemove = (e) => {
    const imageContainer = document.getElementById("image_container");
    if (imageContainer) {
      imageContainer.style.backgroundImage = "none";
      dispatch(setUploadedMedia(false));
    }
  };
  return (
    <>
      {!uploadedMedia ? (
        <>
          <label htmlFor="fileInput">
            <div>
              <div className={styles.customBtn}>
                <div className={styles.icon}>
                  <MdOutlineUploadFile />
                </div>
                <div>Upload Media</div>
              </div>
            </div>
          </label>
          <input
            type="file"
            id="fileInput"
            accept="image/png, image/jpeg"
            className={styles.fileInput}
            onChange={handleUpload}
          />
        </>
      ) : (
        <>
          <div>
            <div className={styles.customChangeBtn}>
              <div className={styles.label} onClick={(e) => handleRemove(e)}>
                Remove Design
              </div>
              <label htmlFor="fileInput">
                <div className={styles.changeIcon}>
                  <MdOutlineModeEdit />
                </div>
              </label>
            </div>
          </div>
          <input
            type="file"
            id="fileInput"
            accept="image/png, image/jpeg"
            className={styles.fileInput}
            onChange={handleUpload}
          />
        </>
      )}
    </>
  );
};

export default FileUploadButton;
