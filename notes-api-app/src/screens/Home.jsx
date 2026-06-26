import React, { useState, useEffect } from "react";
import axios from "axios";

export default function home() {
  // useState Declarations
  const [notes, setNotes] = useState([]); // ([]) to store it directly in the array

  //get api of Notes
  const handleFetchNotes = async () => {
    const res = await axios.get("http://localhost:3000/notes");
    setNotes(res.data);
  };

  return (
    <>
      <section className="container">
        <h1 className="text-bg-primary text-dark p-3">Note App</h1>
        <div>
          <div className="form-floating my-3 d-flex m-3 gap-3">
            <textarea
              className="form-control"
              placeholder="Write a note here..."
              id="floatingTextarea2"
              style={{ height: 50, width: 850 }}
              defaultValue={""}
            />
            <label htmlFor="floatingTextarea2">Add a Note </label>
            <button type="button" className="btn btn-outline-primary w-25">
              Add Note
            </button>
            <button type="button" className="btn btn-outline-primary w-25">
              Update Note
            </button>
          </div>
        </div>
      </section>

      <section className="container">
        <h2 className="text-secondary my-3">Your Added Notes ...</h2>
        <div className="row d-flex justify-content-center gap-3 ">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">
                Card title{" "}
                <i className="ri-edit-box-fill text-warning fs-4 "></i>
                <i class="ri-delete-bin-fill text-danger fs-4 "></i>
              </h5>

              <p className="card-text text-start">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
            </div>
          </div>{" "}
        </div>
      </section>
    </>
  );
}
