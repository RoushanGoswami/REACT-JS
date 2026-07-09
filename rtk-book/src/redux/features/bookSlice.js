import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    books: [],
  },

  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books.splice(action.payload, 1);
    },
    updateBook: (state, action) => {
      const { book, i } = action.payload;
      state.books[i] = book;
    },
  },
});
export default bookSlice.reducer;
export const { addBook, removeBook, updateBook } = bookSlice.actions;
