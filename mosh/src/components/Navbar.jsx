import React from "react";

const Navbar = ({ counters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <li className="navbar-b">
        Counters {counters.filter((c) => c.value > 0).length}
      </li>
    </nav>
  );
};

export default Navbar;
