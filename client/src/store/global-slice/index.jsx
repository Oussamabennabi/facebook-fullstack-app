import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    isIntroductionHidden: false,
  },
  reducers: {
    showIntroduction(state) {
      state.isIntroductionHidden = false;
    },
    hideIntroduction(state) {
      state.isIntroductionHidden = true;
    },
  },
});

export const GLOBAL_REDUCERS = globalSlice.actions;

export default globalSlice;
