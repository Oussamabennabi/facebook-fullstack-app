import { createSlice } from "@reduxjs/toolkit";

const messengerSlice = createSlice({
  name: "messenger",
  initialState: {
    isMessengerHidden: true,
    currentChat: null,
    socket: null,
  },
  reducers: {
    showMessenger(state, action) {
      state.isMessengerHidden = false;
      state.currentChat = action.payload?.chat ? action.payload.chat : null;
    },
    hideMessenger(state) {
      state.currentChat =null;
      state.isMessengerHidden = true;
    },
    setSocket(state,action) {
      state.socket = action.payload.socket
    }
  },
});

export const MESSENGER_REDUCERS = messengerSlice.actions;

export default messengerSlice;
