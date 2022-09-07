import { createSlice } from "@reduxjs/toolkit";
import { SELECT_MODULE } from "./actions";

const moduleSlice = createSlice({
  name: "module",
  initialState: {
    isPostModuleHidden: true,
    isUserModuleHidden: true,
    // if the user choose to upload a coverImage or profile picture
    typeOfImage:"",
    selectedPostModule: SELECT_MODULE.creatPostModule,
    selectedUserModule:SELECT_MODULE.updateUserModule,
  },
  reducers: {
    showPostModule(state) {
      state.isPostModuleHidden = false;
    },
    hidePostModule(state) {
      state.isPostModuleHidden = true;
      state.selectedPostModule = SELECT_MODULE.creatPostModule;
    },
    // user
    showUserModule(state,action) {
      state.isUserModuleHidden = false;
      state.typeOfImage = action.payload.type;
    },
    hideUserModule(state) {
      state.isUserModuleHidden = true;
      state.selectedUserModule = SELECT_MODULE.updateUserModule;
      state.typeOfImage = ""
    },
  },
});

export const MODULE_REDUCERS = moduleSlice.actions;

export default moduleSlice;
