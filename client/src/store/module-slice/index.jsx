import { createSlice } from "@reduxjs/toolkit";
import { SELECT_MODULE } from "./actions";

const moduleSlice = createSlice({
  name: "module",
  initialState: {
    isModuleHidden: true,
    selectedModule: SELECT_MODULE.creatPostModule,
  },
  reducers: {
    showModule(state) {
      state.isModuleHidden = false;
    },
    hideModule(state) {
      state.isModuleHidden = true;
      state.selectedModule = SELECT_MODULE.creatPostModule;
    },
  },
});

export const MODULE_REDUCERS = moduleSlice.actions;

export default moduleSlice;
