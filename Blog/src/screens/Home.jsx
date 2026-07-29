import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBlog, removeBlog, updateBlog } from "../app/features/blogSlice";

const Home = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [edit, setEdit] = useState(-1);

  const saveBlog = (e) => {
    e.preventDefault();

    if (title === "" || description === "" || category === "") {
      alert("Fill all fields");
      return;
    }

    const newBlog = {
      title: title,
      description: description,
      category: category,
      date: new Date().toLocaleDateString(),
    };

    if (edit === -1) {
      dispatch(addBlog(newBlog));
    } else {
      dispatch(updateBlog({ blog: newBlog, i: edit }));
      setEdit(-1);
    }

    setTitle("");
    setDescription("");
    setCategory("");
  };

  const editBlog = (blog, index) => {
    setTitle(blog.title);
    setDescription(blog.description);
    setCategory(blog.category);
    setEdit(index);
  };

  const deleteBlog = (index) => {
    dispatch(removeBlog(index));
  };

  return (
    <div className="container mt-4 bg-body-secondary p-3">
      <h2 className="text-center mb-4">Blog Management</h2>

      <form onSubmit={saveBlog}>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="form-control mb-3"
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <select
          className="form-select mb-3"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option>Technology</option>
          <option>Education</option>
          <option>Sports</option>
          <option>Health</option>
          <option>Business</option>
        </select>

        <div className="d-flex justify-content-end mx-3">
          <button className="btn btn-primary w-100">
            {edit === -1 ? "Add Blog" : "Update Blog"}
          </button>
        </div>
      </form>

      <hr />

      <div className="row mb-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search Blog"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-6">
          <select
            className="form-select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>All</option>
            <option>Technology</option>
            <option>Education</option>
            <option>Sports</option>
            <option>Health</option>
            <option>Business</option>
          </select>
        </div>
      </div>

      <div className="row">
        {blogs.map((blog, index) => {
          if (
            (filter === "All" || blog.category === filter) &&
            (blog.title.toLowerCase().includes(search.toLowerCase()) ||
              blog.description.toLowerCase().includes(search.toLowerCase()))
          ) {
            return (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100">
                  <div className="card-body">
                    <h4>{blog.title}</h4>

                    <p>
                      <b>Category:</b> {blog.category}
                    </p>

                    <p>{blog.description}</p>

                    <small>{blog.date}</small>
                  </div>

                  <div className="card-footer">
                    <button
                      className="btn btn-warning me-2"
                      onClick={() => editBlog(blog, index)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-danger"
                      onClick={() => deleteBlog(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
};

export default Home;
