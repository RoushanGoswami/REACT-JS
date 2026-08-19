import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStudent = createAsyncThunk("Student/fetch", async () => {
  const res = await axios.get("http://localhost:3000/students");
  return res.data;
});

export const postStudent = createAsyncThunk("post/Student", async (book) => {
  const res = await axios.post("http://localhost:3000/students/", book);
  return res.data;
});

export const deleteStudent = createAsyncThunk("delete/Student", async (id) => {
  const res = await axios.delete("http://localhost:3000/students/" + id);
  return res.data;
});

const studentSlice = createSlice({
  name: "students",
  initialState: {
    students: [],
    loading: false,
    error: null,
  },

  reducers: {
    searchStudent: (state, action) => {
      state.students = state.students.filter(
        (student) =>
          student.name.toLowerCase() === action.payload.toLowerCase(),
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchStudent.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStudent.fulfilled, (state, action) => {
        state.students = action.payload;
        state.loading = false;
      })
      .addCase(fetchStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(postStudent.fulfilled, (state, action) => {
        state.students.push(action.payload);
        state.loading = false;
      })
      .addCase(deleteStudent.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.students = state.students.filter(
          (student) => student.id !== action.payload.id,
        );
        state.loading = false;
      })
      .addCase(deleteStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { searchStudent } = studentSlice.actions;
export default studentSlice.reducer;
