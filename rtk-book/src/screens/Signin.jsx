import React, { useRef } from "react"; // usref ke through next page ex signup
import { useNavigate, Link } from "react-router";
import { useSelector } from "react-redux";

export default function Signin() {
  const { user } = useSelector((state) => state.auth);
  const emailref = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const handleSignin = () => {
    if (
      emailref.current.value == user.email &&
      passwordRef.current.value == user.password
    ) {
      navigate("/home");
    } else {
      alert("email or password is wrong !");
    }
  };
  return (
    <>
      <div className="container col-6 ">
        <h1 className="text-dark">Signin</h1>
        <div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              ref={emailref}
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
          onClick={handleSignin}
          type="button"
          className="btn btn-primary my-2"
        >
          Signin
        </button>
        <p>
          Don't have account ? <Link to={"/signup"}>SignUp</Link>{" "}
        </p>
      </div>
    </>
  );
}
