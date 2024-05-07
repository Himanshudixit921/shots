import React from "react";
import { MdOutlineUploadFile } from "react-icons/md";
import styles from "./fileUploadButton.module.css";
const FileUploadButton = () => {
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
      <label for="fileInput">
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
  );
};

export default FileUploadButton;
