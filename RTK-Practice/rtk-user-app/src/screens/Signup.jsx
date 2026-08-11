import React, { useRef } from "react";
import { signup } from "../app/features/authSlice.js"; // action ko import karo to do the process
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignup = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (!email || !password) {
      alert("enter email and password");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/users", {
        email: email,
        password: password,
      });
      dispatch(signup(res.data));

      alert("Signup successful!");

      navigate("/");
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed. Please check JSON Server.");
    }
  };
  return (
    <>
      <section className="d-flex justify-content-center align-content-center flex-column">
        <h1>SignUp</h1>
        <form
          onSubmit={handleSignup}
          className=" d-flex  justify-content-center flex-column h-100 w-100 "
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              ref={emailRef}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              ref={passwordRef}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            SignUp
          </button>
          <p>
            already have account ? <Link to={"/"}>Signin</Link>
          </p>
        </form>
      </section>
      {/* ```jsx
import React, { useRef } from "react";
import axios from "axios";
import { signup } from "../app/features/authSlice.js";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignup = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/users",
        {
          email: email,
          password: password,
        }
      );

    
    } 
  };

  return (
    <section className="d-flex justify-content-center align-items-center flex-column">
      <h1>SignUp</h1>

      <form
        onSubmit={handleSignup}
        className="d-flex justify-content-center flex-column"
      >
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>

          <input
            ref={emailRef}
            type="email"
            className="form-control"
            id="email"
          />

          <div className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>

          <input
            ref={passwordRef}
            type="password"
            className="form-control"
            id="password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          SignUp
        </button>

        <p>
          Already have an account?{" "}
          <Link to="/">Signin</Link>
        </p>
      </form>
    </section>
  );
}
```
 */}
    </>
  );
}
