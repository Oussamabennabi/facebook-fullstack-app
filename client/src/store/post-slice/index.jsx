import { createSlice } from "@reduxjs/toolkit";
import { POST_ACTIONS } from "./actions";


const initialState = {
  text: "",
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
        case POST_ACTIONS.text:
          state.text = action.payload.data;
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
          state.text = "";
          state.image = null;
          state.video = null;
          break;
        default:
          break;
      }
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setPostDataFromFirebase(state, action) {
      state.posts = action.payload.data;
    },
  },
});

export const POST_REDUCERS = postSlice.actions;
export default postSlice;