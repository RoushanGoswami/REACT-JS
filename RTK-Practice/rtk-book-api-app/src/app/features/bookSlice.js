import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// first do the api works like fetch , post , and delete using CreateAysncThunk

export const fetchBooks = createAsyncThunk("books/fetch", async () => {
  const res = await axios.get("http://localhost:3000/books");
  return res.data;
});

export const postBooks = createAsyncThunk("post/books", async (book) => {
  const res = await axios.post("http://localhost:3000/books/", book);
  return res.data;
});

export const deleteBooks = createAsyncThunk("delete/books", async (id) => {
  const res = await axios.delete("http://localhost:3000/books/" + id);
  return res.data;
});

// now create the slice

const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    loading: false,
    error: null,
  },

  reducers: {
    // searchBook , sortBook
    searchBook: (state, action) => {
      state.books = state.books.filter(
        (book) =>
          book.title.toLowerCase() == action.payload.toLowerCase() ||
          book.author.toLowerCase() == action.payload.toLowerCase() ||
          book.category.toLowerCase() == action.payload.toLowerCase(),
      );
    },

    sortBook: (state, action) =>
      (state.books = state.books.sort((a, b) =>
        action.payload ? a.price - b.price : b.price - a.price,
      )),
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.books = action.payload;
        state.loading = false;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(postBooks.fulfilled, (state, action) => {
        state.books = action.payload;
        state.loading = false;
      })
      .addCase(deleteBooks.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteBooks.fulfilled, (state, action) => {
        state.books = state.books.filter(
          (book) => book.id != action.payload.id, // wo book delete (removed from UI)ho jayegi jispe condition true hogi and baki sab stay karenge
        );
        state.loading = false;
      })
      .addCase(deleteBooks.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message;
      });
  },
});

export default bookSlice.reducer;
export const { sortBook, searchBook } = bookSlice.actions;
