import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBlog, updateBlog } from "../redux/blogSlice";
import Modal from "./Modal";

const CATEGORY_OPTIONS = ["Engineering", "Design", "Life", "Business", "Other"];

const todayISO = () => new Date().toISOString().slice(0, 10);

export default function BlogForm({ editingBlog, onClose }) {
  const dispatch = useDispatch();
  const isEditing = Boolean(editingBlog);

  const [title, setTitle] = useState(editingBlog?.title ?? "");
  const [description, setDescription] = useState(
    editingBlog?.description ?? ""
  );
  const [category, setCategory] = useState(
    editingBlog?.category ?? CATEGORY_OPTIONS[0]
  );
  const [date, setDate] = useState(editingBlog?.date ?? todayISO());
  const [errors, setErrors] = useState({});

  const validate = () => {
    const next = {};
    if (!title.trim()) next.title = "Title is required.";
    if (!description.trim()) next.description = "Description is required.";
    if (!date) next.date = "Date is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const payload = {
      title: title.trim(),
      description: description.trim(),
      category,
      date,
    };

    if (isEditing) {
      dispatch(updateBlog({ id: editingBlog.id, ...payload }));
    } else {
      dispatch(addBlog(payload));
    }
    onClose();
  };

  return (
    <Modal title={isEditing ? "Edit Blog" : "New Blog"} onClose={onClose}>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-field">
          <label htmlFor="blog-title">Title</label>
          <input
            id="blog-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Notes on state management"
          />
          {errors.title && <span className="form-error">{errors.title}</span>}
        </div>

        <div className="form-field">
          <label htmlFor="blog-description">Description</label>
          <textarea
            id="blog-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="A short summary of the post"
          />
          {errors.description && (
            <span className="form-error">{errors.description}</span>
          )}
        </div>

        <div className="form-row">
          <div className="form-field">
            <label htmlFor="blog-category">Category</label>
            <select
              id="blog-category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {CATEGORY_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="blog-date">Date</label>
            <input
              id="blog-date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            {errors.date && <span className="form-error">{errors.date}</span>}
          </div>
        </div>

        <div className="modal-actions">
          <button type="button" className="btn btn-ghost" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="btn">
            {isEditing ? "Save changes" : "Publish blog"}
          </button>
        </div>
      </form>
    </Modal>
  );
}

export { CATEGORY_OPTIONS };
