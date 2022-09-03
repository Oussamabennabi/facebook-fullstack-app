import { createSlice } from "@reduxjs/toolkit";

const messengerSlice = createSlice({
  name: "messenger",
  initialState: {
    isMessengerHidden: true,
  },
  reducers: {
    showMessenger(state) {
      state.isMessengerHidden = false;
    },
    hideMessenger(state) {
      state.isMessengerHidden = true;
    },
  },
});

export const MESSENGER_REDUCERS = messengerSlice.actions;

export default messengerSlice;
