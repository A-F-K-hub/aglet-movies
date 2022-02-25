import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "./context/Context";
import "./Navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    window.location.replace("/login");
  };

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(false);
    } else {
      handleShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <div className="nav-contents">
        <Link to="/">
          <img
            className="nav-logo"
            src="https://aglet.co.za/wp-content/uploads/2015/08/Aglet_preloader.png"
            alt="aglet-logo"
          />
        </Link>
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">
              CONTACT
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/favourites" className="navbar-link">
              {user && "FAVOURITES"}
            </Link>
          </li>
          <li className="navbar-item" onClick={handleLogout}>
            <Link to="/" className="navbar-link">
              {user && "LOGOUT"}
            </Link>
          </li>
        </ul>

        {user ? (
          <img
            className="nav-avatar"
            src="https://aglet.co.za/wp-content/uploads/2015/08/Aglet_preloader.png"
            alt="avatar-logo"
          />
        ) : (
          <Link to="/login">
            <img
              className="nav-avatar"
              src="https://www.pngfind.com/pngs/m/2-26199_rsg-portfolio-portfolio-for-robert-s-facebook-profile.png"
              alt="avatar-logo"
            />
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
