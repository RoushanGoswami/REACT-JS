import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice.js";
import bookReducer from "../features/bookSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    book: bookReducer,
  },
});

export default store;
