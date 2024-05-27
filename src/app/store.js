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
    setUploadedMedia(state) {
      state.uploadedMedia = true;
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
} = frameSlice.actions;
export const {
  setUploadedMedia,
  setShowSetting,
  setOnBlur,
  setBackgroundMedia,
  setMediaFile,
} = mediaSlice.actions;
export const { setDownloadFormat, setResolution } = downloadFormatSlice.actions;
const rootReducer = {
  frame: frameSlice.reducer,
  media: mediaSlice.reducer,
  downloadFormat: downloadFormatSlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
