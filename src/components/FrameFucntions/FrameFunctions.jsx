import React from "react";
import DraggableSlider from "../../utils/ScalerSliders/DraggableSlider";
import styles from "./framefunctions.module.css";
import { MdOutlineFitScreen } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  changeCoordinateX,
  changeCoordinateY,
  changeframeScale,
} from "../../app/store";
const FrameFunctions = () => {
  const dispatch = useDispatch();
  const handleChangeX = (value) => {
    dispatch(changeCoordinateX(value));
  };
  const handleChangeY = (value) => {
    dispatch(changeCoordinateY(value));
  };
  const handleChangeScale = (value) => {
    const x = value / 100;
    dispatch(changeframeScale(x));
  };
  return (
    <>
      <div className={styles.container}>
        <DraggableSlider
          prop={{ minValue: 1, maxValue: 150, initalValue: 100 }}
          onChange={handleChangeScale}
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
    </>
  );
};

export default FrameFunctions;
