import React from "react";
import Home from "./screens/Home";
import { Routes, Route } from "react-router-dom";
import Signin from "./screens/Signin";
import Signup from "./screens/Signup";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </>
  );
}
