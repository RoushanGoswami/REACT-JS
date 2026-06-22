import React from "react";
import App from "../App";
import {useEffect, useState} from 'react-router'
import Signin from "../screens/Signin";
export default function ProtectedRoute(children) {
  const [user, setUser] = useState({});
  const getcredential = () => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    setUser({ email, password });
  };

  useEffect(() => {
    getcredential();
  }, []);

  if (credential.email == user.email && credential.password == user.password) {
    return <>{children}</>;
  }

  return (
    <>
      <h1>hello</h1>
    </>
  );
}
