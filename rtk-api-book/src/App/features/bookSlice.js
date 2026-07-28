import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "book",
  initialState: {
    books: [],
  },
  reducers: {
    // what you want to do as a action like add , remove ,
    addBook: (state, action) => {
      state.books.push(action.payload); // make here the code where you want the change in state and
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
export const { addBook, removeBook, updateBook } = booksSlice.actions;
export default booksSlice.reducer;
