import React, { useState, useEffect } from "react";
import axios from "axios";

export default function home() {
  // useState Declarations
  const [notes, setNotes] = useState([]); // ([]) to store it directly in the array
  const [data, setData] = useState({});
  //get api of Notes
  const handleFetchNotes = async () => {
    const res = await axios.get("http://localhost:3000/notes");
    setNotes(res.data);
  };

  // get input notes
  const getNotesTitle = (e) => {
    setData({ ...data, title: e.target.value });
  };
  const getNotesText = (e) => {
    setData({ ...data, text: e.target.value });
  };

  //handleAddNote
  const handleAddNote = async () => {
    const res = await axios.post("http://localhost:3000/notes", data);
  };
  // delete notes
  const handleDeleteNotes = async (id) => {
    const res = await axios.delete("http://localhost:3000/notes/" + id);
    handleFetchNotes(); // after delete fresh data will be showed
  };
  //update notes
  const updateField = (x) => setData(x); // for just to onclick on edit btn it displays the current data
  //in the input fields
  // update function
  const handleUpdateNotes = async () => {
    const res = await axios.put("http://localhost:3000/notes/" + data.id, data);
    handleFetchNotes();
  };
  useEffect(() => {
    handleFetchNotes();
  }, []);
  return (
    <>
      <section className="container">
        <h1 className="text-bg-primary text-dark p-3">Note App</h1>
        <div>
          <div className="d-flex justify-content-start">
            <input
              onChange={getNotesTitle}
              className="form-control text-dark bg-body mx-3 w-50"
              type="text"
              placeholder="Enter Title "
              value={data.title}
            />
          </div>
          <div className="form-floating my-3 d-flex m-3 gap-3">
            <textarea
              onChange={getNotesText}
              value={data.text}
              className="form-control"
              placeholder="Write a note here..."
              id="floatingTextarea2"
              style={{ height: 50, width: 850 }}
            />
            <label htmlFor="floatingTextarea2">Add a Note </label>
            <button
              onClick={() => {
                handleAddNote();
                handleFetchNotes();
                setData({ text: "", title: "" }); // make input Field clear after adding notes
              }}
              type="button"
              className="btn btn-outline-primary w-25"
            >
              Add Note
            </button>
            <button
              onClick={handleUpdateNotes}
              type="button"
              className="btn btn-outline-primary w-25"
            >
              Update Note
            </button>
          </div>
        </div>
      </section>

      <section className="container">
        <h2 className="text-secondary my-3">Your Added Notes ...</h2>
        {notes.length == 0 ? (
          <p className="text-secondary">No Notes Added Yet !</p>
        ) : (
          notes.map((note, i) => (
            <div key={i} className="row d-flex justify-content-center gap-3 ">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">
                    {note.title}{" "}
                    <i
                      onClick={() => updateField(note)}
                      className="ri-edit-box-fill text-warning fs-4 "
                    ></i>
                    <i
                      onClick={() => handleDeleteNotes(note.id)}
                      className="ri-delete-bin-fill text-danger fs-4 "
                    ></i>
                  </h5>

                  <p className="card-text text-start">{note.text}</p>
                </div>
              </div>{" "}
            </div>
          ))
        )}
      </section>
    </>
  );
}
