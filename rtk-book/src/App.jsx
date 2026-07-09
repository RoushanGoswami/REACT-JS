import React from "react";
import Signin from "./screens/Signin";
import { Route, Routes } from "react-router";
import Signup from "./screens/Signup";
import Home from "./screens/Home";

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
