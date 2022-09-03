import { configureStore} from "@reduxjs/toolkit";
import messengerSlice from "./messenger-slice";
import moduleSlice from "./module-slice";
import postSlice from "./post-slice";
import userSlice from "./user-slice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    post: postSlice.reducer,
    module: moduleSlice.reducer,
    messenger: messengerSlice.reducer
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    
    }),
});
export default store;
