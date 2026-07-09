import React from "react";
import { useDispatch, useSelector } from "react-redux"; // to perform tasks from the help
import { addNote, removeNote } from "../redux/features/notes_slice.js";
export default function Home() {
  const dispatch = useDispatch();
  const { note } = useSelector((state) => state.notes);
  return (
    <div>
      <h1>Home</h1>
      {note.map((note, i) => (
        <div key={i}>
          <div>
            <p>{note}</p>
            <button onClick={() => dispatch(removeNote())}>Remove</button>
          </div>
        </div>
      ))}
      <button onClick={() => dispatch(addNote("hello"))}>Add</button>
    </div>
  );
}
