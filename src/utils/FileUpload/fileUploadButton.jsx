import React from "react";
import { MdOutlineUploadFile, MdOutlineModeEdit } from "react-icons/md";
import styles from "./fileUploadButton.module.css";
import { setUploadedMedia } from "../../app/store";
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
          const imageContainer = document.getElementById("image-container");

          if (imageContainer) {
            imageContainer.style.width = `100%`;
            imageContainer.style.height = `100%`;
            imageContainer.style.backgroundPosition = "center";
            imageContainer.style.backgroundImage = `url('${reader.result}')`;
            dispatch(setUploadedMedia());
            console.log("Hello");
          }
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please try JPG or PNG format.");
      }
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
          <label htmlFor="fileInput">
            <div>
              <div className={styles.customChangeBtn}>
                <div className={styles.changeIcon}>
                  <MdOutlineModeEdit />
                </div>
                <div>Change Media</div>
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
      )}
    </>
  );
};

export default FileUploadButton;
