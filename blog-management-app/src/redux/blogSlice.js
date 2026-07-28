import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sampleBlogs } from "../data/sampleBlogs";

const initialState = {
  blogs: sampleBlogs,
  searchTerm: "",
  categoryFilter: "All",
  dateFilter: "", // exact date string (YYYY-MM-DD), empty = no filter
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    addBlog: {
      reducer(state, action) {
        state.blogs.unshift(action.payload);
      },
      prepare({ title, description, category, date }) {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
            category,
            date,
          },
        };
      },
    },
    updateBlog(state, action) {
      const { id, title, description, category, date } = action.payload;
      const blog = state.blogs.find((b) => b.id === id);
      if (blog) {
        blog.title = title;
        blog.description = description;
        blog.category = category;
        blog.date = date;
      }
    },
    deleteBlog(state, action) {
      state.blogs = state.blogs.filter((b) => b.id !== action.payload);
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    setCategoryFilter(state, action) {
      state.categoryFilter = action.payload;
    },
    setDateFilter(state, action) {
      state.dateFilter = action.payload;
    },
    clearFilters(state) {
      state.searchTerm = "";
      state.categoryFilter = "All";
      state.dateFilter = "";
    },
  },
});

export const {
  addBlog,
  updateBlog,
  deleteBlog,
  setSearchTerm,
  setCategoryFilter,
  setDateFilter,
  clearFilters,
} = blogSlice.actions;

// Selectors
export const selectAllBlogs = (state) => state.blogs.blogs;

export const selectVisibleBlogs = (state) => {
  const { blogs, searchTerm, categoryFilter, dateFilter } = state.blogs;
  return blogs
    .filter((blog) => {
      const matchesSearch = blog.title
        .toLowerCase()
        .includes(searchTerm.trim().toLowerCase());
      const matchesCategory =
        categoryFilter === "All" || blog.category === categoryFilter;
      const matchesDate = !dateFilter || blog.date === dateFilter;
      return matchesSearch && matchesCategory && matchesDate;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const selectCategories = (state) => {
  const unique = new Set(state.blogs.blogs.map((b) => b.category));
  return ["All", ...Array.from(unique).sort()];
};

export default blogSlice.reducer;
