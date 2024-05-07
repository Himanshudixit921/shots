import { createSlice, configureStore } from "@reduxjs/toolkit";
import { FRAME_BACKGROUND_ITEMS } from "../utils/constants";
const changeColorSlice = createSlice({
  name: "changeBackgroundColor",
  initialState: {
    frameBgColor: "#D9D9D9",
    activeFrameBg: FRAME_BACKGROUND_ITEMS.COLOR,
    transparentBackground: false,
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
  },
});
export const { setBackgroundColor, setActiveFrameBgColor } =
  changeColorSlice.actions;
const store = configureStore({
  reducer: changeColorSlice.reducer,
});
export default store;
