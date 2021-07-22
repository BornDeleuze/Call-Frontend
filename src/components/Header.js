import React from "react";
import { NavLink } from "react-router-dom";


function Header() {
  return (
    <div className="header">
      <NavLink 
        to="/"
        activeStyle={{
          color: "#fff8dc"
        }}
        >
        <h1>CALL</h1> 
      </NavLink>

      
    </div>
  );
}

export default Header;
