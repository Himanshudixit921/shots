import { createSlice, configureStore } from "@reduxjs/toolkit";
import { FRAME_BACKGROUND_ITEMS, FRAME_TYPE } from "../utils/constants";
const frameSlice = createSlice({
  name: "frame",
  initialState: {
    frameBgColor: "#D9D9D9",
    activeFrameBg: FRAME_BACKGROUND_ITEMS.COLOR,
    transparentBackground: false,
    imageScale: "1",
    frameShadowOpacity: 0.6,
    activeFrameType: FRAME_TYPE.MAC_FRAME,
    activeAspect: {
      height: 1,
      width: 1,
    },
  },
  reducers: {
    setBackgroundColor(state, action) {
      state.frameBgColor = action.payload;
    },
    setActiveFrameBgColor(state, action) {
      if (action.payload === FRAME_BACKGROUND_ITEMS.TRANSPARENT)
        state.transparentBackground = true;
      else state.transparentBackground = false;
      state.activeFrameBg = action.payload;
    },
    setImageScale(state, action) {
      state.imageScale = action.payload;
    },
    setFrameShadowOpacity(state, action) {
      state.frameShadowOpacity = action.payload;
    },
    setActiveFrameType(state, action) {
      state.activeFrameType = action.payload;
    },
    setActiveAspect(state, action) {
      state.activeAspect.height = action.payload.height;
      state.activeAspect.width = action.payload.width;
    },
  },
});
const parameterSlice = createSlice({
  name: "parameter",
  initialState: {
    frameX: 0,
    frameY: 0,
    CanvasWidth: 0,
    CanvasHeight: 0,
    frameScale: 1,
    imageX: 0,
    imageY: 0,
    WrapperHeight: 0,
    WrapperWidth: 0,
  },
  reducers: {
    changeCoordinateX(state, action) {
      state.frameX = action.payload;
    },
    changeCoordinateY(state, action) {
      state.frameY = action.payload;
    },
    changeCanvasSize(state, action) {
      state.CanvasHeight = action.payload.height;
      state.CanvasWidth = action.payload.width;
    },
    changeTransparentWrapperSize(state, action) {
      state.WrapperHeight = action.payload.height;
      state.WrapperWidth = action.payload.width;
    },
    changeframeScale(state, action) {
      state.frameScale = action.payload;
    },
    changeImageCoordinateX(state, action) {
      state.imageX = action.payload;
    },
    changeImageCoordinateY(state, action) {
      state.imageY = action.payload;
    },
  },
});
const mediaSlice = createSlice({
  name: "media",
  initialState: {
    uploadedMedia: false,
    showSetting: false,
    backgroundMedia: false,
    mediaFile: null,
  },
  reducers: {
    setUploadedMedia(state, action) {
      state.uploadedMedia = action.payload;
    },
    setShowSetting(state) {
      state.showSetting = !state.showSetting;
    },
    setOnBlur(state) {
      state.showSetting = false;
    },
    setBackgroundMedia(state, action) {
      state.backgroundMedia = action.payload;
    },
    setMediaFile(state, action) {
      state.mediaFile = action.payload;
    },
  },
});
const downloadFormatSlice = createSlice({
  name: "downloadFormat",
  initialState: {
    format: "PNG",
    resolution: "1x",
  },
  reducers: {
    setDownloadFormat(state, action) {
      state.format = action.payload;
    },
    setResolution(state, action) {
      state.resolution = action.payload;
    },
  },
});
export const {
  setBackgroundColor,
  setActiveFrameBgColor,
  setImageScale,
  setFrameShadowOpacity,
  setActiveFrameType,
  setActiveAspect,
} = frameSlice.actions;
export const {
  setUploadedMedia,
  setShowSetting,
  setOnBlur,
  setBackgroundMedia,
  setMediaFile,
} = mediaSlice.actions;
export const { setDownloadFormat, setResolution } = downloadFormatSlice.actions;
export const {
  changeCoordinateX,
  changeCoordinateY,
  changeCanvasSize,
  changeframeScale,
  changeImageCoordinateX,
  changeImageCoordinateY,
  changeTransparentWrapperSize,
} = parameterSlice.actions;
const rootReducer = {
  frame: frameSlice.reducer,
  media: mediaSlice.reducer,
  downloadFormat: downloadFormatSlice.reducer,
  parameter: parameterSlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
