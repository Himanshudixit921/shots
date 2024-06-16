import React from "react";
import { useSelector } from "react-redux";
import { FRAME_TYPE } from "../../../utils/constants";
import MacFrame from "../MacFrame/MacFrame";
import Frame from "../Iphone14Frame/frame";

const ConfigureFrame = ({ children }) => {
  const activeFrameType = useSelector((state) => state.frame.activeFrameType);

  let frameComponent;
  switch (activeFrameType) {
    case FRAME_TYPE.MAC_FRAME:
      frameComponent = <MacFrame>{children}</MacFrame>;
      break;
    case FRAME_TYPE.APPLE_IPHONE_14:
    case FRAME_TYPE.APPLE_ULTRA_WATCH:
    case FRAME_TYPE.PRO_DISPLAY_XDR:
    case FRAME_TYPE.IPHONE_15_BLUE:
    case FRAME_TYPE.IPHONE_15_BLACK:
    case FRAME_TYPE.IMAC_24:
    case FRAME_TYPE.MACBOOK_PRO_16:
    case FRAME_TYPE.MACBOOK_AIR_M2:
    case FRAME_TYPE.IPAD_MINI:
    case FRAME_TYPE.IPAD_PRO_13:
    case FRAME_TYPE.IPAD_PRO_11:
      frameComponent = <Frame>{children}</Frame>;
      break;
    default:
      frameComponent = null;
  }

  return frameComponent;
};

export default ConfigureFrame;
