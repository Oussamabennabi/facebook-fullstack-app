import { createSlice } from "@reduxjs/toolkit";
import { POST_ACTIONS } from "./actions";


const initialState = {
  desc: "",
  image: null,
  video: null,
  posts: [],
  loading:false
};


const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPostData(state, action) {
      switch (action.payload.type) {
        case POST_ACTIONS.desc:
          state.desc = action.payload.data;
          break;
        case POST_ACTIONS.image:
          state.image = action.payload.data;
          break;
        case POST_ACTIONS.video:
          state.video = action.payload.data;
          break;
        default:
          break;
      }
    },

    clearPost(state, action) {
      switch (action.payload.type) {
        case POST_ACTIONS.image:
          state.image = null;
          break;
        case POST_ACTIONS.video:
          state.video = null;
          break;
        case POST_ACTIONS.clearAll:
          state.desc = "";
          state.image = null;
          state.video = null;
          break;
        default:
          break;
      }
    },
    setLoading(state, action) {
      state.loading = action.payload;
    }
  },
});

export const POST_REDUCERS = postSlice.actions;
export default postSlice;