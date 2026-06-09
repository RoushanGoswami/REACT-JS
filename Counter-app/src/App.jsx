// counter app
// 1 import useState
// 2 create a fun App
// 3 set the useState like count , setCount
// return div

import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="vh-100 w-100 d-flex justify-content-center flex-column align-items-center">
      <h1 className="text-dark">{count}</h1>
      <div>
        {" "}
        <button
          className="btn btn-primary shadow m-2"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          ++
        </button>
        <button
          className="btn btn-danger shadow m-2"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          --
        </button>
        <button
          className="btn btn-dark shadow m-2"
          onClick={() => {
            setCount(count * 2);
          }}
        >
          *2
        </button>
        <button
          className="btn btn-warning shadow m-2"
          onClick={() => {
            setCount(count / 2);
          }}
        >
          /2
        </button>
        <button
          className="btn btn-info shadow m-2"
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
 //reste button ke liye ek 
export default App;
