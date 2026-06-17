import React from "react";
import { Routes, Route } from "react-router";
import Home from "./screens/Home";
import Signin from "./screens/Signin";
import ProtectedRoute from "./components/ProtectedRoute";
export default function App() {
  const credential = {
    email: "rg@gmail.com",
    password: "123456",
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin credential={credential} />} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      </Routes>
      {/* <Home/> */}
    </>
  );
}
