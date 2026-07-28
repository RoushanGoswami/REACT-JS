import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [],
  },

  reducers: {
    addBlog: (state, action) => {
      state.blogs.push(action.payload);
    },
    removeBlog: (state, action) => {
      state.blogs.splice(action.payload, 1);
    },
    updateBlog: (state, action) => {
      const { blog, i } = action.payload;
      state.blogs[i] = blog;
    },
  },
});
export default blogSlice.reducer;
export const { addBlog, removeBlog, updateBlog } = blogSlice.actions;
