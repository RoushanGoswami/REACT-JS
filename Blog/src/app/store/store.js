import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../features/blogSlice.js";

const store = configureStore({
  reducer: {
    blog: blogReducer,
  },
});

export default store;
