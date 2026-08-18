import { createSlice } from "@reduxjs/toolkit";
import {
  signin,
  signup,
} from "../../../../rtk-user-app/src/app/features/authSlice";
import { act } from "react";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      email: "",
      password: "",
    },
  },
  reducers: {
    signin: (state, action) => {},
    signup: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { signup, signin } = authSlice.actions;
