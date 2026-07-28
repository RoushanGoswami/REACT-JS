import { configureStore } from "@reduxjs/toolkit"; // start to imp configure Store
import authReducer from "../features/authSlice.js";
import bookReducer from "../features/bookSlice.js";
// create store
const store = configureStore({
  // register the slices here
  reducer: {
    auth: authReducer,
    book: bookReducer,
  },
});
// export it
export default store;
