import React from "react";
import { useSelector } from "react-redux";
import { FRAME_TYPE } from "../../../utils/constants";
import MacFrame from "../MacFrame/MacFrame";
import Frame from "../Iphone14Frame/frame";
const ConfigureFrame = ({ children }) => {
  const activeFrameType = useSelector((state) => state.frame.activeFrameType);
  return (
    <>
      {activeFrameType === FRAME_TYPE.MAC_FRAME && (
        <MacFrame>{children}</MacFrame>
      )}
      {activeFrameType === FRAME_TYPE.APPLE_IPHONE_14 && (
        <Frame>{children}</Frame>
      )}
    </>
  );
};

export default ConfigureFrame;
