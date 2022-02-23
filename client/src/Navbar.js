import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);

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
        <img
          className="nav-logo"
          src="https://aglet.co.za/wp-content/uploads/2015/08/Aglet_preloader.png"
          alt="aglet-logo"
        />

        <img
          className="nav-avatar"
          src="https://www.citypng.com/public/uploads/preview/white-user-member-guest-icon-png-image-31634946729lnhivlto5f.png"
          alt="avatar-logo"
        />
      </div>
    </div>
  );
}

export default Navbar;
