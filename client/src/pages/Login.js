import axios from "axios";
import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import Navbar from "../Navbar";
import "./Login.css";

function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      res.data && window.location.replace("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="signup">
      <Navbar />
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <input type="text" placeholder="Username" ref={userRef} />
        <input type="password" placeholder="Password" ref={passwordRef} />
        <button type="submit" disabled={isFetching}>
          Sign In
        </button>
        <h4>
          <span className="signup-gray">New to Aglet? </span>
          <span className="signup-link">
            <Link to="/register">Sign up now</Link>
          </span>
        </h4>
      </form>
    </div>
  );
}

export default Login;
