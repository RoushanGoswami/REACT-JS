import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCategories,
  setSearchTerm,
  setCategoryFilter,
  setDateFilter,
  clearFilters,
} from "../redux/blogSlice";

export default function SearchFilter() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const { searchTerm, categoryFilter, dateFilter } = useSelector(
    (state) => state.blogs
  );

  const hasActiveFilters =
    searchTerm || categoryFilter !== "All" || dateFilter;

  return (
    <div className="toolbar-controls">
      <input
        className="search-input"
        type="text"
        placeholder="Search blogs by title…"
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        aria-label="Search blogs by title"
      />

      <select
        className="select-input"
        value={categoryFilter}
        onChange={(e) => dispatch(setCategoryFilter(e.target.value))}
        aria-label="Filter by category"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat === "All" ? "All categories" : cat}
          </option>
        ))}
      </select>

      <input
        className="date-input"
        type="date"
        value={dateFilter}
        onChange={(e) => dispatch(setDateFilter(e.target.value))}
        aria-label="Filter by date"
      />

      {hasActiveFilters && (
        <button className="btn-clear" onClick={() => dispatch(clearFilters())}>
          Clear filters
        </button>
      )}
    </div>
  );
}
