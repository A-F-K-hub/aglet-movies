import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import userApiService from "../api-services/users-api/user.api-service";
import Navbar from "../Navbar";
import { Context } from "../context/Context";
import {
  setCurrentUserAction,
  setIsLoadingGetCurrentUserAction,
} from "../reducers/users-reducer/users.reducer";
import "./Login.css";

function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const reduxDispatch = useDispatch();
  const navigate = useNavigate();
  const [loginLoading, setLoginLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      setLoginLoading(true);
      const loginResponse = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: loginResponse.data });
      loginResponse.data && window.location.replace("/");
      reduxDispatch(setIsLoadingGetCurrentUserAction(true));
      userApiService
        .getCurrentUser(loginResponse.data._id)
        .then((response) => {
          reduxDispatch(setCurrentUserAction(response));
        })
        .finally(() => {
          reduxDispatch(setIsLoadingGetCurrentUserAction(false));
        });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    } finally {
      setLoginLoading(false);
    }
  };

  return (
    <div className="signup">
      <Navbar />
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <input type="text" placeholder="Username" ref={userRef} />
        <input type="password" placeholder="Password" ref={passwordRef} />
        <button type="submit" disabled={loginLoading}>
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
