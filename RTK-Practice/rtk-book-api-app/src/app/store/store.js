import { configureStore } from "@reduxjs/toolkit";
import bookReducers from "../features/bookSlice.js";

const store = configureStore({
  reducer: {
    book: bookReducers,
  },
});

export default store;
