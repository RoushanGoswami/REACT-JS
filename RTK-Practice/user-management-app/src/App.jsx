import React from "react";
import Home from "./screens/Home";
import { Route, Routes } from "react-router-dom";
import Signin from "./screens/Signin";
import Signup from "./screens/Signup";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}
