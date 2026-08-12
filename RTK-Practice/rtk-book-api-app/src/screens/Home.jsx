import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBooks,
  postBooks,
  deleteBooks,
  sortBook,
  searchBook,
} from "../app/features/bookSlice.js";
export default function Home() {
  return (
    <>
      <div>BookStore</div>
    </>
  );
}
