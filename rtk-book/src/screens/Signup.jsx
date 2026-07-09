import React, { useRef } from "react";
import { Link, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { signup } from "../redux/features/authSlice";
export default function Signup() {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const dispatch = useDispatch();

  return (
    <>
      {" "}
      <div className="container col-6 ">
        <h1 className="text-dark">Signup</h1>
        <div>
          {" "}
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              ref={emailRef}
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
        </div>

        <div>
          {" "}
          <label htmlFor="inputPassword5" className="form-label">
            Password
          </label>
          <input
            ref={passwordRef}
            type="password"
            id="inputPassword5"
            className="form-control"
            aria-describedby="passwordHelpBlock"
          />
          <div id="passwordHelpBlock" className="form-text">
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </div>
        </div>
        <button
          onClick={() => {
            dispatch(
              signup({
                email: emailRef.current.value,
                password: passwordRef.current.value,
              }),
            );
          }}
          type="button"
          class="btn btn-primary my-2"
        >
          Signup
        </button>
        <p>
          Already have a account ? <Link to={"/"}>Signin</Link>{" "}
        </p>
      </div>
    </>
  );
}
