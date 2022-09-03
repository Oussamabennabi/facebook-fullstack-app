import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSignedIn: false,
  userName: "",
  email: "",
  userPhoto: "",
  userId: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      const { photoURL, displayName, uid } = action.payload;
      state.userName = displayName;
      state.userId = uid;
      state.userPhoto = photoURL;
      state.isSignedIn = true;
    },
    
    signOut(state) {
        state.isSignedIn= false
        state.userName= ""
        state.email= ""
        state.userPhoto= ""
        state.userId= ""
    },
  },
});

export const USER_REDUCERS = userSlice.actions;
export default userSlice;
