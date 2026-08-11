import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// const 
const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
  },

  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action) => {
      state.users.splice(action.payload, 1);
    },
    updateUser: (state, action) => {
      const { user, i } = action.payload;
      state.users[i] = user;
    },
  },
});

export const { addUser, removeUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
