import { configureStore} from "@reduxjs/toolkit";
import messengerSlice from "./messenger-slice";
import moduleSlice from "./module-slice";
import postSlice from "./post-slice";

const store = configureStore({
  reducer: {
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
