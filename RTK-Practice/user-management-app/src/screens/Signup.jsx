import React from "react";

export default function Signup() {
  return (
    <>
      {" "}
      <section className="container d-flex justify-content-center">
        <form className="w-50">
          <h1>Signup</h1>
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
            Signup
          </button>
          <p>
            already have a account ? <Link to={"/"}>Signin</Link>
          </p>
        </form>
      </section>
    </>
  );
}
