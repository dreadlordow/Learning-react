import React, { Component } from "react";

const Navbar = ({ counters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-b">
        Counters {counters.filter((c) => c.value > 0).length}
      </a>
    </nav>
  );
};

export default Navbar;
