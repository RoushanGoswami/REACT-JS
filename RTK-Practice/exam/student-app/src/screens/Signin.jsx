import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Signin() {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { user } = useSelector((state) => state.auth);

  const handleSignin = (e) => {
    e.preventDefault();

    if (!user) {
      alert("User not found, go signup first!");
      return;
    }

    if (
      emailRef.current.value === user.email &&
      passwordRef.current.value === user.password
    ) {
      alert("Signed in successfully!");
      navigate("/home");
    } else {
      alert("Email or Password is Incorrect!");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h2 className="text-center mb-4 text-dark">Sign In</h2>

              <form onSubmit={handleSignin}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    ref={emailRef}
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    ref={passwordRef}
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100 mb-3">
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
