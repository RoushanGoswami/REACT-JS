import React from "react";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <section className="container d-flex justify-content-center">
      <form className="w-50">
        <h1>Signin</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
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
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Signin
        </button>
        <p>
          don't have account ? <Link to={"/signup"}>Signup</Link>
        </p>
      </form>
    </section>
  );
}
