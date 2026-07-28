import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllBlogs } from "../redux/blogSlice";
import SearchFilter from "../components/SearchFilter";
import BlogList from "../components/BlogList";
import BlogForm from "../components/BlogForm";

export default function Home() {
  const [formOpen, setFormOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const totalBlogs = useSelector(selectAllBlogs).length;

  const openNewBlogForm = () => {
    setEditingBlog(null);
    setFormOpen(true);
  };

  const openEditForm = (blog) => {
    setEditingBlog(blog);
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
    setEditingBlog(null);
  };

  return (
    <div className="app-shell">
      <header className="masthead">
        <h1 className="masthead-title">
          Ink<span>well</span>
        </h1>
        <span className="masthead-meta">
          {totalBlogs} {totalBlogs === 1 ? "entry" : "entries"} in the ledger
        </span>
      </header>

      <div className="toolbar">
        <SearchFilter />
        <button className="btn" onClick={openNewBlogForm}>
          + New Blog
        </button>
      </div>

      <BlogList onEdit={openEditForm} />

      {formOpen && (
        <BlogForm editingBlog={editingBlog} onClose={closeForm} />
      )}
    </div>
  );
}
