import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "./screens/Signin";
import Home from "./screens/Home";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}
