import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice.js";
import studentReducer from "../features/studentSlice.js";
const store = configureStore({
  reducer: {
    auth: authReducer,
    student: studentReducer,
  },
});

export default store;
