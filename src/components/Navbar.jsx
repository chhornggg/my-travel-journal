import React from "react";
import logo from "../image/Fill213.svg";

function Navbar() {
  return (
    <div id="navbar">
      <img src={logo} alt="global logo" />
      <h1>my travel journal</h1>
    </div>
  );
}

export default Navbar;
