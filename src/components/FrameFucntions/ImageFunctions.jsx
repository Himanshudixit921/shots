import React from "react";
import DraggableSlider from "../../utils/ScalerSliders/DraggableSlider";
import styles from "./framefunctions.module.css";
import { MdOutlineFitScreen } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  changeImageCoordinateX,
  changeImageCoordinateY,
} from "../../app/store";
import { setImageScale } from "../../app/store";
const ImageFunctions = () => {
  const dispatch = useDispatch();
  const handleChangeX = (value) => {
    dispatch(changeImageCoordinateX(value));
  };
  const handleChangeY = (value) => {
    dispatch(changeImageCoordinateY(value));
  };
  const handleScaleChange = (value) => {
    const x = value / 100;
    dispatch(setImageScale(x));
  };
  const isUploadedMedia = useSelector((state) => state.media.uploadedMedia);
  const disable = isUploadedMedia ? "" : styles.disable;
  return (
    <>
      <div className={isUploadedMedia ? null : styles.wrapper}>
        <div className={`${styles.container} ${disable} `}>
          <DraggableSlider
            prop={{ minValue: 1, maxValue: 150, initalValue: 100 }}
            onChange={handleScaleChange}
          >
            <MdOutlineFitScreen
              style={{ fontSize: "18px", fontWeight: "bolder" }}
            />
          </DraggableSlider>
          <DraggableSlider
            prop={{ minValue: -300, maxValue: 300, initalValue: 0 }}
            onChange={handleChangeX}
          >
            <div style={{ fontSize: "12px", fontWeight: "bolder" }}>X</div>
          </DraggableSlider>
          <DraggableSlider
            prop={{ minValue: -300, maxValue: 300, initalValue: 0 }}
            onChange={handleChangeY}
          >
            <div style={{ fontSize: "12px", fontWeight: "bolder" }}>Y</div>
          </DraggableSlider>
        </div>
      </div>
    </>
  );
};

export default ImageFunctions;
