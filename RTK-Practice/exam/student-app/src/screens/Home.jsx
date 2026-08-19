import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchStudent,
  deleteStudent,
  postStudent,
} from "../app/features/studentSlice.js";

export default function Home() {
  const dispatch = useDispatch();
  const { students } = useSelector((state) => state.student);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    dispatch(fetchStudent());
  }, [dispatch]);

  const handleAdd = () => {
    if (name !== "" && email !== "") {
      dispatch(postStudent({ name, email }));
      setName("");
      setEmail("");
    } else {
      alert("Please enter both name and email!");
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Student App
          </a>
        </div>
      </nav>

      <section className="container mt-4">
        <div className="mb-4">
          <input
            className="form-control d-inline-block w-25 me-2"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="form-control d-inline-block w-25 me-2"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleAdd}>
            Add Student
          </button>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {students?.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => dispatch(deleteStudent(student.id))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
