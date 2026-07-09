import noteReducer from "../features/notes_slice.js";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    notes: noteReducer,
  },
});

export default store;
