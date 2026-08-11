import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Signin() {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { user } = useSelector((state) => state.auth); // ye store me jake auth me se authSlice ke andar se user ko layega

  // a function to handle signin process
  const handleSignin = (e) => {
    // form ke karan page reload hoga so to stop this error we will use the preventDefault settings

    e.preventDefault();
    // compare

    if (!user) {
      alert("user not found go signup first!");
      return;
    }
    if (
      emailRef.current.value == user.email &&
      passwordRef.current.value == user.password
    ) {
      navigate("/home");
    } else {
      alert("email or Password is Incorrect !");
    }
  };
  return (
    <>
      <section className=" d-flex justify-content-center align-content-center flex-column">
        <h1>Signin</h1>
        <form
          onSubmit={handleSignin}
          className="d-flex flex-column justify-content-center  "
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
          <button
            onClick={handleSignin}
            type="submit"
            className="btn btn-primary"
          >
            Signin
          </button>
          <p>
            don't have account ? <Link to={"/signup"}>SignUp</Link>
          </p>
        </form>
      </section>
    </>
  );
}
