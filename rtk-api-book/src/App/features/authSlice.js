import { createSlice } from "@reduxjs/toolkit"; // impoprt createSlice
// now create the Slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      email: "",
      password: "",
    },
  },
  reducers: {
    // write the things that you will take as a action like signIn , SignUp etc
    signup: (state, action) => {
      state.user = action.payload; // user me email or password enter hone pe user ke andar state ke through update ho jayega email or password
      signin: (state, action) => {};
    },
  },
});
// send action
//export default  send the reducers
export const { signup } = authSlice.actions;
export default authSlice.reducer;
