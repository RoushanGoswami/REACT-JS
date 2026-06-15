import React from "react";
import { Routes, Route , Link} from "react-router";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import Experience from "./screens/Experience"
import Education from "./screens/Education"
import About from "./screens/About"
import Skills from "./screens/Skills"


export default function App() {
  return (
    <>
    <nav>
<Link to = {"/login"}>Login</Link>
<Link to = {"/home"}>Home</Link>
<Link to = {"/about"}>About</Link>
<Link to = {"/experience"}>Experience</Link>
<Link to = {"/skills"}>Skills</Link>
<Link to = {"/contact"}>Contact</Link>
    </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </>
  );
}
