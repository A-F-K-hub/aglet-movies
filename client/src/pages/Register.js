import React, { useState } from "react";
import "./Register.css";
import Login from "./Login";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {
  const [signIn, setSignIn] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSignIn = (e) => {
    window.location.replace("/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="login">
      <div className="login-bg">
        <img
          src="https://aglet.co.za/wp-content/uploads/2015/08/Aglet_preloader.png"
          alt=""
          className="login-logo"
        />
        <button className="login-button" onClick={handleSignIn}>
          Sign In
        </button>
        <div className="login-gradient" />
      </div>
      <div className="login-body">
        {signIn ? (
          <Login />
        ) : (
          <>
            <h1>Unlimited Movies, Series and More.</h1>
            <h2>Watch anywhere</h2>
            <h3>Ready to watch? Join the Agletverse</h3>
            <div className="login-input">
              <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <input
                  type="text"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Sign Up</button>
                <h4>
                  <span className="signup-gray">Already have an account? </span>
                  <span className="signup-link">
                    <Link to="/login">Sign in</Link>
                  </span>
                </h4>
              </form>
            </div>
          </>
        )}
      </div>
      {error && <span style={{ color: "red" }}>Something went wrong!</span>}
    </div>
  );
}

export default Register;
