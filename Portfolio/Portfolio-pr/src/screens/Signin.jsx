import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router'

export default function Signin({credential}) {
  
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const getEmail = (e) => {
    setUser({ ...user, email: e.target.value });
  };
  
  const getPassword = (e) => {
    setUser({ ...user, password: e.target.value });
  };
  
  const handleLogin = () => {
    if (
      user.email == credential.email &&
      user.password == credential.password
    ) {
      localStorage.setItem("email",user.email);
      localStorage.setItem("password",user.password);

      navigate("/home");
    } else {
      alert("email or password is wrong !");
    }
  };

  return  <>
      <h1 className="text-white">Login</h1>
      <section className="container my-5 h-25 w-50 p-5 shadow rounded-3 bg-body-secondary d-flex justify-content-center align-itself-center flex-column ">
        <div className="container text-black ">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              onChange={getEmail}
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
              onChange={getPassword}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button onClick={handleLogin} type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </section>
    </>
}
