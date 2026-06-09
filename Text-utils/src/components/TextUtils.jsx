import React from "react";
import { useState } from "react";
import "../components/TextUtils.css";

const TextUtils = () => {
  const [text, setText] = useState("");
  const [readingSpeed, SetReadingSpeed] = useState(null);

  //get counts of words ka function
  const HandleGetCountsOfWords = () => {
    return text.trim().split(/\s+/).filter(Boolean).length; 
  }; 

  // reading speed function
  const handleReadingSpeed = () => {
    const totalWords = HandleGetCountsOfWords();
    const readingTimeinMinutes = totalWords / 200;

    if (totalWords === 0) {
      SetReadingSpeed("0 Minutes"); 
      return;
    }
    if (readingTimeinMinutes < 1) {
      const seconds = Math.ceil(readingTimeinMinutes * 60);
      SetReadingSpeed(`${seconds} seconds`); 
    } else {
      SetReadingSpeed(`${readingTimeinMinutes.toFixed(1) + " Minutes"}`);
    }
  };

  return (
    <>
      <div className="container p-3">
        <h1 className="text-center m-3">Text Utils</h1>
        <div className="form-floating border border-info">
          <textarea
            onChange={(e) => {
              setText(e.target.value);
              SetReadingSpeed(null);
            }}
            className="form-control"
            placeholder="Enter something very amazing here..."
            id="floatingTextarea2"
            style={{ height: 100 }}
            value={text}
          />
          <label htmlFor="floatingTextarea2">
            Enter something very amazing here...
          </label>
        </div>
        {/* text display section */}
        <section className="container">
          <h3 className="p-3"> Below Your Text : </h3>
          <div>
            <p className="shadow rounded p-3 my-2 border border-primary-subtle">
              {text}
            </p>
          </div>
        </section>
        {/* button section */}
        <hr />
        <section className="container">
          <button
            onClick={() => {
              setText(text.toUpperCase());
            }}
            type="button"
            className="btn btn-info m-1 "
          >
            To UpperCase
          </button>

          <button
            onClick={() => {
              setText(text.toLowerCase());
            }}
            type="button"
            className="btn btn-warning m-1"
          >
            To LowerCase
          </button>
          <button
            onClick={() => {
              handleReadingSpeed();
            }}
            type="button"
            className="btn btn-success m-1"
          >
            Reading Speed <i className="ri-dashboard-3-fill "></i>
          </button>
          <button
            onClick={() => {
              setText("");
              SetReadingSpeed(null);
            }}
            type="button"
            className="btn btn-danger m-1"
          >
            Clear All
          </button>
          <hr />
        </section>
        <section className="container">
          <ul>
            <li className="text-success fs-4">Total Letters - {text.length}</li>
            <li className="text-info fs-4">
              Total Words - {HandleGetCountsOfWords()}
            </li>
            <li className="text-danger fs-4">Reading Time = {readingSpeed} </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default TextUtils;