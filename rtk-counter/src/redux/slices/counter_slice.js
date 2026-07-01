import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

// create the slice
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  // here we have to give that current state and action also what to change
  reducers: {
    increment: (state) => {
      state.count++; //logic
    },
    decrement: (state) => {
      state.count--; //logic
    },
  },
});

// here UI wants actions so we export actions like increment , decrement
// for Store we will only export the reducers
export const { increment, decrement } = counterSlice.actions; // actions exported
export default counterSlice.reducer; // reducer is exported
