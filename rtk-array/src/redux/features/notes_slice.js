import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "note",
  initialState: {
    note: ["hello World"],
  },
  reducers: {
    addNote: (state, action) => {
      // pass action to
      state.note.push(action.payload); // to do this as it want action // btn se ya imput se leke new input ko click pe add karega
    },
    removeNote: (state) => {
      state.note.pop();
    },
  },
});
export default noteSlice.reducer;
export const { addNote, removeNote } = noteSlice.actions;
