import React from "react";
import { NavLink } from "react-router-dom";


function Footer() {
  return (
    <div className="footer">

      <NavLink className="nav_link" to="/login">Login</NavLink>
      <NavLink className="nav_link" to="/">Home</NavLink>
      <NavLink className="nav_link" to="/about">About</NavLink>
      <NavLink className="nav_link" to="/logout">Logout</NavLink>
      
    </div>
  );
}

export default Footer;
