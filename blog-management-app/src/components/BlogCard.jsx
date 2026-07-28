import React from "react";
import { useDispatch } from "react-redux";
import { deleteBlog } from "../redux/blogSlice";

const formatDate = (iso) =>
  new Date(iso + "T00:00:00").toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export default function BlogCard({ blog, onEdit }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm(`Delete "${blog.title}"? This can't be undone.`)) {
      dispatch(deleteBlog(blog.id));
    }
  };

  return (
    <article className="blog-card" data-category={blog.category}>
      <div className="blog-card-eyebrow">
        <span className="category-tag">{blog.category}</span>
        <span>{formatDate(blog.date)}</span>
      </div>
      <h3 className="blog-card-title">{blog.title}</h3>
      <p className="blog-card-desc">{blog.description}</p>
      <div className="blog-card-actions">
        <button className="icon-btn" onClick={() => onEdit(blog)}>
          Edit
        </button>
        <button className="icon-btn danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </article>
  );
}
