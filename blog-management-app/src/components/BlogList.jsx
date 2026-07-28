import React from "react";
import { useSelector } from "react-redux";
import { selectVisibleBlogs } from "../redux/blogSlice";
import BlogCard from "./BlogCard";

export default function BlogList({ onEdit }) {
  const blogs = useSelector(selectVisibleBlogs);

  if (blogs.length === 0) {
    return (
      <div className="empty-state">
        <h3>No blogs match your filters</h3>
        <p>Try a different search term, category, or date.</p>
      </div>
    );
  }

  return (
    <div className="blog-grid">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} onEdit={onEdit} />
      ))}
    </div>
  );
}
