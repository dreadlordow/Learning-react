import React from "react";
import { NavLink } from "react-router-dom";
import "../components-css/Navbar-css.css";

const Navbar = ({ counters }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to={"/"}>
        Vidly
      </NavLink>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to={"/movies"}>
            Movies
          </NavLink>
          <NavLink className="nav-item nav-link" to={"/customers"}>
            Customers
          </NavLink>
          <NavLink className="nav-link" to="/rentals">
            Rental
          </NavLink>
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
          <NavLink className="nav-link" to="/register">
            Register
          </NavLink>
        </div>
      </div>
    </nav>

    // <a class="navbar-brand" href="#">
    //   Navbar
    // </a>
  );
};

export default Navbar;
