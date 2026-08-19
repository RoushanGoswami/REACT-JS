import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      email: "teacher@gmail.com",
      password: "123456",
    },
  },

  reducers: {
    signup: (state, action) => {
      state.user = action.payload;
    },
    signin: (state, action) => {},
  },
});

export default authSlice.reducer;
export const { signup, signin } = authSlice.actions;
