import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo";

const Navbar = () => {
  const navQuery = () => {
    var navButton = document.querySelector(".navslant-btn");
    var navMenu = document.querySelector(".navslant-menu");
    var win = window;

    const openMenu = e => {
      navButton.classList.toggle("active");
      navMenu.classList.toggle("active");

      e.preventDefault();
      e.stopImmediatePropagation();
    };

    const closeMenu = e => {
      if (navButton.classList.contains("active")) {
        navButton.classList.remove("active");
        navMenu.classList.remove("active");
      }
    };

    navButton.addEventListener("click", openMenu, false);

    win.addEventListener("click", closeMenu, false);
  };
  return (
    <>
      <nav className="navslant">
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="navslant-btn" onClick={navQuery}>
          <i className="fa fa-bars"></i>
        </div>
        <div className="navslant-menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="#about">About</Link>
            </li> */}
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
